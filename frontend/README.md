# Therapy by Olivia-Bennett

Next.js App Router application. The UI and all API endpoints run in this single
Next.js project; there is no separate backend server.

## Getting started

From the repository root (pnpm workspace):

```bash
pnpm install
pnpm dev
```

Or from this directory:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```env
RESEND_API_KEY=
RECEIVER_EMAIL=
```

`RESEND_API_KEY` and `RECEIVER_EMAIL` are server-only. Email submissions are
sent through the API routes in `src/app/api` using the shared client in
`src/lib/resend.ts`.

## API routes

- `POST /api/contact`
- `POST /api/booking`
- `POST /api/gift-card-balance`
- `GET /api/reviews`

## Scripts

- `pnpm dev` – Next.js development server
- `pnpm build` – production build
- `pnpm start` – production server
- `pnpm lint` – ESLint
- `pnpm typecheck` – TypeScript check
