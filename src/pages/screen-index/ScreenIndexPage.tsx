import { Link } from "react-router-dom";
import { screens } from "@/config/screens";

const categoryLabels = {
  core: "Core SOC",
  admin: "Administration",
  auth: "Authentication",
} as const;

export default function ScreenIndexPage() {
  const grouped = screens.reduce<Record<string, typeof screens>>((acc, screen) => {
    acc[screen.category] ??= [];
    acc[screen.category].push(screen);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-zinc-950 text-neutral-50 p-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="space-y-2">
          <p className="text-[#155dfc] text-sm tracking-[4px] uppercase">
            Intelligent Security
          </p>
          <h1 className="font-bold text-3xl">SOC Platform — Screen Index</h1>
          <p className="text-[#9f9fa9] max-w-2xl">
            Unified development shell for all Flowstep-exported screens. Pick a
            route below during development.
          </p>
        </header>

        {Object.entries(grouped).map(([category, items]) => (
          <section key={category} className="space-y-3">
            <h2 className="font-semibold text-lg text-[#9f9fa9]">
              {categoryLabels[category as keyof typeof categoryLabels]}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((screen) => (
                <Link
                  key={screen.id}
                  to={screen.path}
                  className="rounded-2xl border border-white/10 bg-zinc-900/80 p-4 transition hover:border-[#155dfc]/40 hover:bg-zinc-900"
                >
                  <div className="font-medium">{screen.title}</div>
                  <div className="text-[#9f9fa9] text-sm mt-1">
                    {screen.description}
                  </div>
                  <div className="text-[#155dfc] text-xs mt-3 font-mono">
                    {screen.path}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
