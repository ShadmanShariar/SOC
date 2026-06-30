import { useEffect } from "react";
import {
  Activity,
  AlertTriangle,
  Bell,
  Bug,
  CheckCircle,
  ChevronRight,
  Clock,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileText,
  KeyRound,
  LayoutDashboard,
  Lock,
  Palette,
  Plug,
  Save,
  Search,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Timer,
  User,
  Users,
  Webhook,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div>
      <div className="min-h-screen bg-zinc-950 text-neutral-50 w-full h-fit overflow-hidden h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="min-h-screen bg-blue-600/18 text-neutral-50 flex">
          <aside className="shrink-0 bg-[linear-gradient(180deg,oklch(0.13_0.005_285.823),oklch(0.105_0.005_285.823))] border-white/10 border-t-0 border-r-1 border-b-0 border-l-0 border-solid px-2 py-3 w-16">
            <div className="shadow-[0_0_24px_rgba(37,99,235,0.18)] rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid flex justify-center items-center h-12">
              <Shield className="size-5 text-[#155dfc]" />
            </div>
            <div className="flex mt-4 flex-col gap-2">
              <div className="shadow-[0_0_24px_rgba(37,99,235,0.35)] rounded-2xl bg-[#155dfc] text-[#1c398e] flex justify-center items-center h-12">
                <Settings className="size-5" />
              </div>
              <div className="rounded-2xl bg-zinc-900 text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center h-12">
                <LayoutDashboard className="size-5" />
              </div>
              <div className="rounded-2xl bg-zinc-900 text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center h-12">
                <Shield className="size-5" />
              </div>
              <div className="rounded-2xl bg-zinc-900 text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center h-12">
                <AlertTriangle className="size-5" />
              </div>
              <div className="rounded-2xl bg-zinc-900 text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center h-12">
                <Zap className="size-5" />
              </div>
              <div className="rounded-2xl bg-zinc-900 text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center h-12">
                <Search className="size-5" />
              </div>
              <div className="rounded-2xl bg-zinc-900 text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center h-12">
                <Server className="size-5" />
              </div>
              <div className="rounded-2xl bg-zinc-900 text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center h-12">
                <Bug className="size-5" />
              </div>
              <div className="rounded-2xl bg-zinc-900 text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center h-12">
                <Users className="size-5" />
              </div>
              <div className="rounded-2xl bg-zinc-900 text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center h-12">
                <Cloud className="size-5" />
              </div>
              <div className="rounded-2xl bg-zinc-900 text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center h-12">
                <CheckCircle className="size-5" />
              </div>
              <div className="rounded-2xl bg-zinc-900 text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center h-12">
                <FileText className="size-5" />
              </div>
            </div>
          </aside>
          <div className="min-w-0 flex flex-col flex-1">
            <header className="bg-[linear-gradient(180deg,oklch(0.13_0.005_285.823),oklch(0.11_0.005_285.823))] border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 justify-between items-center h-16">
              <div className="flex items-center gap-3">
                <div className="shadow-[0_0_24px_rgba(37,99,235,0.35)] rounded-2xl bg-[#155dfc]/15 border-[#155dfc]/30 border-1 border-solid flex justify-center items-center w-11 h-11">
                  <Shield className="size-5 text-[#155dfc]" />
                </div>
                <div>
                  <div className="font-semibold text-[#155dfc] text-sm leading-5 tracking-[5.6px]">
                    SENTINEL AI
                  </div>
                  <div className="text-[#9f9fa9] text-xs leading-4">
                    SOC Platform
                  </div>
                </div>
              </div>
              <div className="max-w-[46vw] shadow-inner rounded-full bg-zinc-900 text-[#9f9fa9] border-white/10 border-1 border-solid flex px-4 py-2 items-center gap-2 w-168">
                <Search className="size-4" />
                <div className="text-[#9f9fa9] text-sm leading-5">
                  Search settings, integrations, policies...
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-zinc-900 text-[#9f9fa9] text-sm leading-5 border-white/10 border-1 border-solid flex px-3 py-2 items-center gap-2">
                  <Clock className="size-4 text-[#155dfc]" />
                  <span>UTC 14:32:18</span>
                </div>
                <div className="relative rounded-full bg-zinc-900 text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center w-11 h-11">
                  <Bell className="size-5" />
                  <div className="min-w-5 font-semibold rounded-full bg-[#ff6467] text-white text-[10px] flex absolute right-1 top-1 px-1 justify-center items-center h-5">
                    7
                  </div>
                </div>
                <div className="rounded-full bg-zinc-900 border-white/10 border-1 border-solid flex px-3 py-2 items-center gap-3">
                  <div className="rounded-full bg-[#155dfc]/15 text-[#155dfc] flex justify-center items-center w-10 h-10">
                    <User className="size-5" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-medium text-sm leading-5">
                      Alex Carter — SOC Lead
                    </div>
                    <div className="text-[#9f9fa9] text-xs leading-4 flex items-center gap-2">
                      <span className="shadow-[0_0_12px_rgba(74,222,128,0.8)] rounded-full bg-emerald-400 w-2 h-2" />
                      LIVE
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <main className="p-6 flex-1 overflow-hidden">
              <div className="text-[#9f9fa9] text-sm leading-5 flex mb-6 items-center gap-2">
                <span>Admin</span>
                <ChevronRight className="size-4" />
                <span className="text-neutral-50">Platform Settings</span>
              </div>
              <div className="flex mb-6 justify-between items-end gap-6">
                <div>
                  <h1 className="font-bold text-neutral-50 text-3xl leading-9 tracking-tight">
                    Platform Administration
                  </h1>
                  <p className="text-[#9f9fa9] text-sm leading-5 mt-2">
                    System configuration, integrations, licensing, and security
                    policies
                  </p>
                </div>
                <div className="rounded-full bg-zinc-900 text-[#9f9fa9] text-sm leading-5 border-white/10 border-1 border-solid flex px-4 py-2 items-center gap-2">
                  <Activity className="size-4 text-emerald-400" />
                  <span>System Health: Operational</span>
                </div>
              </div>
              <div className="grid h-[calc(100vh-13rem)] grid-cols-[25%_75%] gap-6">
                <section className="shadow-[0_0_30px_rgba(37,99,235,0.08)] rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid flex p-4 flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-[3.2px]">
                      General
                    </div>
                    <div className="shadow-[0_0_18px_rgba(37,99,235,0.28)] rounded-xl bg-[#155dfc] text-[#1c398e] flex p-3 items-center gap-3">
                      <Settings className="size-4" />
                      <span className="font-medium text-sm leading-5">
                        General Settings
                      </span>
                    </div>
                    <div className="rounded-xl bg-zinc-950/40 text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                      <Palette className="size-4" />
                      <span className="font-medium text-sm leading-5">{`Branding & Appearance`}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-[3.2px]">
                      Security
                    </div>
                    <div className="rounded-xl bg-zinc-950/40 text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                      <KeyRound className="size-4" />
                      <span className="font-medium text-sm leading-5">{`Authentication & SSO`}</span>
                    </div>
                    <div className="rounded-xl bg-zinc-950/40 text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                      <ShieldCheck className="size-4" />
                      <span className="font-medium text-sm leading-5">
                        MFA Policies
                      </span>
                    </div>
                    <div className="rounded-xl bg-zinc-950/40 text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                      <Lock className="size-4" />
                      <span className="font-medium text-sm leading-5">
                        Password Policies
                      </span>
                    </div>
                    <div className="rounded-xl bg-zinc-950/40 text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                      <Timer className="size-4" />
                      <span className="font-medium text-sm leading-5">
                        Session Management
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-[3.2px]">
                      Integrations
                    </div>
                    <div className="rounded-xl bg-zinc-950/40 text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Plug className="size-4" />
                        <span className="font-medium text-sm leading-5">
                          SIEM Connectors
                        </span>
                      </div>
                      <div className="font-semibold rounded-full bg-[#155dfc]/15 text-[#155dfc] text-xs leading-4 px-2 py-1">
                        12
                      </div>
                    </div>
                    <div className="rounded-xl bg-zinc-950/40 text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                      <Code2 className="size-4" />
                      <span className="font-medium text-sm leading-5">
                        API Management
                      </span>
                    </div>
                    <div className="rounded-xl bg-zinc-950/40 text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                      <Webhook className="size-4" />
                      <span className="font-medium text-sm leading-5">
                        Webhook Configuration
                      </span>
                    </div>
                    <div className="rounded-xl bg-zinc-950/40 text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                      <Bell className="size-4" />
                      <span className="font-medium text-sm leading-5">
                        Notification Channels
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-[3.2px]">
                      Platform
                    </div>
                    <div className="rounded-xl bg-zinc-950/40 text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                      <CreditCard className="size-4" />
                      <span className="font-medium text-sm leading-5">{`License & Billing`}</span>
                    </div>
                    <div className="rounded-xl bg-zinc-950/40 text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                      <FileText className="size-4" />
                      <span className="font-medium text-sm leading-5">
                        Audit Logs
                      </span>
                    </div>
                    <div className="rounded-xl bg-zinc-950/40 text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 items-center gap-3">
                      <Database className="size-4" />
                      <span className="font-medium text-sm leading-5">{`Backup & Recovery`}</span>
                    </div>
                    <div className="rounded-xl bg-zinc-950/40 text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Activity className="size-4" />
                        <span className="font-medium text-sm leading-5">
                          System Health
                        </span>
                      </div>
                      <div className="shadow-[0_0_10px_rgba(74,222,128,0.8)] rounded-full bg-emerald-400 w-2 h-2" />
                    </div>
                  </div>
                </section>
                <section className="min-w-0 shadow-[0_0_30px_rgba(37,99,235,0.08)] rounded-2xl bg-zinc-900 border-white/10 border-1 border-solid flex p-6 flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-zinc-950/40 border-white/10 border-1 border-solid p-5">
                      <div className="font-semibold text-lg leading-7 mb-4">
                        Platform Identity
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                          <div className="text-[#9f9fa9] text-xs leading-4">
                            Platform Name
                          </div>
                          <div className="rounded-xl bg-zinc-950 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3">
                            SENTINEL AI SOC Platform
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-[#9f9fa9] text-xs leading-4">
                            Organization Name
                          </div>
                          <div className="rounded-xl bg-zinc-950 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3">
                            Acme Corporation
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-[#9f9fa9] text-xs leading-4">
                            Platform URL
                          </div>
                          <div className="rounded-xl bg-zinc-950 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3">
                            https://soc.acme.com
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-[#9f9fa9] text-xs leading-4">
                            Support Email
                          </div>
                          <div className="rounded-xl bg-zinc-950 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3">
                            support@soc.acme.com
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-[#9f9fa9] text-xs leading-4">
                            Timezone
                          </div>
                          <div className="rounded-xl bg-zinc-950 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3">
                            UTC
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-[#9f9fa9] text-xs leading-4">
                            Date Format
                          </div>
                          <div className="rounded-xl bg-zinc-950 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3">
                            YYYY-MM-DD
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-[#9f9fa9] text-xs leading-4">
                            Language
                          </div>
                          <div className="rounded-xl bg-zinc-950 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3">
                            English (US)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-zinc-950/40 border-white/10 border-1 border-solid p-5">
                      <div className="font-semibold text-lg leading-7 mb-4">
                        System Limits
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                          <div className="text-[#9f9fa9] text-xs leading-4">
                            Max Concurrent Users
                          </div>
                          <div className="rounded-xl bg-zinc-950 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3">
                            500
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-[#9f9fa9] text-xs leading-4">
                            Session Timeout
                          </div>
                          <div className="rounded-xl bg-zinc-950 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3">
                            30 minutes
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-[#9f9fa9] text-xs leading-4">
                            API Rate Limit
                          </div>
                          <div className="rounded-xl bg-zinc-950 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3">
                            10,000 req/min
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-[#9f9fa9] text-xs leading-4">
                            Log Retention Period
                          </div>
                          <div className="rounded-xl bg-zinc-950 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3">
                            365 days
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-[#9f9fa9] text-xs leading-4">
                            Alert Queue Size
                          </div>
                          <div className="rounded-xl bg-zinc-950 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-3">
                            50,000
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-zinc-950/40 border-white/10 border-1 border-solid p-5">
                      <div className="flex mb-4 justify-between items-center">
                        <div className="font-semibold text-lg leading-7">
                          Feature Flags
                        </div>
                        <div className="font-semibold rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                          Live
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-zinc-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                          <span className="text-sm leading-5">
                            AI Investigation Assistant
                          </span>
                          <div className="rounded-full bg-emerald-500/80 p-1 w-11 h-6">
                            <div className="shadow-sm rounded-full bg-white w-4 h-4" />
                          </div>
                        </div>
                        <div className="rounded-xl bg-zinc-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                          <span className="text-sm leading-5">
                            Automated Playbooks
                          </span>
                          <div className="rounded-full bg-emerald-500/80 p-1 w-11 h-6">
                            <div className="shadow-sm rounded-full bg-white w-4 h-4" />
                          </div>
                        </div>
                        <div className="rounded-xl bg-zinc-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                          <span className="text-sm leading-5">
                            Multi-Tenancy
                          </span>
                          <div className="rounded-full bg-emerald-500/80 p-1 w-11 h-6">
                            <div className="shadow-sm rounded-full bg-white w-4 h-4" />
                          </div>
                        </div>
                        <div className="rounded-xl bg-zinc-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                          <span className="text-sm leading-5">
                            Dark Web Monitoring
                          </span>
                          <div className="rounded-full bg-emerald-500/80 p-1 w-11 h-6">
                            <div className="shadow-sm rounded-full bg-white w-4 h-4" />
                          </div>
                        </div>
                        <div className="rounded-xl bg-zinc-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                          <span className="text-sm leading-5">
                            Threat Intelligence Feed
                          </span>
                          <div className="rounded-full bg-emerald-500/80 p-1 w-11 h-6">
                            <div className="shadow-sm rounded-full bg-white w-4 h-4" />
                          </div>
                        </div>
                        <div className="rounded-xl bg-zinc-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                          <span className="text-sm leading-5">
                            Behavioral Analytics
                          </span>
                          <div className="rounded-full bg-emerald-500/80 p-1 w-11 h-6">
                            <div className="shadow-sm rounded-full bg-white w-4 h-4" />
                          </div>
                        </div>
                        <div className="rounded-xl bg-zinc-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                          <span className="text-sm leading-5">Cloud CSPM</span>
                          <div className="rounded-full bg-emerald-500/80 p-1 w-11 h-6">
                            <div className="shadow-sm rounded-full bg-white w-4 h-4" />
                          </div>
                        </div>
                        <div className="rounded-xl bg-zinc-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                          <span className="text-sm leading-5">
                            Auto-Remediation
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-zinc-800 p-1 w-11 h-6">
                              <div className="shadow-sm rounded-full bg-white w-4 h-4" />
                            </div>
                            <span className="text-amber-400 text-xs leading-4">
                              Requires approval
                            </span>
                          </div>
                        </div>
                        <div className="rounded-xl bg-zinc-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                          <span className="text-sm leading-5">
                            SOAR Integration
                          </span>
                          <div className="rounded-full bg-emerald-500/80 p-1 w-11 h-6">
                            <div className="shadow-sm rounded-full bg-white w-4 h-4" />
                          </div>
                        </div>
                        <div className="rounded-xl bg-zinc-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                          <span className="text-sm leading-5">
                            LLM-Powered Triage
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-emerald-500/80 p-1 w-11 h-6">
                              <div className="shadow-sm rounded-full bg-white w-4 h-4" />
                            </div>
                            <span className="font-semibold rounded-full bg-[#155dfc]/15 text-[#155dfc] text-[10px] px-2 py-1">
                              Beta
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-zinc-950/40 border-white/10 border-1 border-solid p-5">
                      <div className="font-semibold text-lg leading-7 mb-4">
                        System Health
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-zinc-950 border-white/10 border-1 border-solid p-4">
                          <div className="flex justify-between items-center">
                            <div className="font-medium text-sm leading-5">
                              API Gateway
                            </div>
                            <div className="rounded-full bg-emerald-400 w-2 h-2" />
                          </div>
                          <div className="text-[#9f9fa9] text-xs leading-4 mt-2">
                            Operational
                          </div>
                          <div className="rounded-full bg-zinc-800 mt-3 h-1.5">
                            <div className="w-[92%] rounded-full bg-[#155dfc] h-1.5" />
                          </div>
                        </div>
                        <div className="rounded-xl bg-zinc-950 border-white/10 border-1 border-solid p-4">
                          <div className="flex justify-between items-center">
                            <div className="font-medium text-sm leading-5">
                              ML Engine
                            </div>
                            <div className="rounded-full bg-emerald-400 w-2 h-2" />
                          </div>
                          <div className="text-[#9f9fa9] text-xs leading-4 mt-2">
                            98.3% accuracy
                          </div>
                          <div className="rounded-full bg-zinc-800 mt-3 h-1.5">
                            <div className="w-[98%] rounded-full bg-emerald-400 h-1.5" />
                          </div>
                        </div>
                        <div className="rounded-xl bg-zinc-950 border-white/10 border-1 border-solid p-4">
                          <div className="flex justify-between items-center">
                            <div className="font-medium text-sm leading-5">
                              Log Collector
                            </div>
                            <div className="rounded-full bg-emerald-400 w-2 h-2" />
                          </div>
                          <div className="text-[#9f9fa9] text-xs leading-4 mt-2">
                            1.2M events/sec
                          </div>
                          <div className="rounded-full bg-zinc-800 mt-3 h-1.5">
                            <div className="w-[88%] rounded-full bg-[#155dfc] h-1.5" />
                          </div>
                        </div>
                        <div className="rounded-xl bg-zinc-950 border-white/10 border-1 border-solid p-4">
                          <div className="flex justify-between items-center">
                            <div className="font-medium text-sm leading-5">
                              Database Cluster
                            </div>
                            <div className="rounded-full bg-emerald-400 w-2 h-2" />
                          </div>
                          <div className="text-[#9f9fa9] text-xs leading-4 mt-2">
                            99.99% uptime
                          </div>
                          <div className="rounded-full bg-zinc-800 mt-3 h-1.5">
                            <div className="w-[99%] rounded-full bg-emerald-400 h-1.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sticky bg-zinc-900/95 border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex bottom-0 mt-auto px-1 pt-4 justify-between items-center">
                    <Button className="bg-transparent rounded-full text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-5">
                      Reset to Defaults
                    </Button>
                    <Button className="shadow-[0_0_24px_rgba(37,99,235,0.35)] rounded-full bg-[#155dfc] text-[#1c398e] text-sm leading-5 px-5">
                      <Save className="size-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
