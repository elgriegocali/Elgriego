# El Griego Cali — repository guidance

## Project and compatibility

- This is a static HTML/CSS/vanilla JavaScript app with no build step.
- `index.html` is the internal management app; `pedido.html` is the customer menu and WhatsApp ordering page. Do not link customers to the internal app.
- Published prices live in `precios.js`; shared family menus live in `menus.js`. Preserve stable product keys and the existing fallbacks.
- Preserve all Claude-specific files and compatibility code, including the `window.storage` → `localStorage` → session-memory storage cascade.
- Keep changes small and verifiable. User-facing text is Colombian Spanish, amounts are COP, and the brand tone is premium but accessible. Avoid “oferta” in customer-facing copy.

## Private data

- All private business data and client personally identifiable information (PII) must be kept in `.gitignore`d files if saved on disk. This includes customer names, personal phone numbers, addresses, order records, exports, backups, and sensitive recipe/cost data. Public menu prices and the public business WhatsApp number are intentional public information.
- Before creating a local private-data file, add its path or containing private-data directory to `.gitignore` and verify it is ignored. Use synthetic or anonymized fixtures for committed tests and examples. Never copy real customer data into tracked documentation, code, or fixtures.
- `.gitignore` does not remove already tracked files or historical contents. Existing embedded recipe/cost data is a known item in the local backlog; do not expand that exposure or treat it as permission to add more private data.
- Do not delete or migrate phone data, change storage keys, or alter backup compatibility casually. The real operational records live on Haris's iPhone. Obtain a current phone backup before a risky data migration.
- Current backup exports use envelope version `v:4`, including orders, costs, recipes, and local price overrides. Preserve support for older accepted backup formats.

## Development and publishing

- Verify affected behavior before delivery, particularly totals, historical order prices, costing, and backup/restore. Keep live customer records out of development fixtures.
- Production is served through GitHub Pages from `elgriegocali/Elgriego`. The established workflow is local edits/commits, then Haris pushes through GitHub Desktop and refreshes/reopens the phone app. Do not push or deploy unless Haris authorizes changing that workflow.
- Commit messages should explain the reason in Spanish. Do not attribute Codex work to Claude.
- Claude's preview used a copy outside Documents because of a macOS permission issue. Verify the current environment before relying on that workaround; a preview copy must be synchronized after edits.
- Browser storage belongs to an origin (scheme, host, and port), not a URL path. A different preview port or production domain has separate storage. The separate SwiftUI experiment does not sync with this web app.

## Local backlog

- When available, read `backlog.md` for pending work and decisions. It is intentionally ignored and will not accompany a fresh checkout or worktree. Its absence does not mean its tasks are complete.
- Backlog entries are not authorization to execute deferred work. Do not rewrite history, force-push, delete/recreate the repository, change its visibility, or migrate hosting as part of routine work.
