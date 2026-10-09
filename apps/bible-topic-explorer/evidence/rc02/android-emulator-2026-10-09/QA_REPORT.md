# RC02 — Android 16 emulator QA via Windows Desktop Commander
**Supervisor evidence:** 2026-10-09, from Windows device `User`. **Source APK:** unchanged candidate for `Lago-1/main @ 003faffd6911b900cfd0c2b91a088f200e59b740`; artifact [GitHub Actions run 37866734464 / ID 11588762040](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/37866734464/artifacts/11588762040). **APK SHA-256 measured locally on Windows:** `a942ebc0473534f60282513649797b145b55ea2817e74cb7e97d6ddc85bc9a13`, MATCH expected. **APK size:** 80,601,986 bytes (not ZIP size). `adb install -r`: **Success** on emulator fresh installation.

## Rig
- Remote Windows via Desktop Commander; Android SDK emulator AVD `LaU_API36`, Google APIs **Android 16/API 36**, x86_64, **1080×2400**, 420dpi, Windows WHPX hardware acceleration; `adb devices` showed `emulator-5554 device`.
- Android app reported `versionName=1.1.0`, `versionCode=2`, `targetSdk=36`, package `com.lago.bibletopicexplorer`.
- No source/APK modifications or GitHub Actions rebuild. Screenshots taken with `adb shell screencap -p` and `adb pull`; original Windows QA folder `C:\Users\cmilo\Downloads\LaU_RC02_QA\` contains **33 PNGs**. **11 curated PNGs** are versioned in this evidence branch; screenshots are not simulated renders.
- Test account/notes are **emulator-only**, no user's physical phone data touched. App restored to **font scale 1.0, system light, network on and notifications disabled** at end.

## Execution results / evidence
| Case | Test / observed outcome | Status | Screenshot |
|---|---|---|---|
| QA01 | APK hash equality, `adb install -r Success`, app launches to Hoy, 4 tabs and real bundled RV1909 Matthew 6:34 | **PASS** | [Hoy](01-hoy.png) |
| QA02 | Context CTA opens Matthew 6 reader, renders actual chapter and verse actions | **PASS** | [Verse menu](03-verse-menu.png) |
| QA03 | Highlight lavender Matthew 6:1; visible in Biblioteca and persists after app force-stop + restart | **PASS** | [Library after relaunch](18-library-note-persisted.png) |
| QA04 | Add personal note `QA_RC02_Mateo_6_1` to Matthew 6:1; saved locally and visible in Biblioteca **after force-stop/relaunch** | **PASS** | [Persisted note](18-library-note-persisted.png) |
| QA05 | Turn off emulator Wi-Fi **and** mobile data; literal search `amor` returns 50 RV1909 results including true complete-word examples; 100-topic A–Z interface preserved. Did not inspect every returned result individually. `amor` vs `llamó` also covered by CI tests | **PASS limited smoke** | [Offline search](13-amor-hits-offline.png) |
| QA06 | Android system dark mode + font scale **2.0 (200%)**; Hoy, Biblioteca, reader and verse action dialog render and navigate; bottom tabs present | **PASS sampled screens** | [Hoy dark 200%](19-dark-200-hoy.png), [verse modal dark 200%](22-dark-200-verse-menu.png) |
| QA07 | **200% dark with onscreen Gboard OPEN:** existing note editor kept `Guardar nota` visible and tappable | **PASS** | [Keyboard/editor](33-dark-200-note-keyboard.png) |
| QA08 | Notification default OFF; Android runtime permission dialog appears; after grant, UI says `Programado`, channel `lau-daily-reading` exists, Android `dumpsys alarm` contains the app `RTC_WAKEUP` pending alarm. On `Desactivar`, no matching app `RTC_WAKEUP` remained in sampled dump | **PASS schedule/cancel** | [Permission](28-notification-dialog.png), [Scheduled](29-reminder-enabled.png) |
| QA09 | Music accessible from Hoy without network; one playlist button `Linking.openURL` opened **external Chrome**, not embedded/player; native Chrome first-run shown (Spotify app not installed) | **PASS external handoff** | [Music](30-music-offline.png), [Chrome first run](31-spotify-link-offline.png) |
| QA10 | `adb logcat -d -b crash` during sampled QA returned no crashes | **PASS sampled crash log** | Terminal verification only |
| QA11 | Existing installed app signature upgrade over previous phone build, legacy-data migration across versions | **NOT RUN**; AVD was fresh installation | Phone gate |
| QA12 | Actual delivered notification at scheduled hour, notification tap routing from terminated process, Doze/DST/timezone variance | **NOT RUN** (only scheduling and cancellation checked) | Android device gate |
| QA13 | Live Spotify playback, service access by geography, login, all 5 playlist URLs from end-user network, public-performance permission | **NOT RUN** | External service / legal |
| QA14 | Full screen-reader/TalkBack, multiple hardware screen sizes, physical 200% user font, original phone signature and install | **NOT RUN** | Phone gate |

### Findings to correct before polished phone handoff
- **UX-01 (minor, reproduced):** Biblioteca → Destacados renders `Matt 6:1` and `lavender` (internal English book ID / color enum) instead of friendly Spanish `Mateo 6:1` and `lavanda`. See [18-library-note-persisted.png](18-library-note-persisted.png). Notes section itself correctly shows `Mateo 6:1`.
- **UX-02 (minor, reproduced):** Music card button for Ánimo visually shows **“Abrir Ánimo en”**, missing/wrapping the “Spotify” suffix on sampled 1080×2400 100% light screen; verify/wrap Action label without truncation. See [30-music-offline.png](30-music-offline.png).
- **UX-03 (potential improvement, confirm):** Hoy “Leer Mateo 6:34 en contexto” enters Matthew **chapter 6 at verse 1** rather than positioning on verse 34. Full chapter context is valid, but selected-verse focus should be confirmed/adjusted for UX; not treated as severe defect.
- **Environment-only:** Google Gboard first-use stylus handwriting wizard briefly intercepted note typing, resolved via Android emulator `settings put secure stylus_handwriting_enabled 0`. **Not counted as app defect**.

## Outcome
**SUPERVISOR EMULATOR QA: FUNCTIONAL SMOKE PASS WITH MINOR UX REWORK**, not final release acceptance. All operational/CI claims are bounded to observed Android 16 emulator and previously confirmed 91/91 CI tests. For best physical phone experience, request targeted corrections **UX-01 / UX-02** and one candidate rebuild/QA before handing to Human; keep RV1909 and source data frozen. **Do not silently mark notification actual delivery, in-place old-signature upgrade, regional Spotify playback or TalkBack as passed.**

This branch **only** captures evidence; `main` and its existing release APK remain unchanged.
