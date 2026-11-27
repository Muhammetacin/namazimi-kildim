# Development rules

- Final Design v1.1 is the approved reference; no unapproved redesign.
- Expo + React Native + TypeScript + pnpm; iOS, Android, PWA.
- Offline-first; no account or cloud storage in MVP. Never log personal prayer data.
- Keep domain logic independent of UI and platform storage.
- Work by NK ticket and epic branch. Require tests, CI, review and explicit epic acceptance before merging main.
- Unrecorded prayers are not proof of missed prayers. Sunrise ends Fajr; verify calculation methods against local timetables, including DST and high latitudes.
- No fake test results; document device/platform gaps.
