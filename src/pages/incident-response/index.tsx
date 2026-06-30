
import {
  ArrowUpDown,
  BellRing,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Circle,
  Clock,
  Cpu,
  FileSearch,
  FolderArchive,
  Gauge,
  GitCommitVertical,
  Globe,
  Hash,
  KeyRound,
  ListChecks,
  LoaderCircle,
  MemoryStick,
  MessagesSquare,
  MoreVertical,
  Network,
  PlayCircle,
  Plus,
  ScanSearch,
  Send,
  Share2,
  ShieldAlert,
  ShieldOff,
  SlidersHorizontal,
  Timer,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function IncidentResponsePage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-8 py-4 items-center gap-4">
        <div className="flex flex-col">
          <h1 className="font-semibold text-xl leading-7 tracking-tight">
            Incident Response Center
          </h1>
          <p className="text-[#9f9fa9] text-xs leading-4">{`Active investigation & automated case management`}</p>
        </div>
        <div className="rounded-full bg-zinc-800 border-white/10 border-1 border-solid flex ml-6 p-1 items-center gap-1">
          <button className="transition-colors font-medium rounded-full text-[#9f9fa9] text-xs leading-4 px-4 h-8">
            All
          </button>
          <button className="shadow-[0_0_14px_oklch(0.546_0.245_262.881/0.5)] font-semibold rounded-full bg-[#155dfc] text-[#1c398e] text-xs leading-4 px-4 h-8">
            Open
          </button>
          <button className="transition-colors font-medium rounded-full text-[#9f9fa9] text-xs leading-4 px-4 h-8">
            Investigating
          </button>
          <button className="transition-colors font-medium rounded-full text-[#9f9fa9] text-xs leading-4 px-4 h-8">
            Contained
          </button>
          <button className="transition-colors font-medium rounded-full text-[#9f9fa9] text-xs leading-4 px-4 h-8">
            Resolved
          </button>
        </div>
        <div className="flex ml-auto items-center gap-3">
          <button className="transition-colors rounded-lg bg-zinc-800 text-[#9f9fa9] text-sm leading-5 border-white/10 border-1 border-solid flex px-3 items-center gap-2 h-9">
            <SlidersHorizontal className="size-4" />
            <span>Priority</span>
            <ChevronDown className="size-4" />
          </button>
          <button className="transition-colors rounded-lg bg-zinc-800 text-[#9f9fa9] text-sm leading-5 border-white/10 border-1 border-solid flex px-3 items-center gap-2 h-9">
            <Calendar className="size-4" />
            <span>Last 7 days</span>
            <ChevronDown className="size-4" />
          </button>
          <Button
            className="bg-zinc-800 text-neutral-50 border-white/10 border-0 border-solid gap-2 h-9"
            variant="outline"
          >
            <PlayCircle className="size-4" />
            Run Playbook
          </Button>
          <Button className="shadow-[0_0_18px_oklch(0.546_0.245_262.881/0.6)] bg-[#155dfc] text-[#1c398e] gap-2 h-9">
            <Plus className="size-4" />
            Create Incident
          </Button>
        </div>
      </div>
      <div className="min-h-0 flex p-6 flex-1 gap-6">
        <div className="w-[30%] min-w-0 flex flex-col gap-4">
          <div className="flex px-1 justify-between items-center">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-sm leading-5">
                Incident Queue
              </h2>
              <span className="rounded-full bg-zinc-800 text-[#9f9fa9] text-xs leading-4 px-2 py-0.5">
                8 active
              </span>
            </div>
            <ArrowUpDown className="size-4 text-[#9f9fa9]" />
          </div>
          <div className="overflow-y-auto flex pr-1 flex-col gap-3">
            <div className="relative shadow-[0_0_22px_oklch(0.546_0.245_262.881/0.35)] ring-1 ring-primary/30 rounded-xl bg-zinc-900 border-[#155dfc]/60 border-1 border-solid flex p-4 gap-3">
              <span className="rounded-full bg-[#ff6467] absolute left-0 inset-y-3 w-1" />
              <div className="flex pl-2 flex-col gap-2 w-full">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[#155dfc] text-xs leading-4">
                    INC-4821
                  </span>
                  <span className="font-semibold uppercase rounded-full bg-[#ff6467]/15 text-[#ff6467] text-[10px] px-2 py-0.5">
                    Critical
                  </span>
                </div>
                <h3 className="leading-tight font-semibold text-sm leading-5">
                  Ransomware Deployment Attempt
                </h3>
                <p className="line-clamp-1 text-[#9f9fa9] text-xs leading-4">
                  Encryptor staged on 3 endpoints via compromised RDP
                  session.
                </p>
                <div className="flex pt-1 justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      alt="K. Park"
                      className="size-5 object-cover rounded-full"
                      data-authorname="Craig Tidball"
                      data-authorurl="https://unsplash.com/@devonshiremedia"
                      data-blurhash="L44LUYt700M{xuj[M{WB4nWB_3xu"
                      data-photoid="lGH9ciIcK7I"
                      src="https://images.unsplash.com/photo-1768247695726-022586dea3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90JTIwd29tYW58ZW58MXwyfHx8MTc4MTUxMjkwMXww&ixlib=rb-4.1.0&q=80&w=400"
                    />
                    <span className="text-[#9f9fa9] text-xs leading-4">
                      K. Park
                    </span>
                  </div>
                  <div className="text-[#fe9a00] flex items-center gap-1">
                    <Timer className="size-3.5" />
                    <span className="font-medium text-xs leading-4">
                      2h 14m
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative transition-colors rounded-xl bg-zinc-900 border-white/10 border-1 border-solid flex p-4 gap-3">
              <span className="rounded-full bg-[#fe9a00] absolute left-0 inset-y-3 w-1" />
              <div className="flex pl-2 flex-col gap-2 w-full">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[#9f9fa9] text-xs leading-4">
                    INC-4818
                  </span>
                  <span className="font-semibold uppercase rounded-full bg-[#fe9a00]/15 text-[#fe9a00] text-[10px] px-2 py-0.5">
                    High
                  </span>
                </div>
                <h3 className="leading-tight font-semibold text-sm leading-5">
                  Lateral Movement Detected
                </h3>
                <p className="line-clamp-1 text-[#9f9fa9] text-xs leading-4">
                  SMB pivoting across finance subnet from host FIN-DC02.
                </p>
                <div className="flex pt-1 justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="size-5 font-semibold rounded-full bg-[#ad46ff]/30 text-[#ad46ff] text-[9px] flex justify-center items-center">
                      JM
                    </span>
                    <span className="text-[#9f9fa9] text-xs leading-4">
                      J. Mensah
                    </span>
                  </div>
                  <div className="text-[#9f9fa9] flex items-center gap-1">
                    <Timer className="size-3.5" />
                    <span className="text-xs leading-4">5h 40m</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative transition-colors rounded-xl bg-zinc-900 border-white/10 border-1 border-solid flex p-4 gap-3">
              <span className="rounded-full bg-[#fe9a00] absolute left-0 inset-y-3 w-1" />
              <div className="flex pl-2 flex-col gap-2 w-full">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[#9f9fa9] text-xs leading-4">
                    INC-4815
                  </span>
                  <span className="font-semibold uppercase rounded-full bg-[#fe9a00]/15 text-[#fe9a00] text-[10px] px-2 py-0.5">
                    High
                  </span>
                </div>
                <h3 className="leading-tight font-semibold text-sm leading-5">
                  Credential Stuffing Surge
                </h3>
                <p className="line-clamp-1 text-[#9f9fa9] text-xs leading-4">
                  12k failed auths against SSO portal from botnet range.
                </p>
                <div className="flex pt-1 justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="size-5 font-semibold rounded-full bg-[#00bc7d]/30 text-[#00bc7d] text-[9px] flex justify-center items-center">
                      SL
                    </span>
                    <span className="text-[#9f9fa9] text-xs leading-4">
                      S. Lin
                    </span>
                  </div>
                  <div className="text-[#fe9a00] flex items-center gap-1">
                    <Timer className="size-3.5" />
                    <span className="font-medium text-xs leading-4">
                      3h 02m
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative transition-colors rounded-xl bg-zinc-900 border-white/10 border-1 border-solid flex p-4 gap-3">
              <span className="rounded-full bg-[#ff6467] absolute left-0 inset-y-3 w-1" />
              <div className="flex pl-2 flex-col gap-2 w-full">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[#9f9fa9] text-xs leading-4">
                    INC-4810
                  </span>
                  <span className="font-semibold uppercase rounded-full bg-[#ff6467]/15 text-[#ff6467] text-[10px] px-2 py-0.5">
                    Critical
                  </span>
                </div>
                <h3 className="leading-tight font-semibold text-sm leading-5">
                  Data Exfiltration via DNS
                </h3>
                <p className="line-clamp-1 text-[#9f9fa9] text-xs leading-4">
                  Beaconing to malicious resolver, 480MB tunneled out.
                </p>
                <div className="flex pt-1 justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="size-5 font-semibold rounded-full bg-[#ff2056]/30 text-[#ff2056] text-[9px] flex justify-center items-center">
                      RD
                    </span>
                    <span className="text-[#9f9fa9] text-xs leading-4">
                      R. Diaz
                    </span>
                  </div>
                  <div className="text-[#9f9fa9] flex items-center gap-1">
                    <Timer className="size-3.5" />
                    <span className="text-xs leading-4">6h 21m</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative transition-colors rounded-xl bg-zinc-900 border-white/10 border-1 border-solid flex p-4 gap-3">
              <span className="rounded-full bg-[#fe9a00] absolute left-0 inset-y-3 w-1" />
              <div className="flex pl-2 flex-col gap-2 w-full">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[#9f9fa9] text-xs leading-4">
                    INC-4807
                  </span>
                  <span className="font-semibold uppercase rounded-full bg-[#fe9a00]/15 text-[#fe9a00] text-[10px] px-2 py-0.5">
                    High
                  </span>
                </div>
                <h3 className="leading-tight font-semibold text-sm leading-5">
                  Privilege Escalation Alert
                </h3>
                <p className="line-clamp-1 text-[#9f9fa9] text-xs leading-4">
                  Service account added to Domain Admins unexpectedly.
                </p>
                <div className="flex pt-1 justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="size-5 font-semibold rounded-full bg-[#155dfc]/30 text-[#155dfc] text-[9px] flex justify-center items-center">
                      AR
                    </span>
                    <span className="text-[#9f9fa9] text-xs leading-4">
                      A. Reyes
                    </span>
                  </div>
                  <div className="text-[#9f9fa9] flex items-center gap-1">
                    <Timer className="size-3.5" />
                    <span className="text-xs leading-4">7h 55m</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative transition-colors rounded-xl bg-zinc-900 border-white/10 border-1 border-solid flex p-4 gap-3">
              <span className="rounded-full bg-[#fe9a00] absolute left-0 inset-y-3 w-1" />
              <div className="flex pl-2 flex-col gap-2 w-full">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[#9f9fa9] text-xs leading-4">
                    INC-4803
                  </span>
                  <span className="font-semibold uppercase rounded-full bg-[#fe9a00]/15 text-[#fe9a00] text-[10px] px-2 py-0.5">
                    High
                  </span>
                </div>
                <h3 className="leading-tight font-semibold text-sm leading-5">
                  Suspicious OAuth Grant
                </h3>
                <p className="line-clamp-1 text-[#9f9fa9] text-xs leading-4">
                  Unknown app granted mailbox.read across 40 accounts.
                </p>
                <div className="flex pt-1 justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="size-5 font-semibold rounded-full bg-[#00bc7d]/30 text-[#00bc7d] text-[9px] flex justify-center items-center">
                      KP
                    </span>
                    <span className="text-[#9f9fa9] text-xs leading-4">
                      K. Park
                    </span>
                  </div>
                  <div className="text-[#9f9fa9] flex items-center gap-1">
                    <Timer className="size-3.5" />
                    <span className="text-xs leading-4">9h 10m</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative transition-colors rounded-xl bg-zinc-900 border-white/10 border-1 border-solid flex p-4 gap-3">
              <span className="rounded-full bg-[#fe9a00] absolute left-0 inset-y-3 w-1" />
              <div className="flex pl-2 flex-col gap-2 w-full">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[#9f9fa9] text-xs leading-4">
                    INC-4799
                  </span>
                  <span className="font-semibold uppercase rounded-full bg-[#fe9a00]/15 text-[#fe9a00] text-[10px] px-2 py-0.5">
                    High
                  </span>
                </div>
                <h3 className="leading-tight font-semibold text-sm leading-5">
                  Malicious Macro Email Campaign
                </h3>
                <p className="line-clamp-1 text-[#9f9fa9] text-xs leading-4">
                  Phishing wave delivering Emotet loader to HR dept.
                </p>
                <div className="flex pt-1 justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="size-5 font-semibold rounded-full bg-[#ff2056]/30 text-[#ff2056] text-[9px] flex justify-center items-center">
                      JM
                    </span>
                    <span className="text-[#9f9fa9] text-xs leading-4">
                      J. Mensah
                    </span>
                  </div>
                  <div className="text-[#9f9fa9] flex items-center gap-1">
                    <Timer className="size-3.5" />
                    <span className="text-xs leading-4">11h 30m</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative transition-colors rounded-xl bg-zinc-900 border-white/10 border-1 border-solid flex p-4 gap-3">
              <span className="rounded-full bg-[#1447e6] absolute left-0 inset-y-3 w-1" />
              <div className="flex pl-2 flex-col gap-2 w-full">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[#9f9fa9] text-xs leading-4">
                    INC-4795
                  </span>
                  <span className="font-semibold uppercase rounded-full bg-[#1447e6]/15 text-[#1447e6] text-[10px] px-2 py-0.5">
                    Medium
                  </span>
                </div>
                <h3 className="leading-tight font-semibold text-sm leading-5">
                  Anomalous Cloud API Calls
                </h3>
                <p className="line-clamp-1 text-[#9f9fa9] text-xs leading-4">
                  Unusual S3 list operations from new IAM key in eu-west.
                </p>
                <div className="flex pt-1 justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="size-5 font-semibold rounded-full bg-[#00bc7d]/30 text-[#00bc7d] text-[9px] flex justify-center items-center">
                      SL
                    </span>
                    <span className="text-[#9f9fa9] text-xs leading-4">
                      S. Lin
                    </span>
                  </div>
                  <div className="text-[#9f9fa9] flex items-center gap-1">
                    <Timer className="size-3.5" />
                    <span className="text-xs leading-4">14h 05m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[45%] min-w-0 flex flex-col gap-5">
          <Card className="backdrop-blur-md bg-zinc-900/70 border-white/10 border-0 border-solid p-6 gap-4">
            <CardHeader className="p-0 gap-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="size-11 ring-1 ring-destructive/40 rounded-xl bg-[#ff6467]/15 flex justify-center items-center">
                    <ShieldAlert className="size-6 text-[#ff6467]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[#155dfc] text-xs leading-4">
                        INC-4821
                      </span>
                      <span className="font-semibold uppercase rounded-full bg-[#ff6467]/15 text-[#ff6467] text-[10px] px-2 py-0.5">
                        Critical
                      </span>
                      <span className="font-semibold uppercase rounded-full bg-[#fe9a00]/15 text-[#fe9a00] text-[10px] px-2 py-0.5">
                        Investigating
                      </span>
                    </div>
                    <h2 className="font-semibold text-base leading-6">
                      Ransomware Deployment Attempt
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    className="size-9 bg-zinc-800 border-white/10 border-0 border-solid"
                    size="icon"
                    variant="outline"
                  >
                    <Share2 className="size-4" />
                  </Button>
                  <Button
                    className="size-9 bg-zinc-800 border-white/10 border-0 border-solid"
                    size="icon"
                    variant="outline"
                  >
                    <MoreVertical className="size-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 gap-0">
              <div className="grid grid-cols-4 rounded-lg bg-white/10 gap-px overflow-hidden">
                <div className="bg-zinc-900 flex p-3 flex-col gap-1">
                  <span className="uppercase text-[#9f9fa9] text-[10px] tracking-wide">
                    Assigned Team
                  </span>
                  <span className="font-medium text-sm leading-5">
                    CSIRT Alpha
                  </span>
                </div>
                <div className="bg-zinc-900 flex p-3 flex-col gap-1">
                  <span className="uppercase text-[#9f9fa9] text-[10px] tracking-wide">
                    Affected Assets
                  </span>
                  <span className="font-medium text-[#ff6467] text-sm leading-5">
                    3 Endpoints
                  </span>
                </div>
                <div className="bg-zinc-900 flex p-3 flex-col gap-1">
                  <span className="uppercase text-[#9f9fa9] text-[10px] tracking-wide">
                    Created
                  </span>
                  <span className="font-medium text-sm leading-5">
                    14:02 UTC
                  </span>
                </div>
                <div className="bg-zinc-900 flex p-3 flex-col gap-1">
                  <span className="uppercase text-[#9f9fa9] text-[10px] tracking-wide">
                    Updated
                  </span>
                  <span className="font-medium text-sm leading-5">
                    16:48 UTC
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="overflow-y-auto flex pr-1 flex-col flex-1 gap-5">
            <Card className="backdrop-blur-md bg-zinc-900/70 border-white/10 border-0 border-solid p-6 gap-4">
              <CardHeader className="p-0 gap-1">
                <div className="flex items-center gap-2">
                  <GitCommitVertical className="size-4 text-[#155dfc]" />
                  <CardTitle className="font-semibold text-sm leading-5">{`Incident Timeline & Investigation`}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 gap-0">
                <div className="relative pl-8">
                  <div className="bg-gradient-to-b from-chart2 via-primary to-border absolute left-[11px] inset-y-2 w-px" />
                  <div className="relative flex pb-5 gap-4">
                    <span className="size-6 ring-2 ring-chart2 rounded-full bg-[#00bc7d]/20 flex absolute -left-8 top-0.5 justify-center items-center">
                      <BellRing className="size-3 text-[#00bc7d]" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm leading-5">
                          Initial Alert Triggered
                        </span>
                        <span className="text-[#9f9fa9] text-[10px]">
                          14:02:11
                        </span>
                      </div>
                      <p className="text-[#9f9fa9] text-xs leading-4">
                        EDR flagged suspicious encryption behavior on
                        WIN-FS04.
                        <span className="text-[#00bc7d]">System</span>
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-5 gap-4">
                    <span className="size-6 ring-2 ring-chart2 rounded-full bg-[#00bc7d]/20 flex absolute -left-8 top-0.5 justify-center items-center">
                      <Cpu className="size-3 text-[#00bc7d]" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm leading-5">
                          Automated Triage Completed
                        </span>
                        <span className="text-[#9f9fa9] text-[10px]">
                          14:02:43
                        </span>
                      </div>
                      <p className="text-[#9f9fa9] text-xs leading-4">
                        AI engine scored severity 9.4 and clustered 6
                        related alerts.
                        <span className="text-[#00bc7d]">SentinelAI</span>
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-5 gap-4">
                    <span className="size-6 ring-2 ring-chart2 rounded-full bg-[#00bc7d]/20 flex absolute -left-8 top-0.5 justify-center items-center">
                      <UserCheck className="size-3 text-[#00bc7d]" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm leading-5">
                          Analyst Assigned
                        </span>
                        <span className="text-[#9f9fa9] text-[10px]">
                          14:05:20
                        </span>
                      </div>
                      <p className="text-[#9f9fa9] text-xs leading-4">
                        K. Park took ownership and opened investigation
                        case.
                        <span className="text-[#155dfc]">Analyst</span>
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-5 gap-4">
                    <span className="size-6 ring-2 ring-chart2 rounded-full bg-[#00bc7d]/20 flex absolute -left-8 top-0.5 justify-center items-center">
                      <ShieldOff className="size-3 text-[#00bc7d]" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm leading-5">
                          Endpoint Isolated
                        </span>
                        <span className="text-[#9f9fa9] text-[10px]">
                          14:11:08
                        </span>
                      </div>
                      <p className="text-[#9f9fa9] text-xs leading-4">
                        WIN-FS04 network-isolated via automated
                        containment action.
                        <span className="text-[#00bc7d]">Playbook</span>
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-5 gap-4">
                    <span className="size-6 ring-2 ring-chart2 rounded-full bg-[#00bc7d]/20 flex absolute -left-8 top-0.5 justify-center items-center">
                      <FileSearch className="size-3 text-[#00bc7d]" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm leading-5">
                          Malware Sample Extracted
                        </span>
                        <span className="text-[#9f9fa9] text-[10px]">
                          14:24:55
                        </span>
                      </div>
                      <p className="text-[#9f9fa9] text-xs leading-4">
                        Binary lockbit.enc.exe quarantined and sent to
                        sandbox.
                        <span className="text-[#155dfc]">Analyst</span>
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-5 gap-4">
                    <span className="size-6 ring-2 ring-primary shadow-[0_0_12px_oklch(0.546_0.245_262.881/0.6)] rounded-full bg-[#155dfc]/20 flex absolute -left-8 top-0.5 justify-center items-center">
                      <Globe className="size-3 text-[#155dfc]" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm leading-5">
                          Threat Intel Enrichment
                        </span>
                        <span className="text-[#9f9fa9] text-[10px]">
                          14:38:12
                        </span>
                      </div>
                      <p className="text-[#9f9fa9] text-xs leading-4">
                        IOCs matched LockBit 3.0 affiliate cluster
                        (TA-0511).
                        <span className="text-[#00bc7d]">SentinelAI</span>
                      </p>
                    </div>
                  </div>
                  <div className="relative flex gap-4">
                    <span className="size-6 ring-2 ring-chart3 animate-pulse rounded-full bg-[#fe9a00]/20 flex absolute -left-8 top-0.5 justify-center items-center">
                      <Clock className="size-3 text-[#fe9a00]" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm leading-5">
                          Awaiting Containment Approval
                        </span>
                        <span className="text-[#9f9fa9] text-[10px]">
                          16:48:00
                        </span>
                      </div>
                      <p className="text-[#9f9fa9] text-xs leading-4">
                        Full subnet quarantine pending SOC lead sign-off.
                        <span className="text-[#fe9a00]">Pending</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-zinc-900/70 border-white/10 border-0 border-solid p-6 gap-4">
              <CardHeader className="p-0 gap-1">
                <div className="flex items-center gap-2">
                  <FolderArchive className="size-4 text-[#155dfc]" />
                  <CardTitle className="font-semibold text-sm leading-5">{`Evidence & Artifacts`}</CardTitle>
                  <span className="text-[#9f9fa9] text-xs leading-4 ml-auto">
                    4 collected
                  </span>
                </div>
              </CardHeader>
              <CardContent className="grid grid-cols-2 p-0 gap-3">
                <div className="rounded-lg bg-zinc-800 border-white/10 border-1 border-solid flex p-3 flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Hash className="size-4 text-[#ad46ff]" />
                    <span className="font-medium text-xs leading-4">
                      File Hash (SHA-256)
                    </span>
                  </div>
                  <span className="truncate font-mono text-[#9f9fa9] text-[11px]">
                    a3f5c9e1b7d2...8f4a02
                  </span>
                  <Button
                    className="bg-zinc-900 text-xs leading-4 border-white/10 border-0 border-solid mt-1 h-7"
                    size="sm"
                    variant="outline"
                  >
                    <ScanSearch className="size-3.5 mr-1" />
                    Analyze
                  </Button>
                </div>
                <div className="rounded-lg bg-zinc-800 border-white/10 border-1 border-solid flex p-3 flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Network className="size-4 text-[#00bc7d]" />
                    <span className="font-medium text-xs leading-4">
                      Network PCAP
                    </span>
                  </div>
                  <span className="truncate font-mono text-[#9f9fa9] text-[11px]">
                    capture_fs04.pcap • 14MB
                  </span>
                  <Button
                    className="bg-zinc-900 text-xs leading-4 border-white/10 border-0 border-solid mt-1 h-7"
                    size="sm"
                    variant="outline"
                  >
                    <ScanSearch className="size-3.5 mr-1" />
                    Analyze
                  </Button>
                </div>
                <div className="rounded-lg bg-zinc-800 border-white/10 border-1 border-solid flex p-3 flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <MemoryStick className="size-4 text-[#fe9a00]" />
                    <span className="font-medium text-xs leading-4">
                      Memory Dump
                    </span>
                  </div>
                  <span className="truncate font-mono text-[#9f9fa9] text-[11px]">
                    winfs04_mem.raw • 8GB
                  </span>
                  <Button
                    className="bg-zinc-900 text-xs leading-4 border-white/10 border-0 border-solid mt-1 h-7"
                    size="sm"
                    variant="outline"
                  >
                    <ScanSearch className="size-3.5 mr-1" />
                    Analyze
                  </Button>
                </div>
                <div className="rounded-lg bg-zinc-800 border-white/10 border-1 border-solid flex p-3 flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <KeyRound className="size-4 text-[#ff2056]" />
                    <span className="font-medium text-xs leading-4">
                      Registry Key
                    </span>
                  </div>
                  <span className="truncate font-mono text-[#9f9fa9] text-[11px]">
                    HKLM\...\Run\svc_x
                  </span>
                  <Button
                    className="bg-zinc-900 text-xs leading-4 border-white/10 border-0 border-solid mt-1 h-7"
                    size="sm"
                    variant="outline"
                  >
                    <ScanSearch className="size-3.5 mr-1" />
                    Analyze
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="w-[25%] min-w-0 flex flex-col gap-5">
          <Card className="backdrop-blur-md bg-zinc-900/70 border-white/10 border-0 border-solid p-6 gap-4">
            <CardHeader className="p-0 gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ListChecks className="size-4 text-[#155dfc]" />
                  <CardTitle className="font-semibold text-sm leading-5">
                    Response Playbook
                  </CardTitle>
                </div>
                <span className="font-semibold rounded-full bg-[#00bc7d]/15 text-[#00bc7d] text-[10px] px-2 py-0.5">
                  Active
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#9f9fa9] text-xs leading-4">
                  Ransomware Response v2.1
                </span>
                <span className="font-medium text-[#155dfc] text-xs leading-4">
                  5/8
                </span>
              </div>
              <div className="rounded-full bg-zinc-800 w-full h-1.5 overflow-hidden">
                <div className="w-[62%] bg-gradient-to-r from-primary to-chart2 rounded-full h-full" />
              </div>
            </CardHeader>
            <CardContent className="p-0 gap-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 shrink-0 text-[#00bc7d] mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-medium text-xs leading-4">{`Detect & Classify`}</span>
                  <span className="text-[#9f9fa9] text-[10px]">
                    Severity scored 9.4 by AI
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 shrink-0 text-[#00bc7d] mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-medium text-xs leading-4">
                    Isolate Endpoint
                  </span>
                  <span className="text-[#9f9fa9] text-[10px]">
                    WIN-FS04 quarantined
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 shrink-0 text-[#00bc7d] mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-medium text-xs leading-4">
                    Block IOCs
                  </span>
                  <span className="text-[#9f9fa9] text-[10px]">
                    6 hashes pushed to firewall
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 shrink-0 text-[#00bc7d] mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-medium text-xs leading-4">
                    Collect Forensics
                  </span>
                  <span className="text-[#9f9fa9] text-[10px]">{`Memory & disk imaged`}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 shrink-0 text-[#00bc7d] mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-medium text-xs leading-4">
                    Threat Intel Lookup
                  </span>
                  <span className="text-[#9f9fa9] text-[10px]">
                    Matched LockBit 3.0
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <LoaderCircle className="size-4 shrink-0 animate-spin text-[#155dfc] mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-medium text-xs leading-4">
                    Reset Credentials
                  </span>
                  <span className="text-[#155dfc] text-[10px]">
                    Rotating 12 service accounts...
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Circle className="size-4 shrink-0 text-[#9f9fa9] mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-medium text-[#9f9fa9] text-xs leading-4">
                    Subnet Quarantine
                  </span>
                  <span className="text-[#9f9fa9] text-[10px]">
                    Pending lead approval
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Circle className="size-4 shrink-0 text-[#9f9fa9] mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-medium text-[#9f9fa9] text-xs leading-4">{`Eradicate & Recover`}</span>
                  <span className="text-[#9f9fa9] text-[10px]">
                    Restore from clean backup
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-md bg-zinc-900/70 border-white/10 border-0 border-solid p-6 flex-1 gap-4">
            <CardHeader className="p-0 gap-1">
              <div className="flex items-center gap-2">
                <MessagesSquare className="size-4 text-[#155dfc]" />
                <CardTitle className="font-semibold text-sm leading-5">
                  Collaboration
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex p-0 flex-col gap-4">
              <div className="flex gap-2">
                <img
                  alt="K. Park"
                  className="size-7 object-cover shrink-0 rounded-full"
                  data-authorname="Craig Tidball"
                  data-authorurl="https://unsplash.com/@devonshiremedia"
                  data-blurhash="L44LUYt700M{xuj[M{WB4nWB_3xu"
                  data-photoid="lGH9ciIcK7I"
                  src="https://images.unsplash.com/photo-1768247695726-022586dea3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90JTIwd29tYW58ZW58MXwyfHx8MTc4MTUxMjkwMXww&ixlib=rb-4.1.0&q=80&w=400"
                />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-xs leading-4">
                      K. Park
                    </span>
                    <span className="text-[#9f9fa9] text-[10px]">
                      16:21
                    </span>
                  </div>
                  <div className="rounded-lg bg-zinc-800 text-neutral-50 text-xs leading-4 p-2">
                    Endpoint isolated. Pulling memory image now for
                    volatility analysis.
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="size-7 shrink-0 font-semibold rounded-full bg-[#ad46ff]/30 text-[#ad46ff] text-[9px] flex justify-center items-center">
                  JM
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-xs leading-4">
                      J. Mensah
                    </span>
                    <span className="text-[#9f9fa9] text-[10px]">
                      16:34
                    </span>
                  </div>
                  <div className="rounded-lg bg-zinc-800 text-neutral-50 text-xs leading-4 p-2">
                    Confirmed LockBit 3.0 via intel feed. Escalating to IR
                    lead for subnet call.
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <img
                  alt="A. Reyes"
                  className="size-7 object-cover shrink-0 rounded-full"
                  data-authorname="Michael Proctor"
                  data-authorurl="https://unsplash.com/@mproctor"
                  data-blurhash="LB8p$2Nu0gxGIBf6xaNGEhoL-Uog"
                  data-photoid="kwKAvFdfWg8"
                  src="https://images.unsplash.com/photo-1714750977930-e7a7f4611257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90JTIwbWFufGVufDF8Mnx8fDE3ODE1MTI5MDF8MA&ixlib=rb-4.1.0&q=80&w=400"
                />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-xs leading-4">
                      A. Reyes
                    </span>
                    <span className="text-[#9f9fa9] text-[10px]">
                      16:47
                    </span>
                  </div>
                  <div className="rounded-lg bg-zinc-800 text-neutral-50 text-xs leading-4 p-2">
                    Approving containment in 5. Prep comms for affected
                    finance users.
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-zinc-800 border-white/10 border-1 border-solid flex mt-auto px-3 items-center gap-2 h-10">
                <input
                  className="bg-transparent outline-none text-xs leading-4 w-full"
                  placeholder="Message the team..."
                />
                <Button
                  className="size-7 shrink-0 bg-[#155dfc] text-[#1c398e]"
                  size="icon"
                >
                  <Send className="size-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-md bg-zinc-900/70 border-white/10 border-0 border-solid p-6 gap-3">
            <CardHeader className="p-0 gap-1">
              <div className="flex items-center gap-2">
                <Gauge className="size-4 text-[#155dfc]" />
                <CardTitle className="font-semibold text-sm leading-5">
                  Metrics
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex p-0 flex-col gap-3">
              <div className="flex flex-col gap-1">
                <div className="text-xs leading-4 flex justify-between items-center">
                  <span className="text-[#9f9fa9]">MTTR Progress</span>
                  <span className="font-medium">2h 46m / 4h SLA</span>
                </div>
                <div className="rounded-full bg-zinc-800 w-full h-1.5 overflow-hidden">
                  <div className="w-[69%] bg-gradient-to-r from-chart2 to-chart3 rounded-full h-full" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-zinc-800 flex p-3 flex-col gap-1">
                  <span className="uppercase text-[#9f9fa9] text-[10px]">
                    Escalations
                  </span>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="size-4 text-[#fe9a00]" />
                    <span className="font-semibold text-lg leading-7">
                      2
                    </span>
                  </div>
                </div>
                <div className="rounded-lg bg-zinc-800 flex p-3 flex-col gap-1">
                  <span className="uppercase text-[#9f9fa9] text-[10px]">
                    SLA Compliance
                  </span>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="size-4 text-[#00bc7d]" />
                    <span className="font-semibold text-[#00bc7d] text-lg leading-7">
                      96%
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div >
  );
}
