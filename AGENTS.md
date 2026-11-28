# Development rules

- Final Design v1.1 is the approved reference; no unapproved redesign.
- Expo + React Native + TypeScript + pnpm; iOS, Android, PWA.
- Offline-first; no account or cloud storage in MVP. Never log personal prayer data.
- Keep domain logic independent of UI and platform storage.
- Work by NK ticket and epic branch. Require tests, CI, review and explicit epic acceptance before merging main.
- Unrecorded prayers are not proof of missed prayers. Sunrise ends Fajr; verify calculation methods against local timetables, including DST and high latitudes.
- No fake test results; document device/platform gaps.

- GitHub Free private repository: owner approved temporary waiver of server-enforced branch protection. Check all required jobs for the exact PR head and review before merging; no direct main changes.

## CI cadence

- Every commit runs frozen install, lint, format, typecheck, Jest and web/native exports.
- Draft PRs defer Android/iOS smoke unless the PR includes native-impact changes (native configuration, dependencies, platform services or CI/smoke tooling). If in doubt, run smoke early by marking the PR ready for review.
- At epic completion, mark the PR ready for review to trigger full CI. Both native smoke jobs must actually complete successfully, along with quality, for the exact current head SHA before squash merging. Skipped jobs do not satisfy the merge gate.
- A new commit invalidates previous final validation. Never merge on stale results; main pushes also run full CI.
