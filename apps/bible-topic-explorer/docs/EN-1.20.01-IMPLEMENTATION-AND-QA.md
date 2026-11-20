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
- The English version src/product/pastoralTopics.en.ts preserves the 16 chapters, 80 paragraphs, 84 biblical references, four theme groups and original ordering.
- PastoralScreen imports English text. Menus, reader, search, notes, preferences, plans and accessibility text have English localization changes.
- 100 canonical topic IDs remain unchanged. English labels, families, synonyms and scripture references target the English WEBP database.
- **Editorial caveat:** Translations were machine-assisted and have not had complete human linguistic or theological approval.

## Actual verification and caveats

- npm ci succeeded.
- npm run typecheck succeeded.
- English-specific tests passed for DB, edition identity and pastoral references. Expanded tests also cover preview and plan references.
- Legacy Spanish release regression suite initially returned 132 passed / 41 failed (173 total). Failures include Spanish-language hardcoded expectations and RV1909 fixtures. This is NOT a passing full regression suite; it must be migrated or resolved.
- Local Windows Gradle failed during installation of NDK 27.1: java.io.IOException: Espacio en disco insuficiente; drive C: had ~1.37 GiB available. No local APK success is claimed.
- The separate GitHub Actions workflow android-en-qa.yml builds a self-contained release-variant QA APK, signed only with the generated Android DEBUG key. This is not a production signature.
- Android device/emulator startup, offline behavior, persistence, notes, favorites and coexistence remain to be evidenced before READY_FOR_SUPERVISOR_REVIEW.
- No store publication, no modification to main or Uptodown, and no access to private signing keys.

## Repeatable build

From apps/bible-topic-explorer run npm ci, npm run typecheck, npm test -- src/product/englishEdition.test.ts, then npx expo prebuild --platform android --no-install --non-interactive and run ./gradlew :app:assembleRelease inside generated android/. The Expo-generated release variant is signed with its debug signing configuration; it must not be published as a production release.
