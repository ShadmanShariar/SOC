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


<img width="7680" height="4320" alt="Screen 11" src="https://github.com/user-attachments/assets/390c2014-a15e-43c4-bbbd-17c247e78f71" />
<img width="7680" height="5712" alt="Screen 10" src="https://github.com/user-attachments/assets/907e6081-d45e-4c47-aeef-98b75553ddad" />
<img width="7680" height="4320" alt="Screen 9" src="https://github.com/user-attachments/assets/f898e3e4-a7a2-4f91-8d3a-243f9333b5a0" />
<img width="7680" height="7328" alt="Screen 8" src="https://github.com/user-attachments/assets/2bab4faa-7eee-4808-abe1-1732f07d2eca" />
<img width="7680" height="5000" alt="Screen 7" src="https://github.com/user-attachments/assets/8b0a2dea-d629-47c8-b351-b08ca1a65e35" />
<img width="7680" height="6004" alt="Screen 6" src="https://github.com/user-attachments/assets/e6a4f454-8c28-4716-82d2-fddbd70d8644" />
<img width="7680" height="5472" alt="Screen 5" src="https://github.com/user-attachments/assets/2fce243b-e87c-4230-b2a8-d0c28c7ddefc" />
<img width="7680" height="7852" alt="Screen 4" src="https://github.com/user-attachments/assets/dfbcee82-0b17-43b3-8ea1-c645175a8a95" />
<img width="7680" height="5828" alt="Screen 3" src="https://github.com/user-attachments/assets/7800921b-f4fe-422a-ba9f-64cfeed640c5" />
<img width="7680" height="4768" alt="Screen 2" src="https://github.com/user-attachments/assets/2291b305-b869-41ae-bb64-b5a825f69e4a" />
<img width="7680" height="5200" alt="Screen 1" src="https://github.com/user-attachments/assets/856e71c8-e1bf-4e44-bba3-5f34f6a73ebf" />
