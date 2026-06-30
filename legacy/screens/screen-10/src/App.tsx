import { useEffect } from "react";
import {
  Activity,
  AlertTriangle,
  Bell,
  Bug,
  CheckCircle,
  CheckSquare,
  ChevronDown,
  Clock,
  Cloud,
  Download,
  Edit,
  Eye,
  FileText,
  KeyRound,
  LayoutDashboard,
  Lock,
  Mail,
  MoreHorizontal,
  Search,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  ShieldX,
  User,
  UserCog,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";

export default function App() {
  return (
    <div>
      <div className="bg-zinc-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="min-h-screen bg-[#0A0E1A] text-neutral-50">
          <div className="min-h-screen flex">
            <aside className="shrink-0 bg-[#0D1226] border-white/10 border-t-0 border-r-1 border-b-0 border-l-0 border-solid px-2 py-4 w-22">
              <div className="flex flex-col gap-4 h-full">
                <div className="shadow-[0_0_30px_rgba(37,99,235,0.18)] rounded-2xl bg-[#11183A] border-white/10 border-1 border-solid flex p-3 justify-center items-center">
                  <Users className="size-5 text-[#155dfc]" />
                </div>
                <nav className="flex flex-col flex-1 gap-2">
                  <button className="rounded-2xl bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 justify-center items-center">
                    <LayoutDashboard className="size-5" />
                  </button>
                  <button className="rounded-2xl bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 justify-center items-center">
                    <Shield className="size-5" />
                  </button>
                  <button className="rounded-2xl bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 justify-center items-center">
                    <AlertTriangle className="size-5" />
                  </button>
                  <button className="rounded-2xl bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 justify-center items-center">
                    <Zap className="size-5" />
                  </button>
                  <button className="rounded-2xl bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 justify-center items-center">
                    <Search className="size-5" />
                  </button>
                  <button className="rounded-2xl bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 justify-center items-center">
                    <Server className="size-5" />
                  </button>
                  <button className="rounded-2xl bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 justify-center items-center">
                    <Bug className="size-5" />
                  </button>
                  <button className="shadow-[0_0_24px_rgba(37,99,235,0.35)] rounded-2xl bg-[#155dfc] text-[#1c398e] border-[#155dfc]/40 border-1 border-solid flex p-3 justify-center items-center">
                    <Users className="size-5" />
                  </button>
                  <button className="rounded-2xl bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 justify-center items-center">
                    <Cloud className="size-5" />
                  </button>
                  <button className="rounded-2xl bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 justify-center items-center">
                    <CheckCircle className="size-5" />
                  </button>
                  <button className="rounded-2xl bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 justify-center items-center">
                    <FileText className="size-5" />
                  </button>
                  <button className="rounded-2xl bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 justify-center items-center">
                    <UserCog className="size-5" />
                  </button>
                  <button className="rounded-2xl bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex p-3 justify-center items-center">
                    <Settings className="size-5" />
                  </button>
                </nav>
                <div className="rounded-2xl bg-[#11183A] border-white/10 border-1 border-solid p-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-[#155dfc]/15 text-[#155dfc] flex justify-center items-center">
                      <UserCog className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-semibold text-neutral-50 text-sm leading-5">
                        A. Reyes
                      </div>
                      <div className="text-[#9f9fa9] text-xs leading-4">
                        SOC Analyst
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="min-w-0 flex flex-col flex-1">
              <header className="bg-[#0D1226] border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 justify-between items-center h-16">
                <div className="flex items-center gap-3">
                  <div className="size-10 shadow-[0_0_24px_rgba(37,99,235,0.25)] rounded-2xl bg-[#11183A] border-[#155dfc]/30 border-1 border-solid flex justify-center items-center">
                    <Shield className="size-5 text-[#155dfc]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#155dfc] text-sm leading-5 tracking-[4.48px]">
                      SENTINEL AI
                    </div>
                    <div className="text-[#9f9fa9] text-xs leading-4">
                      SOC Platform
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex px-4 py-2 items-center w-140">
                  <Search className="size-4 mr-2" />
                  <span className="text-sm leading-5">
                    Search users, roles, tenants...
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#11183A] text-[#9f9fa9] text-sm leading-5 border-white/10 border-1 border-solid px-3 py-2">
                    <Clock className="inline size-4 mr-2" />
                    UTC 14:32:18
                  </div>
                  <div className="relative size-10 rounded-full bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex justify-center items-center">
                    <Bell className="size-4" />
                    <div className="size-5 font-bold rounded-full bg-[#ff6467] text-white text-[10px] flex absolute -right-1 -top-1 justify-center items-center">
                      7
                    </div>
                  </div>
                  <div className="rounded-full bg-[#11183A] border-white/10 border-1 border-solid flex px-3 py-2 items-center gap-3">
                    <div className="size-9 rounded-full bg-[#155dfc]/15 text-[#155dfc] flex justify-center items-center">
                      <User className="size-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-50 text-sm leading-5">
                        Alex Carter — SOC Lead
                      </div>
                      <div className="text-[#9f9fa9] text-xs leading-4 flex items-center gap-2">
                        <span className="size-2 shadow-[0_0_12px_rgba(74,222,128,0.8)] rounded-full bg-emerald-400" />
                        LIVE
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <main className="space-y-6 p-6 flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[#9f9fa9] text-sm leading-5">{`Admin > User Management`}</div>
                    <h1 className="font-bold text-neutral-50 text-3xl leading-9 tracking-tight mt-1">
                      User Management
                    </h1>
                    <p className="text-[#9f9fa9] text-sm leading-5 mt-2">
                      Manage SOC platform users, roles, and access controls
                    </p>
                  </div>
                </div>
                <section className="grid grid-cols-4 gap-4">
                  <div className="shadow-[0_0_30px_rgba(37,99,235,0.12)] rounded-2xl bg-[#0F1535] border-[#155dfc]/20 border-1 border-solid p-5">
                    <div className="flex justify-between items-center">
                      <div className="text-[#9f9fa9] text-sm leading-5 flex items-center gap-2">
                        <Users className="size-4 text-[#155dfc]" />
                        Total Users
                      </div>
                      <div className="rounded-full bg-[#155dfc]/15 text-[#155dfc] text-xs leading-4 px-2 py-1">
                        +4 this week
                      </div>
                    </div>
                    <div className="font-bold text-neutral-50 text-4xl leading-10 mt-4">
                      47
                    </div>
                  </div>
                  <div className="shadow-[0_0_30px_rgba(16,185,129,0.12)] rounded-2xl bg-[#0F1535] border-emerald-500/20 border-1 border-solid p-5">
                    <div className="flex justify-between items-center">
                      <div className="text-[#9f9fa9] text-sm leading-5 flex items-center gap-2">
                        <Activity className="size-4 text-emerald-400" />
                        Active Sessions
                      </div>
                      <div className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                        Live
                      </div>
                    </div>
                    <div className="font-bold text-neutral-50 text-4xl leading-10 mt-4">
                      23
                    </div>
                  </div>
                  <div className="shadow-[0_0_30px_rgba(245,158,11,0.12)] rounded-2xl bg-[#0F1535] border-amber-500/20 border-1 border-solid p-5">
                    <div className="flex justify-between items-center">
                      <div className="text-[#9f9fa9] text-sm leading-5 flex items-center gap-2">
                        <Mail className="size-4 text-amber-400" />
                        Pending Invites
                      </div>
                      <div className="rounded-full bg-amber-500/15 text-amber-400 text-xs leading-4 px-2 py-1">
                        Needs review
                      </div>
                    </div>
                    <div className="font-bold text-neutral-50 text-4xl leading-10 mt-4">
                      5
                    </div>
                  </div>
                  <div className="shadow-[0_0_30px_rgba(239,68,68,0.12)] rounded-2xl bg-[#0F1535] border-red-500/20 border-1 border-solid p-5">
                    <div className="flex justify-between items-center">
                      <div className="text-[#9f9fa9] text-sm leading-5 flex items-center gap-2">
                        <Lock className="size-4 text-red-400" />
                        Locked Accounts
                      </div>
                      <div className="rounded-full bg-red-500/15 text-red-400 text-xs leading-4 px-2 py-1">
                        Attention
                      </div>
                    </div>
                    <div className="font-bold text-neutral-50 text-4xl leading-10 mt-4">
                      2
                    </div>
                  </div>
                </section>
                <section className="rounded-2xl bg-[#0F1535] border-white/10 border-1 border-solid flex p-4 justify-between items-center gap-4">
                  <div className="rounded-full bg-[#11183A] text-[#9f9fa9] border-white/10 border-1 border-solid flex px-4 py-2 items-center gap-3">
                    <Search className="size-4" />
                    <span className="text-sm leading-5">
                      Search by name, email, role...
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#11183A] text-[#9f9fa9] text-sm leading-5 border-white/10 border-1 border-solid px-4 py-2">
                      All Roles
                      <ChevronDown className="inline size-4 ml-2" />
                    </div>
                    <div className="rounded-full bg-[#11183A] text-[#9f9fa9] text-sm leading-5 border-white/10 border-1 border-solid px-4 py-2">
                      All Status
                      <ChevronDown className="inline size-4 ml-2" />
                    </div>
                    <div className="rounded-full bg-[#11183A] text-[#9f9fa9] text-sm leading-5 border-white/10 border-1 border-solid px-4 py-2">
                      All Departments
                      <ChevronDown className="inline size-4 ml-2" />
                    </div>
                    <button className="rounded-full bg-[#11183A] text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-4 py-2">
                      <Download className="inline size-4 mr-2" />
                      Export CSV
                    </button>
                    <button className="shadow-[0_0_24px_rgba(37,99,235,0.35)] font-semibold rounded-full bg-[#155dfc] text-[#1c398e] text-sm leading-5 px-4 py-2">
                      <UserPlus className="inline size-4 mr-2" />
                      Invite User
                    </button>
                  </div>
                </section>
                <section className="grid grid-cols-[minmax(0,1fr)_360px] gap-6">
                  <div className="rounded-2xl bg-[#0F1535] border-white/10 border-1 border-solid p-4">
                    <div className="rounded-xl border-white/10 border-1 border-solid overflow-hidden">
                      <table className="border-collapse text-left text-sm leading-5 w-full">
                        <thead className="bg-[#11183A] text-[#9f9fa9]">
                          <tr>
                            <th className="px-4 py-3">
                              <CheckSquare className="size-4" />
                            </th>
                            <th className="px-4 py-3">User</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Role</th>
                            <th className="px-4 py-3">Department</th>
                            <th className="px-4 py-3">Last Login</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">MFA</th>
                            <th className="px-4 py-3">Risk Score</th>
                            <th className="px-4 py-3">Sessions</th>
                            <th className="px-4 py-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-[#0F1535] border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-4">
                              <CheckSquare className="size-4 text-[#155dfc]" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-9 rounded-full bg-[#155dfc]/15 text-[#155dfc] flex justify-center items-center">
                                  AC
                                </div>
                                <div>
                                  <div className="font-semibold text-neutral-50">
                                    Alex Carter
                                  </div>
                                  <div className="text-[#9f9fa9] text-xs leading-4">
                                    SOC Lead
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-[#9f9fa9] p-4">
                              alex.carter@sentinelai.com
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-[#155dfc]/15 text-[#155dfc] text-xs leading-4 px-2 py-1">
                                SOC Lead
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">SOC</td>
                            <td className="text-[#9f9fa9] p-4">2m ago</td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                Active
                              </span>
                            </td>
                            <td className="text-emerald-400 p-4">
                              <ShieldCheck className="size-4" />
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                12
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">3</td>
                            <td className="p-4">
                              <div className="text-[#9f9fa9] flex gap-2">
                                <Eye className="size-4" />
                                <Edit className="size-4" />
                                <MoreHorizontal className="size-4" />
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-[#0A1128] border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-4">
                              <CheckSquare className="size-4 text-[#155dfc]" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-9 rounded-full bg-cyan-500/15 text-cyan-400 flex justify-center items-center">
                                  SC
                                </div>
                                <div>
                                  <div className="font-semibold text-neutral-50">
                                    Sarah Chen
                                  </div>
                                  <div className="text-[#9f9fa9] text-xs leading-4">
                                    SOC Analyst L3
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-[#9f9fa9] p-4">
                              sarah.chen@sentinelai.com
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-cyan-500/15 text-cyan-400 text-xs leading-4 px-2 py-1">
                                SOC Analyst L3
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">SOC</td>
                            <td className="text-[#9f9fa9] p-4">8m ago</td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                Active
                              </span>
                            </td>
                            <td className="text-emerald-400 p-4">
                              <ShieldCheck className="size-4" />
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                8
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">2</td>
                            <td className="p-4">
                              <div className="text-[#9f9fa9] flex gap-2">
                                <Eye className="size-4" />
                                <Edit className="size-4" />
                                <MoreHorizontal className="size-4" />
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-[#0F1535] border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-4">
                              <CheckSquare className="size-4 text-[#155dfc]" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-9 rounded-full bg-emerald-500/15 text-emerald-400 flex justify-center items-center">
                                  MW
                                </div>
                                <div>
                                  <div className="font-semibold text-neutral-50">
                                    Marcus Webb
                                  </div>
                                  <div className="text-[#9f9fa9] text-xs leading-4">
                                    Threat Hunter
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-[#9f9fa9] p-4">
                              marcus.webb@sentinelai.com
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                Threat Hunter
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">IR</td>
                            <td className="text-[#9f9fa9] p-4">14m ago</td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                Active
                              </span>
                            </td>
                            <td className="text-emerald-400 p-4">
                              <ShieldCheck className="size-4" />
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                15
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">4</td>
                            <td className="p-4">
                              <div className="text-[#9f9fa9] flex gap-2">
                                <Eye className="size-4" />
                                <Edit className="size-4" />
                                <MoreHorizontal className="size-4" />
                              </div>
                            </td>
                          </tr>
                          <tr className="ring-1 ring-red-500/30 bg-[#0A1128] border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-4">
                              <CheckSquare className="size-4 text-[#155dfc]" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-9 rounded-full bg-red-500/15 text-red-400 flex justify-center items-center">
                                  JM
                                </div>
                                <div>
                                  <div className="font-semibold text-neutral-50">
                                    James Morrison
                                  </div>
                                  <div className="text-[#9f9fa9] text-xs leading-4">
                                    SOC Analyst L2
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-[#9f9fa9] p-4">
                              james.morrison@sentinelai.com
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-violet-500/15 text-violet-400 text-xs leading-4 px-2 py-1">
                                SOC Analyst L2
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">Finance</td>
                            <td className="text-[#9f9fa9] p-4">1m ago</td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                Active
                              </span>
                            </td>
                            <td className="text-emerald-400 p-4">
                              <ShieldCheck className="size-4" />
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-red-500/15 text-red-400 text-xs leading-4 px-2 py-1">
                                94
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">6</td>
                            <td className="text-[#9f9fa9] p-4">
                              <div className="text-[#9f9fa9] flex gap-2">
                                <Eye className="size-4" />
                                <Edit className="size-4" />
                                <MoreHorizontal className="size-4" />
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-[#0F1535] border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-4">
                              <CheckSquare className="size-4 text-[#155dfc]" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-9 rounded-full bg-amber-500/15 text-amber-400 flex justify-center items-center">
                                  DR
                                </div>
                                <div>
                                  <div className="font-semibold text-neutral-50">
                                    Diana Reyes
                                  </div>
                                  <div className="text-[#9f9fa9] text-xs leading-4">
                                    Compliance Officer
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-[#9f9fa9] p-4">
                              diana.reyes@sentinelai.com
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-amber-500/15 text-amber-400 text-xs leading-4 px-2 py-1">
                                Compliance Officer
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">Compliance</td>
                            <td className="text-[#9f9fa9] p-4">22m ago</td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                Active
                              </span>
                            </td>
                            <td className="text-emerald-400 p-4">
                              <ShieldCheck className="size-4" />
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                5
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">2</td>
                            <td className="text-[#9f9fa9] p-4">
                              <div className="text-[#9f9fa9] flex gap-2">
                                <Eye className="size-4" />
                                <Edit className="size-4" />
                                <MoreHorizontal className="size-4" />
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-[#0A1128] border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-4">
                              <CheckSquare className="size-4 text-[#155dfc]" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-9 rounded-full bg-blue-500/15 text-blue-400 flex justify-center items-center">
                                  KP
                                </div>
                                <div>
                                  <div className="font-semibold text-neutral-50">
                                    Kevin Park
                                  </div>
                                  <div className="text-[#9f9fa9] text-xs leading-4">
                                    Incident Responder
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-[#9f9fa9] p-4">
                              kevin.park@sentinelai.com
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-blue-500/15 text-blue-400 text-xs leading-4 px-2 py-1">
                                Incident Responder
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">IR</td>
                            <td className="text-[#9f9fa9] p-4">31m ago</td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                Active
                              </span>
                            </td>
                            <td className="text-emerald-400 p-4">
                              <ShieldCheck className="size-4" />
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-amber-500/15 text-amber-400 text-xs leading-4 px-2 py-1">
                                22
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">5</td>
                            <td className="text-[#9f9fa9] p-4">
                              <div className="text-[#9f9fa9] flex gap-2">
                                <Eye className="size-4" />
                                <Edit className="size-4" />
                                <MoreHorizontal className="size-4" />
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-[#0F1535] border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-4">
                              <CheckSquare className="size-4 text-[#155dfc]" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-9 rounded-full bg-cyan-500/15 text-cyan-400 flex justify-center items-center">
                                  AP
                                </div>
                                <div>
                                  <div className="font-semibold text-neutral-50">
                                    Aisha Patel
                                  </div>
                                  <div className="text-[#9f9fa9] text-xs leading-4">
                                    Cloud Security
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-[#9f9fa9] p-4">
                              aisha.patel@sentinelai.com
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-cyan-500/15 text-cyan-400 text-xs leading-4 px-2 py-1">
                                Cloud Security
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">Cloud</td>
                            <td className="text-[#9f9fa9] p-4">44m ago</td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                Active
                              </span>
                            </td>
                            <td className="text-emerald-400 p-4">
                              <ShieldCheck className="size-4" />
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                18
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">3</td>
                            <td className="text-[#9f9fa9] p-4">
                              <div className="text-[#9f9fa9] flex gap-2">
                                <Eye className="size-4" />
                                <Edit className="size-4" />
                                <MoreHorizontal className="size-4" />
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-[#0A1128] border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-4">
                              <CheckSquare className="size-4 text-[#155dfc]" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-9 rounded-full bg-amber-500/15 text-amber-400 flex justify-center items-center">
                                  TN
                                </div>
                                <div>
                                  <div className="font-semibold text-neutral-50">
                                    Tom Nguyen
                                  </div>
                                  <div className="text-[#9f9fa9] text-xs leading-4">
                                    SOC Analyst L1
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-[#9f9fa9] p-4">
                              tom.nguyen@sentinelai.com
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-amber-500/15 text-amber-400 text-xs leading-4 px-2 py-1">
                                SOC Analyst L1
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">SOC</td>
                            <td className="text-[#9f9fa9] p-4">58m ago</td>
                            <td className="p-4">
                              <span className="rounded-full bg-amber-500/15 text-amber-400 text-xs leading-4 px-2 py-1">
                                Pending
                              </span>
                            </td>
                            <td className="text-red-400 p-4">
                              <ShieldX className="size-4" />
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-amber-500/15 text-amber-400 text-xs leading-4 px-2 py-1">
                                41
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">1</td>
                            <td className="text-[#9f9fa9] p-4">
                              <div className="text-[#9f9fa9] flex gap-2">
                                <Eye className="size-4" />
                                <Edit className="size-4" />
                                <MoreHorizontal className="size-4" />
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-[#0F1535] border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-4">
                              <CheckSquare className="size-4 text-[#155dfc]" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-9 rounded-full bg-violet-500/15 text-violet-400 flex justify-center items-center">
                                  RK
                                </div>
                                <div>
                                  <div className="font-semibold text-neutral-50">
                                    Rachel Kim
                                  </div>
                                  <div className="text-[#9f9fa9] text-xs leading-4">
                                    Admin
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-[#9f9fa9] p-4">
                              rachel.kim@sentinelai.com
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-violet-500/15 text-violet-400 text-xs leading-4 px-2 py-1">
                                Admin
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">SOC</td>
                            <td className="text-[#9f9fa9] p-4">1h ago</td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                Active
                              </span>
                            </td>
                            <td className="text-emerald-400 p-4">
                              <ShieldCheck className="size-4" />
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                3
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">7</td>
                            <td className="text-[#9f9fa9] p-4">
                              <div className="text-[#9f9fa9] flex gap-2">
                                <Eye className="size-4" />
                                <Edit className="size-4" />
                                <MoreHorizontal className="size-4" />
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-[#0A1128] border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-4">
                              <CheckSquare className="size-4 text-[#155dfc]" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-9 rounded-full bg-red-500/15 text-red-400 flex justify-center items-center">
                                  DL
                                </div>
                                <div>
                                  <div className="font-semibold text-neutral-50">
                                    David Liu
                                  </div>
                                  <div className="text-[#9f9fa9] text-xs leading-4">
                                    SOC Analyst L2
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-[#9f9fa9] p-4">
                              david.liu@sentinelai.com
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-violet-500/15 text-violet-400 text-xs leading-4 px-2 py-1">
                                SOC Analyst L2
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">SOC</td>
                            <td className="text-[#9f9fa9] p-4">2h ago</td>
                            <td className="p-4">
                              <span className="rounded-full bg-red-500/15 text-red-400 text-xs leading-4 px-2 py-1">
                                Locked
                              </span>
                            </td>
                            <td className="text-red-400 p-4">
                              <ShieldX className="size-4" />
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-red-500/15 text-red-400 text-xs leading-4 px-2 py-1">
                                76
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">0</td>
                            <td className="text-[#9f9fa9] p-4">
                              <div className="text-[#9f9fa9] flex gap-2">
                                <Eye className="size-4" />
                                <Edit className="size-4" />
                                <MoreHorizontal className="size-4" />
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-[#0F1535] border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-4">
                              <CheckSquare className="size-4 text-[#155dfc]" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-9 rounded-full bg-slate-500/15 text-slate-300 flex justify-center items-center">
                                  EW
                                </div>
                                <div>
                                  <div className="font-semibold text-neutral-50">
                                    Emma Wilson
                                  </div>
                                  <div className="text-[#9f9fa9] text-xs leading-4">
                                    Read Only
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-[#9f9fa9] p-4">
                              emma.wilson@sentinelai.com
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-slate-500/15 text-slate-300 text-xs leading-4 px-2 py-1">
                                Read Only
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">Compliance</td>
                            <td className="text-[#9f9fa9] p-4">4h ago</td>
                            <td className="p-4">
                              <span className="rounded-full bg-slate-500/15 text-slate-300 text-xs leading-4 px-2 py-1">
                                Inactive
                              </span>
                            </td>
                            <td className="text-red-400 p-4">
                              <ShieldX className="size-4" />
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-slate-500/15 text-slate-300 text-xs leading-4 px-2 py-1">
                                27
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">0</td>
                            <td className="text-[#9f9fa9] p-4">
                              <div className="text-[#9f9fa9] flex gap-2">
                                <Eye className="size-4" />
                                <Edit className="size-4" />
                                <MoreHorizontal className="size-4" />
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-[#0A1128] border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid">
                            <td className="p-4">
                              <CheckSquare className="size-4 text-[#155dfc]" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-9 rounded-full bg-emerald-500/15 text-emerald-400 flex justify-center items-center">
                                  CM
                                </div>
                                <div>
                                  <div className="font-semibold text-neutral-50">
                                    Carlos Mendez
                                  </div>
                                  <div className="text-[#9f9fa9] text-xs leading-4">
                                    Threat Hunter
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-[#9f9fa9] p-4">
                              carlos.mendez@sentinelai.com
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                Threat Hunter
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">IR</td>
                            <td className="text-[#9f9fa9] p-4">6h ago</td>
                            <td className="p-4">
                              <span className="rounded-full bg-emerald-500/15 text-emerald-400 text-xs leading-4 px-2 py-1">
                                Active
                              </span>
                            </td>
                            <td className="text-emerald-400 p-4">
                              <ShieldCheck className="size-4" />
                            </td>
                            <td className="p-4">
                              <span className="rounded-full bg-amber-500/15 text-amber-400 text-xs leading-4 px-2 py-1">
                                31
                              </span>
                            </td>
                            <td className="text-[#9f9fa9] p-4">4</td>
                            <td className="text-[#9f9fa9] p-4">
                              <div className="text-[#9f9fa9] flex gap-2">
                                <Eye className="size-4" />
                                <Edit className="size-4" />
                                <MoreHorizontal className="size-4" />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-[#9f9fa9] text-sm leading-5 flex mt-4 justify-between items-center">
                      <div>Showing 1-12 of 47 users</div>
                      <div className="flex items-center gap-2">
                        <button className="rounded-full bg-[#11183A] border-white/10 border-1 border-solid px-3 py-2">
                          Previous
                        </button>
                        <button className="rounded-full bg-[#155dfc] text-[#1c398e] px-3 py-2">
                          1
                        </button>
                        <button className="rounded-full bg-[#11183A] border-white/10 border-1 border-solid px-3 py-2">
                          2
                        </button>
                        <button className="rounded-full bg-[#11183A] border-white/10 border-1 border-solid px-3 py-2">
                          3
                        </button>
                        <button className="rounded-full bg-[#11183A] border-white/10 border-1 border-solid px-3 py-2">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                  <aside className="rounded-2xl bg-[#0F1535] border-white/10 border-1 border-solid p-5">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-[#9f9fa9] text-sm leading-5">
                          Selected User
                        </div>
                        <h2 className="font-bold text-neutral-50 text-2xl leading-8 mt-1">
                          James Morrison
                        </h2>
                        <p className="text-[#9f9fa9] text-sm leading-5 mt-1">
                          Senior Financial Analyst — Finance Dept
                        </p>
                      </div>
                      <div className="rounded-full bg-red-500/15 text-red-400 text-sm leading-5 px-3 py-1">
                        Risk 94/100
                      </div>
                    </div>
                    <div className="rounded-2xl bg-[#11183A] border-white/10 border-1 border-solid flex mt-5 p-4 items-center gap-4">
                      <div className="size-24 font-bold rounded-full bg-red-500/15 text-red-400 text-3xl leading-9 flex justify-center items-center">
                        JM
                      </div>
                      <div className="space-y-2 text-[#9f9fa9] text-sm leading-5">
                        <div>
                          <span className="text-neutral-50">Last login:</span>1m
                          ago
                        </div>
                        <div>
                          <span className="text-neutral-50">
                            Active sessions:
                          </span>
                          6
                        </div>
                        <div>
                          <span className="text-neutral-50">MFA:</span>Enabled
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-[#11183A] border-red-500/20 border-1 border-solid mt-5 p-4">
                      <div className="font-semibold text-neutral-50 text-sm leading-5 mb-3">
                        Behavioral Risk Summary
                      </div>
                      <div className="space-y-3 text-sm leading-5">
                        <div className="rounded-xl bg-red-500/5 text-red-300 border-red-500/20 border-1 border-solid flex p-3 items-start gap-3">
                          <AlertTriangle className="size-4 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-medium text-neutral-50">
                              After-hours login
                            </div>
                            <div className="text-[#9f9fa9] text-xs leading-4">
                              02:14 AM from unrecognized device
                            </div>
                          </div>
                        </div>
                        <div className="rounded-xl bg-red-500/5 text-red-300 border-red-500/20 border-1 border-solid flex p-3 items-start gap-3">
                          <Download className="size-4 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-medium text-neutral-50">
                              Bulk data download
                            </div>
                            <div className="text-[#9f9fa9] text-xs leading-4">
                              4.2GB exported from finance share
                            </div>
                          </div>
                        </div>
                        <div className="rounded-xl bg-red-500/5 text-red-300 border-red-500/20 border-1 border-solid flex p-3 items-start gap-3">
                          <KeyRound className="size-4 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-medium text-neutral-50">
                              Privilege escalation attempt
                            </div>
                            <div className="text-[#9f9fa9] text-xs leading-4">
                              Denied admin group request
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-[#11183A] border-white/10 border-1 border-solid mt-5 p-4">
                      <div className="font-semibold text-neutral-50 text-sm leading-5 mb-3">
                        Permissions
                      </div>
                      <div className="space-y-2 text-[#9f9fa9] text-sm leading-5">
                        <div>Role: SOC Analyst L2</div>
                        <div>Scopes: Alerts, Cases, Reports</div>
                        <div>Tenant: Finance</div>
                      </div>
                    </div>
                    <div className="grid mt-5 gap-3">
                      <button className="shadow-[0_0_24px_rgba(37,99,235,0.35)] font-semibold rounded-full bg-[#155dfc] text-[#1c398e] px-4 py-3">
                        View Full UBA Profile
                      </button>
                      <button className="font-semibold rounded-full bg-[#11183A] text-red-400 border-red-500/30 border-1 border-solid px-4 py-3">
                        Lock Account
                      </button>
                      <button className="font-semibold rounded-full bg-[#11183A] text-amber-400 border-amber-500/30 border-1 border-solid px-4 py-3">
                        Reset MFA
                      </button>
                    </div>
                  </aside>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
