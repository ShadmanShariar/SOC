
import {
  Building2,
  Eye,
  Globe,
  Lock,
  LogIn,
  Mail,
  Shield,
  ShieldCheck,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div>
      <div className="min-h-screen relative bg-zinc-950 text-neutral-50 w-full h-fit overflow-hidden h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="bg-blue-600/18 absolute inset-0" />
        <div className="opacity-20 bg-slate-400/6 absolute inset-0" />
        <div className="bg-blue-500/12 absolute inset-0" />
        <div className="relative z-10 min-h-screen flex">
          <div className="w-1/2 flex p-12 flex-col justify-between">
            <div className="text-center flex pt-8 flex-col items-center gap-8">
              <div className="size-24 shadow-[0_0_40px_rgba(37,99,235,0.45)] rounded-full bg-[#155dfc]/15 border-[#155dfc]/30 border-1 border-solid flex justify-center items-center">
                <Shield className="size-12 drop-shadow-[0_0_18px_rgba(37,99,235,0.9)] text-[#155dfc]" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="drop-shadow-[0_0_18px_rgba(37,99,235,0.55)] font-bold text-neutral-50 text-5xl leading-12 tracking-[2.88px]">
                  Intelligent Security
                </h1>
                <p className="text-[#9f9fa9] text-sm leading-5">
                  SOC Platform — Enterprise Security Operations Center
                </p>
              </div>
              <div className="max-w-2xl shadow-[0_0_60px_rgba(37,99,235,0.12)] backdrop-blur-md rounded-3xl bg-zinc-900/70 border-white/10 border-1 border-solid p-6 w-full">
                <div className="flex mb-4 justify-between items-center">
                  <div className="font-medium text-neutral-50 text-sm leading-5 flex items-center gap-2">
                    <Globe className="size-4 text-[#155dfc]" />
                    Live Global Threat Map
                  </div>
                  <div className="rounded-full bg-[#ff6467]/10 text-[#ff6467] text-xs leading-4 border-[#ff6467]/30 border-1 border-solid px-3 py-1">
                    LIVE
                  </div>
                </div>
                <div className="relative rounded-2xl bg-blue-600/18 border-white/10 border-1 border-solid h-72 overflow-hidden">
                  <img
                    alt="Global threat map"
                    className="object-cover opacity-70 w-full h-full"
                    src="https://screens-image-components-public.s3.eu-north-1.amazonaws.com/world-map-3d.png"
                  />
                  <div className="bg-[#0a0e1a]/90 absolute inset-0" />
                  <div className="left-[18%] top-[38%] size-3 shadow-[0_0_18px_rgba(239,68,68,0.9)] rounded-full bg-[#ff6467] absolute" />
                  <div className="left-[42%] top-[30%] size-3 shadow-[0_0_18px_rgba(37,99,235,0.9)] rounded-full bg-[#155dfc] absolute" />
                  <div className="left-[68%] top-[42%] size-3 shadow-[0_0_18px_rgba(245,158,11,0.9)] rounded-full bg-[#fe9a00] absolute" />
                  <div className="left-[24%] top-[58%] size-3 shadow-[0_0_18px_rgba(239,68,68,0.9)] rounded-full bg-[#ff6467] absolute" />
                  <div className="left-[18%] top-[38%] w-[24%] rotate-[-12deg] origin-left bg-red-500/90 absolute h-px" />
                  <div className="left-[42%] top-[30%] w-[28%] rotate-[10deg] origin-left bg-blue-600/90 absolute h-px" />
                  <div className="left-[24%] top-[58%] w-[34%] rotate-[18deg] origin-left bg-red-500/90 absolute h-px" />
                </div>
              </div>
              <div className="grid grid-cols-3 max-w-2xl gap-4 w-full">
                <div className="rounded-2xl bg-zinc-900/70 border-white/10 border-1 border-solid p-4">
                  <div className="text-[#9f9fa9] text-xs leading-4 flex items-center gap-2">
                    <span className="size-2 shadow-[0_0_12px_rgba(37,99,235,0.9)] rounded-full bg-[#155dfc]" />
                    Events/sec Ingested
                  </div>
                  <div className="font-semibold text-2xl leading-8 mt-2">
                    1.2M
                  </div>
                </div>
                <div className="rounded-2xl bg-zinc-900/70 border-white/10 border-1 border-solid p-4">
                  <div className="text-[#9f9fa9] text-xs leading-4 flex items-center gap-2">
                    <span className="size-2 shadow-[0_0_12px_rgba(245,158,11,0.9)] rounded-full bg-[#fe9a00]" />
                    Threats Detected Today
                  </div>
                  <div className="font-semibold text-2xl leading-8 mt-2">
                    284
                  </div>
                </div>
                <div className="rounded-2xl bg-zinc-900/70 border-white/10 border-1 border-solid p-4">
                  <div className="text-[#9f9fa9] text-xs leading-4 flex items-center gap-2">
                    <span className="size-2 shadow-[0_0_12px_rgba(239,68,68,0.9)] rounded-full bg-[#ff6467]" />
                    Active Alerts
                  </div>
                  <div className="font-semibold text-2xl leading-8 mt-2">
                    47
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex p-12 justify-center items-center">
              <div className="max-w-xl shadow-[0_0_70px_rgba(37,99,235,0.18)] backdrop-blur-xl rounded-3xl bg-zinc-900/80 border-white/10 border-1 border-solid p-8 w-full">
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-3xl leading-9">Welcome Back</h2>
                  <p className="text-[#9f9fa9] text-sm leading-5">
                    Sign in to your SOC account
                  </p>
                </div>
                <div className="rounded-2xl bg-zinc-800 border-white/10 border-1 border-solid flex mt-6 p-1">
                  <Button className="rounded-xl bg-[#155dfc] text-[#1c398e] flex-1 gap-2">
                    <ShieldCheck className="size-4" />
                    Administrator
                  </Button>
                  <Button
                    className="rounded-xl text-[#9f9fa9] flex-1 gap-2"
                    variant="ghost"
                  >
                    <User className="size-4" />
                    SOC Analyst
                  </Button>
                </div>
                <div className="flex mt-6 flex-col gap-4">
                  <div className="space-y-2">
                    <Label className="text-[#9f9fa9] text-sm leading-5">
                      Email / Username
                    </Label>
                    <div className="rounded-2xl bg-[#0D1226] border-white/15 border-1 border-solid flex px-4 py-3 items-center gap-3">
                      <Mail className="size-4 text-[#9f9fa9]" />
                      <Input
                        className="bg-transparent text-neutral-50 border-black/1 border-0 border-solid p-0"
                        placeholder="admin@sentinel-soc.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[#9f9fa9] text-sm leading-5">
                      Password
                    </Label>
                    <div className="rounded-2xl bg-[#0D1226] border-white/15 border-1 border-solid flex px-4 py-3 items-center gap-3">
                      <Lock className="size-4 text-[#9f9fa9]" />
                      <Input
                        className="bg-transparent text-neutral-50 border-black/1 border-0 border-solid p-0"
                        placeholder="Enter your password"
                        type="password"
                      />
                      <Eye className="size-4 text-[#9f9fa9]" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Checkbox className="border-[#155dfc] border-0 border-solid" />
                      <span className="text-[#9f9fa9] text-sm leading-5">
                        Remember this device
                      </span>
                    </div>
                    <a className="text-[#155dfc] text-sm leading-5" href="#">
                      Forgot Password?
                    </a>
                  </div>
                  <Button className="bg-[linear-gradient(90deg,oklch(0.546_0.245_262.881),oklch(0.696_0.17_162.48))] rounded-2xl text-white mt-2 gap-2 w-full">
                    <LogIn className="size-4" />
                    Sign In
                  </Button>
                  <div className="flex py-2 items-center gap-4">
                    <div className="bg-white/10 flex-1 h-px" />
                    <span className="uppercase text-[#9f9fa9] text-xs leading-4 tracking-[3.2px]">
                      Or continue with
                    </span>
                    <div className="bg-white/10 flex-1 h-px" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      className="rounded-2xl bg-zinc-800 text-neutral-50 border-white/10 border-0 border-solid gap-2"
                      variant="outline"
                    >
                      <Building2 className="size-4" />
                      Microsoft
                    </Button>
                    <Button
                      className="rounded-2xl bg-zinc-800 text-neutral-50 border-white/10 border-0 border-solid gap-2"
                      variant="outline"
                    >
                      <Globe className="size-4" />
                      Google
                    </Button>
                  </div>
                  <div className="rounded-2xl bg-emerald-500/10 border-emerald-500/30 border-1 border-solid p-4">
                    <div className="font-medium text-emerald-400 text-sm leading-5 flex items-center gap-2">
                      <ShieldCheck className="size-4" />
                      Multi-Factor Authentication
                    </div>
                    <p className="text-[#9f9fa9] text-sm leading-5 mt-1">
                      MFA is enforced for all accounts
                    </p>
                  </div>
                  <p className="text-center text-[#9f9fa9] text-sm leading-5">
                    New to Intelligent Security?
                    <a className="text-[#155dfc]" href="#">
                      Contact your administrator
                    </a>
                  </p>
                </div>
                <div className="flex mt-6 flex-wrap justify-center gap-2">
                  <Badge
                    className="rounded-full bg-zinc-800 text-xs leading-4 px-3 py-1"
                    variant="secondary"
                  >
                    SOC 2 Type II Certified
                  </Badge>
                  <Badge
                    className="rounded-full bg-zinc-800 text-xs leading-4 px-3 py-1"
                    variant="secondary"
                  >
                    ISO 27001
                  </Badge>
                  <Badge
                    className="rounded-full bg-zinc-800 text-xs leading-4 px-3 py-1"
                    variant="secondary"
                  >
                    FIPS 140-2
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 bg-[#0D1226] border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid px-8 py-4">
            <div className="text-[#9f9fa9] text-sm leading-5 flex justify-between items-center">
              <span>Intelligent Security SOC Platform v4.2.1 © 2025</span>
              <div className="flex items-center gap-4">
                <span>UTC 14:32:18</span>
                <span className="text-emerald-400 flex items-center gap-2">
                  <span className="size-2 shadow-[0_0_12px_rgba(34,197,94,0.9)] rounded-full bg-emerald-400" />
                  All Systems Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
