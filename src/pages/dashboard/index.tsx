
import {
  AlertTriangle,
  Bot,
  BotMessageSquare,
  Flame,
  ScanSearch,
  Server,
  Sparkles,
  TimerReset,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-blue-500/12 flex flex-col">
      <main className="space-y-6 p-6 flex-1">
        <section className="grid grid-cols-5 gap-4">
          <div className="shadow-[0_0_24px_rgba(239,68,68,0.12)] rounded-2xl bg-zinc-900/80 border-white/10 border-1 border-solid p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[#9f9fa9] text-sm leading-5">
                  Critical Alerts
                </div>
                <div className="font-semibold text-white text-3xl leading-9 mt-2">
                  47
                </div>
              </div>
              <AlertTriangle className="size-5 text-red-400" />
            </div>
          </div>
          <div className="shadow-[0_0_24px_rgba(249,115,22,0.12)] rounded-2xl bg-zinc-900/80 border-white/10 border-1 border-solid p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[#9f9fa9] text-sm leading-5">
                  Active Incidents
                </div>
                <div className="font-semibold text-white text-3xl leading-9 mt-2">
                  12
                </div>
              </div>
              <Flame className="size-5 text-orange-400" />
            </div>
          </div>
          <div className="shadow-[0_0_24px_rgba(234,179,8,0.12)] rounded-2xl bg-zinc-900/80 border-white/10 border-1 border-solid p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[#9f9fa9] text-sm leading-5">
                  Threats Detected Today
                </div>
                <div className="font-semibold text-white text-3xl leading-9 mt-2">
                  284
                </div>
              </div>
              <ScanSearch className="size-5 text-yellow-400" />
            </div>
          </div>
          <div className="shadow-[0_0_24px_rgba(59,130,246,0.12)] rounded-2xl bg-zinc-900/80 border-white/10 border-1 border-solid p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[#9f9fa9] text-sm leading-5">
                  Assets Monitored
                </div>
                <div className="font-semibold text-white text-3xl leading-9 mt-2">
                  3,847
                </div>
              </div>
              <Server className="size-5 text-blue-400" />
            </div>
          </div>
          <div className="shadow-[0_0_24px_rgba(34,197,94,0.12)] rounded-2xl bg-zinc-900/80 border-white/10 border-1 border-solid p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[#9f9fa9] text-sm leading-5">
                  MTTR
                </div>
                <div className="font-semibold text-white text-3xl leading-9 mt-2">
                  14 min
                </div>
              </div>
              <TimerReset className="size-5 text-emerald-400" />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-10 gap-4">
          <div className="col-span-6 shadow-[0_0_30px_rgba(59,130,246,0.12)] rounded-2xl bg-zinc-900/80 border-white/10 border-1 border-solid p-4">
            <div className="flex mb-4 justify-between items-center">
              <div>
                <div className="font-semibold text-lg leading-7">
                  Global Threat Map
                </div>
                <div className="text-[#9f9fa9] text-sm leading-5">
                  Live attack origin and vector visualization
                </div>
              </div>
              <div className="rounded-full bg-zinc-800 text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid px-3 py-1">
                LIVE
              </div>
            </div>
            <div className="relative bg-[linear-gradient(180deg,#0F1535_0%,#0B1024_100%)] rounded-2xl border-white/10 border-1 border-solid p-3 overflow-hidden">
              <img
                alt="world map"
                className="object-cover opacity-80 w-full h-90"
                src="https://screens-image-components-public.s3.eu-north-1.amazonaws.com/world-map-3d.png"
              />
              <div className="bg-blue-500/18 absolute inset-0" />
              <div className="rounded-xl bg-zinc-950/50 text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid absolute left-6 top-6 px-3 py-2">
                Attack vectors: phishing, botnet, credential stuffing,
                exploit chains
              </div>
              <div className="rounded-xl bg-zinc-950/50 text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid flex absolute left-6 bottom-6 px-3 py-2 gap-2">
                <span className="flex items-center gap-1">
                  <span className="size-2 rounded-full bg-red-400" />
                  Critical
                </span>
                <span className="flex items-center gap-1">
                  <span className="size-2 rounded-full bg-orange-400" />
                  High
                </span>
                <span className="flex items-center gap-1">
                  <span className="size-2 rounded-full bg-yellow-400" />
                  Medium
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-2 shadow-[0_0_30px_rgba(59,130,246,0.12)] rounded-2xl bg-zinc-900/80 border-white/10 border-1 border-solid p-4">
            <div className="mb-4">
              <div className="font-semibold text-lg leading-7">
                Threat Severity Distribution
              </div>
              <div className="text-[#9f9fa9] text-sm leading-5">
                Current incident mix
              </div>
            </div>
            <div className="flex py-4 justify-center items-center">
              <div className="relative size-44 bg-[conic-gradient(from_0deg,#ef4444_0_18%,#f97316_18%_42%,#eab308_42%_74%,#22c55e_74%_100%)] shadow-[0_0_30px_rgba(59,130,246,0.18)] rounded-full flex justify-center items-center">
                <div className="size-28 text-center rounded-full bg-zinc-900 border-white/10 border-1 border-solid flex justify-center items-center">
                  <div>
                    <div className="font-semibold text-2xl leading-8">
                      100%
                    </div>
                    <div className="text-[#9f9fa9] text-xs leading-4">
                      Total
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3 text-sm leading-5">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-red-400" />
                  Critical
                </span>
                <span className="text-[#9f9fa9]">18%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-orange-400" />
                  High
                </span>
                <span className="text-[#9f9fa9]">24%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-yellow-400" />
                  Medium
                </span>
                <span className="text-[#9f9fa9]">32%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  Low
                </span>
                <span className="text-[#9f9fa9]">26%</span>
              </div>
            </div>
          </div>
          <div className="col-span-2 shadow-[0_0_30px_rgba(59,130,246,0.12)] rounded-2xl bg-zinc-900/80 border-white/10 border-1 border-solid p-4">
            <div className="mb-4">
              <div className="font-semibold text-lg leading-7">
                Top Attack Vectors
              </div>
              <div className="text-[#9f9fa9] text-sm leading-5">
                Volume by technique
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm leading-5 flex justify-between">
                  <span>Phishing</span>
                  <span className="text-[#9f9fa9]">92%</span>
                </div>
                <div className="rounded-full bg-zinc-800 h-3">
                  <div className="w-[92%] bg-[linear-gradient(90deg,#3b82f6_0%,#ef4444_100%)] rounded-full h-3" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm leading-5 flex justify-between">
                  <span>Ransomware</span>
                  <span className="text-[#9f9fa9]">78%</span>
                </div>
                <div className="rounded-full bg-zinc-800 h-3">
                  <div className="w-[78%] bg-[linear-gradient(90deg,#3b82f6_0%,#ef4444_100%)] rounded-full h-3" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm leading-5 flex justify-between">
                  <span>SQL Injection</span>
                  <span className="text-[#9f9fa9]">61%</span>
                </div>
                <div className="rounded-full bg-zinc-800 h-3">
                  <div className="w-[61%] bg-[linear-gradient(90deg,#3b82f6_0%,#ef4444_100%)] rounded-full h-3" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm leading-5 flex justify-between">
                  <span>Brute Force</span>
                  <span className="text-[#9f9fa9]">54%</span>
                </div>
                <div className="rounded-full bg-zinc-800 h-3">
                  <div className="w-[54%] bg-[linear-gradient(90deg,#3b82f6_0%,#ef4444_100%)] rounded-full h-3" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm leading-5 flex justify-between">
                  <span>Zero-Day</span>
                  <span className="text-[#9f9fa9]">47%</span>
                </div>
                <div className="rounded-full bg-zinc-800 h-3">
                  <div className="w-[47%] bg-[linear-gradient(90deg,#3b82f6_0%,#ef4444_100%)] rounded-full h-3" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4">
          <div className="shadow-[0_0_30px_rgba(59,130,246,0.12)] rounded-2xl bg-zinc-900/80 border-white/10 border-1 border-solid p-4">
            <div className="flex mb-4 justify-between items-center">
              <div>
                <div className="font-semibold text-lg leading-7">
                  Live Security Event Feed
                </div>
                <div className="text-[#9f9fa9] text-sm leading-5">
                  Real-time telemetry and response status
                </div>
              </div>
              <div className="font-medium rounded-full bg-emerald-500/10 text-emerald-400 text-xs leading-4 border-emerald-500/30 border-1 border-solid px-3 py-1">
                LIVE
              </div>
            </div>
            <div className="rounded-2xl border-white/10 border-1 border-solid overflow-hidden">
              <div className="grid grid-cols-6 font-medium bg-zinc-800 text-[#9f9fa9] text-xs leading-4 px-4 py-3">
                <div>Timestamp</div>
                <div>Severity</div>
                <div>Event Type</div>
                <div>Source IP</div>
                <div>Destination</div>
                <div>Status</div>
              </div>
              <div className="divide-y divide-border text-sm leading-5">
                <div className="grid grid-cols-6 bg-zinc-900 px-4 py-3">
                  <div>14:32:11</div>
                  <div>
                    <span className="rounded-full bg-red-500/15 text-red-400 text-xs leading-4 px-2 py-1">
                      Critical
                    </span>
                  </div>
                  <div>Privilege Escalation</div>
                  <div>185.22.44.19</div>
                  <div>10.24.8.12</div>
                  <div className="text-emerald-400">Contained</div>
                </div>
                <div className="grid grid-cols-6 bg-zinc-800/40 px-4 py-3">
                  <div>14:31:58</div>
                  <div>
                    <span className="rounded-full bg-orange-500/15 text-orange-400 text-xs leading-4 px-2 py-1">
                      High
                    </span>
                  </div>
                  <div>Suspicious Login</div>
                  <div>91.204.12.7</div>
                  <div>10.24.2.44</div>
                  <div className="text-yellow-400">Investigating</div>
                </div>
                <div className="grid grid-cols-6 bg-zinc-900 px-4 py-3">
                  <div>14:31:22</div>
                  <div>
                    <span className="rounded-full bg-yellow-500/15 text-yellow-400 text-xs leading-4 px-2 py-1">
                      Medium
                    </span>
                  </div>
                  <div>Malware Beacon</div>
                  <div>203.0.113.88</div>
                  <div>10.24.9.31</div>
                  <div className="text-emerald-400">Blocked</div>
                </div>
                <div className="grid grid-cols-6 bg-zinc-800/40 px-4 py-3">
                  <div>14:30:49</div>
                  <div>
                    <span className="rounded-full bg-red-500/15 text-red-400 text-xs leading-4 px-2 py-1">
                      Critical
                    </span>
                  </div>
                  <div>Data Exfiltration</div>
                  <div>45.77.21.90</div>
                  <div>10.24.1.18</div>
                  <div className="text-red-400">Escalated</div>
                </div>
                <div className="grid grid-cols-6 bg-zinc-900 px-4 py-3">
                  <div>14:30:11</div>
                  <div>
                    <span className="rounded-full bg-orange-500/15 text-orange-400 text-xs leading-4 px-2 py-1">
                      High
                    </span>
                  </div>
                  <div>WAF Anomaly</div>
                  <div>198.51.100.24</div>
                  <div>10.24.7.66</div>
                  <div className="text-emerald-400">Mitigated</div>
                </div>
                <div className="grid grid-cols-6 bg-zinc-800/40 px-4 py-3">
                  <div>14:29:42</div>
                  <div>
                    <span className="rounded-full bg-yellow-500/15 text-yellow-400 text-xs leading-4 px-2 py-1">
                      Medium
                    </span>
                  </div>
                  <div>DNS Tunneling</div>
                  <div>172.16.44.9</div>
                  <div>10.24.5.14</div>
                  <div className="text-yellow-400">Monitoring</div>
                </div>
                <div className="grid grid-cols-6 bg-zinc-900 px-4 py-3">
                  <div>14:29:08</div>
                  <div>
                    <span className="rounded-full bg-orange-500/15 text-orange-400 text-xs leading-4 px-2 py-1">
                      High
                    </span>
                  </div>
                  <div>Credential Stuffing</div>
                  <div>104.21.33.7</div>
                  <div>10.24.3.22</div>
                  <div className="text-emerald-400">Blocked</div>
                </div>
                <div className="grid grid-cols-6 bg-zinc-800/40 px-4 py-3">
                  <div>14:28:31</div>
                  <div>
                    <span className="rounded-full bg-red-500/15 text-red-400 text-xs leading-4 px-2 py-1">
                      Critical
                    </span>
                  </div>
                  <div>Ransomware Behavior</div>
                  <div>66.249.66.1</div>
                  <div>10.24.6.51</div>
                  <div className="text-red-400">Quarantined</div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-[0_0_30px_rgba(59,130,246,0.12)] rounded-2xl bg-zinc-900/80 border-white/10 border-1 border-solid p-4">
            <div className="flex mb-4 justify-between items-center">
              <div>
                <div className="font-semibold text-lg leading-7">
                  AI Threat Intelligence Summary
                </div>
                <div className="text-[#9f9fa9] text-sm leading-5">
                  Narrative analysis and recommended actions
                </div>
              </div>
              <Bot className="size-5 text-[#155dfc]" />
            </div>
            <div className="space-y-4 bg-[linear-gradient(180deg,#10183a_0%,#0f1535_100%)] rounded-2xl border-white/10 border-1 border-solid p-4">
              <div className="flex items-start gap-3">
                <div className="size-12 rounded-2xl bg-[#155dfc]/15 text-[#155dfc] flex justify-center items-center">
                  <BotMessageSquare className="size-6" />
                </div>
                <div className="space-y-2">
                  <div className="text-[#9f9fa9] text-sm leading-6">
                    AI analysis indicates coordinated multi-stage
                    intrusion activity targeting identity infrastructure
                    and cloud workloads. Primary indicators align with
                    credential theft, lateral movement, and staged
                    exfiltration attempts. Immediate containment actions
                    are recommended across affected endpoints and
                    privileged accounts.
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="font-medium text-sm leading-5">
                      Confidence
                    </div>
                    <div className="rounded-full bg-zinc-800 w-48 h-2">
                      <div className="w-[87%] bg-[linear-gradient(90deg,#3b82f6_0%,#22c55e_100%)] rounded-full h-2" />
                    </div>
                    <div className="text-[#9f9fa9] text-sm leading-5">
                      87%
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-3">
                <div className="rounded-xl bg-zinc-900 border-white/10 border-1 border-solid p-3">
                  <div className="font-medium text-sm leading-5 flex justify-between items-center">
                    <span>APT29</span>
                    <span className="text-[#9f9fa9]">RU</span>
                  </div>
                  <div className="text-[#9f9fa9] text-xs leading-4 mt-2">
                    TTPs: spear phishing, OAuth abuse, token theft
                  </div>
                </div>
                <div className="rounded-xl bg-zinc-900 border-white/10 border-1 border-solid p-3">
                  <div className="font-medium text-sm leading-5 flex justify-between items-center">
                    <span>FIN7</span>
                    <span className="text-[#9f9fa9]">US/EU</span>
                  </div>
                  <div className="text-[#9f9fa9] text-xs leading-4 mt-2">
                    TTPs: malware loaders, persistence, exfiltration
                  </div>
                </div>
                <div className="rounded-xl bg-zinc-900 border-white/10 border-1 border-solid p-3">
                  <div className="font-medium text-sm leading-5 flex justify-between items-center">
                    <span>Lazarus Group</span>
                    <span className="text-[#9f9fa9]">KP</span>
                  </div>
                  <div className="text-[#9f9fa9] text-xs leading-4 mt-2">
                    TTPs: supply-chain intrusion, credential harvesting
                  </div>
                </div>
              </div>
              <button className="inline-flex shadow-[0_0_24px_rgba(59,130,246,0.35)] font-medium rounded-xl bg-[#155dfc] text-[#1c398e] text-sm leading-5 px-4 py-3 justify-center items-center gap-2">
                <Sparkles className="size-4" />
                Run AI Investigation
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
