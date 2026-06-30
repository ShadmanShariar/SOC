export type ScreenDefinition = {
  id: string;
  path: string;
  title: string;
  description: string;
  legacyFolder: string;
  category: "core" | "admin" | "auth";
};

export const screens: ScreenDefinition[] = [
  {
    id: "dashboard",
    path: "/dashboard",
    title: "Dashboard",
    description: "Main SOC overview with threat map, KPIs, and live event feed",
    legacyFolder: "Screen 1",
    category: "core",
  },
  {
    id: "threat-detection",
    path: "/threat-detection",
    title: "Threat Detection",
    description: "Threat detection queue and AI investigation workspace",
    legacyFolder: "Screen 2",
    category: "core",
  },
  {
    id: "incident-response",
    path: "/incident-response",
    title: "Incident Response",
    description: "Incident queue, playbooks, and case management",
    legacyFolder: "Screen 3",
    category: "core",
  },
  {
    id: "threat-hunting",
    path: "/threat-hunting",
    title: "Threat Hunting",
    description: "Threat hunting and user behavior analytics",
    legacyFolder: "Screen 4",
    category: "core",
  },
  {
    id: "vulnerability-management",
    path: "/vulnerability-management",
    title: "Vulnerability Management",
    description: "Vulnerability management and asset inventory",
    legacyFolder: "Screen 5",
    category: "core",
  },
  {
    id: "cloud-security",
    path: "/cloud-security",
    title: "Cloud Security",
    description: "Cloud security posture and compliance monitoring",
    legacyFolder: "Screen 6",
    category: "core",
  },
  {
    id: "ai-investigation",
    path: "/ai-investigation",
    title: "AI Investigation",
    description: "AI threat intelligence investigation detail view",
    legacyFolder: "Screen 7",
    category: "core",
  },
  {
    id: "login",
    path: "/login",
    title: "Login",
    description: "Authentication and sign-in screen",
    legacyFolder: "Screen 8",
    category: "auth",
  },
  {
    id: "invite-user",
    path: "/invite-user",
    title: "Invite User",
    description: "Create and configure new platform users",
    legacyFolder: "Screen 9",
    category: "admin",
  },
  {
    id: "user-management",
    path: "/user-management",
    title: "User Management",
    description: "Manage users, roles, and access controls",
    legacyFolder: "Screen 10",
    category: "admin",
  },
  {
    id: "platform-settings",
    path: "/platform-settings",
    title: "Platform Settings",
    description: "System configuration, integrations, and policies",
    legacyFolder: "Screen 11",
    category: "admin",
  },
];

export const defaultScreenPath = "/dashboard";

export function getScreenByPath(pathname: string) {
  return screens.find((screen) => screen.path === pathname);
}
