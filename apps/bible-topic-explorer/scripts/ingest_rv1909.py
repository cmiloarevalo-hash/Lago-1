#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import html
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import shutil
import sqlite3
import tempfile
import urllib.request
import zipfile

ROOT = Path(__file__).resolve().parents[1]
MANIFEST_PATH = ROOT / "data" / "source-manifest.json"
SCHEMA_PATH = ROOT / "data" / "schema.sql"
DEFAULT_OUTPUT = ROOT / "assets" / "data" / "bible-topic-explorer.db"
REPORT_PATH = ROOT / "data" / "ingest-report.json"

BOOKS = [
    ("Gen", "Génesis"), ("Exod", "Éxodo"), ("Lev", "Levítico"), ("Num", "Números"),
    ("Deut", "Deuteronomio"), ("Josh", "Josué"), ("Judg", "Jueces"), ("Ruth", "Rut"),
    ("1Sam", "1 Samuel"), ("2Sam", "2 Samuel"), ("1Kgs", "1 Reyes"), ("2Kgs", "2 Reyes"),
    ("1Chr", "1 Crónicas"), ("2Chr", "2 Crónicas"), ("Ezra", "Esdras"), ("Neh", "Nehemías"),
    ("Esth", "Ester"), ("Job", "Job"), ("Ps", "Salmos"), ("Prov", "Proverbios"),
    ("Eccl", "Eclesiastés"), ("Song", "Cantares"), ("Isa", "Isaías"), ("Jer", "Jeremías"),
    ("Lam", "Lamentaciones"), ("Ezek", "Ezequiel"), ("Dan", "Daniel"), ("Hos", "Oseas"),
    ("Joel", "Joel"), ("Amos", "Amós"), ("Obad", "Abdías"), ("Jonah", "Jonás"),
    ("Mic", "Miqueas"), ("Nah", "Nahúm"), ("Hab", "Habacuc"), ("Zeph", "Sofonías"),
    ("Hag", "Hageo"), ("Zech", "Zacarías"), ("Mal", "Malaquías"), ("Matt", "Mateo"),
    ("Mark", "Marcos"), ("Luke", "Lucas"), ("John", "Juan"), ("Acts", "Hechos"),
    ("Rom", "Romanos"), ("1Cor", "1 Corintios"), ("2Cor", "2 Corintios"), ("Gal", "Gálatas"),
    ("Eph", "Efesios"), ("Phil", "Filipenses"), ("Col", "Colosenses"),
    ("1Thess", "1 Tesalonicenses"), ("2Thess", "2 Tesalonicenses"),
    ("1Tim", "1 Timoteo"), ("2Tim", "2 Timoteo"), ("Titus", "Tito"), ("Phlm", "Filemón"),
    ("Heb", "Hebreos"), ("Jas", "Santiago"), ("1Pet", "1 Pedro"), ("2Pet", "2 Pedro"),
    ("1John", "1 Juan"), ("2John", "2 Juan"), ("3John", "3 Juan"), ("Jude", "Judas"),
    ("Rev", "Apocalipsis"),
]

CATHOLIC_EXTRAS = [
    ("Tob", "Tobías"), ("Jdt", "Judit"), ("Wis", "Sabiduría"), ("Sir", "Eclesiástico"),
    ("Bar", "Baruc"), ("1Macc", "1 Macabeos"), ("2Macc", "2 Macabeos"),
]

ALLOWED_TAGS = {"p", "sup"}


class VerseTextParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []
        self.skip_sup = 0
        self.tags: set[str] = set()

    def handle_starttag(self, tag: str, attrs) -> None:
        self.tags.add(tag)
        if tag not in ALLOWED_TAGS:
            raise ValueError(f"unexpected HTML tag: {tag}")
        if tag == "sup":
            self.skip_sup += 1

    def handle_endtag(self, tag: str) -> None:
        if tag not in ALLOWED_TAGS:
            raise ValueError(f"unexpected HTML end tag: {tag}")
        if tag == "sup":
            self.skip_sup = max(0, self.skip_sup - 1)

    def handle_data(self, data: str) -> None:
        if self.skip_sup == 0:
            self.parts.append(data)

    def text(self) -> str:
        return re.sub(r"\s+", " ", "".join(self.parts).replace("\xa0", " ")).strip()


def sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for block in iter(lambda: f.read(1024 * 1024), b""):
            h.update(block)
    return h.hexdigest()


def download(url: str, dest: Path) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": "La-U-EXP02-BibleTopicExplorer"})
    with urllib.request.urlopen(req, timeout=60) as response, dest.open("wb") as out:
        shutil.copyfileobj(response, out)


def read_manifest() -> dict:
    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    required = [
        "source_provider", "release", "asset_name", "asset_url", "sha256",
        "license_identifier", "license_url", "expected_books",
    ]
    missing = [k for k in required if not manifest.get(k)]
    if missing:
        raise ValueError(f"legal/source metadata missing: {missing}")
    if manifest["license_identifier"] != "CC0-1.0":
        raise ValueError("RV1909 manifest must remain CC0-1.0")
    return manifest


def validate_metadata(metadata: dict, manifest: dict) -> None:
    resource = metadata.get("resource_metadata") or {}
    if resource.get("title") != "Reina Valera 1909":
        raise ValueError(f"unexpected resource title: {resource.get('title')!r}")
    if resource.get("short_name") != "RV1909":
        raise ValueError(f"unexpected short name: {resource.get('short_name')!r}")
    if resource.get("version") != manifest["resource_version"]:
        raise ValueError("resource version does not match pinned manifest")
    if resource.get("language") != manifest["source_language"]:
        raise ValueError("source language mismatch")
    licenses = ((resource.get("license_info") or {}).get("licenses") or [])
    license_names = {
        entry.get("eng", {}).get("name", "")
        for entry in licenses
        if isinstance(entry, dict)
    }
    if "Public Domain CC0" not in license_names:
        raise ValueError(f"expected Public Domain CC0, got {sorted(license_names)}")


def parse_display_text(source_html: str, expected_verse: int) -> tuple[str, set[str]]:
    sup = re.findall(r"<sup>([^<]+)</sup>", source_html, flags=re.IGNORECASE)
    if len(sup) != 1:
        raise ValueError(f"expected exactly one verse superscript, found {sup!r}")
    sup_value = html.unescape(sup[0]).strip()
    if sup_value != str(expected_verse):
        raise ValueError(f"superscript {sup_value!r} != verse {expected_verse}")
    parser = VerseTextParser()
    parser.feed(source_html)
    parser.close()
    text = parser.text()
    if not text:
        raise ValueError("empty display text after markup removal")
    return text, parser.tags


def seed_reference_data(conn: sqlite3.Connection, manifest: dict) -> None:
    conn.execute(
        """INSERT INTO source_metadata
           (id, provider, source_url, release, asset_name, sha256, source_format,
            retrieved_at, license_identifier, license_url, attribution_text, modification_notice)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
        (
            "rv1909-v2026-09-18",
            manifest["source_provider"],
            manifest["release_url"],
            manifest["release"],
            manifest["asset_name"],
            manifest["sha256"],
            manifest["source_format"],
            manifest["published_at"],
            manifest["license_identifier"],
            manifest["license_url"],
            manifest["attribution_text"],
            manifest["modification_notice"],
        ),
    )
    conn.execute(
        """INSERT INTO versification_profiles
           (id, name, source, version, mapping_status) VALUES (?, ?, ?, ?, ?)""",
        (
            "rv1909_aquifer_native_v2026_09_18",
            "RV1909 BibleAquifer native",
            manifest["release_url"],
            manifest["release"],
            "native",
        ),
    )
    conn.execute(
        """INSERT INTO translations
           (id, title, abbreviation, language_tag, source_metadata_id, versification_profile_id)
           VALUES (?, ?, ?, ?, ?, ?)""",
        (
            manifest["translation_id"], manifest["title"], manifest["abbreviation"],
            manifest["language_tag"], "rv1909-v2026-09-18",
            "rv1909_aquifer_native_v2026_09_18",
        ),
    )

    for idx, (osis, name) in enumerate(BOOKS, start=1):
        conn.execute(
            "INSERT INTO books (id, osis_code, default_name_es) VALUES (?, ?, ?)",
            (osis, osis, name),
        )
    for osis, name in CATHOLIC_EXTRAS:
        conn.execute(
            "INSERT INTO books (id, osis_code, default_name_es) VALUES (?, ?, ?)",
            (osis, osis, name),
        )

    profiles = [
        (
            "protestant_66_westminster",
            "Protestante — 66 libros (Westminster)",
            "protestant",
            "https://opc.org/documents/MESV_col2.html",
            "documented",
            "Perfil documental de 66 libros; la traducción y el canon siguen siendo entidades separadas.",
        ),
        (
            "catholic_roman_73_vatican_ccc120",
            "Católico romano — 73 libros",
            "catholic",
            "https://www.vatican.va/content/catechism/en/part_one/section_one/chapter_two/article_3/iv_the_canon_of_scripture.html",
            "CCC-120",
            "RV1909 sólo cubre parcialmente este perfil; no se bundlean deuterocanónicos.",
        ),
        (
            "orthodox_oca_longer_documented",
            "Ortodoxo — longer canon documentado por OCA",
            "orthodox",
            "https://www.oca.org/questions/scripture/canon-of-scripture",
            "documented",
            "No universal ni exhaustivo; el MVP sólo registra el overlap runtime y declara cobertura parcial.",
        ),
        (
            "hebrew_tanakh_mt_context",
            "Tanaj / texto hebreo contextual",
            "contextual_jewish",
            "https://www.sefaria.org/texts/Tanakh",
            "documented",
            "Corpus contextual judío; los 39 book units reflejan granularidad cristiana de overlap, no el agrupamiento de 24 libros del Tanaj.",
        ),
    ]
    conn.executemany(
        """INSERT INTO canon_profiles
           (id, label, tradition_family, authority_url, version, scope_note)
           VALUES (?, ?, ?, ?, ?, ?)""",
        profiles,
    )

    for order_idx, (osis, _) in enumerate(BOOKS, start=1):
        conn.execute(
            "INSERT INTO canon_profile_books VALUES (?, ?, ?, ?)",
            ("protestant_66_westminster", osis, order_idx, "canonical"),
        )
        conn.execute(
            "INSERT INTO canon_profile_books VALUES (?, ?, ?, ?)",
            ("orthodox_oca_longer_documented", osis, order_idx, "runtime_shared"),
        )
        if order_idx <= 39:
            conn.execute(
                "INSERT INTO canon_profile_books VALUES (?, ?, ?, ?)",
                ("hebrew_tanakh_mt_context", osis, order_idx, "content_overlap"),
            )

    catholic_members = BOOKS[:39] + CATHOLIC_EXTRAS + BOOKS[39:]
    for order_idx, (osis, _) in enumerate(catholic_members, start=1):
        conn.execute(
            "INSERT INTO canon_profile_books VALUES (?, ?, ?, ?)",
            ("catholic_roman_73_vatican_ccc120", osis, order_idx, "canonical"),
        )


def build_database(extracted: Path, output: Path, manifest: dict) -> dict:
    metadata_path = extracted / "metadata.json"
    json_dir = extracted / "json"
    if not metadata_path.is_file() or not json_dir.is_dir():
        raise ValueError("archive must contain metadata.json and json/")
    metadata = json.loads(metadata_path.read_text(encoding="utf-8"))
    validate_metadata(metadata, manifest)

    expected_files = [f"{i:02d}.content.json" for i in range(1, 67)]
    actual_files = sorted(p.name for p in json_dir.glob("*.content.json"))
    if actual_files != expected_files:
        missing = sorted(set(expected_files) - set(actual_files))
        extra = sorted(set(actual_files) - set(expected_files))
        raise ValueError(f"book file mismatch; missing={missing}, extra={extra}")

    output.parent.mkdir(parents=True, exist_ok=True)
    if output.exists():
        output.unlink()

    conn = sqlite3.connect(output)
    conn.execute("PRAGMA foreign_keys=ON")
    conn.executescript(SCHEMA_PATH.read_text(encoding="utf-8"))
    seed_reference_data(conn, manifest)

    seen_refs: set[str] = set()
    observed_tags: set[str] = set()
    source_digest = hashlib.sha256()
    verse_count = 0

    for book_num, (osis, name) in enumerate(BOOKS, start=1):
        rows = json.loads((json_dir / f"{book_num:02d}.content.json").read_text(encoding="utf-8"))
        if not isinstance(rows, list) or not rows:
            raise ValueError(f"book {book_num:02d} has no verse rows")
        chapter_max = 0

        for row in rows:
            required = {"index_reference", "content", "language", "media_type"}
            if not required.issubset(row):
                raise ValueError(f"missing row fields in book {book_num:02d}")
            ref = str(row["index_reference"])
            if not re.fullmatch(r"\d{8}", ref):
                raise ValueError(f"invalid index_reference: {ref!r}")
            if ref in seen_refs:
                raise ValueError(f"duplicate reference: {ref}")
            seen_refs.add(ref)

            parsed_book = int(ref[0:2])
            chapter = int(ref[2:5])
            verse = int(ref[5:8])
            if parsed_book != book_num or chapter < 1 or verse < 1:
                raise ValueError(f"reference mapping mismatch: {ref}")
            if row["language"] != manifest["source_language"] or row["media_type"] != "Text":
                raise ValueError(f"unexpected row metadata at {ref}")

            display_text, tags = parse_display_text(str(row["content"]), verse)
            observed_tags.update(tags)
            source_digest.update(ref.encode("ascii"))
            source_digest.update(b"\0")
            source_digest.update(str(row["content"]).encode("utf-8"))
            source_digest.update(b"\n")

            source_ref = f"{osis}.{chapter}.{verse}"
            conn.execute(
                """INSERT INTO verses
                   (translation_id, book_id, chapter_num, source_chapter, source_verse_label,
                    verse_start, verse_end, segment, source_ref, display_text)
                   VALUES (?, ?, ?, ?, ?, ?, NULL, NULL, ?, ?)""",
                (
                    manifest["translation_id"], osis, chapter, str(chapter), str(verse),
                    verse, source_ref, display_text,
                ),
            )
            chapter_max = max(chapter_max, chapter)
            verse_count += 1

        conn.execute(
            """INSERT INTO translation_books
               (translation_id, book_id, source_book_code, source_name, order_index, present, source_chapter_count)
               VALUES (?, ?, ?, ?, ?, 1, ?)""",
            (
                manifest["translation_id"], osis, f"{book_num:02d}", name, book_num, chapter_max,
            ),
        )

    if len(seen_refs) != verse_count:
        raise ValueError("reference uniqueness invariant failed")
    if len(BOOKS) != manifest["expected_books"]:
        raise ValueError("hardcoded book mapping does not match expected_books")
    if verse_count != manifest["expected_verses_for_release"]:
        raise ValueError(
            f"release-specific verse count mismatch: {verse_count} != {manifest['expected_verses_for_release']}"
        )
    if observed_tags != ALLOWED_TAGS:
        raise ValueError(f"unexpected aggregate tags: {sorted(observed_tags)}")

    integrity = conn.execute("PRAGMA integrity_check").fetchone()[0]
    if integrity != "ok":
        raise ValueError(f"SQLite integrity_check failed: {integrity}")
    conn.commit()
    conn.execute("VACUUM")
    conn.close()

    try:
        database_path = str(output.relative_to(ROOT)).replace("\\", "/")
    except ValueError:
        database_path = str(output)

    return {
        "source_release": manifest["release"],
        "source_asset": manifest["asset_name"],
        "source_sha256": manifest["sha256"],
        "source_content_sha256": source_digest.hexdigest(),
        "license_identifier": manifest["license_identifier"],
        "book_count": len(BOOKS),
        "verse_count": verse_count,
        "duplicate_reference_count": 0,
        "unknown_book_count": 0,
        "observed_html_tags": sorted(observed_tags),
        "database_path": database_path,
        "database_sha256": sha256_file(output),
        "normalization_policy": "drop only p/sup markup and verse-number superscript; decode HTML entities; collapse whitespace; preserve biblical wording",
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-zip", type=Path)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--report", type=Path, default=REPORT_PATH)
    args = parser.parse_args()

    manifest = read_manifest()
    with tempfile.TemporaryDirectory(prefix="rv1909-ingest-") as tmp_name:
        tmp = Path(tmp_name)
        zip_path = tmp / manifest["asset_name"]
        if args.source_zip:
            shutil.copyfile(args.source_zip, zip_path)
        else:
            download(manifest["asset_url"], zip_path)

        actual_sha = sha256_file(zip_path)
        if actual_sha != manifest["sha256"]:
            raise ValueError(f"source checksum mismatch: {actual_sha}")

        extracted = tmp / "extracted"
        with zipfile.ZipFile(zip_path) as zf:
            unsafe = [
                n for n in zf.namelist()
                if Path(n).is_absolute() or ".." in Path(n).parts
            ]
            if unsafe:
                raise ValueError(f"unsafe archive paths: {unsafe[:5]}")
            zf.extractall(extracted)

        report = build_database(extracted, args.output.resolve(), manifest)
        args.report.parent.mkdir(parents=True, exist_ok=True)
        args.report.write_text(
            json.dumps(report, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        print(json.dumps(report, ensure_ascii=True, indent=2))


if __name__ == "__main__":
    main()
