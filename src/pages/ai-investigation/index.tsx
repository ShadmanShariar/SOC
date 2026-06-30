
import {
  BookmarkPlus,
  Bot,
  BotMessageSquare,
  Check,
  FileDown,
  Fingerprint,
  Map,
  ShieldAlert,
  Siren,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

export default function AiInvestigationPage() {
  return (
    <div className="flex flex-col flex-1">
      <main className="p-6 flex-1">
        <div className="grid grid-cols-12 gap-4 h-full">
          <section className="col-span-8 flex flex-col gap-4">
            <div className="shadow-[0_0_30px_rgba(59,130,246,0.12)] rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid p-6">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="font-medium rounded-full bg-red-500/10 text-red-400 text-xs leading-4 border-red-500/30 border-1 border-solid px-3 py-1">
                      Critical
                    </div>
                    <div className="font-medium rounded-full bg-zinc-800 text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid px-3 py-1">
                      APT29
                    </div>
                    <div className="font-medium rounded-full bg-zinc-800 text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid px-3 py-1">
                      Identity Infrastructure
                    </div>
                  </div>
                  <div className="leading-tight font-semibold text-3xl leading-9">
                    AI Threat Intelligence Investigation
                  </div>
                  <div className="max-w-3xl text-[#9f9fa9] text-sm leading-6">
                    Coordinated multi-stage intrusion activity targeting
                    identity infrastructure and cloud workloads. Primary
                    indicators align with credential theft, lateral
                    movement, and staged exfiltration attempts. Immediate
                    containment actions are recommended across affected
                    endpoints and privileged accounts.
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <div className="rounded-full bg-zinc-800 text-[#9f9fa9] text-sm leading-5 border-white/10 border-1 border-solid px-3 py-2">
                    Case Confidence 87%
                  </div>
                  <div className="flex gap-2">
                    <button className="inline-flex shadow-[0_0_24px_rgba(59,130,246,0.35)] font-medium rounded-xl bg-[#155dfc] text-[#1c398e] text-sm leading-5 px-4 py-3 justify-center items-center gap-2">
                      <Zap className="size-4" />
                      Create Incident
                    </button>
                    <button className="inline-flex font-medium rounded-xl bg-zinc-900 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3 justify-center items-center gap-2">
                      <BookmarkPlus className="size-4" />
                      Add to Watchlist
                    </button>
                    <button className="inline-flex font-medium rounded-xl bg-zinc-900 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3 justify-center items-center gap-2">
                      <FileDown className="size-4" />
                      Export Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[#9f9fa9] text-sm leading-5">
                      Confidence Score
                    </div>
                    <div className="font-semibold text-2xl leading-8 mt-2">
                      87%
                    </div>
                  </div>
                  <Sparkles className="size-5 text-[#155dfc]" />
                </div>
                <div className="rounded-full bg-zinc-800 mt-4 h-2">
                  <div className="w-[87%] bg-[linear-gradient(90deg,#3b82f6_0%,#22c55e_100%)] rounded-full h-2" />
                </div>
                <div className="text-[#9f9fa9] text-xs leading-4 mt-3">
                  High-confidence correlation across endpoint, identity,
                  and cloud telemetry.
                </div>
              </div>
              <div className="rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[#9f9fa9] text-sm leading-5">
                      IOC Coverage
                    </div>
                    <div className="font-semibold text-2xl leading-8 mt-2">
                      14
                    </div>
                  </div>
                  <Target className="size-5 text-[#155dfc]" />
                </div>
                <div className="grid grid-cols-2 text-xs leading-4 mt-4 gap-2">
                  <div className="rounded-xl bg-zinc-800 text-[#9f9fa9] border-white/10 border-1 border-solid px-3 py-2">
                    5 IPs
                  </div>
                  <div className="rounded-xl bg-zinc-800 text-[#9f9fa9] border-white/10 border-1 border-solid px-3 py-2">
                    3 Domains
                  </div>
                  <div className="rounded-xl bg-zinc-800 text-[#9f9fa9] border-white/10 border-1 border-solid px-3 py-2">
                    4 Hashes
                  </div>
                  <div className="rounded-xl bg-zinc-800 text-[#9f9fa9] border-white/10 border-1 border-solid px-3 py-2">
                    2 URLs
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[#9f9fa9] text-sm leading-5">
                      Containment Readiness
                    </div>
                    <div className="font-semibold text-2xl leading-8 mt-2">
                      92%
                    </div>
                  </div>
                  <ShieldAlert className="size-5 text-emerald-400" />
                </div>
                <div className="rounded-full bg-zinc-800 mt-4 h-2">
                  <div className="w-[92%] rounded-full bg-emerald-400 h-2" />
                </div>
                <div className="text-[#9f9fa9] text-xs leading-4 mt-3">
                  Recommended actions are pre-mapped to playbooks and
                  response owners.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-lg leading-7">
                      Indicators of Compromise
                    </div>
                    <div className="text-[#9f9fa9] text-sm leading-5">
                      Validated artifacts and enrichment
                    </div>
                  </div>
                  <Fingerprint className="size-5 text-[#155dfc]" />
                </div>
                <div className="space-y-3 mt-4">
                  <div className="rounded-xl bg-zinc-800 border-white/10 border-1 border-solid p-4">
                    <div className="text-sm leading-5 flex justify-between items-center">
                      <span className="font-medium">185.22.44.19</span>
                      <span className="rounded-full bg-red-500/10 text-red-400 text-xs leading-4 px-2 py-1">
                        C2
                      </span>
                    </div>
                    <div className="text-[#9f9fa9] text-xs leading-4 mt-2">
                      Observed in privilege escalation and beaconing
                      sequence.
                    </div>
                  </div>
                  <div className="rounded-xl bg-zinc-800 border-white/10 border-1 border-solid p-4">
                    <div className="text-sm leading-5 flex justify-between items-center">
                      <span className="font-medium">91.204.12.7</span>
                      <span className="rounded-full bg-orange-500/10 text-orange-400 text-xs leading-4 px-2 py-1">
                        Auth
                      </span>
                    </div>
                    <div className="text-[#9f9fa9] text-xs leading-4 mt-2">
                      Suspicious login source with impossible travel
                      correlation.
                    </div>
                  </div>
                  <div className="rounded-xl bg-zinc-800 border-white/10 border-1 border-solid p-4">
                    <div className="text-sm leading-5 flex justify-between items-center">
                      <span className="font-medium">203.0.113.88</span>
                      <span className="rounded-full bg-yellow-500/10 text-yellow-400 text-xs leading-4 px-2 py-1">
                        Beacon
                      </span>
                    </div>
                    <div className="text-[#9f9fa9] text-xs leading-4 mt-2">
                      Malware beacon pattern matched against known loader
                      family.
                    </div>
                  </div>
                  <div className="rounded-xl bg-zinc-800 border-white/10 border-1 border-solid p-4">
                    <div className="text-sm leading-5 flex justify-between items-center">
                      <span className="font-medium">66.249.66.1</span>
                      <span className="rounded-full bg-red-500/10 text-red-400 text-xs leading-4 px-2 py-1">
                        Exfil
                      </span>
                    </div>
                    <div className="text-[#9f9fa9] text-xs leading-4 mt-2">
                      Ransomware behavior with staged archive transfer.
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-lg leading-7">
                      Containment Recommendations
                    </div>
                    <div className="text-[#9f9fa9] text-sm leading-5">
                      Priority actions for immediate response
                    </div>
                  </div>
                  <Siren className="size-5 text-[#155dfc]" />
                </div>
                <div className="space-y-3 mt-4">
                  <div className="rounded-xl bg-zinc-800 border-white/10 border-1 border-solid flex p-4 items-start gap-3">
                    <div className="size-7 rounded-full bg-[#155dfc]/20 text-[#155dfc] flex mt-0.5 justify-center items-center">
                      <Check className="size-4" />
                    </div>
                    <div>
                      <div className="font-medium text-sm leading-5">
                        Isolate affected endpoints
                      </div>
                      <div className="text-[#9f9fa9] text-xs leading-4">
                        Quarantine WIN-SRV-042 and adjacent hosts with
                        suspicious lateral movement.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-zinc-800 border-white/10 border-1 border-solid flex p-4 items-start gap-3">
                    <div className="size-7 rounded-full bg-[#155dfc]/20 text-[#155dfc] flex mt-0.5 justify-center items-center">
                      <Check className="size-4" />
                    </div>
                    <div>
                      <div className="font-medium text-sm leading-5">
                        Disable compromised identities
                      </div>
                      <div className="text-[#9f9fa9] text-xs leading-4">
                        Revoke active sessions, reset privileged
                        credentials, and enforce MFA revalidation.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-zinc-800 border-white/10 border-1 border-solid flex p-4 items-start gap-3">
                    <div className="size-7 rounded-full bg-[#155dfc]/20 text-[#155dfc] flex mt-0.5 justify-center items-center">
                      <Check className="size-4" />
                    </div>
                    <div>
                      <div className="font-medium text-sm leading-5">
                        Block IOC set at perimeter
                      </div>
                      <div className="text-[#9f9fa9] text-xs leading-4">
                        Apply firewall, DNS, proxy, and EDR blocks for all
                        confirmed indicators.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-zinc-800 border-white/10 border-1 border-solid flex p-4 items-start gap-3">
                    <div className="size-7 rounded-full bg-[#155dfc]/20 text-[#155dfc] flex mt-0.5 justify-center items-center">
                      <Check className="size-4" />
                    </div>
                    <div>
                      <div className="font-medium text-sm leading-5">
                        Preserve forensic evidence
                      </div>
                      <div className="text-[#9f9fa9] text-xs leading-4">
                        Capture memory, volatile logs, and endpoint
                        artifacts before remediation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="col-span-4 flex flex-col gap-4">
            <div className="shadow-[0_0_30px_rgba(59,130,246,0.12)] rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid p-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-lg leading-7">
                    AI Investigation Narrative
                  </div>
                  <div className="text-[#9f9fa9] text-sm leading-5">
                    Correlated findings and next-step guidance
                  </div>
                </div>
                <Bot className="size-5 text-[#155dfc]" />
              </div>
              <div className="space-y-4 bg-[linear-gradient(180deg,#10183a_0%,#0f1535_100%)] rounded-2xl border-white/10 border-1 border-solid mt-4 p-4">
                <div className="flex items-start gap-3">
                  <div className="size-12 rounded-2xl bg-[#155dfc]/15 text-[#155dfc] flex justify-center items-center">
                    <BotMessageSquare className="size-6" />
                  </div>
                  <div className="space-y-3">
                    <div className="text-[#9f9fa9] text-sm leading-6">
                      The intrusion pattern is consistent with a
                      credential-led campaign that escalated privileges,
                      established persistence, and attempted staged
                      exfiltration. Identity telemetry, endpoint beacons,
                      and cloud access anomalies converge on the same
                      actor cluster.
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
                      Spear phishing, OAuth abuse, token theft
                    </div>
                  </div>
                  <div className="rounded-xl bg-zinc-900 border-white/10 border-1 border-solid p-3">
                    <div className="font-medium text-sm leading-5 flex justify-between items-center">
                      <span>FIN7</span>
                      <span className="text-[#9f9fa9]">US/EU</span>
                    </div>
                    <div className="text-[#9f9fa9] text-xs leading-4 mt-2">
                      Malware loaders, persistence, exfiltration
                    </div>
                  </div>
                  <div className="rounded-xl bg-zinc-900 border-white/10 border-1 border-solid p-3">
                    <div className="font-medium text-sm leading-5 flex justify-between items-center">
                      <span>Lazarus Group</span>
                      <span className="text-[#9f9fa9]">KP</span>
                    </div>
                    <div className="text-[#9f9fa9] text-xs leading-4 mt-2">
                      Supply-chain intrusion, credential harvesting
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid p-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-lg leading-7">{`MITRE ATT&CK Mapping`}</div>
                  <div className="text-[#9f9fa9] text-sm leading-5">
                    Observed tactics and technique coverage
                  </div>
                </div>
                <Map className="size-5 text-[#155dfc]" />
              </div>
              <div className="grid grid-cols-3 text-xs leading-4 mt-4 gap-3">
                <div className="rounded-xl bg-zinc-800 border-white/10 border-1 border-solid p-3">
                  <div className="font-medium">Initial Access</div>
                  <div className="text-[#9f9fa9] mt-2">
                    Phishing, valid accounts
                  </div>
                </div>
                <div className="rounded-xl bg-zinc-800 border-white/10 border-1 border-solid p-3">
                  <div className="font-medium">Execution</div>
                  <div className="text-[#9f9fa9] mt-2">
                    PowerShell, signed binary proxy
                  </div>
                </div>
                <div className="rounded-xl bg-zinc-800 border-white/10 border-1 border-solid p-3">
                  <div className="font-medium">Persistence</div>
                  <div className="text-[#9f9fa9] mt-2">
                    Scheduled task, registry run key
                  </div>
                </div>
                <div className="rounded-xl bg-zinc-800 border-white/10 border-1 border-solid p-3">
                  <div className="font-medium">Privilege Escalation</div>
                  <div className="text-[#9f9fa9] mt-2">
                    Token manipulation
                  </div>
                </div>
                <div className="rounded-xl bg-zinc-800 border-white/10 border-1 border-solid p-3">
                  <div className="font-medium">Defense Evasion</div>
                  <div className="text-[#9f9fa9] mt-2">
                    Log tampering, obfuscation
                  </div>
                </div>
                <div className="rounded-xl bg-zinc-800 border-white/10 border-1 border-solid p-3">
                  <div className="font-medium">Exfiltration</div>
                  <div className="text-[#9f9fa9] mt-2">
                    Archive via HTTPS
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid p-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-lg leading-7">
                    Action Center
                  </div>
                  <div className="text-[#9f9fa9] text-sm leading-5">
                    Operational response controls
                  </div>
                </div>
                <Workflow className="size-5 text-[#155dfc]" />
              </div>
              <div className="flex mt-4 flex-col gap-3">
                <button className="inline-flex shadow-[0_0_24px_rgba(59,130,246,0.35)] font-medium rounded-xl bg-[#155dfc] text-[#1c398e] text-sm leading-5 px-4 py-3 justify-center items-center gap-2">
                  <Zap className="size-4" />
                  Create Incident
                </button>
                <button className="inline-flex font-medium rounded-xl bg-zinc-900 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3 justify-center items-center gap-2">
                  <BookmarkPlus className="size-4" />
                  Add to Watchlist
                </button>
                <button className="inline-flex font-medium rounded-xl bg-zinc-900 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3 justify-center items-center gap-2">
                  <FileDown className="size-4" />
                  Export Report
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
