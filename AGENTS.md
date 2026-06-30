# Agent guide — Sentinel SOC UI

Use this file when continuing work in this repository.

## Architecture

- **Single Vite app** at repo root — do not create new per-screen Vite projects.
- **Pages live in** `src/pages/<kebab-case-id>/index.tsx`.
- **Route registry** is in `src/config/screens.ts` — update this when adding/removing screens.
- **Shared UI** goes in `src/components/` (shadcn components in `src/components/ui/`).
- **Legacy exports** in `legacy/screens/` are read-only reference; do not edit unless migrating content.

## Conventions

- Page components are named `*Page` (e.g. `DashboardPage`) and use default exports.
- Use `@/` path alias for imports from `src/`.
- Styling: Tailwind utility classes inline (matching existing Flowstep export style).
- Brand colors: primary blue `#155dfc`, muted text `#9f9fa9`, dark backgrounds `zinc-950` / `#0D1226`.
- Icons: `lucide-react` only.

## Adding a new screen

1. Create `src/pages/my-screen/index.tsx` with a default-exported page component.
2. Add entry to `screens` array in `src/config/screens.ts`.
3. Add lazy import in `src/routes/index.tsx` `pageModules` map.
4. Verify with `npm run build`.

## Refactoring guidance

Current pages are large monolithic TSX files (500–1200 lines). When enhancing a screen:

1. Extract repeated layout (sidebar, header) into `src/components/layout/` first.
2. Extract domain sections into `src/pages/<screen>/components/`.
3. Keep mock data co-located until a real API exists.

## Do not

- Split back into 11 separate npm projects.
- Commit `node_modules/` or `.env` secrets.
- Remove `legacy/screens/` without explicit user request.

## Verify changes

```bash
npm run build
npm run lint
```

## Screen map (legacy → current)

| Legacy | Path | Page folder |
|--------|------|-------------|
| Screen 1 | `/dashboard` | `dashboard` |
| Screen 2 | `/threat-detection` | `threat-detection` |
| Screen 3 | `/incident-response` | `incident-response` |
| Screen 4 | `/threat-hunting` | `threat-hunting` |
| Screen 5 | `/vulnerability-management` | `vulnerability-management` |
| Screen 6 | `/cloud-security` | `cloud-security` |
| Screen 7 | `/ai-investigation` | `ai-investigation` |
| Screen 8 | `/login` | `login` |
| Screen 9 | `/invite-user` | `invite-user` |
| Screen 10 | `/user-management` | `user-management` |
| Screen 11 | `/platform-settings` | `platform-settings` |
