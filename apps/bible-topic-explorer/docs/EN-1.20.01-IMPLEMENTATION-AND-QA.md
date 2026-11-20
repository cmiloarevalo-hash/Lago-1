# Work item #81: Bible – Pastoral Guide (English) 1.20.01

## Independent edition

- Branch: feat/guia-pastoral-en-1.20.01; baseline main@896b72978b6eb4ad807007d33753a511ccf861ef.
- Android versionName: 1.20.01; versionCode: **20** (new independent application).
- Android package: com.lago.bibletopicexplorer.en. The Spanish application's package and all local data remain separate.
- Commercial name: Bible – Pastoral Guide. Reuses existing icon; distinct-edition icon approval remains a release checkpoint.

## World English Bible (offline)

- Bible: World English Bible (WEBP), 66-book edition, from eBible.org.
- Official source: https://ebible.org/bible/details.php?id=engwebp
- Archive source: https://ebible.org/Scriptures/engwebp_vpl.zip
- Archive SHA-256: 696e9d4b2856e6408dcd82e6f64ac254ab623d5bbeba5c8de9864bbe32d2d047
- Copyright notice: https://ebible.org/engwebp/copyright.htm (public domain).
- Bundled asset: assets/data/bible-webp-en.db
- Asset SHA-256: b8fb975cd619ecdfd4572e7a5e9c3a12d980594d54d5945cfaeb7f6ae068ce57
- Size: 6,922,240 bytes; 66 books, 31,103 verses, 0 SQLite foreign-key failures.
- Verified English Genesis 1:1, Psalm 23:1, John 3:16.
- Original Spanish corpus assets/data/bible-topic-explorer.db is preserved unchanged; no relabeling.

## Pastoral guide and localization

- The Spanish original in src/product/pastoralTopics.ts is unchanged.
- The English version src/product/pastoralTopics.en.ts preserves the 16 chapters, 80 paragraphs, 84 biblical references, four theme groups and original ordering. Content generated with machine-assisted translation is not represented as pastorally approved.
- PastoralScreen imports English text. Menus, reader, search, notes, preferences, plans and accessibility text have English localization changes.
- 100 canonical topic IDs remain unchanged. English labels, families, synonyms and scripture references target the English WEBP database.
- **Editorial caveat:** Translations were machine-assisted and have not had complete human linguistic or theological approval.

## Actual verification and caveats

- npm ci succeeded.
- npm run typecheck succeeded.
- English-specific tests passed for DB, edition identity and pastoral references. Expanded tests also cover preview and plan references.
- Legacy Spanish-edition tests were migrated to check the equivalent English strings, World English Bible fixtures and independent Android configuration without removing structural/security assertions. Final **`npm test`: 174 passed / 0 failed across 36 files** (2026-11-20, Lenovo environment). Prior interim run: 132 passed / 41 failed; all failures were addressed in the English branch.
- Local Windows Gradle failed during installation of NDK 27.1: java.io.IOException: Espacio en disco insuficiente; drive C: had ~1.37 GiB available. GitHub-hosted Actions successfully compiled a **real QA APK** on commit 3378428 (the final localized HEAD must be rebuilt before release).
- The separate GitHub Actions workflow android-en-qa.yml builds a self-contained release-variant QA APK, signed only with the generated Android DEBUG key. This is **not a production signature**. First verified QA APK on commit 3378428: 82,875,084 bytes, SHA-256 `804e0ca237140641de4f0840a093ff827803e49465697b14eeb292f8c4d2b99d`, v2 signature, `CN=Android Debug`, manifest package/version/code verified by `aapt` and `apksigner`.
- Android emulator run uses `scripts/verify_en_apk_emulator.sh` (Android 13 API 33, actual install, launch and airplane-mode cold restart). The result is independent from unit tests. Individual chapter taps, 16 pastoral chapter taps, note/favorite persistence and independent coexistence with the Spanish APK **must be tested separately**, and remain release gates until evidenced.
- No store publication, no modification to main or Uptodown, and no access to private signing keys.

## Repeatable build

From apps/bible-topic-explorer run npm ci, npm run typecheck, npm test -- src/product/englishEdition.test.ts, then npx expo prebuild --platform android --no-install --non-interactive and run ./gradlew :app:assembleRelease inside generated android/. The Expo-generated release variant is signed with its debug signing configuration; it must not be published as a production release.
