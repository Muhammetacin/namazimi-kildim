# Foundation verification

- CI: frozen pnpm install, lint, formatting, typecheck, Jest, web export and native JS export.
- Android: build release APK, install on emulator, launch and verify application title.
- iOS: build unsigned release for simulator, install, launch and verify process remains running.
- The initial CI run with the committed lockfile passed lint, typecheck, Jest and web export. Final CI and simulator results must be confirmed on the final PR head before merge.
- GitHub Free private repository: main is not protected. Owner explicitly waived server-enforced protection on 2026-11-27; manual verification of all final CI jobs and review remains mandatory.
