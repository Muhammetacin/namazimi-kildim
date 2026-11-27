#!/usr/bin/env bash
set -euo pipefail
app_id=com.namazimikildim.app
udid="$(xcrun simctl list devices booted -j | python3 -c 'import json,sys; print(next((d["udid"] for v in json.load(sys.stdin)["devices"].values() for d in v if d["name"].startswith("iPhone")), ""))')"
if [[ -z "$udid" ]]; then
  udid="$(xcrun simctl list devices available -j | python3 -c 'import json,sys; print(next(d["udid"] for v in json.load(sys.stdin)["devices"].values() for d in v if d["name"].startswith("iPhone")))')"
  xcrun simctl boot "$udid"
fi
xcrun simctl bootstatus "$udid" -b
workspace="$(find ios -maxdepth 1 -name '*.xcworkspace' -print -quit)"
scheme="$(xcodebuild -workspace "$workspace" -list -json | python3 -c 'import json,sys; print(next(s for s in json.load(sys.stdin)["workspace"]["schemes"] if s != "Pods"))')"
xcodebuild -workspace "$workspace" -scheme "$scheme" -configuration Release -sdk iphonesimulator -destination "id=$udid" -derivedDataPath /tmp/foundation-ios CODE_SIGNING_ALLOWED=NO build
app="$(find /tmp/foundation-ios/Build/Products/Release-iphonesimulator -maxdepth 1 -name '*.app' -print -quit)"
test -n "$app"
xcrun simctl install "$udid" "$app"
xcrun simctl launch "$udid" "$app_id"
sleep 10
xcrun simctl spawn "$udid" launchctl list | grep -F "$app_id"
xcrun simctl io "$udid" screenshot /tmp/foundation-ios.png
