import { useEffect } from "react";
import {
  Activity,
  AlertTriangle,
  Bell,
  BrainCircuit,
  Bug,
  CheckCircle,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  Clock,
  Cloud,
  Crosshair,
  Download,
  Eye,
  FilePlus2,
  FileText,
  Fingerprint,
  GitBranch,
  Grid3x3,
  LayoutDashboard,
  Link2,
  ListChecks,
  ListFilter,
  RefreshCw,
  Search,
  Send,
  Server,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Square,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  XAxis,
  YAxis,
} from "recharts";

export default function App() {
  return (
    <div>
      <div className="bg-zinc-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="min-h-[1080px] flex w-full">
          <aside className="shrink-0 bg-[#0F1535] border-[#1E3A5F] border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex p-6 flex-col gap-6 w-64">
            <div className="flex items-center gap-2">
              <div className="size-9 shadow-[0_0_18px_oklch(0.546_0.245_262.881/.6)] rounded-lg bg-[#155dfc] flex justify-center items-center">
                <ShieldCheck className="size-5 text-[#1c398e]" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-base leading-6 tracking-tight">
                  Sentinel SOC
                </span>
                <span className="text-[#9f9fa9] text-xs leading-4">
                  AI Security Platform
                </span>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              <a className="rounded-lg text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2">
                <LayoutDashboard className="size-4" />
                Dashboard
              </a>
              <a className="rounded-lg text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2">
                <Shield className="size-4" />
                Security Monitoring
              </a>
              <a className="shadow-[0_0_18px_oklch(0.546_0.245_262.881/.55)] font-medium rounded-lg bg-[#155dfc] text-[#1c398e] text-sm leading-5 flex px-4 py-2 items-center gap-2">
                <AlertTriangle className="size-4" />
                Threat Detection
              </a>
              <a className="rounded-lg text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2">
                <Zap className="size-4" />
                Incident Response
              </a>
              <a className="rounded-lg text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2">
                <Search className="size-4" />
                Threat Hunting
              </a>
              <a className="rounded-lg text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2">
                <Server className="size-4" />
                Asset Inventory
              </a>
              <a className="rounded-lg text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2">
                <Bug className="size-4" />
                Vulnerability Management
              </a>
              <a className="rounded-lg text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2">
                <Users className="size-4" />
                User Behavior Analytics
              </a>
              <a className="rounded-lg text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2">
                <Cloud className="size-4" />
                Cloud Security
              </a>
              <a className="rounded-lg text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2">
                <CheckCircle className="size-4" />
                Compliance
              </a>
              <a className="rounded-lg text-[#9f9fa9] text-sm leading-5 flex px-4 py-2 items-center gap-2">
                <FileText className="size-4" />
                Log Management
              </a>
            </nav>
            <div className="rounded-xl bg-[#0A0E1A] border-[#1E3A5F] border-1 border-solid mt-auto p-4">
              <div className="flex items-center gap-2">
                <Activity className="size-4 text-[#00bc7d]" />
                <span className="font-medium text-xs leading-4">
                  System Health
                </span>
              </div>
              <p className="text-[#9f9fa9] text-xs leading-4 mt-2">
                All collectors operational. 1.2M events/sec ingested.
              </p>
            </div>
          </aside>
          <div className="flex flex-col flex-1">
            <header className="shrink-0 bg-[#0F1535] border-[#1E3A5F] border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-8 justify-between items-center h-16">
              <div className="flex items-center gap-4">
                <h1 className="font-semibold text-lg leading-7 tracking-tight">{`Threat Detection & AI Investigation`}</h1>
                <span className="font-medium rounded-full bg-[#ff6467]/10 text-[#ff6467] text-xs leading-4 border-[#ff6467]/40 border-1 border-solid flex px-2 py-0.5 items-center gap-1">
                  <span className="size-2 animate-pulse rounded-full bg-[#ff6467]" />
                  LIVE
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-[#0A0E1A] border-[#1E3A5F] border-1 border-solid flex px-3 items-center gap-2 w-80 h-9">
                  <Search className="size-4 text-[#9f9fa9]" />
                  <input
                    className="bg-transparent outline-none text-sm leading-5 w-full"
                    placeholder="Search alerts, IOCs, assets…"
                  />
                </div>
                <div className="text-[#9f9fa9] text-sm leading-5 flex items-center gap-1.5">
                  <Clock className="size-4" />
                  14:32:07 UTC
                </div>
                <button className="relative size-9 rounded-lg bg-[#0A0E1A] text-[#9f9fa9] border-[#1E3A5F] border-1 border-solid flex justify-center items-center">
                  <Bell className="size-4" />
                  <span className="size-4 font-semibold rounded-full bg-[#ff6467] text-white text-[10px] flex absolute -right-1 -top-1 justify-center items-center">
                    7
                  </span>
                </button>
                <div className="flex items-center gap-2">
                  <div className="size-9 rounded-full border-[#1E3A5F] border-1 border-solid overflow-hidden">
                    <img
                      alt="User"
                      className="object-cover w-full h-full"
                      data-authorname="Filip Rankovic Grobgaard"
                      data-authorurl="https://unsplash.com/@filipgrobgaard"
                      data-blurhash="L9C6_i=q*0MHxVxa9aS5kWWBafkC"
                      data-photoid="tmwHp7-5LP4"
                      src="https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXwyfHx8MTc4MTUxMjkwMXww&ixlib=rb-4.1.0&q=80&w=400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="leading-tight font-medium text-sm leading-5">
                      A. Mercer
                    </span>
                    <span className="leading-tight text-[#9f9fa9] text-xs leading-4">
                      SOC Analyst L3
                    </span>
                  </div>
                </div>
              </div>
            </header>
            <main className="flex p-8 flex-1 gap-6">
              <div className="w-[65%] flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="shadow-[0_0_24px_oklch(0.546_0.245_262.881/.12)] rounded-xl bg-[#0F1535] border-[#1E3A5F] border-1 border-solid p-6 gap-4">
                    <CardHeader className="p-0 gap-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-base leading-6 flex items-center gap-2">
                          <BrainCircuit className="size-4 text-[#155dfc]" />
                          ML Anomaly Detection Engine
                        </CardTitle>
                        <span className="font-medium rounded-full bg-[#00bc7d]/10 text-[#00bc7d] text-xs leading-4 border-[#00bc7d]/40 border-1 border-solid px-2 py-0.5">
                          Model Accuracy: 98.3%
                        </span>
                      </div>
                      <div className="text-[#9f9fa9] text-xs leading-4 flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                          <span className="border-[#155dfc] border-t-2 border-r-0 border-b-0 border-l-0 border-dashed w-4 h-0.5" />
                          Baseline Behavior
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="bg-[#ff6467] w-4 h-0.5" />
                          Anomaly Score
                        </span>
                        <span className="flex ml-auto items-center gap-1">
                          <RefreshCw className="size-3" />
                          Last Trained: 2h ago
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ChartContainer
                        className="w-full h-55"
                        config={{
                          anomaly: {
                            color: "oklch(0.704 0.191 22.216)",
                            label: "Anomaly",
                          },
                          baseline: {
                            color: "oklch(0.546 0.245 262.881)",
                            label: "Baseline",
                          },
                        }}
                      >
                        <RechartsLineChart
                          data={[
                            { anomaly: 22, baseline: 30, t: "00:00" },
                            { anomaly: 28, baseline: 32, t: "03:00" },
                            { anomaly: 31, baseline: 34, t: "06:00" },
                            { anomaly: 48, baseline: 33, t: "09:00" },
                            { anomaly: 40, baseline: 35, t: "12:00" },
                            { anomaly: 88, baseline: 34, t: "15:00" },
                            { anomaly: 55, baseline: 36, t: "18:00" },
                            { anomaly: 72, baseline: 35, t: "21:00" },
                            { anomaly: 38, baseline: 34, t: "24:00" },
                          ]}
                        >
                          <CartesianGrid
                            stroke="oklch(1 0 0 / 8%)"
                            strokeDasharray="3 3"
                          />
                          <XAxis
                            axisLine={false}
                            dataKey="t"
                            tick={{
                              fill: "oklch(0.705 0.015 286.067)",
                              fontSize: 11,
                            }}
                            tickLine={false}
                          />
                          <YAxis
                            axisLine={false}
                            domain={[0, 100]}
                            tick={{
                              fill: "oklch(0.705 0.015 286.067)",
                              fontSize: 11,
                            }}
                            tickLine={false}
                          />
                          <ChartTooltip />
                          <Line
                            dataKey="baseline"
                            dot={false}
                            stroke="oklch(0.546 0.245 262.881)"
                            strokeDasharray="6 4"
                            strokeWidth={2}
                            type="monotone"
                          />
                          <Line
                            dataKey="anomaly"
                            dot={{ fill: "oklch(0.704 0.191 22.216)", r: 3 }}
                            stroke="oklch(0.704 0.191 22.216)"
                            strokeWidth={2.5}
                            type="monotone"
                          />
                        </RechartsLineChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                  <Card className="shadow-[0_0_24px_oklch(0.546_0.245_262.881/.12)] rounded-xl bg-[#0F1535] border-[#1E3A5F] border-1 border-solid p-6 gap-4">
                    <CardHeader className="p-0 gap-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-base leading-6 flex items-center gap-2">
                          <Grid3x3 className="size-4 text-[#155dfc]" />
                          {`MITRE ATT&CK Heatmap`}
                        </CardTitle>
                        <div className="text-[#9f9fa9] text-[10px] flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <span className="size-2.5 rounded-xs bg-[#0A0E1A]" />
                            None
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="size-2.5 rounded-xs bg-[#fe9a00]" />
                            Med
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="size-2.5 rounded-xs bg-[#ff6467]" />
                            High
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid grid-cols-11 gap-1">
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[#9f9fa9] text-[9px] h-14">
                            Initial Access
                          </span>
                          <span className="size-4 rounded-xs bg-[#ff6467]" />
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[#9f9fa9] text-[9px] h-14">
                            Execution
                          </span>
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                          <span className="size-4 rounded-xs bg-[#ff6467]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[#9f9fa9] text-[9px] h-14">
                            Persistence
                          </span>
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[#9f9fa9] text-[9px] h-14">
                            Priv Esc
                          </span>
                          <span className="size-4 rounded-xs bg-[#ff6467]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[#9f9fa9] text-[9px] h-14">
                            Defense Ev
                          </span>
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                          <span className="size-4 rounded-xs bg-[#ff6467]" />
                          <span className="size-4 rounded-xs bg-[#ff6467]" />
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[#9f9fa9] text-[9px] h-14">
                            Cred Access
                          </span>
                          <span className="size-4 rounded-xs bg-[#ff6467]" />
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[#9f9fa9] text-[9px] h-14">
                            Discovery
                          </span>
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[#9f9fa9] text-[9px] h-14">
                            Lateral Mv
                          </span>
                          <span className="size-4 rounded-xs bg-[#ff6467]" />
                          <span className="size-4 animate-pulse rounded-xs bg-[#ff6467]" />
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[#9f9fa9] text-[9px] h-14">
                            Collection
                          </span>
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[#9f9fa9] text-[9px] h-14">
                            Exfiltration
                          </span>
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                          <span className="size-4 rounded-xs bg-[#ff6467]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[#9f9fa9] text-[9px] h-14">
                            Impact
                          </span>
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                          <span className="size-4 rounded-xs bg-[#fe9a00]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                          <span className="size-4 rounded-xs bg-[#0A0E1A]" />
                        </div>
                      </div>
                      <div className="rounded-lg bg-[#0A0E1A] border-[#1E3A5F] border-1 border-solid flex mt-4 p-3 justify-between items-center">
                        <span className="text-[#9f9fa9] text-xs leading-4">
                          Most active tactic
                        </span>
                        <span className="font-medium text-[#ff6467] text-xs leading-4 flex items-center gap-1.5">
                          <TrendingUp className="size-3.5" />
                          Lateral Movement (42 detections)
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Card className="shadow-[0_0_24px_oklch(0.546_0.245_262.881/.12)] rounded-xl bg-[#0F1535] border-[#1E3A5F] border-1 border-solid p-6 flex-1 gap-4">
                  <CardHeader className="p-0 gap-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-base leading-6 flex items-center gap-2">
                        <ListFilter className="size-4 text-[#155dfc]" />
                        Active Threat Alerts
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <div className="rounded-lg bg-[#0A0E1A] border-[#1E3A5F] border-1 border-solid flex px-3 items-center gap-2 w-64 h-8">
                          <Search className="size-3.5 text-[#9f9fa9]" />
                          <input
                            className="bg-transparent outline-none text-xs leading-4 w-full"
                            placeholder="Filter by IP, threat, tactic…"
                          />
                        </div>
                        <Button
                          className="bg-[#0A0E1A] text-xs leading-4 border-[#1E3A5F] border-0 border-solid px-3 gap-1.5 h-8"
                          variant="outline"
                        >
                          <SlidersHorizontal className="size-3.5" />
                          Filters
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="rounded-lg border-[#1E3A5F] border-1 border-solid overflow-hidden">
                      <table className="text-xs leading-4 w-full">
                        <thead>
                          <tr className="bg-[#0A0E1A] text-[#9f9fa9] border-[#1E3A5F] border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                            <th className="font-medium text-left px-3 py-2">
                              <span className="flex items-center gap-1">
                                Alert ID
                                <ChevronsUpDown className="size-3" />
                              </span>
                            </th>
                            <th className="font-medium text-left px-3 py-2">
                              <span className="flex items-center gap-1">
                                Timestamp
                                <ChevronsUpDown className="size-3" />
                              </span>
                            </th>
                            <th className="font-medium text-left px-3 py-2">
                              Severity
                            </th>
                            <th className="font-medium text-left px-3 py-2">
                              Threat Name
                            </th>
                            <th className="font-medium text-left px-3 py-2">
                              Source IP
                            </th>
                            <th className="font-medium text-left px-3 py-2">
                              Dest IP
                            </th>
                            <th className="font-medium text-left px-3 py-2">
                              MITRE Tactic
                            </th>
                            <th className="font-medium text-left px-3 py-2">
                              <span className="flex items-center gap-1">
                                Conf %<ChevronsUpDown className="size-3" />
                              </span>
                            </th>
                            <th className="font-medium text-left px-3 py-2">
                              Status
                            </th>
                            <th className="font-medium text-right px-3 py-2">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-[#155dfc]/10 border-[#1E3A5F]/60 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                            <td className="font-mono text-[#155dfc] px-3 py-2">
                              ALT-20847
                            </td>
                            <td className="text-[#9f9fa9] px-3 py-2">
                              14:31:52
                            </td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#ff6467]/15 text-[#ff6467] px-2 py-0.5">
                                Critical
                              </span>
                            </td>
                            <td className="px-3 py-2">
                              APT29 Lateral Movement
                            </td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.12.88
                            </td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.12.42
                            </td>
                            <td className="px-3 py-2">Lateral Movement</td>
                            <td className="text-[#ff6467] px-3 py-2">97%</td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#fe9a00]/15 text-[#fe9a00] px-2 py-0.5">
                                Investigating
                              </span>
                            </td>
                            <td className="px-3 py-2">
                              <div className="flex justify-end gap-1">
                                <Button className="bg-[#155dfc] text-[#1c398e] text-[10px] px-2 h-6">
                                  Investigate
                                </Button>
                                <Button
                                  className="text-[10px] border-[#1E3A5F] border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Suppress
                                </Button>
                                <Button
                                  className="text-[#ff6467] text-[10px] border-[#ff6467]/40 border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Escalate
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-[#1E3A5F]/60 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                            <td className="font-mono text-[#155dfc] px-3 py-2">
                              ALT-20846
                            </td>
                            <td className="text-[#9f9fa9] px-3 py-2">
                              14:29:10
                            </td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#ff6467]/15 text-[#ff6467] px-2 py-0.5">
                                Critical
                              </span>
                            </td>
                            <td className="px-3 py-2">Cobalt Strike Beacon</td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              185.62.7.21
                            </td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.9.15
                            </td>
                            <td className="px-3 py-2">{`Command & Control`}</td>
                            <td className="text-[#ff6467] px-3 py-2">94%</td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#155dfc]/15 text-[#155dfc] px-2 py-0.5">
                                New
                              </span>
                            </td>
                            <td className="px-3 py-2">
                              <div className="flex justify-end gap-1">
                                <Button className="bg-[#155dfc] text-[#1c398e] text-[10px] px-2 h-6">
                                  Investigate
                                </Button>
                                <Button
                                  className="text-[10px] border-[#1E3A5F] border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Suppress
                                </Button>
                                <Button
                                  className="text-[#ff6467] text-[10px] border-[#ff6467]/40 border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Escalate
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-[#0A0E1A]/40 border-[#1E3A5F]/60 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                            <td className="font-mono text-[#155dfc] px-3 py-2">
                              ALT-20845
                            </td>
                            <td className="text-[#9f9fa9] px-3 py-2">
                              14:24:33
                            </td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#fe9a00]/15 text-[#fe9a00] px-2 py-0.5">
                                High
                              </span>
                            </td>
                            <td className="px-3 py-2">Kerberoasting Attempt</td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.5.77
                            </td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.0.10
                            </td>
                            <td className="px-3 py-2">Credential Access</td>
                            <td className="text-[#fe9a00] px-3 py-2">89%</td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#00bc7d]/15 text-[#00bc7d] px-2 py-0.5">
                                Contained
                              </span>
                            </td>
                            <td className="px-3 py-2">
                              <div className="flex justify-end gap-1">
                                <Button className="bg-[#155dfc] text-[#1c398e] text-[10px] px-2 h-6">
                                  Investigate
                                </Button>
                                <Button
                                  className="text-[10px] border-[#1E3A5F] border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Suppress
                                </Button>
                                <Button
                                  className="text-[#ff6467] text-[10px] border-[#ff6467]/40 border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Escalate
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-[#1E3A5F]/60 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                            <td className="font-mono text-[#155dfc] px-3 py-2">
                              ALT-20844
                            </td>
                            <td className="text-[#9f9fa9] px-3 py-2">
                              14:18:02
                            </td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#fe9a00]/15 text-[#fe9a00] px-2 py-0.5">
                                High
                              </span>
                            </td>
                            <td className="px-3 py-2">Suspicious PowerShell</td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.7.33
                            </td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.7.33
                            </td>
                            <td className="px-3 py-2">Execution</td>
                            <td className="text-[#fe9a00] px-3 py-2">86%</td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#155dfc]/15 text-[#155dfc] px-2 py-0.5">
                                New
                              </span>
                            </td>
                            <td className="px-3 py-2">
                              <div className="flex justify-end gap-1">
                                <Button className="bg-[#155dfc] text-[#1c398e] text-[10px] px-2 h-6">
                                  Investigate
                                </Button>
                                <Button
                                  className="text-[10px] border-[#1E3A5F] border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Suppress
                                </Button>
                                <Button
                                  className="text-[#ff6467] text-[10px] border-[#ff6467]/40 border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Escalate
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-[#0A0E1A]/40 border-[#1E3A5F]/60 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                            <td className="font-mono text-[#155dfc] px-3 py-2">
                              ALT-20843
                            </td>
                            <td className="text-[#9f9fa9] px-3 py-2">
                              14:11:47
                            </td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-zinc-800 text-[#9f9fa9] px-2 py-0.5">
                                Medium
                              </span>
                            </td>
                            <td className="px-3 py-2">Port Scan Detected</td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              203.0.113.9
                            </td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.0.0/24
                            </td>
                            <td className="px-3 py-2">Discovery</td>
                            <td className="text-[#9f9fa9] px-3 py-2">72%</td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#fe9a00]/15 text-[#fe9a00] px-2 py-0.5">
                                Investigating
                              </span>
                            </td>
                            <td className="px-3 py-2">
                              <div className="flex justify-end gap-1">
                                <Button className="bg-[#155dfc] text-[#1c398e] text-[10px] px-2 h-6">
                                  Investigate
                                </Button>
                                <Button
                                  className="text-[10px] border-[#1E3A5F] border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Suppress
                                </Button>
                                <Button
                                  className="text-[#ff6467] text-[10px] border-[#ff6467]/40 border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Escalate
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-[#1E3A5F]/60 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                            <td className="font-mono text-[#155dfc] px-3 py-2">
                              ALT-20842
                            </td>
                            <td className="text-[#9f9fa9] px-3 py-2">
                              14:05:19
                            </td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#fe9a00]/15 text-[#fe9a00] px-2 py-0.5">
                                High
                              </span>
                            </td>
                            <td className="px-3 py-2">DLL Side-Loading</td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.11.51
                            </td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.11.51
                            </td>
                            <td className="px-3 py-2">Defense Evasion</td>
                            <td className="text-[#fe9a00] px-3 py-2">83%</td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#00bc7d]/15 text-[#00bc7d] px-2 py-0.5">
                                Contained
                              </span>
                            </td>
                            <td className="px-3 py-2">
                              <div className="flex justify-end gap-1">
                                <Button className="bg-[#155dfc] text-[#1c398e] text-[10px] px-2 h-6">
                                  Investigate
                                </Button>
                                <Button
                                  className="text-[10px] border-[#1E3A5F] border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Suppress
                                </Button>
                                <Button
                                  className="text-[#ff6467] text-[10px] border-[#ff6467]/40 border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Escalate
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-[#0A0E1A]/40 border-[#1E3A5F]/60 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                            <td className="font-mono text-[#155dfc] px-3 py-2">
                              ALT-20841
                            </td>
                            <td className="text-[#9f9fa9] px-3 py-2">
                              13:58:40
                            </td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-zinc-800 text-[#9f9fa9] px-2 py-0.5">
                                Medium
                              </span>
                            </td>
                            <td className="px-3 py-2">Anomalous Login Geo</td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              91.108.4.6
                            </td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.2.18
                            </td>
                            <td className="px-3 py-2">Initial Access</td>
                            <td className="text-[#9f9fa9] px-3 py-2">68%</td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#155dfc]/15 text-[#155dfc] px-2 py-0.5">
                                New
                              </span>
                            </td>
                            <td className="px-3 py-2">
                              <div className="flex justify-end gap-1">
                                <Button className="bg-[#155dfc] text-[#1c398e] text-[10px] px-2 h-6">
                                  Investigate
                                </Button>
                                <Button
                                  className="text-[10px] border-[#1E3A5F] border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Suppress
                                </Button>
                                <Button
                                  className="text-[#ff6467] text-[10px] border-[#ff6467]/40 border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Escalate
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-[#1E3A5F]/60 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                            <td className="font-mono text-[#155dfc] px-3 py-2">
                              ALT-20840
                            </td>
                            <td className="text-[#9f9fa9] px-3 py-2">
                              13:50:11
                            </td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#ff6467]/15 text-[#ff6467] px-2 py-0.5">
                                Critical
                              </span>
                            </td>
                            <td className="px-3 py-2">
                              Ransomware File Encrypt
                            </td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.8.20
                            </td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.8.0/24
                            </td>
                            <td className="px-3 py-2">Impact</td>
                            <td className="text-[#ff6467] px-3 py-2">96%</td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#fe9a00]/15 text-[#fe9a00] px-2 py-0.5">
                                Investigating
                              </span>
                            </td>
                            <td className="px-3 py-2">
                              <div className="flex justify-end gap-1">
                                <Button className="bg-[#155dfc] text-[#1c398e] text-[10px] px-2 h-6">
                                  Investigate
                                </Button>
                                <Button
                                  className="text-[10px] border-[#1E3A5F] border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Suppress
                                </Button>
                                <Button
                                  className="text-[#ff6467] text-[10px] border-[#ff6467]/40 border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Escalate
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-[#0A0E1A]/40 border-[#1E3A5F]/60 border-t-0 border-r-0 border-b-1 border-l-0 border-solid">
                            <td className="font-mono text-[#155dfc] px-3 py-2">
                              ALT-20839
                            </td>
                            <td className="text-[#9f9fa9] px-3 py-2">
                              13:42:55
                            </td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-zinc-800 text-[#9f9fa9] px-2 py-0.5">
                                Medium
                              </span>
                            </td>
                            <td className="px-3 py-2">
                              Scheduled Task Created
                            </td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.6.44
                            </td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.6.44
                            </td>
                            <td className="px-3 py-2">Persistence</td>
                            <td className="text-[#9f9fa9] px-3 py-2">64%</td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#00bc7d]/15 text-[#00bc7d] px-2 py-0.5">
                                Contained
                              </span>
                            </td>
                            <td className="px-3 py-2">
                              <div className="flex justify-end gap-1">
                                <Button className="bg-[#155dfc] text-[#1c398e] text-[10px] px-2 h-6">
                                  Investigate
                                </Button>
                                <Button
                                  className="text-[10px] border-[#1E3A5F] border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Suppress
                                </Button>
                                <Button
                                  className="text-[#ff6467] text-[10px] border-[#ff6467]/40 border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Escalate
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="font-mono text-[#155dfc] px-3 py-2">
                              ALT-20838
                            </td>
                            <td className="text-[#9f9fa9] px-3 py-2">
                              13:37:08
                            </td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#fe9a00]/15 text-[#fe9a00] px-2 py-0.5">
                                High
                              </span>
                            </td>
                            <td className="px-3 py-2">Data Staging Exfil</td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              10.4.13.5
                            </td>
                            <td className="font-mono text-[#9f9fa9] px-3 py-2">
                              45.9.148.2
                            </td>
                            <td className="px-3 py-2">Exfiltration</td>
                            <td className="text-[#fe9a00] px-3 py-2">81%</td>
                            <td className="px-3 py-2">
                              <span className="rounded-full bg-[#155dfc]/15 text-[#155dfc] px-2 py-0.5">
                                New
                              </span>
                            </td>
                            <td className="px-3 py-2">
                              <div className="flex justify-end gap-1">
                                <Button className="bg-[#155dfc] text-[#1c398e] text-[10px] px-2 h-6">
                                  Investigate
                                </Button>
                                <Button
                                  className="text-[10px] border-[#1E3A5F] border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Suppress
                                </Button>
                                <Button
                                  className="text-[#ff6467] text-[10px] border-[#ff6467]/40 border-0 border-solid px-2 h-6"
                                  variant="outline"
                                >
                                  Escalate
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                  <CardFooter className="p-0 justify-between">
                    <span className="text-[#9f9fa9] text-xs leading-4">
                      Showing 1–10 of 248 alerts
                    </span>
                    <div className="flex items-center gap-1">
                      <Button
                        className="size-7 border-[#1E3A5F] border-0 border-solid p-0"
                        variant="outline"
                      >
                        <ChevronLeft className="size-4" />
                      </Button>
                      <Button className="size-7 bg-[#155dfc] text-[#1c398e] p-0">
                        1
                      </Button>
                      <Button
                        className="size-7 text-xs leading-4 border-[#1E3A5F] border-0 border-solid p-0"
                        variant="outline"
                      >
                        2
                      </Button>
                      <Button
                        className="size-7 text-xs leading-4 border-[#1E3A5F] border-0 border-solid p-0"
                        variant="outline"
                      >
                        3
                      </Button>
                      <Button
                        className="size-7 border-[#1E3A5F] border-0 border-solid p-0"
                        variant="outline"
                      >
                        <ChevronRight className="size-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
              <Card className="w-[35%] shadow-[0_0_40px_oklch(0.546_0.245_262.881/.18)] backdrop-blur-md rounded-xl bg-[#0F1535]/80 border-[#1E3A5F] border-1 border-solid flex p-6 flex-col gap-4 overflow-hidden">
                <CardHeader className="p-0 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="size-10 shadow-[0_0_20px_oklch(0.546_0.245_262.881/.7)] rounded-xl bg-[#155dfc]/20 flex justify-center items-center">
                      <BrainCircuit className="size-5 animate-pulse text-[#155dfc]" />
                    </div>
                    <div className="flex flex-col">
                      <CardTitle className="text-base leading-6">
                        AI Investigation Assistant
                      </CardTitle>
                      <span className="text-[#9f9fa9] text-xs leading-4">
                        Powered by Sentinel AI v3.2
                      </span>
                    </div>
                    <span className="rounded-full bg-[#00bc7d]/10 text-[#00bc7d] text-[10px] border-[#00bc7d]/40 border-1 border-solid flex ml-auto px-2 py-0.5 items-center gap-1">
                      <span className="size-1.5 animate-pulse rounded-full bg-[#00bc7d]" />
                      Online
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex p-0 flex-col flex-1 gap-4 overflow-hidden">
                  <div className="rounded-lg bg-[#ff6467]/10 border-[#ff6467]/40 border-1 border-solid p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[#155dfc] text-sm leading-5">
                        ALT-20847
                      </span>
                      <span className="rounded-full bg-[#ff6467]/20 text-[#ff6467] text-xs leading-4 px-2 py-0.5">
                        Critical
                      </span>
                    </div>
                    <p className="font-medium text-sm leading-5 mt-1">
                      APT29 Lateral Movement Detected
                    </p>
                    <div className="text-[#9f9fa9] text-xs leading-4 flex mt-2 items-center gap-2">
                      <Server className="size-3.5" />
                      Affected asset:
                      <span className="font-mono text-neutral-50">
                        WIN-SRV-042
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4 overflow-y-auto leading-relaxed rounded-lg bg-[#0A0E1A] text-xs leading-4 border-[#1E3A5F] border-1 border-solid p-4 flex-1">
                    <div>
                      <p className="font-semibold text-[#155dfc] flex mb-1 items-center gap-1.5">
                        <GitBranch className="size-3.5" />
                        Attack Chain Reconstruction
                      </p>
                      <p className="text-[#9f9fa9]">
                        Initial access via spear-phishing on WIN-SRV-042 at
                        14:22 UTC. Credential dumping observed, followed by SMB
                        lateral movement to two adjacent hosts. Pass-the-hash
                        signatures match APT29 (Cozy Bear) TTPs with high
                        fidelity.
                        <span className="inline-block animate-pulse align-middle bg-[#155dfc] ml-0.5 w-1 h-3" />
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#155dfc] flex mb-1 items-center gap-1.5">
                        <Fingerprint className="size-3.5" />
                        IOC Summary
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="font-mono rounded-xs bg-zinc-800 text-[10px] px-1.5 py-0.5">
                          185.62.7.21
                        </span>
                        <span className="font-mono rounded-xs bg-zinc-800 text-[10px] px-1.5 py-0.5">
                          45.9.148.2
                        </span>
                        <span className="font-mono rounded-xs bg-zinc-800 text-[10px] px-1.5 py-0.5">
                          91.108.4.6
                        </span>
                        <span className="font-mono rounded-xs bg-zinc-800 text-[10px] px-1.5 py-0.5">
                          cdn-update[.]net
                        </span>
                        <span className="font-mono rounded-xs bg-zinc-800 text-[10px] px-1.5 py-0.5">
                          sync-cloud[.]io
                        </span>
                        <span className="font-mono rounded-xs bg-zinc-800 text-[10px] px-1.5 py-0.5">
                          a3f9c1...e7b2
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-[#155dfc] flex mb-1 items-center gap-1.5">
                        <ListChecks className="size-3.5" />
                        Recommended Containment
                      </p>
                      <ul className="space-y-1.5 text-[#9f9fa9]">
                        <li className="flex items-center gap-2">
                          <CheckSquare className="size-3.5 text-[#00bc7d]" />
                          Isolate WIN-SRV-042 from network
                        </li>
                        <li className="flex items-center gap-2">
                          <Square className="size-3.5" />
                          Reset credentials for affected accounts
                        </li>
                        <li className="flex items-center gap-2">
                          <Square className="size-3.5" />
                          Block C2 IPs at perimeter firewall
                        </li>
                        <li className="flex items-center gap-2">
                          <Square className="size-3.5" />
                          Quarantine flagged file hash on EDR
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-[#155dfc] flex mb-1 items-center gap-1.5">
                        <Link2 className="size-3.5" />
                        Related Historical Incidents
                      </p>
                      <div className="flex flex-col gap-0.5">
                        <a className="underline-offset-2 text-[#155dfc]">
                          INC-18204 — APT29 Phishing Campaign (Mar 2024)
                        </a>
                        <a className="underline-offset-2 text-[#155dfc]">
                          INC-17655 — Lateral Movement via SMB (Jan 2024)
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-[#155dfc] flex mb-1 items-center gap-1.5">
                        <Crosshair className="size-3.5" />
                        {`MITRE ATT&CK Mapping`}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="rounded-full text-[#9f9fa9] text-[10px] border-[#1E3A5F] border-1 border-solid px-2 py-0.5">
                          T1078 Valid Accounts
                        </span>
                        <span className="rounded-full text-[#9f9fa9] text-[10px] border-[#1E3A5F] border-1 border-solid px-2 py-0.5">
                          T1021 Remote Services
                        </span>
                        <span className="rounded-full text-[#9f9fa9] text-[10px] border-[#1E3A5F] border-1 border-solid px-2 py-0.5">
                          T1550 Pass the Hash
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-0 flex-col gap-2">
                  <div className="grid grid-cols-3 gap-2 w-full">
                    <Button className="bg-[#155dfc] text-[#1c398e] text-xs leading-4 gap-1 h-9">
                      <FilePlus2 className="size-3.5" />
                      Create Incident
                    </Button>
                    <Button
                      className="text-xs leading-4 border-[#1E3A5F] border-0 border-solid gap-1 h-9"
                      variant="outline"
                    >
                      <Eye className="size-3.5" />
                      Watchlist
                    </Button>
                    <Button
                      className="text-xs leading-4 border-[#1E3A5F] border-0 border-solid gap-1 h-9"
                      variant="outline"
                    >
                      <Download className="size-3.5" />
                      Export
                    </Button>
                  </div>
                  <div className="rounded-lg bg-[#0A0E1A] border-[#1E3A5F] border-1 border-solid flex px-3 py-1.5 items-center gap-2 w-full">
                    <input
                      className="bg-transparent outline-none text-xs leading-4 w-full"
                      placeholder="Ask AI a follow-up question…"
                    />
                    <button className="size-7 rounded-md bg-[#155dfc] text-[#1c398e] flex justify-center items-center">
                      <Send className="size-3.5" />
                    </button>
                  </div>
                </CardFooter>
              </Card>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
