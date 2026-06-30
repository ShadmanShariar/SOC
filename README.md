# Intelligent Security — SOC Platform UI

Unified React application for the **Intelligent Security SOC Platform** design system. This repo consolidates 11 Flowstep-exported screens into a single Vite app with shared tooling, routing, and UI components.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — the screen index lists all available routes.

## Project structure

```
├── src/
│   ├── App.tsx              # Router shell
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles + Tailwind
│   ├── config/
│   │   └── screens.ts       # Screen metadata (paths, titles, legacy mapping)
│   ├── routes/
│   │   └── index.tsx        # React Router route definitions
│   ├── pages/               # One folder per screen
│   │   ├── dashboard/
│   │   ├── threat-detection/
│   │   ├── incident-response/
│   │   ├── threat-hunting/
│   │   ├── vulnerability-management/
│   │   ├── cloud-security/
│   │   ├── ai-investigation/
│   │   ├── login/
│   │   ├── invite-user/
│   │   ├── user-management/
│   │   ├── platform-settings/
│   │   └── screen-index/    # Dev navigation hub at /
│   ├── components/
│   │   └── ui/              # shadcn/ui components (shared)
│   └── lib/
│       └── utils.ts         # cn() helper
├── legacy/screens/          # Original per-screen Vite exports (reference only)
├── docs/
│   └── screens.md           # Screen-by-screen reference
└── package.json
```

## Routes

| Route | Screen | Legacy folder |
|-------|--------|---------------|
| `/dashboard` | Main SOC dashboard | Screen 1 |
| `/threat-detection` | Threat detection & AI investigation | Screen 2 |
| `/incident-response` | Incident response center | Screen 3 |
| `/threat-hunting` | Threat hunting & UBA | Screen 4 |
| `/vulnerability-management` | Vulnerability & asset inventory | Screen 5 |
| `/cloud-security` | Cloud security & compliance | Screen 6 |
| `/ai-investigation` | AI threat intelligence detail | Screen 7 |
| `/login` | Sign-in | Screen 8 |
| `/invite-user` | Invite new user | Screen 9 |
| `/user-management` | User & role management | Screen 10 |
| `/platform-settings` | Platform administration | Screen 11 |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run setup` | Re-add shadcn/ui components |

## Tech stack

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS 4**
- **React Router 7**
- **shadcn/ui** (New York style)
- **Lucide React** icons
- **Recharts** (charts on threat-detection, threat-hunting, vulnerability-management)

## Working on a screen

1. Edit the page in `src/pages/<screen-id>/index.tsx`
2. Add shared UI to `src/components/`
3. Register new routes in `src/config/screens.ts` and `src/routes/index.tsx`

## Legacy exports

The original 11 standalone Vite projects are preserved under `legacy/screens/screen-{1..11}/` for reference. They are **not** used by the unified app.

## Design source

Original designs exported from [Flowstep](https://app.flowstep.ai/).
