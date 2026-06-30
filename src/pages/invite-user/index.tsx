
import {
  ArrowRight,
  Bell,
  Briefcase,
  Building2,
  Calendar,
  Camera,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Globe,
  Hash,
  Loader,
  Mail,
  MessageSquare,
  Phone,
  Upload,
  User,
  UserCheck,
  UserPlus,
  Users,
} from "lucide-react";

export default function InviteUserPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-zinc-950">
      <div className="p-8">
        <div className="text-[#9f9fa9] text-xs leading-4 flex mb-2 items-center gap-2">
          <span>Admin</span>
          <ChevronRight className="size-3" />
          <span>User Management</span>
          <ChevronRight className="size-3" />
          <span className="text-[#155dfc]">Onboard New User</span>
        </div>
        <div className="flex mb-6 justify-between items-start">
          <div>
            <h1 className="font-bold text-neutral-50 text-3xl leading-9 tracking-tight">
              Onboard New User
            </h1>
            <p className="text-[#9f9fa9] text-sm leading-5 mt-1">
              Invite and configure access for a new SOC platform user
            </p>
          </div>
          <div className="rounded-full bg-[#155dfc]/10 border-[#155dfc]/30 border-1 border-solid flex px-3 py-1.5 items-center gap-2">
            <UserPlus className="size-4 text-[#155dfc]" />
            <span className="font-medium text-[#155dfc] text-xs leading-4">
              Admin Area
            </span>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex-1">
            <div className="rounded-xl bg-zinc-900 border-white/10 border-1 border-solid mb-6 p-6">
              <div className="flex mb-6 justify-between items-center">
                <div className="flex items-center flex-1 gap-3">
                  <div className="flex items-center flex-1 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="font-bold rounded-full bg-[#155dfc] text-[#1c398e] text-sm leading-5 flex justify-center items-center w-8 h-8">
                        1
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-[#155dfc] text-xs leading-4">
                          User Details
                        </span>
                        <span className="text-[#9f9fa9] text-[10px]">
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="relative bg-white/10 mx-3 flex-1 h-0.5">
                      <div className="bg-[#155dfc] absolute left-0 inset-y-0 w-0" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="font-bold rounded-full bg-zinc-800 text-[#9f9fa9] text-sm leading-5 border-white/10 border-1 border-solid flex justify-center items-center w-8 h-8">
                        2
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-[#9f9fa9] text-xs leading-4">{`Role & Permissions`}</span>
                        <span className="text-[#9f9fa9] text-[10px]">
                          Pending
                        </span>
                      </div>
                    </div>
                    <div className="bg-white/10 mx-3 flex-1 h-0.5" />
                    <div className="flex items-center gap-2">
                      <div className="font-bold rounded-full bg-zinc-800 text-[#9f9fa9] text-sm leading-5 border-white/10 border-1 border-solid flex justify-center items-center w-8 h-8">
                        3
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-[#9f9fa9] text-xs leading-4">{`MFA & Security`}</span>
                        <span className="text-[#9f9fa9] text-[10px]">
                          Pending
                        </span>
                      </div>
                    </div>
                    <div className="bg-white/10 mx-3 flex-1 h-0.5" />
                    <div className="flex items-center gap-2">
                      <div className="font-bold rounded-full bg-zinc-800 text-[#9f9fa9] text-sm leading-5 border-white/10 border-1 border-solid flex justify-center items-center w-8 h-8">
                        4
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-[#9f9fa9] text-xs leading-4">{`Review & Send Invite`}</span>
                        <span className="text-[#9f9fa9] text-[10px]">
                          Pending
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-wider">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="top-1/2 -translate-y-1/2 size-4 text-[#9f9fa9] absolute left-3" />
                      <input
                        className="bg-[oklch(1_0_0/8%)] rounded-lg text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid pl-9 pr-4 w-full h-10"
                        placeholder="e.g. Sarah Mitchell"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-wider">
                      Job Title
                    </label>
                    <div className="relative">
                      <Briefcase className="top-1/2 -translate-y-1/2 size-4 text-[#9f9fa9] absolute left-3" />
                      <input
                        className="bg-[oklch(1_0_0/8%)] rounded-lg text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid pl-9 pr-4 w-full h-10"
                        placeholder="SOC Analyst L2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-wider">
                      Department
                    </label>
                    <div className="relative">
                      <Building2 className="top-1/2 -translate-y-1/2 size-4 text-[#9f9fa9] absolute left-3" />
                      <select className="bg-[oklch(1_0_0/8%)] appearance-none rounded-lg text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid pl-9 pr-4 w-full h-10">
                        <option value="soc">SOC</option>
                        <option value="ir">Incident Response</option>
                        <option value="ti">Threat Intelligence</option>
                        <option value="cloud">Cloud Security</option>
                        <option value="compliance">Compliance</option>
                      </select>
                      <ChevronDown className="top-1/2 -translate-y-1/2 size-4 pointer-events-none text-[#9f9fa9] absolute right-3" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-wider">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="top-1/2 -translate-y-1/2 size-4 text-[#9f9fa9] absolute left-3" />
                      <input
                        className="bg-[oklch(1_0_0/8%)] border-[oklch(0.696_0.17_162.48)/60%] rounded-lg text-neutral-50 text-sm leading-5 border-black/1 border-1 border-solid pl-9 pr-10 w-full h-10"
                        defaultValue="s.mitchell@acmecorp.com"
                        placeholder="user@acmecorp.com"
                      />
                      <CheckCircle className="top-1/2 -translate-y-1/2 size-4 text-[oklch(0.696_0.17_162.48)] absolute right-3" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-wider">
                      Phone Number
                      <span className="font-normal text-[#9f9fa9]">
                        (optional)
                      </span>
                    </label>
                    <div className="relative">
                      <Phone className="top-1/2 -translate-y-1/2 size-4 text-[#9f9fa9] absolute left-3" />
                      <input
                        className="bg-[oklch(1_0_0/8%)] rounded-lg text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid pl-9 pr-4 w-full h-10"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-wider">
                      Tenant / Organization
                    </label>
                    <div className="relative">
                      <Globe className="top-1/2 -translate-y-1/2 size-4 text-[#9f9fa9] absolute left-3" />
                      <select className="bg-[oklch(1_0_0/8%)] appearance-none rounded-lg text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid pl-9 pr-4 w-full h-10">
                        <option>Acme Corp — Primary Tenant</option>
                        <option>SecureNet Inc — Tenant B</option>
                        <option>GlobalBank — Tenant C</option>
                      </select>
                      <ChevronDown className="top-1/2 -translate-y-1/2 size-4 pointer-events-none text-[#9f9fa9] absolute right-3" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-wider">
                      User Type
                    </label>
                    <div className="flex gap-2">
                      <button className="font-semibold rounded-lg bg-[#155dfc] text-[#1c398e] text-xs leading-4 border-[#155dfc] border-1 border-solid flex-1 h-9">
                        Internal
                      </button>
                      <button className="transition-all font-medium rounded-lg bg-zinc-800 text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid flex-1 h-9">
                        External
                      </button>
                      <button className="transition-all font-medium rounded-lg bg-zinc-800 text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid flex-1 h-9">
                        MSSP Partner
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-wider">
                      Profile Photo
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 rounded-full bg-[#155dfc]/20 border-[#155dfc]/40 border-2 border-dashed flex justify-center items-center w-16 h-16">
                        <Camera className="size-6 text-[#155dfc]/60" />
                      </div>
                      <div className="cursor-pointer transition-all rounded-lg border-white/10 border-2 border-dashed flex p-3 flex-col justify-center items-center flex-1 gap-1">
                        <Upload className="size-4 text-[#9f9fa9]" />
                        <span className="text-[#9f9fa9] text-xs leading-4">{`Upload avatar or drag & drop`}</span>
                        <span className="text-[#9f9fa9]/60 text-[10px]">
                          PNG, JPG up to 2MB
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-wider">
                      Employee ID
                    </label>
                    <div className="relative">
                      <Hash className="top-1/2 -translate-y-1/2 size-4 text-[#9f9fa9] absolute left-3" />
                      <input
                        className="bg-[oklch(1_0_0/8%)] rounded-lg text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid pl-9 pr-4 w-full h-10"
                        placeholder="EMP-00247"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-wider">
                      Start Date
                    </label>
                    <div className="relative">
                      <Calendar className="top-1/2 -translate-y-1/2 size-4 text-[#9f9fa9] absolute left-3" />
                      <input
                        className="bg-[oklch(1_0_0/8%)] rounded-lg text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid pl-9 pr-4 w-full h-10"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid mt-6 pt-5">
                <p className="font-semibold uppercase text-[#9f9fa9] text-xs leading-4 tracking-wider mb-4">
                  Notification Preferences
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[oklch(1_0_0/4%)] rounded-lg border-white/10 border-1 border-solid flex p-3 justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-[#155dfc]/10 flex justify-center items-center w-8 h-8">
                        <Mail className="size-4 text-[#155dfc]" />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-50 text-sm leading-5">
                          Email Alerts
                        </p>
                        <p className="text-[#9f9fa9] text-xs leading-4">
                          Receive security alerts via email
                        </p>
                      </div>
                    </div>
                    <div className="relative cursor-pointer rounded-full bg-[#155dfc] w-10 h-6">
                      <div className="rounded-full bg-white absolute right-1 top-1 w-4 h-4" />
                    </div>
                  </div>
                  <div className="bg-[oklch(1_0_0/4%)] rounded-lg border-white/10 border-1 border-solid flex p-3 justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-[oklch(0.769_0.188_70.08)/15%] rounded-lg flex justify-center items-center w-8 h-8">
                        <MessageSquare className="size-4 text-[oklch(0.769_0.188_70.08)]" />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-50 text-sm leading-5">
                          SMS Alerts
                        </p>
                        <p className="text-[#9f9fa9] text-xs leading-4">
                          Critical alerts via SMS
                        </p>
                      </div>
                    </div>
                    <div className="relative cursor-pointer rounded-full bg-zinc-800 border-white/10 border-1 border-solid w-10 h-6">
                      <div className="rounded-full bg-[#9f9fa9] absolute left-1 top-1 w-4 h-4" />
                    </div>
                  </div>
                  <div className="bg-[oklch(1_0_0/4%)] rounded-lg border-white/10 border-1 border-solid flex p-3 justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-[oklch(0.696_0.17_162.48)/15%] rounded-lg flex justify-center items-center w-8 h-8">
                        <Hash className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-50 text-sm leading-5">
                          Slack Integration
                        </p>
                        <p className="text-[#9f9fa9] text-xs leading-4">
                          Post alerts to Slack channels
                        </p>
                      </div>
                    </div>
                    <div className="relative cursor-pointer rounded-full bg-[#155dfc] w-10 h-6">
                      <div className="rounded-full bg-white absolute right-1 top-1 w-4 h-4" />
                    </div>
                  </div>
                  <div className="bg-[oklch(1_0_0/4%)] rounded-lg border-white/10 border-1 border-solid flex p-3 justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-[oklch(0.645_0.246_16.439)/15%] rounded-lg flex justify-center items-center w-8 h-8">
                        <Bell className="size-4 text-[oklch(0.645_0.246_16.439)]" />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-50 text-sm leading-5">
                          PagerDuty Integration
                        </p>
                        <p className="text-[#9f9fa9] text-xs leading-4">
                          Escalate critical incidents
                        </p>
                      </div>
                    </div>
                    <div className="relative cursor-pointer rounded-full bg-zinc-800 border-white/10 border-1 border-solid w-10 h-6">
                      <div className="rounded-full bg-[#9f9fa9] absolute left-1 top-1 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex mt-6 pt-5 justify-between items-center">
                <button className="transition-all font-medium rounded-lg text-[#9f9fa9] text-sm leading-5 border-white/10 border-1 border-solid px-6 h-10">
                  Cancel
                </button>
                <button className="relative transition-all font-semibold rounded-lg bg-[#155dfc] text-[#1c398e] text-sm leading-5 flex px-6 items-center gap-2 h-10 overflow-hidden">
                  <div className="bg-[linear-gradient(90deg,transparent_0%,oklch(1_0_0/15%)_50%,transparent_100%)] animate-[shimmer_2s_infinite] absolute inset-0 w-full" />
                  <span>{`Next: Role & Permissions`}</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-col gap-4 w-72">
            <div className="rounded-xl bg-zinc-900 border-white/10 border-1 border-solid p-6">
              <div className="flex mb-4 justify-between items-center">
                <div>
                  <p className="font-bold text-neutral-50 text-sm leading-5">
                    User Setup Progress
                  </p>
                  <p className="text-[#9f9fa9] text-xs leading-4">
                    Step 1 of 4
                  </p>
                </div>
                <div className="relative w-14 h-14">
                  <svg
                    className="-rotate-90 w-14 h-14"
                    viewBox="0 0 56 56"
                  >
                    <circle
                      cx="28"
                      cy="28"
                      fill="none"
                      r="22"
                      stroke="oklch(0.274 0.006 286.033)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      fill="none"
                      r="22"
                      stroke="oklch(0.546 0.245 262.881)"
                      strokeDasharray="138.2"
                      strokeDashoffset="103.7"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </svg>
                  <div className="flex absolute inset-0 justify-center items-center">
                    <span className="font-bold text-[#155dfc] text-xs leading-4">
                      25%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[oklch(0.696_0.17_162.48)/20%] border-[oklch(0.696_0.17_162.48)/50%] shrink-0 rounded-full border-black/1 border-1 border-solid flex justify-center items-center w-6 h-6">
                    <Check className="size-3 text-[oklch(0.696_0.17_162.48)]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-neutral-50 text-sm leading-5">
                      User Details
                    </p>
                    <p className="text-[#9f9fa9] text-xs leading-4">
                      Basic info collected
                    </p>
                  </div>
                  <span className="text-[oklch(0.696_0.17_162.48)] font-medium text-xs leading-4">
                    Done
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="shrink-0 rounded-full bg-[#155dfc]/20 border-[#155dfc]/50 border-1 border-solid flex justify-center items-center w-6 h-6">
                    <Loader className="size-3 animate-spin text-[#155dfc]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#9f9fa9] text-sm leading-5">{`Role & Permissions`}</p>
                    <p className="text-[#9f9fa9] text-xs leading-4">
                      Assign access level
                    </p>
                  </div>
                  <span className="font-medium text-[#155dfc] text-xs leading-4">
                    Next
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="shrink-0 rounded-full bg-zinc-800 border-white/10 border-1 border-solid flex justify-center items-center w-6 h-6">
                    <div className="rounded-full bg-[#9f9fa9] w-2 h-2" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#9f9fa9] text-sm leading-5">
                      MFA Setup
                    </p>
                    <p className="text-[#9f9fa9] text-xs leading-4">
                      Configure 2FA method
                    </p>
                  </div>
                  <span className="text-[#9f9fa9] text-xs leading-4">
                    Pending
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="shrink-0 rounded-full bg-zinc-800 border-white/10 border-1 border-solid flex justify-center items-center w-6 h-6">
                    <div className="rounded-full bg-[#9f9fa9] w-2 h-2" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#9f9fa9] text-sm leading-5">
                      Invite Sent
                    </p>
                    <p className="text-[#9f9fa9] text-xs leading-4">
                      Email invitation
                    </p>
                  </div>
                  <span className="text-[#9f9fa9] text-xs leading-4">
                    Pending
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-zinc-900 border-white/10 border-1 border-solid p-6">
              <div className="flex mb-4 items-center gap-2">
                <UserCheck className="size-4 text-[#155dfc]" />
                <p className="font-bold text-neutral-50 text-sm leading-5">
                  Recent Invites
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-[oklch(1_0_0/4%)] rounded-lg border-white/10 border-1 border-solid flex p-2.5 items-center gap-3">
                  <div className="bg-[oklch(0.627_0.265_303.9)/30%] border-[oklch(0.627_0.265_303.9)/50%] text-[oklch(0.627_0.265_303.9)] shrink-0 font-bold rounded-full text-xs leading-4 border-black/1 border-1 border-solid flex justify-center items-center w-8 h-8">
                    JK
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-neutral-50 text-xs leading-4">
                      James Kim
                    </p>
                    <div className="flex mt-0.5 items-center gap-1.5">
                      <span className="font-medium rounded-sm bg-[#155dfc]/20 text-[#155dfc] text-[10px] px-1.5 py-0.5">
                        SOC Analyst
                      </span>
                    </div>
                  </div>
                  <span className="shrink-0 text-[#9f9fa9] text-[10px]">
                    2h ago
                  </span>
                </div>
                <div className="bg-[oklch(1_0_0/4%)] rounded-lg border-white/10 border-1 border-solid flex p-2.5 items-center gap-3">
                  <div className="bg-[oklch(0.696_0.17_162.48)/30%] border-[oklch(0.696_0.17_162.48)/50%] text-[oklch(0.696_0.17_162.48)] shrink-0 font-bold rounded-full text-xs leading-4 border-black/1 border-1 border-solid flex justify-center items-center w-8 h-8">
                    PR
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-neutral-50 text-xs leading-4">
                      Priya Rajan
                    </p>
                    <div className="flex mt-0.5 items-center gap-1.5">
                      <span className="bg-[oklch(0.696_0.17_162.48)/20%] text-[oklch(0.696_0.17_162.48)] font-medium rounded-sm text-[10px] px-1.5 py-0.5">
                        IR Lead
                      </span>
                    </div>
                  </div>
                  <span className="shrink-0 text-[#9f9fa9] text-[10px]">
                    1d ago
                  </span>
                </div>
                <div className="bg-[oklch(1_0_0/4%)] rounded-lg border-white/10 border-1 border-solid flex p-2.5 items-center gap-3">
                  <div className="bg-[oklch(0.769_0.188_70.08)/30%] border-[oklch(0.769_0.188_70.08)/50%] text-[oklch(0.769_0.188_70.08)] shrink-0 font-bold rounded-full text-xs leading-4 border-black/1 border-1 border-solid flex justify-center items-center w-8 h-8">
                    MT
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-neutral-50 text-xs leading-4">
                      Marcus Torres
                    </p>
                    <div className="flex mt-0.5 items-center gap-1.5">
                      <span className="bg-[oklch(0.769_0.188_70.08)/20%] text-[oklch(0.769_0.188_70.08)] font-medium rounded-sm text-[10px] px-1.5 py-0.5">
                        Threat Hunter
                      </span>
                    </div>
                  </div>
                  <span className="shrink-0 text-[#9f9fa9] text-[10px]">
                    3d ago
                  </span>
                </div>
              </div>
              <div className="border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid mt-4 pt-3">
                <button className="transition-all font-medium rounded-lg text-[#9f9fa9] text-xs leading-4 border-white/10 border-1 border-solid flex justify-center items-center gap-1.5 w-full h-8">
                  <Users className="size-3" />
                  View All Users
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
