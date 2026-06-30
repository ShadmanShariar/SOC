import { lazy } from "react";
import { Navigate, type RouteObject } from "react-router-dom";
import { defaultScreenPath, screens } from "@/config/screens";
import { DashboardLayout } from "@/components/DashboardLayout";

const pageModules = {
  dashboard: lazy(() => import("@/pages/dashboard")),
  "threat-detection": lazy(() => import("@/pages/threat-detection")),
  "incident-response": lazy(() => import("@/pages/incident-response")),
  "threat-hunting": lazy(() => import("@/pages/threat-hunting")),
  "vulnerability-management": lazy(() => import("@/pages/vulnerability-management")),
  "cloud-security": lazy(() => import("@/pages/cloud-security")),
  "ai-investigation": lazy(() => import("@/pages/ai-investigation")),
  login: lazy(() => import("@/pages/login")),
  "invite-user": lazy(() => import("@/pages/invite-user")),
  "user-management": lazy(() => import("@/pages/user-management")),
  "platform-settings": lazy(() => import("@/pages/platform-settings")),
} as const;

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    element: <DashboardLayout />,
    children: screens
      .filter((s) => s.category === "core" || s.category === "admin")
      .map((screen) => ({
        path: screen.path,
        lazy: async () => {
          const Component = pageModules[screen.id as keyof typeof pageModules];
          return { Component };
        },
      })),
  },
  {
    path: "/login",
    lazy: async () => {
      const { default: LoginPage } = await import("@/pages/login");
      return { Component: LoginPage };
    },
  },
  {
    path: "*",
    Component: () => <Navigate to={defaultScreenPath} replace />,
  },
];
