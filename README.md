This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Set Up 
```bash 
kafe-shop/
│
├─ .next/                     # Build output Next.js (auto-generated)
├─ node_modules/              # Dependency project
├─ public/                    # Asset statis (img, icon, dll)
│
├─ src/
│  ├─ app/                    # App Router (Next.js 13+)
│  │
│  ├─ component/              # Komponen UI (Atomic Design)
│  │  ├─ element/             # Komponen kecil (Button, Card, dll)
│  │  │  └─ Card.tsx
│  │  │
│  │  ├─ organisms/           # Komponen kompleks
│  │  │  ├─ Footer.tsx
│  │  │  ├─ Navbar.tsx
│  │  │  └─ Sidebar.tsx
│  │
│  ├─ pages/                  # Halaman (custom / legacy / feature-based)
│  │  └─ DashboardPage.tsx
│  │
│  ├─ lib/                    # Helper / shared logic
│  │  └─ api/                 # API service / endpoint handler
│  │     ├─ auth/
│  │     ├─ cashier/
│  │     ├─ masterdata/
│  │     └─ payment/
│  │
│  ├─ hooks/                  # Custom React Hooks
│  │  └─ gsapanimation/
│  │     └─ GsapHelper.tsx
│  │
│  └─ utils/                  # Utility & helper functions
│     └─ animation/
│
├─ .gitignore                 # File/folder yang diabaikan Git
├─ eslint.config.mjs           # Konfigurasi ESLint
├─ next-env.d.ts              # Type declaration Next.js
├─ next.config.ts             # Konfigurasi Next.js
├─ package-lock.json          # Lock dependency
├─ package.json               # Dependency & scripts
├─ postcss.config.mjs         # Konfigurasi PostCSS
├─ tsconfig.json              # Konfigurasi TypeScript
└─ README.md                  # Dokumentasi project

```