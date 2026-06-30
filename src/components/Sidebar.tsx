import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    Shield,
    AlertTriangle,
    Zap,
    Bug,
    Users,
    Cloud,
    Settings,
    Bot,
    ShieldCheck,
    UserPlus,
} from "lucide-react";
import { screens } from "@/config/screens";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
    dashboard: LayoutDashboard,
    "threat-detection": Shield,
    "incident-response": AlertTriangle,
    "threat-hunting": Zap,
    "vulnerability-management": Bug,
    "cloud-security": Cloud,
    "ai-investigation": Bot,
    "user-management": Users,
    "platform-settings": Settings,
    "invite-user": UserPlus,
};

export function Sidebar() {
    const location = useLocation();

    return (
        <aside className="shrink-0 bg-[linear-gradient(180deg,#0D1226_0%,#0A0E1A_100%)] border-white/10 border-t-0 border-r-1 border-b-0 border-l-0 border-solid px-2 py-4 w-16 flex flex-col items-center gap-4">
            <div className="shadow-[0_0_24px_rgba(59,130,246,0.18)] rounded-xl bg-zinc-900/80 text-[#155dfc] border-white/10 border-1 border-solid flex justify-center items-center h-12 w-12 mb-2">
                <ShieldCheck className="size-6" />
            </div>
            <div className="flex flex-col flex-1 gap-2 w-full overflow-y-auto pr-1 scrollbar-hide">
                {screens
                    .filter((s) => s.category === "core" || s.category === "admin")
                    .map((screen) => {
                        const Icon = iconMap[screen.id] || LayoutDashboard;
                        const isActive = location.pathname === screen.path;

                        return (
                            <Link
                                key={screen.id}
                                to={screen.path}
                                title={screen.title}
                                className={cn(
                                    "rounded-xl border-1 border-solid flex justify-center items-center h-11 w-12 transition-all shrink-0",
                                    isActive
                                        ? "shadow-[0_0_24px_rgba(59,130,246,0.35)] bg-[#155dfc] text-[#1c398e] border-[#155dfc]/40"
                                        : "bg-zinc-900/70 text-[#9f9fa9] border-white/10 hover:bg-zinc-800/80"
                                )}
                            >
                                <Icon className="size-5" />
                            </Link>
                        );
                    })}
            </div>
        </aside>
    );
}
