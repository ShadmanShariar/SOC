# Screen reference

Detailed mapping of each exported screen to its route and purpose.

## Core SOC screens

### Dashboard (`/dashboard`)
- **Legacy:** Screen 1
- **Content:** KPI cards, global threat map, severity distribution, attack vectors, live event feed, AI threat summary
- **Layout:** Collapsed icon sidebar + top header

### Threat Detection (`/threat-detection`)
- **Legacy:** Screen 2
- **Content:** Threat queue, AI investigation panel, charts (Recharts)
- **Uses shadcn:** button, card, chart

### Incident Response (`/incident-response`)
- **Legacy:** Screen 3
- **Content:** Incident queue, case detail, timeline, playbook actions
- **Uses shadcn:** button, card

### Threat Hunting (`/threat-hunting`)
- **Legacy:** Screen 4
- **Content:** Hunt workspace, UBA radar chart, query builder, results table
- **Uses shadcn:** badge, button, card, chart, table

### Vulnerability Management (`/vulnerability-management`)
- **Legacy:** Screen 5
- **Content:** CVE tracking, asset inventory, risk charts
- **Uses shadcn:** badge, button, card, chart, checkbox, input

### Cloud Security (`/cloud-security`)
- **Legacy:** Screen 6
- **Content:** Cloud posture, compliance frameworks (SOC 2, ISO, etc.)
- **Uses shadcn:** badge, button, card

### AI Investigation (`/ai-investigation`)
- **Legacy:** Screen 7
- **Content:** Deep-dive AI threat case with MITRE ATT&CK mapping
- **Layout:** Similar to dashboard with investigation focus

## Auth & admin screens

### Login (`/login`)
- **Legacy:** Screen 8
- **Content:** Sign-in form, SSO options, compliance badges
- **Uses shadcn:** badge, button, checkbox, input, label

### Invite User (`/invite-user`)
- **Legacy:** Screen 9
- **Content:** Multi-step user invitation form

### User Management (`/user-management`)
- **Legacy:** Screen 10
- **Content:** User table, role management, access stats

### Platform Settings (`/platform-settings`)
- **Legacy:** Screen 11
- **Content:** General settings, security policies, integrations, licensing
- **Uses shadcn:** button
