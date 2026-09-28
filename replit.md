# CraveRush

CraveRush is a colorful fake food-delivery toy: users can search cravings, build a bag, apply a promo, place a fictional order, and watch a playful delivery tracker that never actually delivers food.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/crave-rush run dev` — run the CraveRush web app
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/crave-rush/src/App.tsx` — browse, search, bag, checkout, promo, order tracking, and local state
- `artifacts/crave-rush/src/index.css` — CraveRush visual theme, fonts, texture, and motion
- `artifacts/crave-rush/.replit-artifact/artifact.toml` — artifact metadata and preview service
- `artifacts/api-server` — shared API scaffold; CraveRush is intentionally frontend-only for the toy flow

## Architecture decisions

- The first build is frontend-only with local React state because the product is intentionally fictional and does not need real order persistence.
- The delivery flow is deliberately theatrical: receipt math, arbitrary addresses, the `DELULU` promo, and tracker states are all part of the joke.
- Remote food photography is used for the visual menu so the browsing experience feels immediate without introducing image storage or a database.

## Product

- Search by food, mood, description, or tag.
- Filter cravings by savory, sweet, or sip.
- Add items to a bag, adjust quantities, remove items, and review the receipt.
- Enter any address, apply `DELULU` for a fictional discount, and place the order.
- Watch the fake order move through receiving, pretend kitchen prep, rider travel, and an explicit “never arriving” punchline.

## User preferences

- The user wants colorful, eye-catching, playful experiences for this fictional delivery concept.

## Gotchas

- This is a toy and must not be presented as a real food-delivery service.
- The order tracker is intentionally fake and ends with a clear no-delivery wink.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
