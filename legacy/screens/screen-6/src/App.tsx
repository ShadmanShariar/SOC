import { useEffect } from "react";
import {
  AlertTriangle,
  BadgeCheck,
  Bell,
  Box,
  Boxes,
  Bug,
  Check,
  CheckCircle,
  ChevronDown,
  Cloud,
  CreditCard,
  Database,
  FileText,
  Globe,
  HardDrive,
  HeartPulse,
  KeyRound,
  Landmark,
  Layers,
  LayoutDashboard,
  Network,
  Scale,
  Search,
  Server,
  Settings,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldX,
  TrendingUp,
  UserCircle,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function App() {
  return (
    <div>
      <div className="bg-zinc-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="min-h-[1080px] flex w-full">
          <aside className="shrink-0 bg-zinc-900 border-white/10 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex p-6 flex-col gap-6 w-65">
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-lg bg-[#155dfc] flex justify-center items-center">
                <ShieldCheck className="size-5 text-[#1c398e]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm leading-5 tracking-tight">
                  SentinelAI
                </span>
                <span className="text-[#9f9fa9] text-[11px]">SOC Platform</span>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2.5 items-center gap-3">
                <LayoutDashboard className="size-4" />
                <span>Dashboard</span>
              </a>
              <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2.5 items-center gap-3">
                <Shield className="size-4" />
                <span>Security Monitoring</span>
              </a>
              <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2.5 items-center gap-3">
                <AlertTriangle className="size-4" />
                <span>Threat Detection</span>
              </a>
              <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2.5 items-center gap-3">
                <Zap className="size-4" />
                <span>Incident Response</span>
              </a>
              <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2.5 items-center gap-3">
                <Search className="size-4" />
                <span>Threat Hunting</span>
              </a>
              <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2.5 items-center gap-3">
                <Server className="size-4" />
                <span>Asset Inventory</span>
              </a>
              <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2.5 items-center gap-3">
                <Bug className="size-4" />
                <span>Vulnerability Management</span>
              </a>
              <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2.5 items-center gap-3">
                <Users className="size-4" />
                <span>User Behavior Analytics</span>
              </a>
              <a className="shadow-[0_0_20px_oklch(0.546_0.245_262.881/0.4)] font-medium rounded-lg bg-[#155dfc] text-[#1c398e] text-sm leading-5 flex px-3 py-2.5 items-center gap-3">
                <Cloud className="size-4" />
                <span>Cloud Security</span>
              </a>
              <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2.5 items-center gap-3">
                <CheckCircle className="size-4" />
                <span>Compliance</span>
              </a>
              <a className="transition-colors rounded-lg text-neutral-50/70 text-sm leading-5 flex px-3 py-2.5 items-center gap-3">
                <FileText className="size-4" />
                <span>Log Management</span>
              </a>
            </nav>
            <div className="rounded-lg bg-zinc-800/40 border-white/10 border-1 border-solid flex mt-auto p-3 items-center gap-3">
              <UserCircle className="size-8 text-[#9f9fa9]" />
              <div className="flex flex-col">
                <span className="font-medium text-xs leading-4">A. Reyes</span>
                <span className="text-[#9f9fa9] text-[11px]">SOC Analyst</span>
              </div>
            </div>
          </aside>
          <div className="min-w-0 flex flex-col flex-1">
            <header className="shrink-0 bg-zinc-900 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-8 justify-between items-center h-16">
              <div className="flex items-center gap-3">
                <Cloud className="size-5 text-[#155dfc]" />
                <h1 className="font-semibold text-base leading-6 tracking-tight">{`Cloud Security & Compliance`}</h1>
                <Badge className="bg-[#00bc7d]/15 text-[#00bc7d] gap-1">
                  <span className="size-1.5 rounded-full bg-[#00bc7d]" />
                  Live
                </Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-zinc-800/40 border-white/15 border-1 border-solid flex px-3 items-center gap-2 w-72 h-9">
                  <Search className="size-4 text-[#9f9fa9]" />
                  <span className="text-[#9f9fa9] text-sm leading-5">
                    Search resources, findings...
                  </span>
                </div>
                <Button
                  className="size-9 border-white/10 border-0 border-solid"
                  size="icon"
                  variant="outline"
                >
                  <Bell className="size-4" />
                </Button>
                <Button
                  className="size-9 border-white/10 border-0 border-solid"
                  size="icon"
                  variant="outline"
                >
                  <Settings className="size-4" />
                </Button>
              </div>
            </header>
            <main className="flex p-8 flex-col flex-1 gap-8">
              <section className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <ShieldAlert className="size-5 text-[#155dfc]" />
                    <h2 className="font-semibold text-lg leading-7 tracking-tight">
                      Cloud Security Posture Management (CSPM)
                    </h2>
                  </div>
                  <div className="rounded-lg bg-zinc-900 border-white/10 border-1 border-solid flex p-1 items-center gap-1">
                    <button className="font-medium rounded-md bg-[#fe9a00]/20 text-[#fe9a00] text-sm leading-5 flex px-3 py-1.5 items-center gap-1.5">
                      <Box className="size-3.5" />
                      AWS
                    </button>
                    <button className="transition-colors rounded-md text-[#9f9fa9] text-sm leading-5 flex px-3 py-1.5 items-center gap-1.5">
                      <Box className="size-3.5 text-[#1447e6]" />
                      Azure
                    </button>
                    <button className="transition-colors rounded-md text-[#9f9fa9] text-sm leading-5 flex px-3 py-1.5 items-center gap-1.5">
                      <Box className="size-3.5 text-[#00bc7d]" />
                      GCP
                    </button>
                    <button className="transition-colors rounded-md text-[#9f9fa9] text-sm leading-5 flex px-3 py-1.5 items-center gap-1.5">
                      <Layers className="size-3.5" />
                      Multi-Cloud
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-10 gap-6">
                  <Card className="col-span-3 backdrop-blur-sm bg-zinc-900/80 border-white/10 border-0 border-solid p-6 gap-4">
                    <CardHeader className="p-0 gap-0">
                      <CardTitle className="font-semibold text-sm leading-5">
                        Cloud Security Score
                      </CardTitle>
                      <CardDescription className="text-xs leading-4">
                        Overall posture · AWS
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col items-center gap-4">
                      <div className="relative size-44 flex justify-center items-center">
                        <div className="bg-[conic-gradient(from_135deg,oklch(0.704_0.191_22.216)_0deg,oklch(0.769_0.188_70.08)_120deg,oklch(0.696_0.17_162.48)_240deg,oklch(0.274_0.006_286.033)_266deg,oklch(0.274_0.006_286.033)_360deg)] rounded-full absolute inset-0" />
                        <div className="rounded-full bg-zinc-900 absolute inset-3.5" />
                        <div className="relative flex flex-col items-center">
                          <span className="font-bold text-4xl leading-10 tracking-tight">
                            74
                          </span>
                          <span className="text-[#9f9fa9] text-xs leading-4">
                            / 100
                          </span>
                          <span className="font-medium text-[#fe9a00] text-[11px] mt-1">
                            Moderate Risk
                          </span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-zinc-800/30 border-white/10 border-1 border-solid flex px-3 py-2 justify-between items-center w-full">
                        <span className="text-[#9f9fa9] text-xs leading-4">
                          vs last week
                        </span>
                        <span className="font-medium text-[#00bc7d] text-xs leading-4 flex items-center gap-1">
                          <TrendingUp className="size-3.5" />
                          +6 pts
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="grid grid-cols-2 p-0 gap-2">
                      <div className="rounded-lg bg-zinc-800/30 border-white/10 border-1 border-solid flex p-3 flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5">
                            <Box className="size-3.5 text-[#fe9a00]" />
                            <span className="font-medium text-xs leading-4">
                              AWS
                            </span>
                          </div>
                          <span className="text-[#9f9fa9] text-[11px]">
                            12 acct
                          </span>
                        </div>
                        <span className="text-[#9f9fa9] text-[11px]">
                          3,204 resources
                        </span>
                        <div className="rounded-full bg-zinc-800 w-full h-1.5 overflow-hidden">
                          <div className="w-[78%] rounded-full bg-[#00bc7d] h-full" />
                        </div>
                      </div>
                      <div className="rounded-lg bg-zinc-800/30 border-white/10 border-1 border-solid flex p-3 flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5">
                            <Box className="size-3.5 text-[#1447e6]" />
                            <span className="font-medium text-xs leading-4">
                              Azure
                            </span>
                          </div>
                          <span className="text-[#9f9fa9] text-[11px]">
                            8 acct
                          </span>
                        </div>
                        <span className="text-[#9f9fa9] text-[11px]">
                          1,892 resources
                        </span>
                        <div className="rounded-full bg-zinc-800 w-full h-1.5 overflow-hidden">
                          <div className="w-[64%] rounded-full bg-[#fe9a00] h-full" />
                        </div>
                      </div>
                      <div className="rounded-lg bg-zinc-800/30 border-white/10 border-1 border-solid flex p-3 flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5">
                            <Box className="size-3.5 text-[#00bc7d]" />
                            <span className="font-medium text-xs leading-4">
                              GCP
                            </span>
                          </div>
                          <span className="text-[#9f9fa9] text-[11px]">
                            5 acct
                          </span>
                        </div>
                        <span className="text-[#9f9fa9] text-[11px]">
                          967 resources
                        </span>
                        <div className="rounded-full bg-zinc-800 w-full h-1.5 overflow-hidden">
                          <div className="w-[82%] rounded-full bg-[#00bc7d] h-full" />
                        </div>
                      </div>
                      <div className="rounded-lg bg-zinc-800/30 border-white/10 border-1 border-solid flex p-3 flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5">
                            <Layers className="size-3.5 text-[#ad46ff]" />
                            <span className="font-medium text-xs leading-4">
                              Other
                            </span>
                          </div>
                          <span className="text-[#9f9fa9] text-[11px]">
                            3 acct
                          </span>
                        </div>
                        <span className="text-[#9f9fa9] text-[11px]">
                          412 resources
                        </span>
                        <div className="rounded-full bg-zinc-800 w-full h-1.5 overflow-hidden">
                          <div className="w-[45%] rounded-full bg-[#ff6467] h-full" />
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                  <Card className="col-span-4 backdrop-blur-sm bg-zinc-900/80 border-white/10 border-0 border-solid p-6 gap-4">
                    <CardHeader className="p-0 gap-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="font-semibold text-sm leading-5">{`Misconfiguration & Risk Findings`}</CardTitle>
                        <span className="text-[#9f9fa9] text-xs leading-4">
                          2,001 checks
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="rounded-lg bg-[#ff6467]/10 border-[#ff6467]/30 border-1 border-solid flex p-2 flex-col gap-0.5">
                          <span className="font-bold text-[#ff6467] text-lg leading-7">
                            8
                          </span>
                          <span className="text-[#9f9fa9] text-[10px]">
                            Critical
                          </span>
                        </div>
                        <div className="rounded-lg bg-[#fe9a00]/10 border-[#fe9a00]/30 border-1 border-solid flex p-2 flex-col gap-0.5">
                          <span className="font-bold text-[#fe9a00] text-lg leading-7">
                            34
                          </span>
                          <span className="text-[#9f9fa9] text-[10px]">
                            High
                          </span>
                        </div>
                        <div className="rounded-lg bg-yellow-500/10 border-yellow-500/30 border-1 border-solid flex p-2 flex-col gap-0.5">
                          <span className="font-bold text-yellow-400 text-lg leading-7">
                            112
                          </span>
                          <span className="text-[#9f9fa9] text-[10px]">
                            Medium
                          </span>
                        </div>
                        <div className="rounded-lg bg-[#00bc7d]/10 border-[#00bc7d]/30 border-1 border-solid flex p-2 flex-col gap-0.5">
                          <span className="font-bold text-[#00bc7d] text-lg leading-7">
                            1,847
                          </span>
                          <span className="text-[#9f9fa9] text-[10px]">
                            Passed
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="max-h-[340px] overflow-y-auto flex p-0 flex-col gap-2">
                      <div className="transition-colors rounded-lg bg-zinc-800/30 border-[#ff6467]/20 border-1 border-solid flex p-3 flex-col gap-2">
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-[#ff6467]/20 text-[#ff6467] text-[10px]">
                              CRITICAL
                            </Badge>
                            <Box className="size-3.5 text-[#fe9a00]" />
                            <Database className="size-3.5 text-[#9f9fa9]" />
                          </div>
                          <span className="text-[#9f9fa9] text-[10px]">
                            us-east-1
                          </span>
                        </div>
                        <span className="font-medium text-sm leading-5">
                          S3 Bucket Publicly Accessible
                        </span>
                        <span className="font-mono text-[#9f9fa9] text-[11px]">
                          arn:aws:s3:::prod-data-archive-7f3
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            className="bg-[#155dfc] text-xs leading-4 px-2.5 gap-1 h-7"
                            size="sm"
                          >
                            <Wrench className="size-3" />
                            Remediate
                          </Button>
                          <Button
                            className="text-xs leading-4 border-white/10 border-0 border-solid px-2.5 h-7"
                            size="sm"
                            variant="outline"
                          >
                            Suppress
                          </Button>
                        </div>
                      </div>
                      <div className="transition-colors rounded-lg bg-zinc-800/30 border-[#ff6467]/20 border-1 border-solid flex p-3 flex-col gap-2">
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-[#ff6467]/20 text-[#ff6467] text-[10px]">
                              CRITICAL
                            </Badge>
                            <Box className="size-3.5 text-[#fe9a00]" />
                            <KeyRound className="size-3.5 text-[#9f9fa9]" />
                          </div>
                          <span className="text-[#9f9fa9] text-[10px]">
                            global
                          </span>
                        </div>
                        <span className="font-medium text-sm leading-5">
                          IAM Root Account MFA Disabled
                        </span>
                        <span className="font-mono text-[#9f9fa9] text-[11px]">
                          account:902817364521
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            className="bg-[#155dfc] text-xs leading-4 px-2.5 gap-1 h-7"
                            size="sm"
                          >
                            <Wrench className="size-3" />
                            Remediate
                          </Button>
                          <Button
                            className="text-xs leading-4 border-white/10 border-0 border-solid px-2.5 h-7"
                            size="sm"
                            variant="outline"
                          >
                            Suppress
                          </Button>
                        </div>
                      </div>
                      <div className="transition-colors rounded-lg bg-zinc-800/30 border-[#ff6467]/20 border-1 border-solid flex p-3 flex-col gap-2">
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-[#ff6467]/20 text-[#ff6467] text-[10px]">
                              CRITICAL
                            </Badge>
                            <Box className="size-3.5 text-[#fe9a00]" />
                            <Network className="size-3.5 text-[#9f9fa9]" />
                          </div>
                          <span className="text-[#9f9fa9] text-[10px]">
                            us-west-2
                          </span>
                        </div>
                        <span className="font-medium text-sm leading-5">
                          Security Group Allows 0.0.0.0/0
                        </span>
                        <span className="font-mono text-[#9f9fa9] text-[11px]">
                          sg-0a1b2c3d4e5f6g7h8
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            className="bg-[#155dfc] text-xs leading-4 px-2.5 gap-1 h-7"
                            size="sm"
                          >
                            <Wrench className="size-3" />
                            Remediate
                          </Button>
                          <Button
                            className="text-xs leading-4 border-white/10 border-0 border-solid px-2.5 h-7"
                            size="sm"
                            variant="outline"
                          >
                            Suppress
                          </Button>
                        </div>
                      </div>
                      <div className="transition-colors rounded-lg bg-zinc-800/30 border-[#fe9a00]/20 border-1 border-solid flex p-3 flex-col gap-2">
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-[#fe9a00]/20 text-[#fe9a00] text-[10px]">
                              HIGH
                            </Badge>
                            <Box className="size-3.5 text-[#fe9a00]" />
                            <HardDrive className="size-3.5 text-[#9f9fa9]" />
                          </div>
                          <span className="text-[#9f9fa9] text-[10px]">
                            eu-central-1
                          </span>
                        </div>
                        <span className="font-medium text-sm leading-5">
                          EBS Volume Not Encrypted At Rest
                        </span>
                        <span className="font-mono text-[#9f9fa9] text-[11px]">
                          vol-0f8e7d6c5b4a3210
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            className="bg-[#155dfc] text-xs leading-4 px-2.5 gap-1 h-7"
                            size="sm"
                          >
                            <Wrench className="size-3" />
                            Remediate
                          </Button>
                          <Button
                            className="text-xs leading-4 border-white/10 border-0 border-solid px-2.5 h-7"
                            size="sm"
                            variant="outline"
                          >
                            Suppress
                          </Button>
                        </div>
                      </div>
                      <div className="transition-colors rounded-lg bg-zinc-800/30 border-[#fe9a00]/20 border-1 border-solid flex p-3 flex-col gap-2">
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-[#fe9a00]/20 text-[#fe9a00] text-[10px]">
                              HIGH
                            </Badge>
                            <Box className="size-3.5 text-[#fe9a00]" />
                            <FileText className="size-3.5 text-[#9f9fa9]" />
                          </div>
                          <span className="text-[#9f9fa9] text-[10px]">
                            us-east-1
                          </span>
                        </div>
                        <span className="font-medium text-sm leading-5">
                          CloudTrail Logging Disabled In Region
                        </span>
                        <span className="font-mono text-[#9f9fa9] text-[11px]">
                          trail:org-audit-main
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            className="bg-[#155dfc] text-xs leading-4 px-2.5 gap-1 h-7"
                            size="sm"
                          >
                            <Wrench className="size-3" />
                            Remediate
                          </Button>
                          <Button
                            className="text-xs leading-4 border-white/10 border-0 border-solid px-2.5 h-7"
                            size="sm"
                            variant="outline"
                          >
                            Suppress
                          </Button>
                        </div>
                      </div>
                      <div className="transition-colors rounded-lg bg-zinc-800/30 border-[#fe9a00]/20 border-1 border-solid flex p-3 flex-col gap-2">
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-[#fe9a00]/20 text-[#fe9a00] text-[10px]">
                              HIGH
                            </Badge>
                            <Box className="size-3.5 text-[#fe9a00]" />
                            <Database className="size-3.5 text-[#9f9fa9]" />
                          </div>
                          <span className="text-[#9f9fa9] text-[10px]">
                            ap-south-1
                          </span>
                        </div>
                        <span className="font-medium text-sm leading-5">
                          RDS Instance Publicly Accessible
                        </span>
                        <span className="font-mono text-[#9f9fa9] text-[11px]">
                          db-prod-payments-01
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            className="bg-[#155dfc] text-xs leading-4 px-2.5 gap-1 h-7"
                            size="sm"
                          >
                            <Wrench className="size-3" />
                            Remediate
                          </Button>
                          <Button
                            className="text-xs leading-4 border-white/10 border-0 border-solid px-2.5 h-7"
                            size="sm"
                            variant="outline"
                          >
                            Suppress
                          </Button>
                        </div>
                      </div>
                      <div className="transition-colors rounded-lg bg-zinc-800/30 border-[#fe9a00]/20 border-1 border-solid flex p-3 flex-col gap-2">
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-[#fe9a00]/20 text-[#fe9a00] text-[10px]">
                              HIGH
                            </Badge>
                            <Box className="size-3.5 text-[#fe9a00]" />
                            <KeyRound className="size-3.5 text-[#9f9fa9]" />
                          </div>
                          <span className="text-[#9f9fa9] text-[10px]">
                            global
                          </span>
                        </div>
                        <span className="font-medium text-sm leading-5">{`Access Keys Not Rotated > 90 Days`}</span>
                        <span className="font-mono text-[#9f9fa9] text-[11px]">
                          user:svc-deploy-bot
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            className="bg-[#155dfc] text-xs leading-4 px-2.5 gap-1 h-7"
                            size="sm"
                          >
                            <Wrench className="size-3" />
                            Remediate
                          </Button>
                          <Button
                            className="text-xs leading-4 border-white/10 border-0 border-solid px-2.5 h-7"
                            size="sm"
                            variant="outline"
                          >
                            Suppress
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="col-span-3 backdrop-blur-sm bg-zinc-900/80 border-white/10 border-0 border-solid p-6 gap-4">
                    <CardHeader className="p-0 flex-row justify-between items-center gap-0">
                      <CardTitle className="font-semibold text-sm leading-5">
                        Cloud Resource Topology
                      </CardTitle>
                      <Badge className="bg-[#ff6467]/15 text-[#ff6467] text-[10px] gap-1">
                        <AlertTriangle className="size-3" />3 at risk
                      </Badge>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-3">
                      <div className="relative bg-[radial-gradient(circle_at_50%_30%,oklch(0.274_0.006_286.033/0.6),oklch(0.141_0.005_285.823))] rounded-lg border-white/10 border-1 border-solid p-4 flex-1 overflow-hidden">
                        <div className="flex flex-col gap-3">
                          <div className="rounded-lg bg-[#1447e6]/5 border-[#1447e6]/40 border-1 border-dashed p-3">
                            <span className="font-medium text-[#1447e6] text-[10px] flex mb-2 items-center gap-1">
                              <Cloud className="size-3" />
                              VPC · 10.0.0.0/16
                            </span>
                            <div className="flex gap-2">
                              <div className="rounded-md bg-[#00bc7d]/5 border-[#00bc7d]/30 border-1 border-solid p-2 flex-1">
                                <span className="block text-[#9f9fa9] text-[9px] mb-1.5">
                                  Public Subnet
                                </span>
                                <div className="flex gap-1.5">
                                  <div className="size-7 rounded-sm bg-zinc-800 flex justify-center items-center">
                                    <Server className="size-3.5 text-[#00bc7d]" />
                                  </div>
                                  <div className="relative size-7 ring-2 ring-destructive rounded-sm bg-zinc-800 flex justify-center items-center">
                                    <Server className="size-3.5 text-[#ff6467]" />
                                    <span className="size-2 animate-pulse rounded-full bg-[#ff6467] absolute -right-1 -top-1" />
                                  </div>
                                </div>
                              </div>
                              <div className="rounded-md bg-[#ad46ff]/5 border-[#ad46ff]/30 border-1 border-solid p-2 flex-1">
                                <span className="block text-[#9f9fa9] text-[9px] mb-1.5">
                                  Private Subnet
                                </span>
                                <div className="flex gap-1.5">
                                  <div className="size-7 rounded-sm bg-zinc-800 flex justify-center items-center">
                                    <Database className="size-3.5 text-[#ad46ff]" />
                                  </div>
                                  <div className="relative size-7 ring-2 ring-destructive rounded-sm bg-zinc-800 flex justify-center items-center">
                                    <Database className="size-3.5 text-[#ff6467]" />
                                    <span className="size-2 animate-pulse rounded-full bg-[#ff6467] absolute -right-1 -top-1" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="rounded-lg bg-[#fe9a00]/5 border-[#fe9a00]/40 border-1 border-dashed p-3">
                            <span className="font-medium text-[#fe9a00] text-[10px] flex mb-2 justify-between items-center">
                              <span className="flex items-center gap-1">
                                <ShieldX className="size-3" />
                                Security Group · open
                              </span>
                              <span className="size-2 animate-pulse rounded-full bg-[#ff6467]" />
                            </span>
                            <div className="flex gap-1.5">
                              <div className="size-7 rounded-sm bg-zinc-800 flex justify-center items-center">
                                <Network className="size-3.5 text-[#fe9a00]" />
                              </div>
                              <div className="size-7 rounded-sm bg-zinc-800 flex justify-center items-center">
                                <Boxes className="size-3.5 text-[#fe9a00]" />
                              </div>
                              <div className="size-7 rounded-sm bg-zinc-800 flex justify-center items-center">
                                <Globe className="size-3.5 text-[#fe9a00]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-zinc-800/30 border-white/10 border-1 border-solid flex p-2.5 flex-wrap items-center gap-x-3 gap-y-1.5">
                        <span className="text-[#9f9fa9] text-[10px] flex items-center gap-1">
                          <span className="size-2 rounded-full bg-[#00bc7d]" />
                          Healthy
                        </span>
                        <span className="text-[#9f9fa9] text-[10px] flex items-center gap-1">
                          <span className="size-2 rounded-full bg-[#ff6467]" />
                          Misconfigured
                        </span>
                        <span className="text-[#9f9fa9] text-[10px] flex items-center gap-1">
                          <span className="size-2 rounded-full bg-[#1447e6]" />
                          VPC/VNet
                        </span>
                        <span className="text-[#9f9fa9] text-[10px] flex items-center gap-1">
                          <span className="size-2 rounded-full bg-[#fe9a00]" />
                          Sec Group
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
              <div className="bg-white/10 w-full h-px" />
              <section className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-5 text-[#155dfc]" />
                  <h2 className="font-semibold text-lg leading-7 tracking-tight">
                    Compliance Dashboard — Regulatory Frameworks
                  </h2>
                </div>
                <div className="grid grid-cols-10 gap-6">
                  <Card className="col-span-4 backdrop-blur-sm bg-zinc-900/80 border-white/10 border-0 border-solid p-6 gap-4">
                    <CardHeader className="p-0 gap-0">
                      <CardTitle className="font-semibold text-sm leading-5">
                        Framework Compliance Overview
                      </CardTitle>
                      <CardDescription className="text-xs leading-4">
                        6 active regulatory frameworks
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-3">
                      <div className="rounded-lg bg-zinc-800/30 border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                        <div className="size-9 shrink-0 rounded-lg bg-[#00bc7d]/15 flex justify-center items-center">
                          <BadgeCheck className="size-4 text-[#00bc7d]" />
                        </div>
                        <div className="flex flex-col flex-1 gap-1">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm leading-5">
                              SOC 2 Type II
                            </span>
                            <span className="font-semibold text-[#00bc7d] text-xs leading-4">
                              94%
                            </span>
                          </div>
                          <div className="rounded-full bg-zinc-800 w-full h-1.5 overflow-hidden">
                            <div className="w-[94%] rounded-full bg-[#00bc7d] h-full" />
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#9f9fa9] text-[10px]">
                              147/156 controls
                            </span>
                            <span className="text-[#9f9fa9] text-[10px]">
                              Jun 12, 2025
                            </span>
                          </div>
                        </div>
                        <Button
                          className="text-[11px] border-white/10 border-0 border-solid px-2 h-7"
                          size="sm"
                          variant="outline"
                        >
                          View
                        </Button>
                      </div>
                      <div className="rounded-lg bg-zinc-800/30 border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                        <div className="size-9 shrink-0 rounded-lg bg-[#00bc7d]/15 flex justify-center items-center">
                          <ShieldCheck className="size-4 text-[#00bc7d]" />
                        </div>
                        <div className="flex flex-col flex-1 gap-1">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm leading-5">
                              ISO 27001
                            </span>
                            <span className="font-semibold text-[#00bc7d] text-xs leading-4">
                              91%
                            </span>
                          </div>
                          <div className="rounded-full bg-zinc-800 w-full h-1.5 overflow-hidden">
                            <div className="w-[91%] rounded-full bg-[#00bc7d] h-full" />
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#9f9fa9] text-[10px]">
                              102/112 controls
                            </span>
                            <span className="text-[#9f9fa9] text-[10px]">
                              May 28, 2025
                            </span>
                          </div>
                        </div>
                        <Button
                          className="text-[11px] border-white/10 border-0 border-solid px-2 h-7"
                          size="sm"
                          variant="outline"
                        >
                          View
                        </Button>
                      </div>
                      <div className="rounded-lg bg-zinc-800/30 border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                        <div className="size-9 shrink-0 rounded-lg bg-[#fe9a00]/15 flex justify-center items-center">
                          <CreditCard className="size-4 text-[#fe9a00]" />
                        </div>
                        <div className="flex flex-col flex-1 gap-1">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm leading-5">
                              PCI-DSS
                            </span>
                            <span className="font-semibold text-[#fe9a00] text-xs leading-4">
                              82%
                            </span>
                          </div>
                          <div className="rounded-full bg-zinc-800 w-full h-1.5 overflow-hidden">
                            <div className="w-[82%] rounded-full bg-[#fe9a00] h-full" />
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#9f9fa9] text-[10px]">
                              98/120 controls
                            </span>
                            <span className="text-[#9f9fa9] text-[10px]">
                              Jun 03, 2025
                            </span>
                          </div>
                        </div>
                        <Button
                          className="text-[11px] border-white/10 border-0 border-solid px-2 h-7"
                          size="sm"
                          variant="outline"
                        >
                          View
                        </Button>
                      </div>
                      <div className="rounded-lg bg-zinc-800/30 border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                        <div className="size-9 shrink-0 rounded-lg bg-[#fe9a00]/15 flex justify-center items-center">
                          <HeartPulse className="size-4 text-[#fe9a00]" />
                        </div>
                        <div className="flex flex-col flex-1 gap-1">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm leading-5">
                              HIPAA
                            </span>
                            <span className="font-semibold text-[#fe9a00] text-xs leading-4">
                              76%
                            </span>
                          </div>
                          <div className="rounded-full bg-zinc-800 w-full h-1.5 overflow-hidden">
                            <div className="w-[76%] rounded-full bg-[#fe9a00] h-full" />
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#9f9fa9] text-[10px]">
                              68/89 controls
                            </span>
                            <span className="text-[#9f9fa9] text-[10px]">
                              Apr 19, 2025
                            </span>
                          </div>
                        </div>
                        <Button
                          className="text-[11px] border-white/10 border-0 border-solid px-2 h-7"
                          size="sm"
                          variant="outline"
                        >
                          View
                        </Button>
                      </div>
                      <div className="rounded-lg bg-zinc-800/30 border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                        <div className="size-9 shrink-0 rounded-lg bg-[#00bc7d]/15 flex justify-center items-center">
                          <Landmark className="size-4 text-[#00bc7d]" />
                        </div>
                        <div className="flex flex-col flex-1 gap-1">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm leading-5">
                              NIST CSF
                            </span>
                            <span className="font-semibold text-[#00bc7d] text-xs leading-4">
                              90%
                            </span>
                          </div>
                          <div className="rounded-full bg-zinc-800 w-full h-1.5 overflow-hidden">
                            <div className="w-[90%] rounded-full bg-[#00bc7d] h-full" />
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#9f9fa9] text-[10px]">
                              98/108 controls
                            </span>
                            <span className="text-[#9f9fa9] text-[10px]">
                              Jun 08, 2025
                            </span>
                          </div>
                        </div>
                        <Button
                          className="text-[11px] border-white/10 border-0 border-solid px-2 h-7"
                          size="sm"
                          variant="outline"
                        >
                          View
                        </Button>
                      </div>
                      <div className="rounded-lg bg-zinc-800/30 border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                        <div className="size-9 shrink-0 rounded-lg bg-[#ff6467]/15 flex justify-center items-center">
                          <Scale className="size-4 text-[#ff6467]" />
                        </div>
                        <div className="flex flex-col flex-1 gap-1">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm leading-5">
                              GDPR
                            </span>
                            <span className="font-semibold text-[#ff6467] text-xs leading-4">
                              68%
                            </span>
                          </div>
                          <div className="rounded-full bg-zinc-800 w-full h-1.5 overflow-hidden">
                            <div className="w-[68%] rounded-full bg-[#ff6467] h-full" />
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#9f9fa9] text-[10px]">
                              54/79 controls
                            </span>
                            <span className="text-[#9f9fa9] text-[10px]">
                              Mar 30, 2025
                            </span>
                          </div>
                        </div>
                        <Button
                          className="text-[11px] border-white/10 border-0 border-solid px-2 h-7"
                          size="sm"
                          variant="outline"
                        >
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="col-span-3 backdrop-blur-sm bg-zinc-900/80 border-white/10 border-0 border-solid p-6 gap-4">
                    <CardHeader className="p-0 gap-0">
                      <CardTitle className="font-semibold text-sm leading-5">
                        Control Heatmap
                      </CardTitle>
                      <CardDescription className="text-xs leading-4">
                        Categories × Frameworks
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-2">
                      <div className="grid grid-cols-7 gap-1">
                        <span className="text-[#9f9fa9] text-[9px]" />
                        <span className="text-center text-[#9f9fa9] text-[9px]">
                          SOC2
                        </span>
                        <span className="text-center text-[#9f9fa9] text-[9px]">
                          ISO
                        </span>
                        <span className="text-center text-[#9f9fa9] text-[9px]">
                          PCI
                        </span>
                        <span className="text-center text-[#9f9fa9] text-[9px]">
                          HIPAA
                        </span>
                        <span className="text-center text-[#9f9fa9] text-[9px]">
                          NIST
                        </span>
                        <span className="text-center text-[#9f9fa9] text-[9px]">
                          GDPR
                        </span>
                        <span className="text-[#9f9fa9] text-[9px] flex items-center">
                          Access Ctrl
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          98
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          95
                        </span>
                        <span className="font-medium rounded-sm bg-[#fe9a00]/25 text-[#fe9a00] text-[9px] flex justify-center items-center h-7">
                          81
                        </span>
                        <span className="font-medium rounded-sm bg-[#fe9a00]/25 text-[#fe9a00] text-[9px] flex justify-center items-center h-7">
                          79
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          92
                        </span>
                        <span className="font-medium rounded-sm bg-[#ff6467]/25 text-[#ff6467] text-[9px] flex justify-center items-center h-7">
                          66
                        </span>
                        <span className="text-[#9f9fa9] text-[9px] flex items-center">
                          Audit Log
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          96
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          90
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          93
                        </span>
                        <span className="font-medium rounded-sm bg-[#fe9a00]/25 text-[#fe9a00] text-[9px] flex justify-center items-center h-7">
                          74
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          94
                        </span>
                        <span className="font-medium rounded-sm bg-[#fe9a00]/25 text-[#fe9a00] text-[9px] flex justify-center items-center h-7">
                          78
                        </span>
                        <span className="text-[#9f9fa9] text-[9px] flex items-center">
                          Encryption
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          99
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          97
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          95
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          91
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          96
                        </span>
                        <span className="font-medium rounded-sm bg-[#fe9a00]/25 text-[#fe9a00] text-[9px] flex justify-center items-center h-7">
                          82
                        </span>
                        <span className="text-[#9f9fa9] text-[9px] flex items-center">
                          Incident Rsp
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          91
                        </span>
                        <span className="font-medium rounded-sm bg-[#fe9a00]/25 text-[#fe9a00] text-[9px] flex justify-center items-center h-7">
                          84
                        </span>
                        <span className="font-medium rounded-sm bg-[#fe9a00]/25 text-[#fe9a00] text-[9px] flex justify-center items-center h-7">
                          77
                        </span>
                        <span className="font-medium rounded-sm bg-[#ff6467]/25 text-[#ff6467] text-[9px] flex justify-center items-center h-7">
                          62
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          90
                        </span>
                        <span className="font-medium rounded-sm bg-zinc-800 text-[#9f9fa9] text-[9px] flex justify-center items-center h-7">
                          N/A
                        </span>
                        <span className="text-[#9f9fa9] text-[9px] flex items-center">
                          Vuln Mgmt
                        </span>
                        <span className="font-medium rounded-sm bg-[#fe9a00]/25 text-[#fe9a00] text-[9px] flex justify-center items-center h-7">
                          85
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          92
                        </span>
                        <span className="font-medium rounded-sm bg-[#fe9a00]/25 text-[#fe9a00] text-[9px] flex justify-center items-center h-7">
                          80
                        </span>
                        <span className="font-medium rounded-sm bg-[#fe9a00]/25 text-[#fe9a00] text-[9px] flex justify-center items-center h-7">
                          75
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          93
                        </span>
                        <span className="font-medium rounded-sm bg-[#ff6467]/25 text-[#ff6467] text-[9px] flex justify-center items-center h-7">
                          69
                        </span>
                        <span className="text-[#9f9fa9] text-[9px] flex items-center">
                          Change Mgmt
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          93
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          90
                        </span>
                        <span className="font-medium rounded-sm bg-[#fe9a00]/25 text-[#fe9a00] text-[9px] flex justify-center items-center h-7">
                          83
                        </span>
                        <span className="font-medium rounded-sm bg-zinc-800 text-[#9f9fa9] text-[9px] flex justify-center items-center h-7">
                          N/A
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          91
                        </span>
                        <span className="font-medium rounded-sm bg-[#fe9a00]/25 text-[#fe9a00] text-[9px] flex justify-center items-center h-7">
                          73
                        </span>
                        <span className="text-[#9f9fa9] text-[9px] flex items-center">
                          Biz Cont.
                        </span>
                        <span className="font-medium rounded-sm bg-[#fe9a00]/25 text-[#fe9a00] text-[9px] flex justify-center items-center h-7">
                          88
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          94
                        </span>
                        <span className="font-medium rounded-sm bg-[#ff6467]/25 text-[#ff6467] text-[9px] flex justify-center items-center h-7">
                          64
                        </span>
                        <span className="font-medium rounded-sm bg-[#fe9a00]/25 text-[#fe9a00] text-[9px] flex justify-center items-center h-7">
                          72
                        </span>
                        <span className="font-medium rounded-sm bg-[#00bc7d]/25 text-[#00bc7d] text-[9px] flex justify-center items-center h-7">
                          90
                        </span>
                        <span className="font-medium rounded-sm bg-zinc-800 text-[#9f9fa9] text-[9px] flex justify-center items-center h-7">
                          N/A
                        </span>
                      </div>
                      <div className="rounded-lg bg-zinc-800/30 border-white/10 border-1 border-solid flex p-2.5 flex-wrap items-center gap-x-3 gap-y-1.5">
                        <span className="text-[#9f9fa9] text-[10px] flex items-center gap-1">
                          <span className="size-2 rounded-sm bg-[#00bc7d]" />
                          Compliant
                        </span>
                        <span className="text-[#9f9fa9] text-[10px] flex items-center gap-1">
                          <span className="size-2 rounded-sm bg-[#fe9a00]" />
                          Partial
                        </span>
                        <span className="text-[#9f9fa9] text-[10px] flex items-center gap-1">
                          <span className="size-2 rounded-sm bg-[#ff6467]" />
                          Non-compliant
                        </span>
                        <span className="text-[#9f9fa9] text-[10px] flex items-center gap-1">
                          <span className="size-2 rounded-sm bg-zinc-800" />
                          N/A
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="col-span-3 backdrop-blur-sm bg-zinc-900/80 border-white/10 border-0 border-solid p-6 gap-4">
                    <CardHeader className="p-0 gap-0">
                      <CardTitle className="font-semibold text-sm leading-5">
                        Report Generation
                      </CardTitle>
                      <CardDescription className="text-xs leading-4">
                        Generate Compliance Report
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-medium text-[#9f9fa9] text-[11px]">
                          Report Type
                        </label>
                        <div className="rounded-lg bg-zinc-800/40 border-white/15 border-1 border-solid flex px-3 justify-between items-center h-9">
                          <span className="text-sm leading-5">
                            Executive Summary
                          </span>
                          <ChevronDown className="size-4 text-[#9f9fa9]" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-medium text-[#9f9fa9] text-[11px]">
                          Frameworks
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="rounded-md bg-[#155dfc]/15 text-neutral-50 text-[11px] border-[#155dfc]/40 border-1 border-solid flex px-2 py-1 items-center gap-1">
                            <Check className="size-3 text-[#155dfc]" />
                            SOC 2
                          </span>
                          <span className="rounded-md bg-[#155dfc]/15 text-neutral-50 text-[11px] border-[#155dfc]/40 border-1 border-solid flex px-2 py-1 items-center gap-1">
                            <Check className="size-3 text-[#155dfc]" />
                            ISO 27001
                          </span>
                          <span className="rounded-md bg-zinc-800/40 text-[#9f9fa9] text-[11px] border-white/10 border-1 border-solid flex px-2 py-1 items-center gap-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
