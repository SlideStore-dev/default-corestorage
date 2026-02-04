"use client";
import { motion } from "framer-motion";
import { Zap, Database, Search, Cpu, HardDrive, Share2, Layers, ShieldCheck, ChevronRight, Linkedin, Instagram, ArrowDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VisionPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 flex flex-col">

      {/* HERO: THE BENEFIT FIRST */}
      <header className="pt-48 pb-32 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900">
            Our <span className="text-blue-600">Vision.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Stop paying for "dumb" boxes. Core Storage evolves from a high-performance local NAS 
            to an intelligent global file fabric that manages itself.
          </p>
          <div className="mt-10 flex flex-col items-center gap-2 text-slate-300">
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">The Evolution</span>
            <ArrowDown size={20} className="animate-bounce" />
          </div>
        </motion.div>
      </header>

      {/* EVOLUTION TIMELINE */}
      <main className="max-w-5xl mx-auto px-6 pb-40 space-y-40">

        {/* STEP 1: INDEPENDENCE */}
        <EvolutionStep 
          version="v1.0"
          title={<>Total Hardware Freedom</>}
          benefit="Stop being locked into proprietary OS. Use the hardware your own, exactly how you want it."
          icon={<HardDrive className="text-blue-600" size={32} />}
          features={[
            "Raspberry Pi 5 Performance",
            "Open OS: TrueNAS, UNRAID, or RPi OS",
            "Zero Subscription Fees",
            "4-Bay SATA + NVMe Speed"
          ]}
          alignment="left"
        />

        {/* STEP 2: HYBRID INTELLIGENCE */}
        <EvolutionStep 
          version="v2.0"
          title="The 'Infinite' Drive"
          benefit="Never run out of space. Local SSD speed for active work; automatic archiving for the rest."
          icon={<Layers className="text-blue-600" size={32} />}
          features={[
            "Policy-Based Tiering (Hot/Cold)",
            "Integrated Search (Local + NAS)",
            "Fail-Safe Power Outage Protection",
            "Remote Access without the Cloud"
          ]}
          alignment="right"
        />

        {/* STEP 3: SEMANTIC SEARCH */}
        <EvolutionStep 
          version="v3.0"
          title="Search the Content, Not the Name"
          benefit="Stop digging through folders. Search for 'Project Blueprints' or 'Cancer Scans' and let AI find it."
          icon={<Search className="text-blue-600" size={32} />}
          features={[
            "Domain-Aware Compression",
            "Built-in AI Metadata Tagging",
            "Multi-Cloud Policy Sync",
            "Enterprise HA & Reliability"
          ]}
          alignment="left"
        />

      </main>

      {/* FINAL CTA */}
      <section className="bg-slate-50 py-32 text-center border-t border-slate-100">
        <h2 className="text-3xl font-black mb-6">Ready for better storage?</h2>
        <Link 
          href="/product" 
          target="_blank" 
          rel="noopener noreferrer"
        >
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg rounded-full shadow-xl">
          Get Early Access
        </Button>
        </Link>
      </section>
    </div>
  );
}

/* --- REUSABLE SUB-COMPONENT (Fixes parsing/clutter) --- */
function EvolutionStep({ version, title, benefit, icon, features, alignment }: any) {
  const isLeft = alignment === "left";

  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
    >
      {/* Icon Side */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-64 h-64 rounded-[3rem] bg-slate-50 border border-slate-100 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />
          <div className="relative z-10">{icon}</div>
          <div className="absolute top-6 left-6 text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
            {version}
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">{title}</h2>
        <p className="text-lg text-slate-500 leading-relaxed">{benefit}</p>
        <ul className="grid grid-cols-1 gap-3">
          {features.map((f: string, i: number) => (
            <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <ChevronRight size={16} className="text-blue-500" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}