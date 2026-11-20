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

- The Spanish original in src/product/pastoralTopics.ts is unchanged. Automated structure parity: 16 chapters, 4 themes, 80 paragraphs, 84 identical chapter/verse ranges, stable chapter IDs and question kind. English chapter 10 title was corrected and the theological term `new covenant` replaces mistranslated `new alliance` in chapter 2. Six targeted editorial improvements were applied only to the English text.
- The English version src/product/pastoralTopics.en.ts preserves the 16 chapters, 80 paragraphs, 84 biblical references, four theme groups and original ordering. Content generated with machine-assisted translation is not represented as pastorally approved.
- PastoralScreen imports English text. Menus, reader, search, notes, preferences, plans and accessibility text have English localization changes. A subsequent AST-based audit corrected 61 residual Spanish strings across 19 runtime files (e.g. misleading RV1909 branding, Settings, backup, error banners, highlight colors and search rationale). Original musical work titles remain in their source language as proper names so Spotify lookups remain valid.
- 100 canonical topic IDs remain unchanged. English labels, families, synonyms and scripture references target the English WEBP database.
- **Editorial caveat:** Translations were machine-assisted and have not had complete human linguistic or theological approval.

## Actual verification and caveats

- npm ci succeeded.
- npm run typecheck succeeded.
- English-specific tests passed for DB, edition identity and pastoral references. Expanded tests also cover preview and plan references.
- English regression suite: **`npm test`: 176 passed / 0 failed across 37 test files**, `npm run typecheck`: PASS (2026-11-20, Lenovo). Two new tests guard visible runtime copy against Spanish-label regressions. The 132/173 interim tests included obsolete Spanish assertions and were corrected rather than disabled.
- Local Windows Gradle failed during installation of NDK 27.1: java.io.IOException: Espacio en disco insuficiente; drive C: had ~1.37 GiB available. GitHub-hosted Actions successfully compiled a **real QA APK** on commit 3378428 (the final localized HEAD must be rebuilt before release).
- GitHub Actions built and verified a QA APK from commit `740b25e2d8042ab518ba56272aa9b0f529435e95` (before final copy fixes): **82,875,884 bytes**, SHA-256 `483ff5dc7f6a0c8b323b1da7dd4f3cb478b1ce09a8abea31066822215ddea0bb`. `aapt` confirms package `com.lago.bibletopicexplorer.en`, versionName `1.20.01`, versionCode `20`, minSdk `24`. `apksigner` confirms **Android Debug v2** (not commercial signing), `zipalign -c` and ZIP CRC verification pass. The packaged `res/DT.db` is 6,922,240 bytes and matches the official prepared WEBP SHA-256. **After copy fixes, rebuild from the new exact HEAD before handing off**.
- Android emulator runs are independent from unit tests and have NOT passed so far. Linux GitHub-hosted runner lacked Android x86 virtualization (`Software CPU emulation...not supported`). An initial macOS-15 run attempted an x86_64 image on an aarch64 host (`FATAL ... architecture mismatch`). The workflow was corrected to `arm64-v8a` on macOS; result pending. Until ADB installation/launch is recorded, offline restart, UI flows, notes/favorites, persistence and simultaneous Spanish 1.11.6 installation remain **NOT EXECUTED / BLOCKED**. No emulator pass is inferred from an APK build.
- No store publication, no modification to main or Uptodown, and no access to private signing keys.

## Repeatable build

From apps/bible-topic-explorer run npm ci, npm run typecheck, npm test -- src/product/englishEdition.test.ts, then npx expo prebuild --platform android --no-install --non-interactive and run ./gradlew :app:assembleRelease inside generated android/. The Expo-generated release variant is signed with its debug signing configuration; it must not be published as a production release.
