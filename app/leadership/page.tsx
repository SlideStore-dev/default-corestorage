"use client";
import { motion } from "framer-motion";
import { Zap, Database, Search, AlertTriangle, ArrowRight, Image as ImageIcon, HelpCircle, Instagram, Linkedin, Cpu, Globe, Terminal, Code } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LeadershipPage() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 flex flex-col">

      {/* MAIN CONTENT */}
      <main className="flex-grow pt-32 pb-20 px-6 md:px-20 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-4 tracking-tight">Leadership</h1>
            <p className="text-slate-500 text-lg">The architects of intelligent storage infrastructure.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* FOUNDER 1: CEO / HARDWARE */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-slate-200 via-amber-200/40 to-slate-200 shadow-xl overflow-hidden"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-[1.9rem] p-8 h-full flex flex-col">
              <div className="relative w-20 h-20 mb-6 mx-auto">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-dashed border-amber-400/50 rounded-full"
                />
                <div className="absolute inset-3 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-colors duration-500">
                  <Cpu className="text-amber-400 group-hover:text-white" size={24} />
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">Amal George Mechirackal</h3>
                <p className="text-blue-600 font-bold text-[11px] uppercase tracking-[0.2em] mt-2">Co-founder</p>
              </div>

              <div className="space-y-3 mb-8">
                <ProfileStat icon={<Database size={14}/>} label="Expertise" value="Integrated Circuit Arch" />
                <ProfileStat icon={<Zap size={14}/>} label="History" value="Co-Founder, Aroleap & Software @ PureStorage" />
                <ProfileStat icon={<Globe size={14}/>} label="Alumni" value="IIT Delhi - IC Expert" />
              </div>

              <div className="mt-auto flex gap-2">
                <Link href="https://linkedin.com/in/amal-mechirackal" target="_blank" className="flex-1">
                  <Button variant="outline" className="w-full rounded-xl border-slate-200 hover:bg-slate-50 text-xs font-bold py-5">
                    <Linkedin size={14} className="mr-2" /> LinkedIn
                  </Button>
                </Link>
                <Link href="mailto:amalgeorgem94@gmail.com" className="flex-1">
                  <Button className="w-full rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold py-5">
                    Email Direct
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* FOUNDER 2: CTO / SOFTWARE */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-slate-200 via-blue-200/40 to-slate-200 shadow-xl overflow-hidden"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-[1.9rem] p-8 h-full flex flex-col">
              <div className="relative w-20 h-20 mb-6 mx-auto">
                <div className="absolute inset-0 bg-blue-50 rounded-full animate-pulse" />
                <div className="absolute inset-3 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-slate-900 transition-colors duration-500">
                  <Terminal className="text-white" size={24} />
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">Suvansh Arora</h3>
                <p className="text-blue-600 font-bold text-[11px] uppercase tracking-[0.2em] mt-2">Co-founder</p>
              </div>

              <div className="space-y-3 mb-8">
                <ProfileStat icon={<Code size={14}/>} label="Focus" value="Complete Software Stack" />
                <ProfileStat icon={<Zap size={14}/>} label="History" value="Software @ Dell EMC, PureStorage" />
                <ProfileStat icon={<Globe size={14}/>} label="Alumni" value="IIIT Jabalpur" />
              </div>

              <div className="mt-auto flex gap-2">
                <Link href="https://www.linkedin.com/in/suvansh-arora" target="_blank" className="flex-1">
                  <Button variant="outline" className="w-full rounded-xl border-slate-200 hover:bg-slate-50 text-xs font-bold py-5">
                    <Linkedin size={14} className="mr-2" /> LinkedIn
                  </Button>
                </Link>
                <Link href="mailto:suvansharora07@gmail.com" className="flex-1">
                  <Button className="w-full rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold py-5">
                    Email Direct
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>

        <div className="max-w-2xl mx-auto p-8 border border-dashed border-slate-200 rounded-[2rem] text-center">
            <p className="text-slate-400 text-sm italic leading-relaxed">
              Backed by veterans from the NAS, Cloud, and Medical Imaging sectors. <br />
              <span className="font-bold text-slate-600 not-italic">Contact us for Investor Relations.</span>
            </p>
        </div>
      </main>
    </div>
  );
}

// Helper Component for Clean Stats
function ProfileStat({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-slate-50">
      <div className="text-slate-400">{icon}</div>
      <div className="flex flex-col">
        <span className="text-[9px] uppercase font-bold text-slate-400 tracking-tight">{label}</span>
        <span className="text-xs font-semibold text-slate-700">{value}</span>
      </div>
    </div>
  );
}