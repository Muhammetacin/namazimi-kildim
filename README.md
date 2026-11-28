# Namazımı Kıldım!

Private project for iOS, Android and PWA. Approved Final Design v1.3 ([interactive reference](docs/design/namazimi-kildim-v1.3.html), [changes since v1.1](docs/design/CHANGELOG-v1.3.md)).

## Development

Use Node.js 22 and pnpm 10.11.0.

```sh
pnpm install --frozen-lockfile
pnpm start
pnpm web
pnpm ios
pnpm android
```

Run `pnpm lint`, `pnpm format:check`, `pnpm typecheck`, `pnpm test` and `pnpm build:web` before review. See [verification](docs/verification.md) for simulator checks and [AGENTS.md](AGENTS.md) for development rules.
