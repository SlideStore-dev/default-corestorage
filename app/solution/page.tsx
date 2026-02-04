"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, Video, Activity, Cloud, ArrowRight, ShieldCheck, 
  Zap, HardDrive, Share2, Database, ChevronDown, 
  Lock, Search, Globe, FileText, Server, BarChart3,
  Cpu, Terminal, Sparkles
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const STORIES = [
  {
    id: "ai",
    title: "AI Infrastructure",
    tagline: "High-Density Data Gravity",
    icon: <Brain size={20} />,
    color: "amber",
    legacy: {
      workflow: ["Cloud S3 Bucket", "High-Latency Internet", "Local GPU Cache", "Model Training"],
      pain: "Egress fees and IOPS bottlenecks extend training cycles by weeks.",
    },
    coreStorage: {
      workflow: ["Local V0 NVMe Tier", "Direct PCIe Fabric", "A100/H100 Cluster", "Real-time Checkpointing"],
      benefit: "Eliminate data starvation. Direct-to-compute throughput at zero latency.",
    },
    upgrades: {
      v1: "Model S Hardware: 4-bay SATA for multi-petabyte datasets + NVMe for training buffers.",
      v2: "Infinite Drive: Sync datasets across global labs with zero-latency P2P mounting.",
      v3: "Semantic Fabric: Auto-tagging training sets by content, reducing data prep time by 40%."
    }
  },
  {
    id: "creative",
    title: "Content Creation",
    tagline: "Zero-Proxy 8K Workflows",
    icon: <Video size={20} />,
    color: "blue",
    legacy: {
      workflow: ["RAW Footage", "Transcode to Proxy", "Edit on SSD", "Relink to 4K/8K RAW"],
      pain: "Hours wasted in transcoding. Single drive failure risk is constant.",
    },
    coreStorage: {
      workflow: ["RAW Footage", "10GbE Direct Link", "Multi-User RAID Pool", "Instant Timeline Scrub"],
      benefit: "Edit 8K RAW directly. No proxies. No rendering wait times.",
    },
    upgrades: {
      v1: "Model S Hardware: RAID 5 protection + 10GbE expansion for multi-editor access.",
      v2: "Infinite Drive: Remote editors stream RAW footage as if local via edge-caching.",
      v3: "Semantic Fabric: AI-powered b-roll search. Find 'sunsets' across 100TBs in seconds."
    }
  },
  {
    id: "medical",
    title: "Medical Imaging",
    tagline: "Sovereign HIPAA Compliance",
    icon: <Activity size={20} />,
    color: "emerald",
    legacy: {
      workflow: ["MRI/CT Scanner", "Legacy Proprietary PACS", "Manual CD/VPN Export", "Remote Consultation"],
      pain: "Data is siloed. Sharing across clinics is slow and insecure.",
    },
    coreStorage: {
      workflow: ["DICOM Direct Node", "ZFS Encrypted Pool", "Secure Peer Link", "Instant AI Diagnostics"],
      benefit: "100% Data Sovereignty. HIPAA compliant by design, not by patch.",
    },
    upgrades: {
      v1: "Model S Hardware: ECC Memory support + ZFS snapshots for anti-ransomware.",
      v2: "Infinite Drive: Secure diagnostic-grade streaming to any specialist worldwide.",
      v3: "Semantic Fabric: Automated anomaly detection via local LLM indexing of scans."
    }
  },
  {
    id: "cloud",
    title: "Hybrid Cloud",
    tagline: "Edge Acceleration",
    icon: <Cloud size={20} />,
    color: "slate",
    legacy: {
      workflow: ["Remote Site", "Slow Cloud Sync", "Regional Office", "High Egress Fees"],
      pain: "Branch offices lag behind main office data. Cloud costs scale exponentially.",
    },
    coreStorage: {
      workflow: ["Edge Node", "Local-Speed Cache", "Encrypted Tunnel", "Global Metadata Sync"],
      benefit: "Local speed everywhere. Cloud used only for disaster recovery.",
    },
    upgrades: {
      v1: "Model S Hardware: Dual 2.5GbE links for redundant site-to-site connectivity.",
      v2: "Infinite Drive: Global namespace. Every employee sees the same Z:/ drive.",
      v3: "Semantic Fabric: Intelligent deduplication reducing sync traffic by 60%."
    }
  }
];

export default function SolutionsHub() {
  const [activeTab, setActiveTab] = useState(STORIES[0]);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 flex flex-col">

      <main className="flex-grow pt-32 pb-40 px-6">
        <div className="max-w-[90rem] mx-auto">
          
          {/* HEADER */}
          <header className="mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-4">
              Industry Verticals
            </div>
            <h1 className="text-6xl font-black tracking-tighter mb-4">The <span className="text-blue-600">Core</span> Transformation</h1>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto italic">Transitioning from fragmented legacy silos to an autonomous file fabric.</p>
          </header>

          {/* SELECTOR */}
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {STORIES.map((s) => (
              <button 
                key={s.id}
                onClick={() => setActiveTab(s)}
                className={`px-6 py-4 rounded-[1.5rem] font-bold text-xs transition-all flex items-center gap-3 border ${
                  activeTab.id === s.id ? "bg-white shadow-xl border-blue-200 text-blue-600 scale-105" : "bg-transparent border-slate-200 text-slate-400 opacity-60 hover:opacity-100"
                }`}
              >
                {s.icon} {s.title}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT: WORKFLOW COMPARISON */}
            <div className="lg:col-span-8 space-y-8">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {/* LEGACY CARD */}
                  <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5"><Lock size={80}/></div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-2">
                      Legacy Silos
                    </h3>
                    <WorkflowStepper steps={activeTab.legacy.workflow} isLegacy />
                    <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-[10px] text-slate-400 font-black uppercase mb-1">Operational Pain</p>
                      <p className="text-sm text-slate-600 font-semibold leading-relaxed">"{activeTab.legacy.pain}"</p>
                    </div>
                  </div>

                  {/* CORE CARD */}
                  <div className="bg-white rounded-[2.5rem] p-10 border-2 border-blue-50 shadow-2xl shadow-blue-100/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 text-blue-600"><Zap size={80}/></div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-8 flex items-center gap-2">
                      Core Efficiency
                    </h3>
                    <WorkflowStepper steps={activeTab.coreStorage.workflow} />
                    <div className="mt-8 p-6 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200">
                      <p className="text-[10px] text-blue-100 font-black uppercase mb-1">The Benefit</p>
                      <p className="text-sm text-white font-bold leading-relaxed">{activeTab.coreStorage.benefit}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* DYNAMIC DIAGRAM PLACEHOLDER */}
              <div className="w-full bg-slate-100 rounded-[2.5rem] h-64 border border-dashed border-slate-300 flex items-center justify-center p-12 text-center">
                <p className="text-slate-400 text-sm font-medium">
                   [Interactive Flowchart: Optimized {activeTab.title} Data Path]
                </p>
              </div>
              
            </div>

            {/* RIGHT: CUMULATIVE REPORT */}
            <div className="lg:col-span-4">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white sticky top-32">
                <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-8 flex items-center gap-2">
                  <BarChart3 size={14}/> Cumulative Upgrade Impact
                </h4>
                
                <div className="space-y-8">
                  <ReportItem 
                    version="v1.0" 
                    title="Model S Deployment" 
                    desc={activeTab?.upgrades?.v1} 
                    active 
                    icon={<Cpu size={16}/>}
                  />
                  <ReportItem 
                    version="v2.0" 
                    title="Network Acceleration" 
                    desc={activeTab?.upgrades?.v2} 
                    icon={<Globe size={16}/>}
                  />
                  <ReportItem 
                    version="v3.0" 
                    title="Semantic Intelligence" 
                    desc={activeTab?.upgrades?.v3} 
                    icon={<Sparkles size={16}/>}
                  />
                </div>

                <Button className="w-full mt-10 bg-white hover:bg-slate-100 text-slate-900 py-6 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                  Request Case Study
                </Button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

// Sub-components with safety logic
function WorkflowStepper({ steps, isLegacy }: { steps: string[], isLegacy?: boolean }) {
  return (
    <div className="space-y-4">
      {steps.map((s, i) => (
        <div key={i} className="relative flex items-center gap-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${isLegacy ? 'bg-slate-100 text-slate-400' : 'bg-blue-100 text-blue-600 border border-blue-200'}`}>
            0{i + 1}
          </div>
          <div className={`text-xs font-bold ${isLegacy ? 'text-slate-400' : 'text-slate-700'}`}>{s}</div>
          {i !== steps.length - 1 && (
            <div className="absolute left-4 top-8 w-[2px] h-4 bg-slate-100" />
          )}
        </div>
      ))}
    </div>
  );
}

function ReportItem({ version, title, desc, active, icon }: any) {
  return (
    <div className={`relative pl-8 transition-all ${active ? 'opacity-100' : 'opacity-40'}`}>
      <div className={`absolute left-0 top-0 w-px h-full ${active ? 'bg-blue-500' : 'bg-slate-800'}`} />
      {active && <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />}
      
      <div className="mb-1 flex items-center gap-2">
        <span className="text-blue-500 font-black text-[9px] uppercase tracking-widest">{version}</span>
        {active && <span className="text-slate-500">{icon}</span>}
      </div>
      <h5 className="text-sm font-bold mb-1">{title}</h5>
      <p className="text-xs text-slate-400 leading-relaxed font-medium">{desc || "Documentation pending release."}</p>
    </div>
  );
}