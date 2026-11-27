# Architecture
Expo Router, React Native Web, TypeScript, pnpm, SVG, Reanimated, Zustand, Adhan JS, i18next. SQLite native and IndexedDB web via common interface. Expo Location/Notifications with web-specific adapters. PWA manifest and service worker. Jest, RNTL, Playwright, Maestro, GitHub Actions, EAS.
Layers: presentation (app routes and components), application (use cases), domain (pure prayer/time/record rules), infrastructure (platform adapters).
Unique local date + prayer type record. Store timezone and location settings; method and Asr/high latitude preferences; notification options. Verify Turkey method against actual Diyanet tables, not assume equivalence. Explicitly handle midnight, DST and missing active period. PWA notification parity subject to feasibility.
