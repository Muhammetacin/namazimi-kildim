#!/usr/bin/env bash
set -euo pipefail
app_id=com.namazimikildim.app
adb install -r android/app/build/outputs/apk/release/app-release.apk
adb shell am start -W -n "$app_id/.MainActivity"
sleep 10
adb shell pidof "$app_id"
adb shell uiautomator dump /sdcard/foundation.xml
adb pull /sdcard/foundation.xml /tmp/foundation.xml
grep -F 'Namazımı Kıldım!' /tmp/foundation.xml
