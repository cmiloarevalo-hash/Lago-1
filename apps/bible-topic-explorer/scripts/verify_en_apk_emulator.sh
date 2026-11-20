#!/usr/bin/env bash
set -euo pipefail
# Real Android emulator smoke: install, launch, UI extraction, offline restart.
# Does NOT claim to verify notes/favorites/co-installation without further UI interactions.
APP='com.lago.bibletopicexplorer.en'
SPANISH_APP='com.lago.bibletopicexplorer'
SPANISH_APK='apps/bible-topic-explorer/qa-spanish-baseline/Biblia-Guia-Pastoral-Reina-Valera-1909-v1.11.6-REVISION.apk'
APK='apps/bible-topic-explorer/qa-output/Bible-Pastoral-Guide-v1.20.01-QA-debug-signed.apk'
OUT='apps/bible-topic-explorer/qa-android-evidence'
mkdir -p "$OUT"
exec > >(tee "$OUT/smoke.log") 2>&1
echo "EMULATOR_SMOKE_START=$(date -u +%FT%TZ)"
adb wait-for-device
adb devices -l
adb shell getprop ro.build.version.release | tr -d '\r' | tee "$OUT/android-version.txt"
test -f "$APK"
test -f "$SPANISH_APK"
echo "INSTALLING UNMODIFIED SPANISH 1.11.6 BASELINE $SPANISH_APK"
adb install -r "$SPANISH_APK"
adb shell pm path "$SPANISH_APP" | tee "$OUT/installed-spanish-before.txt"
adb shell dumpsys package "$SPANISH_APP" | grep -E 'versionName=|versionCode=' | head -n 8 | tee "$OUT/spanish-version.txt"
grep -q 'versionName=1.11.6' "$OUT/spanish-version.txt"
echo "INSTALLING $APK"
adb install -r "$APK"
adb shell pm path "$APP" | tee "$OUT/installed-path.txt"
adb shell pm path "$SPANISH_APP" | tee "$OUT/installed-spanish-after.txt"
diff -u "$OUT/installed-spanish-before.txt" "$OUT/installed-spanish-after.txt"
echo 'SPANISH_1.11.6_AND_ENGLISH_1.20.01_INSTALLED_TOGETHER=PASS'
adb shell dumpsys package "$APP" | grep -E 'versionName=|versionCode=|Package \[' | head -n 12 | tee "$OUT/installed-version.txt"
grep -q 'versionName=1.20.01' "$OUT/installed-version.txt"
echo 'LAUNCH_ONLINE'
adb shell am start -W -n "$APP/.MainActivity" | tee "$OUT/launch-online.txt"
sleep 35
adb shell pidof "$APP" | tee "$OUT/pid-online.txt"
adb shell uiautomator dump /sdcard/en-online.xml
adb pull /sdcard/en-online.xml "$OUT/online-ui.xml"
adb shell screencap -p /sdcard/en-online.png
adb pull /sdcard/en-online.png "$OUT/online-screen.png"
if ! grep -Eq 'Bible|Pastoral|World English|Read|Today|Explore' "$OUT/online-ui.xml"; then
  echo 'FAIL: no English application labels in online UI'; exit 1
fi
echo 'ONLINE_UI_HAS_ENGLISH_LABELS=PASS'
echo 'DISABLING_NETWORK'
adb shell cmd connectivity airplane-mode enable || true
adb shell svc wifi disable || true
adb shell svc data disable || true
adb shell settings get global airplane_mode_on | tee "$OUT/airplane-mode.txt"
adb shell am force-stop "$APP"
adb shell am start -W -n "$APP/.MainActivity" | tee "$OUT/launch-offline.txt"
sleep 25
adb shell pidof "$APP" | tee "$OUT/pid-offline.txt"
adb shell uiautomator dump /sdcard/en-offline.xml
adb pull /sdcard/en-offline.xml "$OUT/offline-ui.xml"
adb shell screencap -p /sdcard/en-offline.png
adb pull /sdcard/en-offline.png "$OUT/offline-screen.png"
if ! grep -Eq 'Bible|Pastoral|World English|Read|Today|Explore' "$OUT/offline-ui.xml"; then
  echo 'FAIL: no English application labels in offline UI'; exit 1
fi
echo 'OFFLINE_RESTART_VISIBLE_ENGLISH_UI=PASS'
echo 'NOTE_QA=NOT_EXECUTED'
echo 'FAVORITE_QA=NOT_EXECUTED'
echo 'BIBLE_CHAPTER_NAVIGATION_QA=NOT_EXECUTED'
echo 'PASTORAL_16_CHAPTER_TOUCH_QA=NOT_EXECUTED'
adb shell pm path "$SPANISH_APP" | tee "$OUT/installed-spanish-after-offline-restart.txt"
diff -u "$OUT/installed-spanish-before.txt" "$OUT/installed-spanish-after-offline-restart.txt"
echo 'SPANISH_APK_CO_INSTALL_QA=PASS (two package IDs installed simultaneously; private-data persistence not exercised)'
echo 'EMULATOR_SMOKE_END='$(date -u +%FT%TZ)
