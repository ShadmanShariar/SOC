import { useEffect } from "react";
import {
  AlertTriangle,
  AreaChart as LucideAreaChart,
  Bell,
  Boxes,
  Bug,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  Cloud,
  FileSearch,
  FileText,
  Filter,
  Flame,
  Gauge,
  Laptop,
  LayoutDashboard,
  Plus,
  Router,
  ScanLine,
  Search,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldOff,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

export default function App() {
  return (
    <div>
      <div className="bg-zinc-950 text-neutral-50 flex w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <aside className="shrink-0 bg-zinc-900 border-white/10 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex p-4 flex-col gap-6 w-64 h-270">
          <div className="flex p-2 items-center gap-2">
            <div className="size-9 shadow-[0_0_20px_oklch(0.546_0.245_262.881/.5)] rounded-xl bg-[#155dfc] flex justify-center items-center">
              <ShieldCheck className="size-5 text-[#1c398e]" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm leading-5 tracking-tight">
                SentinelAI
              </span>
              <span className="text-[#9f9fa9] text-[11px]">SOC Platform</span>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2 items-center gap-3">
              <LayoutDashboard className="size-4" />
              <span>Dashboard</span>
            </a>
            <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2 items-center gap-3">
              <Shield className="size-4" />
              <span>Security Monitoring</span>
            </a>
            <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2 items-center gap-3">
              <AlertTriangle className="size-4" />
              <span>Threat Detection</span>
            </a>
            <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2 items-center gap-3">
              <Zap className="size-4" />
              <span>Incident Response</span>
            </a>
            <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2 items-center gap-3">
              <Search className="size-4" />
              <span>Threat Hunting</span>
            </a>
            <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2 items-center gap-3">
              <Server className="size-4" />
              <span>Asset Inventory</span>
            </a>
            <a className="shadow-[0_0_20px_oklch(0.546_0.245_262.881/.4)] transition-colors font-medium rounded-lg bg-[#155dfc] text-[#1c398e] text-sm leading-5 flex px-3 py-2 items-center gap-3">
              <Bug className="size-4" />
              <span>Vulnerability Mgmt</span>
            </a>
            <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2 items-center gap-3">
              <Users className="size-4" />
              <span>User Behavior Analytics</span>
            </a>
            <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2 items-center gap-3">
              <Cloud className="size-4" />
              <span>Cloud Security</span>
            </a>
            <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2 items-center gap-3">
              <CheckCircle className="size-4" />
              <span>Compliance</span>
            </a>
            <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2 items-center gap-3">
              <FileText className="size-4" />
              <span>Log Management</span>
            </a>
          </nav>
          <div className="rounded-xl bg-zinc-800 flex mt-auto p-4 flex-col gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-[#155dfc]" />
              <span className="font-medium text-xs leading-4">AI Copilot</span>
            </div>
            <p className="leading-snug text-[#9f9fa9] text-[11px]">
              23 critical vulnerabilities require attention. Ask AI for
              remediation plan.
            </p>
            <Button className="bg-[#155dfc] text-[#1c398e] text-xs leading-4 h-7">
              Open Copilot
            </Button>
          </div>
        </aside>
        <div className="min-w-0 flex flex-col flex-1">
          <header className="shrink-0 bg-zinc-900/40 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-8 justify-between items-center h-16">
            <div className="flex flex-col">
              <h1 className="font-semibold text-base leading-6 tracking-tight">{`Vulnerability Management & Asset Inventory`}</h1>
              <p className="text-[#9f9fa9] text-xs leading-4">
                Real-time exposure assessment across 3,847 assets
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-72">
                <Search className="size-4 top-1/2 -translate-y-1/2 text-[#9f9fa9] absolute left-3" />
                <Input
                  className="bg-zinc-800 text-sm leading-5 border-white/10 border-0 border-solid pl-9 h-9"
                  placeholder="Search assets, CVEs, hosts..."
                />
              </div>
              <Button className="bg-zinc-800 text-neutral-50 gap-2 h-9">
                <Filter className="size-4" />
                Filters
              </Button>
              <div className="relative">
                <Button className="size-9 bg-zinc-800 p-0">
                  <Bell className="size-4" />
                </Button>
                <span className="size-4 rounded-full bg-[#ff6467] text-white text-[10px] flex absolute -right-1 -top-1 justify-center items-center">
                  9
                </span>
              </div>
              <div className="border-white/10 border-t-0 border-r-0 border-b-0 border-l-1 border-solid flex pl-2 items-center gap-2">
                <div className="size-9 font-medium rounded-full bg-[#155dfc] text-[#1c398e] text-sm leading-5 flex justify-center items-center">
                  AS
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-xs leading-4">
                    A. Sharma
                  </span>
                  <span className="text-[#9f9fa9] text-[10px]">
                    SOC Analyst
                  </span>
                </div>
              </div>
            </div>
          </header>
          <main className="flex p-8 flex-col flex-1 gap-6 overflow-hidden">
            <div className="grid grid-cols-6 gap-4">
              <Card className="ring-1 ring-[oklch(0.546_0.245_262.881/.3)] shadow-[0_0_24px_oklch(0.546_0.245_262.881/.15)] transition-all bg-zinc-900/60 border-white/10 border-0 border-solid p-4 gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#9f9fa9] text-xs leading-4">
                    Total Assets
                  </span>
                  <div className="size-8 bg-[oklch(0.546_0.245_262.881/.15)] rounded-lg flex justify-center items-center">
                    <Server className="size-4 text-[oklch(0.696_0.17_262.881)]" />
                  </div>
                </div>
                <span className="font-semibold text-3xl leading-9 tracking-tight">
                  3,847
                </span>
                <span className="text-[#9f9fa9] text-[11px] flex items-center gap-1">
                  <TrendingUp className="size-3 text-[oklch(0.696_0.17_162.48)]" />
                  +124 this week
                </span>
              </Card>
              <Card className="ring-1 ring-[oklch(0.704_0.191_22.216/.3)] shadow-[0_0_24px_oklch(0.704_0.191_22.216/.15)] transition-all bg-zinc-900/60 border-white/10 border-0 border-solid p-4 gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#9f9fa9] text-xs leading-4">
                    Critical Vulns
                  </span>
                  <div className="size-8 bg-[oklch(0.704_0.191_22.216/.15)] rounded-lg flex justify-center items-center">
                    <ShieldAlert className="size-4 text-[#ff6467]" />
                  </div>
                </div>
                <span className="font-semibold text-[#ff6467] text-3xl leading-9 tracking-tight">
                  23
                </span>
                <span className="text-[#9f9fa9] text-[11px] flex items-center gap-1">
                  <TrendingUp className="size-3 text-[#ff6467]" />
                  +5 today
                </span>
              </Card>
              <Card className="ring-1 ring-[oklch(0.769_0.188_70.08/.3)] shadow-[0_0_24px_oklch(0.769_0.188_70.08/.15)] transition-all bg-zinc-900/60 border-white/10 border-0 border-solid p-4 gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#9f9fa9] text-xs leading-4">
                    High Vulns
                  </span>
                  <div className="size-8 bg-[oklch(0.769_0.188_70.08/.15)] rounded-lg flex justify-center items-center">
                    <AlertTriangle className="size-4 text-[oklch(0.769_0.188_70.08)]" />
                  </div>
                </div>
                <span className="text-[oklch(0.769_0.188_70.08)] font-semibold text-3xl leading-9 tracking-tight">
                  187
                </span>
                <span className="text-[#9f9fa9] text-[11px] flex items-center gap-1">
                  <TrendingDown className="size-3 text-[oklch(0.696_0.17_162.48)]" />
                  -12 this week
                </span>
              </Card>
              <Card className="ring-1 ring-[oklch(0.696_0.17_162.48/.3)] shadow-[0_0_24px_oklch(0.696_0.17_162.48/.15)] transition-all bg-zinc-900/60 border-white/10 border-0 border-solid p-4 gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#9f9fa9] text-xs leading-4">
                    Patch Compliance
                  </span>
                  <div className="size-8 bg-[oklch(0.696_0.17_162.48/.15)] rounded-lg flex justify-center items-center">
                    <ShieldCheck className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                  </div>
                </div>
                <span className="text-[oklch(0.696_0.17_162.48)] font-semibold text-3xl leading-9 tracking-tight">
                  78.4%
                </span>
                <span className="text-[#9f9fa9] text-[11px] flex items-center gap-1">
                  <TrendingUp className="size-3 text-[oklch(0.696_0.17_162.48)]" />
                  +2.1% MoM
                </span>
              </Card>
              <Card className="ring-1 ring-[oklch(0.852_0.16_91/.3)] shadow-[0_0_24px_oklch(0.852_0.16_91/.15)] transition-all bg-zinc-900/60 border-white/10 border-0 border-solid p-4 gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#9f9fa9] text-xs leading-4">
                    Avg CVSS Score
                  </span>
                  <div className="size-8 bg-[oklch(0.852_0.16_91/.15)] rounded-lg flex justify-center items-center">
                    <Gauge className="size-4 text-[oklch(0.852_0.16_91)]" />
                  </div>
                </div>
                <span className="text-[oklch(0.852_0.16_91)] font-semibold text-3xl leading-9 tracking-tight">
                  6.8
                </span>
                <span className="text-[#9f9fa9] text-[11px]">
                  Medium-High range
                </span>
              </Card>
              <Card className="ring-1 ring-[oklch(0.704_0.191_22.216/.3)] shadow-[0_0_24px_oklch(0.704_0.191_22.216/.15)] transition-all bg-zinc-900/60 border-white/10 border-0 border-solid p-4 gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#9f9fa9] text-xs leading-4">
                    Assets at Risk
                  </span>
                  <div className="size-8 bg-[oklch(0.704_0.191_22.216/.15)] rounded-lg flex justify-center items-center">
                    <Target className="size-4 text-[#ff6467]" />
                  </div>
                </div>
                <span className="font-semibold text-[#ff6467] text-3xl leading-9 tracking-tight">
                  312
                </span>
                <span className="text-[#9f9fa9] text-[11px]">
                  8.1% of fleet
                </span>
              </Card>
            </div>
            <div className="grid grid-cols-[3fr_2fr] min-h-0 flex-1 gap-6">
              <div className="min-h-0 flex flex-col gap-6">
                <Card className="backdrop-blur-sm bg-zinc-900/60 border-white/10 border-0 border-solid p-6 gap-4">
                  <CardHeader className="p-0 gap-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Boxes className="size-5 text-[#155dfc]" />
                        <CardTitle className="text-base leading-6">
                          Asset Inventory
                        </CardTitle>
                        <Badge className="bg-zinc-800 text-neutral-50 text-[10px]">
                          3,847
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="relative w-52">
                          <Search className="size-3.5 top-1/2 -translate-y-1/2 text-[#9f9fa9] absolute left-2.5" />
                          <Input
                            className="bg-zinc-800 text-xs leading-4 border-white/10 border-0 border-solid pl-8 h-8"
                            placeholder="Search assets..."
                          />
                        </div>
                        <Button className="bg-zinc-800 text-neutral-50 text-xs leading-4 gap-1 h-8">
                          Type
                          <ChevronDown className="size-3" />
                        </Button>
                        <Button className="bg-zinc-800 text-neutral-50 text-xs leading-4 gap-1 h-8">
                          OS
                          <ChevronDown className="size-3" />
                        </Button>
                        <Button className="bg-zinc-800 text-neutral-50 text-xs leading-4 gap-1 h-8">
                          Location
                          <ChevronDown className="size-3" />
                        </Button>
                        <Button className="bg-zinc-800 text-neutral-50 text-xs leading-4 gap-1 h-8">
                          <Plus className="size-3.5" />
                          Add Asset
                        </Button>
                        <Button className="bg-[#155dfc] text-[#1c398e] text-xs leading-4 gap-1 h-8">
                          <ScanLine className="size-3.5" />
                          Run Scan
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 gap-0">
                    <div className="rounded-xl border-white/10 border-1 border-solid overflow-hidden">
                      <table className="text-xs leading-4 w-full">
                        <thead>
                          <tr className="bg-zinc-800/60 text-[#9f9fa9]">
                            <th className="p-2.5 w-8">
                              <Checkbox className="border-white/10 border-0 border-solid" />
                            </th>
                            <th className="font-medium text-left p-2.5">
                              <span className="flex items-center gap-1">
                                Asset ID
                                <ChevronsUpDown className="size-3" />
                              </span>
                            </th>
                            <th className="font-medium text-left p-2.5">
                              <span className="flex items-center gap-1">
                                Hostname
                                <ChevronsUpDown className="size-3" />
                              </span>
                            </th>
                            <th className="font-medium text-left p-2.5">
                              IP Address
                            </th>
                            <th className="font-medium text-left p-2.5">
                              Type
                            </th>
                            <th className="font-medium text-left p-2.5">OS</th>
                            <th className="font-medium text-left p-2.5">
                              Region
                            </th>
                            <th className="font-medium text-left p-2.5">
                              Owner
                            </th>
                            <th className="font-medium text-center p-2.5">
                              <span className="flex justify-center items-center gap-1">
                                Risk
                                <ChevronsUpDown className="size-3" />
                              </span>
                            </th>
                            <th className="font-medium text-center p-2.5">
                              Crit
                            </th>
                            <th className="font-medium text-left p-2.5">
                              Last Scan
                            </th>
                            <th className="font-medium text-left p-2.5">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="transition-colors bg-[#155dfc]/10 border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-2.5">
                              <Checkbox className="border-white/10 border-0 border-solid" />
                            </td>
                            <td className="text-[oklch(0.696_0.17_262.881)] font-mono p-2.5">
                              AST-0042
                            </td>
                            <td className="font-medium p-2.5">WIN-SRV-042</td>
                            <td className="font-mono text-[#9f9fa9] p-2.5">
                              10.4.12.42
                            </td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <Server className="size-3.5 text-[oklch(0.696_0.17_262.881)]" />
                                Server
                              </span>
                            </td>
                            <td className="p-2.5">Win Server 2019</td>
                            <td className="p-2.5">us-east-1</td>
                            <td className="p-2.5">J. Doe</td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[oklch(0.704_0.191_22.216/.2)] text-[#ff6467] border-black/1 border-0 border-solid">
                                94
                              </Badge>
                            </td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[#ff6467] text-white border-black/1 border-0 border-solid">
                                7
                              </Badge>
                            </td>
                            <td className="text-[#9f9fa9] p-2.5">2m ago</td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <span className="size-2 bg-[oklch(0.696_0.17_162.48)] shadow-[0_0_6px_oklch(0.696_0.17_162.48)] rounded-full" />
                                Online
                              </span>
                            </td>
                          </tr>
                          <tr className="transition-colors border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-2.5">
                              <Checkbox className="border-white/10 border-0 border-solid" />
                            </td>
                            <td className="text-[oklch(0.696_0.17_262.881)] font-mono p-2.5">
                              AST-0118
                            </td>
                            <td className="font-medium p-2.5">LNX-DB-118</td>
                            <td className="font-mono text-[#9f9fa9] p-2.5">
                              10.4.20.118
                            </td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <Server className="size-3.5 text-[oklch(0.696_0.17_262.881)]" />
                                Server
                              </span>
                            </td>
                            <td className="p-2.5">Ubuntu 22.04</td>
                            <td className="p-2.5">eu-west-1</td>
                            <td className="p-2.5">M. Khan</td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[oklch(0.769_0.188_70.08/.2)] text-[oklch(0.769_0.188_70.08)] border-black/1 border-0 border-solid">
                                71
                              </Badge>
                            </td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[#ff6467] text-white border-black/1 border-0 border-solid">
                                3
                              </Badge>
                            </td>
                            <td className="text-[#9f9fa9] p-2.5">14m ago</td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <span className="size-2 bg-[oklch(0.696_0.17_162.48)] shadow-[0_0_6px_oklch(0.696_0.17_162.48)] rounded-full" />
                                Online
                              </span>
                            </td>
                          </tr>
                          <tr className="transition-colors border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-2.5">
                              <Checkbox className="border-white/10 border-0 border-solid" />
                            </td>
                            <td className="text-[oklch(0.696_0.17_262.881)] font-mono p-2.5">
                              AST-0233
                            </td>
                            <td className="font-medium p-2.5">WS-FIN-233</td>
                            <td className="font-mono text-[#9f9fa9] p-2.5">
                              10.8.3.233
                            </td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <Laptop className="size-3.5 text-[oklch(0.627_0.265_303.9)]" />
                                Workstation
                              </span>
                            </td>
                            <td className="p-2.5">Windows 11</td>
                            <td className="p-2.5">HQ-Floor 3</td>
                            <td className="p-2.5">S. Lee</td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[oklch(0.852_0.16_91/.2)] text-[oklch(0.852_0.16_91)] border-black/1 border-0 border-solid">
                                52
                              </Badge>
                            </td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-zinc-800 text-[#9f9fa9] border-black/1 border-0 border-solid">
                                1
                              </Badge>
                            </td>
                            <td className="text-[#9f9fa9] p-2.5">1h ago</td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <span className="size-2 bg-[oklch(0.696_0.17_162.48)] shadow-[0_0_6px_oklch(0.696_0.17_162.48)] rounded-full" />
                                Online
                              </span>
                            </td>
                          </tr>
                          <tr className="transition-colors border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-2.5">
                              <Checkbox className="border-white/10 border-0 border-solid" />
                            </td>
                            <td className="text-[oklch(0.696_0.17_262.881)] font-mono p-2.5">
                              AST-0341
                            </td>
                            <td className="font-medium p-2.5">FW-EDGE-01</td>
                            <td className="font-mono text-[#9f9fa9] p-2.5">
                              10.0.0.1
                            </td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <Router className="size-3.5 text-[oklch(0.769_0.188_70.08)]" />
                                Network
                              </span>
                            </td>
                            <td className="p-2.5">FortiOS 7.2</td>
                            <td className="p-2.5">DC-Core</td>
                            <td className="p-2.5">NetOps</td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[oklch(0.704_0.191_22.216/.2)] text-[#ff6467] border-black/1 border-0 border-solid">
                                88
                              </Badge>
                            </td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[#ff6467] text-white border-black/1 border-0 border-solid">
                                4
                              </Badge>
                            </td>
                            <td className="text-[#9f9fa9] p-2.5">3m ago</td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <span className="size-2 bg-[oklch(0.852_0.16_91)] shadow-[0_0_6px_oklch(0.852_0.16_91)] rounded-full" />
                                Maintenance
                              </span>
                            </td>
                          </tr>
                          <tr className="transition-colors border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-2.5">
                              <Checkbox className="border-white/10 border-0 border-solid" />
                            </td>
                            <td className="text-[oklch(0.696_0.17_262.881)] font-mono p-2.5">
                              AST-0455
                            </td>
                            <td className="font-medium p-2.5">AWS-EC2-455</td>
                            <td className="font-mono text-[#9f9fa9] p-2.5">
                              172.31.8.5
                            </td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <Cloud className="size-3.5 text-[oklch(0.696_0.17_162.48)]" />
                                Cloud
                              </span>
                            </td>
                            <td className="p-2.5">Amazon Linux 2</td>
                            <td className="p-2.5">us-west-2</td>
                            <td className="p-2.5">CloudOps</td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[oklch(0.769_0.188_70.08/.2)] text-[oklch(0.769_0.188_70.08)] border-black/1 border-0 border-solid">
                                66
                              </Badge>
                            </td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[#ff6467] text-white border-black/1 border-0 border-solid">
                                2
                              </Badge>
                            </td>
                            <td className="text-[#9f9fa9] p-2.5">8m ago</td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <span className="size-2 bg-[oklch(0.696_0.17_162.48)] shadow-[0_0_6px_oklch(0.696_0.17_162.48)] rounded-full" />
                                Online
                              </span>
                            </td>
                          </tr>
                          <tr className="transition-colors border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-2.5">
                              <Checkbox className="border-white/10 border-0 border-solid" />
                            </td>
                            <td className="text-[oklch(0.696_0.17_262.881)] font-mono p-2.5">
                              AST-0512
                            </td>
                            <td className="font-medium p-2.5">WIN-SRV-512</td>
                            <td className="font-mono text-[#9f9fa9] p-2.5">
                              10.4.12.51
                            </td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <Server className="size-3.5 text-[oklch(0.696_0.17_262.881)]" />
                                Server
                              </span>
                            </td>
                            <td className="p-2.5">Win Server 2022</td>
                            <td className="p-2.5">us-east-1</td>
                            <td className="p-2.5">J. Doe</td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[oklch(0.696_0.17_162.48/.2)] text-[oklch(0.696_0.17_162.48)] border-black/1 border-0 border-solid">
                                28
                              </Badge>
                            </td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-zinc-800 text-[#9f9fa9] border-black/1 border-0 border-solid">
                                0
                              </Badge>
                            </td>
                            <td className="text-[#9f9fa9] p-2.5">22m ago</td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <span className="size-2 rounded-full bg-[#9f9fa9]" />
                                Offline
                              </span>
                            </td>
                          </tr>
                          <tr className="transition-colors border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-2.5">
                              <Checkbox className="border-white/10 border-0 border-solid" />
                            </td>
                            <td className="text-[oklch(0.696_0.17_262.881)] font-mono p-2.5">
                              AST-0628
                            </td>
                            <td className="font-medium p-2.5">GCP-VM-628</td>
                            <td className="font-mono text-[#9f9fa9] p-2.5">
                              10.128.0.6
                            </td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <Cloud className="size-3.5 text-[oklch(0.696_0.17_162.48)]" />
                                Cloud
                              </span>
                            </td>
                            <td className="p-2.5">Debian 12</td>
                            <td className="p-2.5">europe-west4</td>
                            <td className="p-2.5">CloudOps</td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[oklch(0.852_0.16_91/.2)] text-[oklch(0.852_0.16_91)] border-black/1 border-0 border-solid">
                                45
                              </Badge>
                            </td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-zinc-800 text-[#9f9fa9] border-black/1 border-0 border-solid">
                                1
                              </Badge>
                            </td>
                            <td className="text-[#9f9fa9] p-2.5">5m ago</td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <span className="size-2 bg-[oklch(0.696_0.17_162.48)] shadow-[0_0_6px_oklch(0.696_0.17_162.48)] rounded-full" />
                                Online
                              </span>
                            </td>
                          </tr>
                          <tr className="transition-colors border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-2.5">
                              <Checkbox className="border-white/10 border-0 border-solid" />
                            </td>
                            <td className="text-[oklch(0.696_0.17_262.881)] font-mono p-2.5">
                              AST-0744
                            </td>
                            <td className="font-medium p-2.5">SW-DIST-744</td>
                            <td className="font-mono text-[#9f9fa9] p-2.5">
                              10.0.4.7
                            </td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <Router className="size-3.5 text-[oklch(0.769_0.188_70.08)]" />
                                Network
                              </span>
                            </td>
                            <td className="p-2.5">Cisco IOS XE</td>
                            <td className="p-2.5">DC-Dist</td>
                            <td className="p-2.5">NetOps</td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[oklch(0.769_0.188_70.08/.2)] text-[oklch(0.769_0.188_70.08)] border-black/1 border-0 border-solid">
                                63
                              </Badge>
                            </td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[#ff6467] text-white border-black/1 border-0 border-solid">
                                2
                              </Badge>
                            </td>
                            <td className="text-[#9f9fa9] p-2.5">18m ago</td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <span className="size-2 bg-[oklch(0.696_0.17_162.48)] shadow-[0_0_6px_oklch(0.696_0.17_162.48)] rounded-full" />
                                Online
                              </span>
                            </td>
                          </tr>
                          <tr className="transition-colors border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-2.5">
                              <Checkbox className="border-white/10 border-0 border-solid" />
                            </td>
                            <td className="text-[oklch(0.696_0.17_262.881)] font-mono p-2.5">
                              AST-0856
                            </td>
                            <td className="font-medium p-2.5">WS-DEV-856</td>
                            <td className="font-mono text-[#9f9fa9] p-2.5">
                              10.8.9.85
                            </td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <Laptop className="size-3.5 text-[oklch(0.627_0.265_303.9)]" />
                                Workstation
                              </span>
                            </td>
                            <td className="p-2.5">macOS 14</td>
                            <td className="p-2.5">HQ-Floor 5</td>
                            <td className="p-2.5">R. Patel</td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[oklch(0.696_0.17_162.48/.2)] text-[oklch(0.696_0.17_162.48)] border-black/1 border-0 border-solid">
                                31
                              </Badge>
                            </td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-zinc-800 text-[#9f9fa9] border-black/1 border-0 border-solid">
                                0
                              </Badge>
                            </td>
                            <td className="text-[#9f9fa9] p-2.5">42m ago</td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <span className="size-2 bg-[oklch(0.696_0.17_162.48)] shadow-[0_0_6px_oklch(0.696_0.17_162.48)] rounded-full" />
                                Online
                              </span>
                            </td>
                          </tr>
                          <tr className="transition-colors border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-2.5">
                              <Checkbox className="border-white/10 border-0 border-solid" />
                            </td>
                            <td className="text-[oklch(0.696_0.17_262.881)] font-mono p-2.5">
                              AST-0961
                            </td>
                            <td className="font-medium p-2.5">AZ-VM-961</td>
                            <td className="font-mono text-[#9f9fa9] p-2.5">
                              10.2.0.96
                            </td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <Cloud className="size-3.5 text-[oklch(0.696_0.17_162.48)]" />
                                Cloud
                              </span>
                            </td>
                            <td className="p-2.5">Win Server 2019</td>
                            <td className="p-2.5">eastus2</td>
                            <td className="p-2.5">CloudOps</td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[oklch(0.704_0.191_22.216/.2)] text-[#ff6467] border-black/1 border-0 border-solid">
                                81
                              </Badge>
                            </td>
                            <td className="text-center p-2.5">
                              <Badge className="bg-[#ff6467] text-white border-black/1 border-0 border-solid">
                                4
                              </Badge>
                            </td>
                            <td className="text-[#9f9fa9] p-2.5">11m ago</td>
                            <td className="p-2.5">
                              <span className="flex items-center gap-1.5">
                                <span className="size-2 bg-[oklch(0.696_0.17_162.48)] shadow-[0_0_6px_oklch(0.696_0.17_162.48)] rounded-full" />
                                Online
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex pt-3 justify-between items-center">
                      <span className="text-[#9f9fa9] text-xs leading-4">
                        Showing 1–10 of 3,847 assets
                      </span>
                      <div className="flex items-center gap-1">
                        <Button className="size-7 bg-zinc-800 p-0">
                          <ChevronLeft className="size-3.5" />
                        </Button>
                        <Button className="size-7 bg-[#155dfc] text-[#1c398e] text-xs leading-4 p-0">
                          1
                        </Button>
                        <Button className="size-7 bg-zinc-800 text-xs leading-4 p-0">
                          2
                        </Button>
                        <Button className="size-7 bg-zinc-800 text-xs leading-4 p-0">
                          3
                        </Button>
                        <span className="text-[#9f9fa9] text-xs leading-4 px-1">
                          ...
                        </span>
                        <Button className="size-7 bg-zinc-800 text-xs leading-4 p-0">
                          385
                        </Button>
                        <Button className="size-7 bg-zinc-800 p-0">
                          <ChevronRight className="size-3.5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-zinc-900/60 border-white/10 border-0 border-solid p-6 flex-1 gap-4">
                  <CardHeader className="p-0 gap-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <LucideAreaChart className="size-5 text-[#155dfc]" />
                        <CardTitle className="text-base leading-6">
                          Vulnerability Trend
                        </CardTitle>
                        <span className="text-[#9f9fa9] text-xs leading-4">
                          Last 30 days
                        </span>
                      </div>
                      <div className="text-[11px] flex items-center gap-3">
                        <span className="flex items-center gap-1.5">
                          <span className="size-2.5 rounded-sm bg-[#ff6467]" />
                          Critical
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="size-2.5 bg-[oklch(0.769_0.188_70.08)] rounded-sm" />
                          High
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="size-2.5 bg-[oklch(0.852_0.16_91)] rounded-sm" />
                          Medium
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 gap-0">
                    <ChartContainer className="w-full h-45" config={{}}>
                      <RechartsAreaChart
                        data={[
                          {
                            critical: 18,
                            date: "Day 1",
                            high: 160,
                            medium: 240,
                          },
                          {
                            critical: 20,
                            date: "Day 5",
                            high: 172,
                            medium: 255,
                          },
                          {
                            critical: 17,
                            date: "Day 10",
                            high: 168,
                            medium: 248,
                          },
                          {
                            critical: 22,
                            date: "Day 15",
                            high: 180,
                            medium: 262,
                          },
                          {
                            critical: 21,
                            date: "Day 20",
                            high: 175,
                            medium: 258,
                          },
                          {
                            critical: 24,
                            date: "Day 25",
                            high: 190,
                            medium: 270,
                          },
                          {
                            critical: 23,
                            date: "Day 30",
                            high: 187,
                            medium: 264,
                          },
                        ]}
                      >
                        <defs>
                          <linearGradient id="gC" x1="0" x2="0" y1="0" y2="1">
                            <stop
                              offset="5%"
                              stopColor="oklch(0.704 0.191 22.216)"
                              stopOpacity={0.6}
                            />
                            <stop
                              offset="95%"
                              stopColor="oklch(0.704 0.191 22.216)"
                              stopOpacity={0.05}
                            />
                          </linearGradient>
                          <linearGradient id="gH" x1="0" x2="0" y1="0" y2="1">
                            <stop
                              offset="5%"
                              stopColor="oklch(0.769 0.188 70.08)"
                              stopOpacity={0.6}
                            />
                            <stop
                              offset="95%"
                              stopColor="oklch(0.769 0.188 70.08)"
                              stopOpacity={0.05}
                            />
                          </linearGradient>
                          <linearGradient id="gM" x1="0" x2="0" y1="0" y2="1">
                            <stop
                              offset="5%"
                              stopColor="oklch(0.852 0.16 91)"
                              stopOpacity={0.6}
                            />
                            <stop
                              offset="95%"
                              stopColor="oklch(0.852 0.16 91)"
                              stopOpacity={0.05}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          stroke="oklch(1 0 0 / 8%)"
                          strokeDasharray="3 3"
                          vertical={false}
                        />
                        <XAxis
                          axisLine={false}
                          dataKey="date"
                          tick={{
                            fill: "oklch(0.705 0.015 286.067)",
                            fontSize: 11,
                          }}
                          tickLine={false}
                        />
                        <YAxis
                          axisLine={false}
                          tick={{
                            fill: "oklch(0.705 0.015 286.067)",
                            fontSize: 11,
                          }}
                          tickLine={false}
                        />
                        <ChartTooltip />
                        <Area
                          dataKey="medium"
                          fill="url(#gM)"
                          stackId="1"
                          stroke="oklch(0.852 0.16 91)"
                          strokeWidth={2}
                          type="monotone"
                        />
                        <Area
                          dataKey="high"
                          fill="url(#gH)"
                          stackId="1"
                          stroke="oklch(0.769 0.188 70.08)"
                          strokeWidth={2}
                          type="monotone"
                        />
                        <Area
                          dataKey="critical"
                          fill="url(#gC)"
                          stackId="1"
                          stroke="oklch(0.704 0.191 22.216)"
                          strokeWidth={2}
                          type="monotone"
                        />
                      </RechartsAreaChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
              <div className="min-h-0 flex flex-col gap-6 overflow-hidden">
                <Card className="backdrop-blur-sm bg-zinc-900/60 border-white/10 border-0 border-solid p-6 gap-4">
                  <CardHeader className="p-0 gap-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <FileSearch className="size-5 text-[#155dfc]" />
                        <CardTitle className="text-base leading-6">
                          Vulnerability Details
                        </CardTitle>
                      </div>
                      <Badge className="bg-[oklch(0.704_0.191_22.216/.2)] text-[#ff6467] text-[10px] border-black/1 border-0 border-solid">
                        High Risk
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 gap-4">
                    <div className="rounded-xl bg-zinc-800/50 border-white/10 border-1 border-solid flex p-4 items-center gap-4">
                      <div className="size-12 rounded-xl bg-[#155dfc]/20 flex justify-center items-center">
                        <Server className="size-6 text-[oklch(0.696_0.17_262.881)]" />
                      </div>
                      <div className="flex flex-col flex-1 gap-0.5">
                        <span className="font-semibold text-sm leading-5">
                          WIN-SRV-042
                        </span>
                        <span className="font-mono text-[#9f9fa9] text-xs leading-4">
                          10.4.12.42 · Win Server 2019
                        </span>
                        <span className="text-[#9f9fa9] text-[11px]">
                          Owner: J. Doe · Last scan: 2m ago
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="relative size-16 bg-[conic-gradient(oklch(0.704_0.191_22.216)_0deg_338deg,oklch(0.274_0.006_286.033)_338deg_360deg)] rounded-full flex justify-center items-center">
                          <div className="size-12 rounded-full bg-zinc-900 flex flex-col justify-center items-center">
                            <span className="font-bold text-[#ff6467] text-base leading-6">
                              94
                            </span>
                          </div>
                        </div>
                        <span className="text-[#9f9fa9] text-[10px]">
                          Risk Score
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-sm bg-zinc-900/60 border-white/10 border-0 border-solid p-6 flex-1 gap-4 overflow-hidden">
                  <CardHeader className="p-0 gap-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Bug className="size-5 text-[#155dfc]" />
                        <CardTitle className="text-base leading-6">
                          Top Vulnerabilities
                        </CardTitle>
                      </div>
                      <span className="text-[#9f9fa9] text-xs leading-4">
                        6 of 18
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="overflow-y-auto p-0 gap-2">
                    <div className="transition-colors rounded-lg border-white/10 border-1 border-solid flex p-3 flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <a className="text-[oklch(0.696_0.17_262.881)] font-mono text-xs leading-4">
                          CVE-2024-21412
                        </a>
                        <Badge className="bg-[#ff6467] text-white text-[10px] border-black/1 border-0 border-solid">
                          9.8
                        </Badge>
                      </div>
                      <span className="font-medium text-xs leading-4">
                        SmartScreen Security Bypass
                      </span>
                      <span className="text-[#9f9fa9] text-[11px]">
                        Component: Windows Defender
                      </span>
                      <div className="flex justify-between items-center">
                        <Badge className="bg-[oklch(0.704_0.191_22.216/.2)] text-[#ff6467] text-[10px] border-black/1 border-0 border-solid gap-1">
                          <Flame className="size-3" />
                          Exploit Available
                        </Badge>
                        <Button className="bg-[#155dfc] text-[#1c398e] text-[11px] px-2 h-6">
                          Remediate
                        </Button>
                      </div>
                    </div>
                    <div className="transition-colors rounded-lg border-white/10 border-1 border-solid flex p-3 flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <a className="text-[oklch(0.696_0.17_262.881)] font-mono text-xs leading-4">
                          CVE-2024-38063
                        </a>
                        <Badge className="bg-[#ff6467] text-white text-[10px] border-black/1 border-0 border-solid">
                          9.8
                        </Badge>
                      </div>
                      <span className="font-medium text-xs leading-4">
                        TCP/IP Remote Code Execution
                      </span>
                      <span className="text-[#9f9fa9] text-[11px]">
                        Component: IPv6 Stack
                      </span>
                      <div className="flex justify-between items-center">
                        <Badge className="bg-[oklch(0.704_0.191_22.216/.2)] text-[#ff6467] text-[10px] border-black/1 border-0 border-solid gap-1">
                          <Flame className="size-3" />
                          Exploit Available
                        </Badge>
                        <Button className="bg-[#155dfc] text-[#1c398e] text-[11px] px-2 h-6">
                          Remediate
                        </Button>
                      </div>
                    </div>
                    <div className="transition-colors rounded-lg border-white/10 border-1 border-solid flex p-3 flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <a className="text-[oklch(0.696_0.17_262.881)] font-mono text-xs leading-4">
                          CVE-2024-30040
                        </a>
                        <Badge className="bg-[oklch(0.769_0.188_70.08)] text-white text-[10px] border-black/1 border-0 border-solid">
                          8.8
                        </Badge>
                      </div>
                      <span className="font-medium text-xs leading-4">
                        OLE Mitigation Bypass
                      </span>
                      <span className="text-[#9f9fa9] text-[11px]">
                        Component: MSHTML Platform
                      </span>
                      <div className="flex justify-between items-center">
                        <Badge className="bg-[oklch(0.704_0.191_22.216/.2)] text-[#ff6467] text-[10px] border-black/1 border-0 border-solid gap-1">
                          <Flame className="size-3" />
                          Exploit Available
                        </Badge>
                        <Button className="bg-[#155dfc] text-[#1c398e] text-[11px] px-2 h-6">
                          Remediate
                        </Button>
                      </div>
                    </div>
                    <div className="transition-colors rounded-lg border-white/10 border-1 border-solid flex p-3 flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <a className="text-[oklch(0.696_0.17_262.881)] font-mono text-xs leading-4">
                          CVE-2024-26169
                        </a>
                        <Badge className="bg-[oklch(0.769_0.188_70.08)] text-white text-[10px] border-black/1 border-0 border-solid">
                          7.8
                        </Badge>
                      </div>
                      <span className="font-medium text-xs leading-4">
                        Error Reporting Privilege Esc.
                      </span>
                      <span className="text-[#9f9fa9] text-[11px]">
                        Component: WerKernel.sys
                      </span>
                      <div className="flex justify-between items-center">
                        <Badge className="bg-zinc-800 text-[#9f9fa9] text-[10px] border-black/1 border-0 border-solid gap-1">
                          <ShieldOff className="size-3" />
                          No Known Exploit
                        </Badge>
                        <Button className="bg-[#155dfc] text-[#1c398e] text-[11px] px-2 h-6">
                          Remediate
                        </Button>
                      </div>
                    </div>
                    <div className="transition-colors rounded-lg border-white/10 border-1 border-solid flex p-3 flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <a className="text-[oklch(0.696_0.17_262.881)] font-mono text-xs leading-4">
                          CVE-2024-21351
                        </a>
                        <Badge className="bg-[oklch(0.769_0.188_70.08)] text-white text-[10px] border-black/1 border-0 border-solid">
                          7.6
                        </Badge>
                      </div>
                      <span className="font-medium text-xs leading-4" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
