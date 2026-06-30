
import {
    Bell,
    Clock3,
    Search,
    ShieldCheck,
    UserRound,
} from "lucide-react";

export function Header() {
    return (
        <header className="shrink-0 bg-[linear-gradient(180deg,#0D1226_0%,#0B1020_100%)] shadow-[0_8px_30px_rgba(0,0,0,0.35)] border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 justify-between items-center h-20 z-10">
            <div className="flex items-center gap-3">
                <div className="size-11 shadow-[0_0_24px_rgba(59,130,246,0.35)] rounded-2xl bg-[#155dfc]/15 text-[#155dfc] border-[#155dfc]/40 border-1 border-solid flex justify-center items-center">
                    <ShieldCheck className="size-6" />
                </div>
                <div className="leading-tight">
                    <div className="font-semibold text-[#155dfc] text-sm leading-5 tracking-[3.84px]">
                        Intelligent Security
                    </div>
                    <div className="text-[#9f9fa9] text-xs leading-4">
                        SOC Platform
                    </div>
                </div>
            </div>
            <div className="shadow-[0_0_24px_rgba(59,130,246,0.08)] rounded-full bg-zinc-900/70 border-white/10 border-1 border-solid flex px-4 py-3 items-center gap-3 w-168">
                <Search className="size-4 text-[#9f9fa9]" />
                <input
                    className="bg-transparent outline-none text-sm leading-5 w-full text-neutral-50"
                    placeholder="Search threats, assets, incidents…"
                />
            </div>
            <div className="flex items-center gap-4">
                <div className="rounded-full bg-zinc-900/70 text-[#9f9fa9] text-sm leading-5 border-white/10 border-1 border-solid flex px-3 py-2 items-center gap-2">
                    <Clock3 className="size-4 text-[#155dfc]" />
                    <span>UTC 14:32:18</span>
                </div>
                <div className="relative size-11 rounded-full bg-zinc-900/70 text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center">
                    <Bell className="size-5" />
                    <div className="min-w-5 font-semibold rounded-full bg-[#ff6467] text-white text-[10px] flex absolute -right-1 -top-1 px-1 justify-center items-center h-5">
                        7
                    </div>
                </div>
                <div className="rounded-full bg-zinc-900/70 border-white/10 border-1 border-solid flex px-3 py-2 items-center gap-3">
                    <div className="size-9 rounded-full bg-[#155dfc]/20 text-[#155dfc] flex justify-center items-center">
                        <UserRound className="size-5" />
                    </div>
                    <div className="leading-tight">
                        <div className="font-medium text-sm leading-5">
                            Shadman Shariar
                        </div>
                        <div className="text-[#9f9fa9] text-xs leading-4 flex items-center gap-2">
                            <span className="size-2 shadow-[0_0_12px_rgba(74,222,128,0.8)] rounded-full bg-emerald-400" />
                            LIVE
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
