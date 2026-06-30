
import {
  Activity,
  AlertCircle,
  Bookmark,
  Check,
  ChevronDown,
  Clock,
  Code2,
  Crosshair,
  Database,
  Download,
  History,
  KeyRound,
  ListChecks,
  ListOrdered,
  Maximize,
  Monitor,
  Moon,
  Play,
  Plus,
  Radar as LucideRadar,
  Server,
  Share2,
  ShieldAlert,
  User,
  UserSearch,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar as RechartsRadar,
  RadarChart,
} from "recharts";

export default function ThreatHuntingPage() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex p-8 flex-col flex-1 gap-6">
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-lg bg-[#155dfc]/15 text-[#155dfc] flex justify-center items-center">
                <Crosshair className="size-5" />
              </div>
              <h2 className="font-semibold text-lg leading-7 tracking-tight">
                Threat Hunting Workbench
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-zinc-800 text-sm leading-5 border-white/15 border-1 border-solid flex px-3 justify-between items-center gap-2 w-56 h-9">
                <span className="text-[#9f9fa9] flex items-center gap-2">
                  <History className="size-4" />
                  Lateral Movement Hunt
                </span>
                <ChevronDown className="size-4 text-[#9f9fa9]" />
              </div>
              <Button className="bg-[#155dfc] text-[#1c398e]">
                <Plus className="size-4" />
                New Hunt
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-6">
            <div className="col-span-2 flex flex-col gap-6">
              <Card className="backdrop-blur-xl bg-zinc-900/60 border-white/10 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-1">
                  <CardTitle className="text-base leading-6 flex items-center gap-2">
                    <Code2 className="size-4 text-[#00bc7d]" />
                    Hunt Query Builder
                  </CardTitle>
                  <CardDescription className="text-xs leading-4">
                    KQL / SPL detection logic
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-4">
                  <div className="font-mono rounded-lg bg-zinc-950/80 text-[13px] leading-6 border-white/10 border-1 border-solid p-4">
                    <div>
                      <span className="text-[#9f9fa9]">
                              // detect lateral movement
                      </span>
                    </div>
                    <div>
                      <span className="text-[oklch(0.696_0.17_162.48)]">
                        SecurityEvent
                      </span>
                      <span className="text-neutral-50" />
                    </div>
                    <div>
                      <span className="text-[oklch(0.769_0.188_70.08)]">
                        | where
                      </span>
                      <span className="text-neutral-50">EventID</span>
                      <span className="text-[oklch(0.627_0.265_303.9)]">
                        in
                      </span>
                      <span className="text-neutral-50">(</span>
                      <span className="text-[#00bc7d]">4624</span>
                      <span className="text-neutral-50">,</span>
                      <span className="text-[#00bc7d]">4648</span>
                      <span className="text-neutral-50">)</span>
                    </div>
                    <div>
                      <span className="text-[oklch(0.769_0.188_70.08)]">
                        | where
                      </span>
                      <span className="text-neutral-50">LogonType</span>
                      <span className="text-[oklch(0.627_0.265_303.9)]">
                        ==
                      </span>
                      <span className="text-neutral-50" />
                      <span className="text-[#00bc7d]">3</span>
                    </div>
                    <div>
                      <span className="text-[oklch(0.769_0.188_70.08)]">
                        | summarize
                      </span>
                      <span className="text-neutral-50">Hosts =</span>
                      <span className="text-[#155dfc]">dcount</span>
                      <span className="text-neutral-50">(Computer)</span>
                    </div>
                    <div>
                      <span className="text-neutral-50 pl-4">
                        by Account,
                      </span>
                      <span className="text-[#155dfc]">bin</span>
                      <span className="text-neutral-50">
                        (TimeGenerated,
                      </span>
                      <span className="text-[#00bc7d]">1h</span>
                      <span className="text-neutral-50">)</span>
                    </div>
                    <div>
                      <span className="text-[oklch(0.769_0.188_70.08)]">
                        | where
                      </span>
                      <span className="text-neutral-50">Hosts</span>
                      <span className="text-[oklch(0.627_0.265_303.9)]">{`>`}</span>
                      <span className="text-neutral-50" />
                      <span className="text-[#00bc7d]">5</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="font-medium uppercase text-[#9f9fa9] text-xs leading-4 tracking-wide">
                      Query Parameters
                    </span>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#9f9fa9] text-xs leading-4">
                        Time Range
                      </label>
                      <div className="rounded-lg bg-zinc-800 text-sm leading-5 border-white/15 border-1 border-solid flex px-3 justify-between items-center h-9">
                        <span className="flex items-center gap-2">
                          <Clock className="size-4 text-[#9f9fa9]" />
                          Last 24h
                        </span>
                        <ChevronDown className="size-4 text-[#9f9fa9]" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#9f9fa9] text-xs leading-4">
                        Data Sources
                      </label>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-[#155dfc]/15 text-[#155dfc] gap-1">
                          <Check className="size-3" />
                          Windows Events
                        </Badge>
                        <Badge className="bg-[#155dfc]/15 text-[#155dfc] gap-1">
                          <Check className="size-3" />
                          Network Logs
                        </Badge>
                        <Badge className="bg-[#155dfc]/15 text-[#155dfc] gap-1">
                          <Check className="size-3" />
                          EDR
                        </Badge>
                        <Badge className="gap-1" variant="secondary">
                          <Plus className="size-3" />
                          Cloud Logs
                        </Badge>
                      </div>
                    </div>
                    <Button className="shadow-[0_0_24px_oklch(0.546_0.245_262.881/0.55)] bg-[#155dfc] text-[#1c398e] w-full">
                      <Play className="size-4" />
                      Run Hunt
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-xl bg-zinc-900/60 border-white/10 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-0">
                  <CardTitle className="text-base leading-6 flex items-center gap-2">
                    <Bookmark className="size-4 text-[#fe9a00]" />
                    Saved Hunts
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-2">
                  <div className="rounded-lg bg-zinc-800/40 border-white/10 border-1 border-solid flex px-3 py-2 justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-medium text-sm leading-5">
                        Lateral Movement Detection
                      </span>
                      <span className="text-[#9f9fa9] text-[11px]">
                        Last run 12m ago
                      </span>
                    </div>
                    <Badge className="bg-[#155dfc]/15 text-[#155dfc]">
                      47
                    </Badge>
                  </div>
                  <div className="rounded-lg bg-zinc-800/40 border-white/10 border-1 border-solid flex px-3 py-2 justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-medium text-sm leading-5">
                        Suspicious PowerShell
                      </span>
                      <span className="text-[#9f9fa9] text-[11px]">
                        Last run 1h ago
                      </span>
                    </div>
                    <Badge className="bg-[#155dfc]/15 text-[#155dfc]">
                      23
                    </Badge>
                  </div>
                  <div className="rounded-lg bg-zinc-800/40 border-white/10 border-1 border-solid flex px-3 py-2 justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-medium text-sm leading-5">
                        DNS Exfiltration
                      </span>
                      <span className="text-[#9f9fa9] text-[11px]">
                        Last run 3h ago
                      </span>
                    </div>
                    <Badge className="bg-[#155dfc]/15 text-[#155dfc]">
                      9
                    </Badge>
                  </div>
                  <div className="rounded-lg bg-zinc-800/40 border-white/10 border-1 border-solid flex px-3 py-2 justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-medium text-sm leading-5">
                        Credential Dumping
                      </span>
                      <span className="text-[#9f9fa9] text-[11px]">
                        Last run 5h ago
                      </span>
                    </div>
                    <Badge className="bg-[#155dfc]/15 text-[#155dfc]">
                      14
                    </Badge>
                  </div>
                  <div className="rounded-lg bg-zinc-800/40 border-white/10 border-1 border-solid flex px-3 py-2 justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-medium text-sm leading-5">
                        Anomalous Cloud API
                      </span>
                      <span className="text-[#9f9fa9] text-[11px]">
                        Last run 8h ago
                      </span>
                    </div>
                    <Badge className="bg-[#155dfc]/15 text-[#155dfc]">
                      5
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-3 flex flex-col gap-6">
              <div className="grid grid-cols-3 gap-4">
                <Card className="backdrop-blur-xl bg-zinc-900/60 border-white/10 border-0 border-solid p-4 gap-2">
                  <CardContent className="flex p-0 items-center gap-3">
                    <div className="size-10 rounded-lg bg-[#1447e6]/15 text-[#1447e6] flex justify-center items-center">
                      <Database className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#9f9fa9] text-xs leading-4">
                        Events Analyzed
                      </span>
                      <span className="font-semibold text-xl leading-7">
                        2.4M
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-xl bg-zinc-900/60 border-white/10 border-0 border-solid p-4 gap-2">
                  <CardContent className="flex p-0 items-center gap-3">
                    <div className="size-10 rounded-lg bg-[#fe9a00]/15 text-[#fe9a00] flex justify-center items-center">
                      <AlertCircle className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#9f9fa9] text-xs leading-4">
                        Anomalies Found
                      </span>
                      <span className="font-semibold text-xl leading-7">
                        47
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-xl bg-zinc-900/60 border-white/10 border-0 border-solid p-4 gap-2">
                  <CardContent className="flex p-0 items-center gap-3">
                    <div className="size-10 rounded-lg bg-[#ff6467]/15 text-[#ff6467] flex justify-center items-center">
                      <ShieldAlert className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#9f9fa9] text-xs leading-4">
                        Potential Threats
                      </span>
                      <span className="font-semibold text-[#ff6467] text-xl leading-7">
                        8
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card className="backdrop-blur-xl bg-zinc-900/60 border-white/10 border-0 border-solid p-6 gap-3">
                <CardHeader className="p-0 flex-row justify-between items-center gap-0">
                  <CardTitle className="text-base leading-6 flex items-center gap-2">
                    <Share2 className="size-4 text-[#00bc7d]" />
                    Hunt Results Visualization
                  </CardTitle>
                  <div className="flex items-center gap-1">
                    <Button
                      className="size-7"
                      size="icon"
                      variant="outline"
                    >
                      <ZoomIn className="size-3.5" />
                    </Button>
                    <Button
                      className="size-7"
                      size="icon"
                      variant="outline"
                    >
                      <ZoomOut className="size-3.5" />
                    </Button>
                    <Button
                      className="size-7"
                      size="icon"
                      variant="outline"
                    >
                      <Maximize className="size-3.5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative bg-[radial-gradient(circle_at_50%_50%,oklch(0.21_0.006_285.885),oklch(0.141_0.005_285.823))] rounded-lg border-white/10 border-1 border-solid h-56 overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full">
                      <line
                        stroke="oklch(0.704 0.191 22.216)"
                        strokeWidth="1.5"
                        x1="50%"
                        x2="22%"
                        y1="50%"
                        y2="30%"
                      />
                      <line
                        stroke="oklch(0.488 0.243 264.376 / 0.5)"
                        strokeWidth="1"
                        x1="50%"
                        x2="78%"
                        y1="50%"
                        y2="28%"
                      />
                      <line
                        stroke="oklch(0.704 0.191 22.216)"
                        strokeWidth="1.5"
                        x1="50%"
                        x2="25%"
                        y1="50%"
                        y2="75%"
                      />
                      <line
                        stroke="oklch(0.488 0.243 264.376 / 0.5)"
                        strokeWidth="1"
                        x1="50%"
                        x2="80%"
                        y1="50%"
                        y2="72%"
                      />
                      <line
                        stroke="oklch(0.488 0.243 264.376 / 0.3)"
                        strokeWidth="1"
                        x1="22%"
                        x2="25%"
                        y1="30%"
                        y2="75%"
                      />
                      <line
                        stroke="oklch(0.696 0.17 162.48 / 0.4)"
                        strokeWidth="1"
                        x1="78%"
                        x2="80%"
                        y1="28%"
                        y2="72%"
                      />
                      <line
                        stroke="oklch(0.696 0.17 162.48 / 0.5)"
                        strokeWidth="1"
                        x1="50%"
                        x2="50%"
                        y1="50%"
                        y2="18%"
                      />
                    </svg>
                    <div className="left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 animate-pulse ring-2 ring-destructive rounded-full bg-[#ff6467]/20 flex absolute justify-center items-center">
                      <Server className="size-5 text-[#ff6467]" />
                    </div>
                    <div className="left-[22%] top-[30%] size-9 -translate-x-1/2 -translate-y-1/2 ring-2 ring-chart1 rounded-full bg-[#1447e6]/20 flex absolute justify-center items-center">
                      <Monitor className="size-4 text-[#1447e6]" />
                    </div>
                    <div className="left-[78%] top-[28%] size-9 -translate-x-1/2 -translate-y-1/2 ring-2 ring-chart2 rounded-full bg-[#00bc7d]/20 flex absolute justify-center items-center">
                      <User className="size-4 text-[#00bc7d]" />
                    </div>
                    <div className="left-[25%] top-[75%] size-9 -translate-x-1/2 -translate-y-1/2 ring-2 ring-chart1 rounded-full bg-[#1447e6]/20 flex absolute justify-center items-center">
                      <Monitor className="size-4 text-[#1447e6]" />
                    </div>
                    <div className="left-[80%] top-[72%] size-9 -translate-x-1/2 -translate-y-1/2 ring-2 ring-chart2 rounded-full bg-[#00bc7d]/20 flex absolute justify-center items-center">
                      <User className="size-4 text-[#00bc7d]" />
                    </div>
                    <div className="left-[50%] top-[18%] size-8 -translate-x-1/2 -translate-y-1/2 ring-2 ring-chart2 rounded-full bg-[#00bc7d]/20 flex absolute justify-center items-center">
                      <User className="size-3.5 text-[#00bc7d]" />
                    </div>
                    <div className="backdrop-blur-sm rounded-lg bg-zinc-950/70 text-[11px] border-white/10 border-1 border-solid flex absolute left-3 bottom-3 px-3 py-1.5 items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-[#1447e6]" />
                        Host
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-[#00bc7d]" />
                        User
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="rounded-full bg-[#ff6467] w-3 h-0.5" />
                        Suspicious
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-xl bg-zinc-900/60 border-white/10 border-0 border-solid p-6 gap-3">
                <CardHeader className="p-0 gap-0">
                  <CardTitle className="text-base leading-6 flex items-center gap-2">
                    <ListChecks className="size-4 text-[#fe9a00]" />
                    Top Suspicious Findings
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 border-0 border-solid">
                        <TableHead className="text-xs leading-4">
                          Host
                        </TableHead>
                        <TableHead className="text-xs leading-4">
                          User
                        </TableHead>
                        <TableHead className="text-xs leading-4">
                          Behavior
                        </TableHead>
                        <TableHead className="text-xs leading-4">
                          Risk Score
                        </TableHead>
                        <TableHead className="text-xs leading-4">
                          First Seen
                        </TableHead>
                        <TableHead className="text-right text-xs leading-4">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-white/10 border-0 border-solid">
                        <TableCell className="font-medium text-sm leading-5">
                          WIN-DC01
                        </TableCell>
                        <TableCell className="text-[#9f9fa9] text-sm leading-5">
                          j.morrison
                        </TableCell>
                        <TableCell className="text-sm leading-5">
                          Lateral movement
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-zinc-800 w-16 h-1.5 overflow-hidden">
                              <div className="w-[94%] rounded-full bg-[#ff6467] h-full" />
                            </div>
                            <span className="font-medium text-[#ff6467] text-xs leading-4">
                              94
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-[#9f9fa9] text-xs leading-4">
                          12m ago
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            className="text-xs leading-4 h-7"
                            size="sm"
                            variant="outline"
                          >
                            Investigate
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-white/10 border-0 border-solid">
                        <TableCell className="font-medium text-sm leading-5">
                          SRV-APP04
                        </TableCell>
                        <TableCell className="text-[#9f9fa9] text-sm leading-5">
                          svc_backup
                        </TableCell>
                        <TableCell className="text-sm leading-5">
                          Privilege escalation
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-zinc-800 w-16 h-1.5 overflow-hidden">
                              <div className="w-[81%] rounded-full bg-[#ff6467] h-full" />
                            </div>
                            <span className="font-medium text-[#ff6467] text-xs leading-4">
                              81
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-[#9f9fa9] text-xs leading-4">
                          38m ago
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            className="text-xs leading-4 h-7"
                            size="sm"
                            variant="outline"
                          >
                            Investigate
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-white/10 border-0 border-solid">
                        <TableCell className="font-medium text-sm leading-5">
                          WS-FIN12
                        </TableCell>
                        <TableCell className="text-[#9f9fa9] text-sm leading-5">
                          a.chen
                        </TableCell>
                        <TableCell className="text-sm leading-5">
                          Bulk data download
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-zinc-800 w-16 h-1.5 overflow-hidden">
                              <div className="w-[67%] rounded-full bg-[#fe9a00] h-full" />
                            </div>
                            <span className="font-medium text-[#fe9a00] text-xs leading-4">
                              67
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-[#9f9fa9] text-xs leading-4">
                          1h ago
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            className="text-xs leading-4 h-7"
                            size="sm"
                            variant="outline"
                          >
                            Investigate
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-white/10 border-0 border-solid">
                        <TableCell className="font-medium text-sm leading-5">
                          WS-HR07
                        </TableCell>
                        <TableCell className="text-[#9f9fa9] text-sm leading-5">
                          m.patel
                        </TableCell>
                        <TableCell className="text-sm leading-5">
                          After-hours access
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-zinc-800 w-16 h-1.5 overflow-hidden">
                              <div className="w-[54%] rounded-full bg-[#fe9a00] h-full" />
                            </div>
                            <span className="font-medium text-[#fe9a00] text-xs leading-4">
                              54
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-[#9f9fa9] text-xs leading-4">
                          2h ago
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            className="text-xs leading-4 h-7"
                            size="sm"
                            variant="outline"
                          >
                            Investigate
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-white/10 border-0 border-solid">
                        <TableCell className="font-medium text-sm leading-5">
                          SRV-DB02
                        </TableCell>
                        <TableCell className="text-[#9f9fa9] text-sm leading-5">
                          r.silva
                        </TableCell>
                        <TableCell className="text-sm leading-5">
                          Unusual query volume
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-zinc-800 w-16 h-1.5 overflow-hidden">
                              <div className="w-[42%] rounded-full bg-[#fe9a00] h-full" />
                            </div>
                            <span className="font-medium text-[#fe9a00] text-xs leading-4">
                              42
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-[#9f9fa9] text-xs leading-4">
                          3h ago
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            className="text-xs leading-4 h-7"
                            size="sm"
                            variant="outline"
                          >
                            Investigate
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-lg bg-[#00bc7d]/15 text-[#00bc7d] flex justify-center items-center">
              <UserSearch className="size-5" />
            </div>
            <h2 className="font-semibold text-lg leading-7 tracking-tight">
              User Behavior Analytics
            </h2>
            <span className="text-[#9f9fa9] text-sm leading-5">
              — Insider Threat Detection
            </span>
          </div>
          <div className="grid grid-cols-[1fr_1.8fr_1.2fr] gap-6">
            <Card className="backdrop-blur-xl bg-zinc-900/60 border-white/10 border-0 border-solid p-6 gap-3">
              <CardHeader className="p-0 gap-0">
                <CardTitle className="text-base leading-6 flex items-center gap-2">
                  <ListOrdered className="size-4 text-[#fe9a00]" />
                  Risk-Ranked Users
                </CardTitle>
              </CardHeader>
              <CardContent className="max-h-[420px] overflow-y-auto flex p-0 flex-col gap-2">
                <div className="rounded-lg bg-[#ff6467]/10 border-[#ff6467]/40 border-1 border-solid flex px-3 py-2.5 justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">
                      j.morrison@corp.com
                    </span>
                    <span className="text-[#9f9fa9] text-[11px]">
                      Finance · 2m ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-10 h-4" viewBox="0 0 40 16">
                      <polyline
                        fill="none"
                        points="0,12 8,10 16,11 24,6 32,4 40,2"
                        stroke="oklch(0.704 0.191 22.216)"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <Badge className="bg-[#ff6467]/20 text-[#ff6467]">
                      94
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg border-white/10 border-1 border-solid flex px-3 py-2.5 justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">
                      d.kumar@corp.com
                    </span>
                    <span className="text-[#9f9fa9] text-[11px]">
                      IT · 9m ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-10 h-4" viewBox="0 0 40 16">
                      <polyline
                        fill="none"
                        points="0,8 8,9 16,7 24,8 32,5 40,6"
                        stroke="oklch(0.704 0.191 22.216)"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <Badge className="bg-[#ff6467]/20 text-[#ff6467]">
                      82
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg border-white/10 border-1 border-solid flex px-3 py-2.5 justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">
                      a.chen@corp.com
                    </span>
                    <span className="text-[#9f9fa9] text-[11px]">
                      Sales · 14m ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-10 h-4" viewBox="0 0 40 16">
                      <polyline
                        fill="none"
                        points="0,10 8,8 16,9 24,7 32,8 40,7"
                        stroke="oklch(0.769 0.188 70.08)"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <Badge className="bg-[#fe9a00]/20 text-[#fe9a00]">
                      71
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg border-white/10 border-1 border-solid flex px-3 py-2.5 justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">
                      m.patel@corp.com
                    </span>
                    <span className="text-[#9f9fa9] text-[11px]">
                      HR · 22m ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-10 h-4" viewBox="0 0 40 16">
                      <polyline
                        fill="none"
                        points="0,9 8,10 16,8 24,9 32,7 40,8"
                        stroke="oklch(0.769 0.188 70.08)"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <Badge className="bg-[#fe9a00]/20 text-[#fe9a00]">
                      64
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg border-white/10 border-1 border-solid flex px-3 py-2.5 justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">
                      r.silva@corp.com
                    </span>
                    <span className="text-[#9f9fa9] text-[11px]">
                      Eng · 31m ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-10 h-4" viewBox="0 0 40 16">
                      <polyline
                        fill="none"
                        points="0,7 8,8 16,9 24,8 32,9 40,10"
                        stroke="oklch(0.769 0.188 70.08)"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <Badge className="bg-[#fe9a00]/20 text-[#fe9a00]">
                      52
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg border-white/10 border-1 border-solid flex px-3 py-2.5 justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">
                      t.nguyen@corp.com
                    </span>
                    <span className="text-[#9f9fa9] text-[11px]">
                      Legal · 48m ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-10 h-4" viewBox="0 0 40 16">
                      <polyline
                        fill="none"
                        points="0,11 8,10 16,11 24,9 32,10 40,9"
                        stroke="oklch(0.696 0.17 162.48)"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <Badge className="bg-zinc-800 text-neutral-50">
                      38
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg border-white/10 border-1 border-solid flex px-3 py-2.5 justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">
                      l.garcia@corp.com
                    </span>
                    <span className="text-[#9f9fa9] text-[11px]">
                      Ops · 1h ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-10 h-4" viewBox="0 0 40 16">
                      <polyline
                        fill="none"
                        points="0,12 8,11 16,12 24,11 32,12 40,11"
                        stroke="oklch(0.696 0.17 162.48)"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <Badge className="bg-zinc-800 text-neutral-50">
                      24
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg border-white/10 border-1 border-solid flex px-3 py-2.5 justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">
                      s.kim@corp.com
                    </span>
                    <span className="text-[#9f9fa9] text-[11px]">
                      Mktg · 2h ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-10 h-4" viewBox="0 0 40 16">
                      <polyline
                        fill="none"
                        points="0,12 8,12 16,11 24,12 32,12 40,12"
                        stroke="oklch(0.696 0.17 162.48)"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <Badge className="bg-zinc-800 text-neutral-50">
                      18
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-xl bg-zinc-900/60 border-white/10 border-0 border-solid p-6 gap-4">
              <CardHeader className="p-0 gap-0">
                <CardTitle className="text-base leading-6 flex items-center gap-2">
                  <Activity className="size-4 text-[#1447e6]" />
                  Behavioral Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="flex p-0 flex-col gap-4">
                <div className="rounded-lg bg-zinc-800/30 border-white/10 border-1 border-solid flex p-4 items-center gap-4">
                  <img
                    alt="User"
                    className="size-14 object-cover ring-2 ring-destructive rounded-full"
                    data-authorname="sergey mikheev"
                    data-authorurl="https://unsplash.com/@exegii"
                    data-blurhash="LK9sPBkC0#j[xaj[NHWV5Rjt=_ay"
                    data-photoid="RzjoEORroMs"
                    src="https://images.unsplash.com/photo-1633625576932-348e73c45e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwxfDJ8fHwxNzgxNTEyOTAxfDA&ixlib=rb-4.1.0&q=80&w=400"
                  />
                  <div className="flex flex-col flex-1">
                    <span className="font-semibold text-base leading-6">
                      James Morrison
                    </span>
                    <span className="text-[#9f9fa9] text-xs leading-4">
                      Senior Financial Analyst · Finance Dept
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="relative size-14 bg-[conic-gradient(oklch(0.704_0.191_22.216)_94%,oklch(0.274_0.006_286.033)_0)] rounded-full flex justify-center items-center">
                      <div className="size-11 rounded-full bg-zinc-900 flex justify-center items-center">
                        <span className="font-bold text-[#ff6467] text-sm leading-5">
                          94
                        </span>
                      </div>
                    </div>
                    <span className="uppercase text-[#9f9fa9] text-[10px] tracking-wide">
                      Risk
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-medium uppercase text-[#9f9fa9] text-xs leading-4 tracking-wide">
                    Hourly Activity · 7 Days
                  </span>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                      <div className="rounded-xs bg-[#1447e6]/20 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/10 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/40 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/60 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/30 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/80 flex-1 h-4" />
                      <div className="rounded-xs bg-[#ff6467]/70 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/20 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/50 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/30 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/15 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/40 flex-1 h-4" />
                    </div>
                    <div className="flex gap-1">
                      <div className="rounded-xs bg-[#1447e6]/30 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/50 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/20 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/70 flex-1 h-4" />
                      <div className="rounded-xs bg-[#ff6467]/80 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/40 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/60 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/30 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/15 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/50 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/25 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/40 flex-1 h-4" />
                    </div>
                    <div className="flex gap-1">
                      <div className="rounded-xs bg-[#1447e6]/15 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/40 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/60 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/30 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/50 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/20 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/70 flex-1 h-4" />
                      <div className="rounded-xs bg-[#ff6467]/60 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/40 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/30 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/55 flex-1 h-4" />
                      <div className="rounded-xs bg-[#1447e6]/20 flex-1 h-4" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-medium uppercase text-[#9f9fa9] text-xs leading-4 tracking-wide">
                    Flagged Behaviors
                  </span>
                  <div className="rounded-lg bg-[#ff6467]/5 border-[#ff6467]/30 border-1 border-solid flex px-3 py-2 items-start gap-3">
                    <Moon className="size-4 text-[#ff6467] mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-medium text-sm leading-5">
                        After-hours login
                      </span>
                      <span className="text-[#9f9fa9] text-[11px]">
                        02:14 AM from unrecognized device · 3 days ago
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-[#ff6467]/5 border-[#ff6467]/30 border-1 border-solid flex px-3 py-2 items-start gap-3">
                    <Download className="size-4 text-[#ff6467] mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-medium text-sm leading-5">
                        Bulk data download
                      </span>
                      <span className="text-[#9f9fa9] text-[11px]">
                        4.2GB exported from finance share · 2 days ago
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-[#ff6467]/5 border-[#ff6467]/30 border-1 border-solid flex px-3 py-2 items-start gap-3">
                    <KeyRound className="size-4 text-[#ff6467] mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-medium text-sm leading-5">
                        Privilege escalation attempt
                      </span>
                      <span className="text-[#9f9fa9] text-[11px]">
                        Denied admin group request · 6h ago
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-xl bg-zinc-900/60 border-white/10 border-0 border-solid p-6 gap-4">
              <CardHeader className="p-0 gap-0">
                <CardTitle className="text-base leading-6 flex items-center gap-2">
                  <LucideRadar className="size-4 text-[#ad46ff]" />
                  Peer Group Comparison
                </CardTitle>
              </CardHeader>
              <CardContent className="flex p-0 flex-col gap-4">
                <ChartContainer
                  className="mx-auto w-full h-52"
                  config={{
                    peer: {
                      color: "oklch(0.488 0.243 264.376)",
                      label: "Peer Baseline",
                    },
                    user: {
                      color: "oklch(0.704 0.191 22.216)",
                      label: "User",
                    },
                  }}
                >
                  <RadarChart
                    data={[
                      { dim: "Login", peer: 45, user: 92 },
                      { dim: "Data", peer: 50, user: 88 },
                      { dim: "Apps", peer: 55, user: 60 },
                      { dim: "Network", peer: 48, user: 75 },
                      { dim: "Privilege", peer: 40, user: 95 },
                      { dim: "Geo", peer: 52, user: 70 },
                    ]}
                  >
                    <ChartTooltip />
                    <PolarGrid stroke="oklch(1 0 0 / 10%)" />
                    <PolarAngleAxis
                      dataKey="dim"
                      tick={{
                        fill: "oklch(0.705 0.015 286.067)",
                        fontSize: 11,
                      }}
                    />
                    <RechartsRadar
                      dataKey="peer"
                      fill="oklch(0.488 0.243 264.376)"
                      fillOpacity={0.25}
                      stroke="oklch(0.488 0.243 264.376)"
                      strokeWidth={2}
                    />
                    <RechartsRadar
                      dataKey="user"
                      fill="oklch(0.704 0.191 22.216)"
                      fillOpacity={0.25}
                      stroke="oklch(0.704 0.191 22.216)"
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ChartContainer>
                <div className="text-[11px] flex justify-center items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="rounded-full bg-[#ff6467] w-3 h-0.5" />
                    User
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="rounded-full bg-[#1447e6] w-3 h-0.5" />
                    Peer Baseline
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-medium uppercase text-[#9f9fa9] text-xs leading-4 tracking-wide">
                    Deviation Summary
                  </span>
                  <div className="rounded-lg border-white/10 border-1 border-solid flex px-3 py-2 justify-between items-center">
                    <span className="text-sm leading-5 flex items-center gap-2">
                      <KeyRound className="size-4 text-[#ff6467]" />
                      Privilege Usage
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div >
  );
}
