"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Shield, Zap, ArrowRight, Lock, 
  Eye, Cpu, CloudOff, TrendingDown,
  Box, Sparkles, HardDrive
} from "lucide-react";
import LiveBenchmarking from "./livebenchmarking";
import Link from "next/link";

// ----------------------------
// VARIANTS
// ----------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } // Framer Motion-compliant
  }
};

// ----------------------------
// FEATURE CARD COMPONENT
// ----------------------------
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all bg-white"
    >
      <div className="mb-6">{icon}</div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

// ----------------------------
// MAIN COMPONENT
// ----------------------------
export default function ArchitectureComparison() {
  return (
    <section className="pt-15 pb-32 px-6 md:px-20 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO HEADER */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="text-center mb-32"
        >
          <motion.span 
            variants={itemVariants} 
            className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 inline-block"
          >
            Storage Without the Stress
          </motion.span>
          <motion.h2 
            variants={itemVariants} 
            className="text-6xl md:text-8xl font-black tracking-tight mb-8"
          >
            Own Your Data. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400 italic">
              Delete the Bills.
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Stop paying monthly "rent" to big tech just to look at your own files. 
            Core Storage gives you professional-grade hardware that pays for itself.
          </motion.p>
        </motion.div>

        {/* BENTO GRID COMPARISON */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          
          {/* THE CLOUD TRAP */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 text-red-500">
                <TrendingDown size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Subscription Trap</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Big cloud companies charge you to upload, charge you to store, and charge you a "ransom" just to download your own files.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Status: Losing Money</span>
            </div>
          </motion.div>

          {/* THE BASIC HARD DRIVE */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 text-amber-500">
                <Box size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">The "Dumb" Hard Drive</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Traditional storage just sits there. It doesn't organize your files, it doesn't compress them, and it won't help you find anything.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Status: Inefficient</span>
            </div>
          </motion.div>

          {/* CORE STORAGE HERO */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 rounded-[2.5rem] bg-blue-600 text-white flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-blue-200"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 -top-20 opacity-10"
            >
              <Sparkles size={300} />
            </motion.div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 text-white">
                <Zap size={24} fill="currentColor" />
              </div>
              <h3 className="text-3xl font-bold mb-4">The Intelligent Choice</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium"><Lock size={16}/> 100% Private & Secure</li>
                <li className="flex items-center gap-2 text-sm font-medium"><Sparkles size={16}/> Smart Auto-Organizing</li>
                <li className="flex items-center gap-2 text-sm font-medium"><CloudOff size={16}/> Works Without Internet</li>
              </ul>
            </div>
            <button className="relative z-10 w-full py-4 bg-white text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Link href="/product" className="block">
                Start Saving Now
              </Link>
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* WORKFLOWS */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold mb-12 text-center">Built For People Who Create.</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Eye className="text-blue-600" />} 
              title="Security Teams" 
              desc="Smarter video storage. Only save the footage where something actually happens."
            />
            <FeatureCard 
              icon={<Shield className="text-indigo-600" />} 
              title="Doctors & Clinics" 
              desc="Keep patient records safe on-site. Fast, private, and always compliant."
            />
            <FeatureCard 
              icon={<Cpu className="text-purple-600" />} 
              title="Content Creators" 
              desc="Edit 8K video directly from the device. Zero lag. Zero waiting."
            />
            <FeatureCard 
              icon={<HardDrive className="text-emerald-600" />} 
              title="IT & Tech" 
              desc="Massive capacity with automatic backup. Set it up once, forget it forever."
            />
          </div>
        </div>

        {/* THE "MATH" SECTION */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-white flex flex-col md:flex-row items-center gap-16 overflow-hidden relative">
          <div className="flex-1 z-10">
            <h4 className="text-5xl font-bold mb-6 leading-tight">
              Watch the <br/> <span className="text-blue-400 italic">Savings</span> Stack Up.
            </h4>
            <p className="text-slate-400 text-lg mb-8 font-light">
              We use professional compression tech that shrinks your files without losing quality. 
              It’s like getting a bigger hard drive for free.
            </p>
            <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-4xl font-black text-blue-400 tracking-tighter">80%</span>
              <span className="text-sm font-bold uppercase tracking-widest leading-none">Cheaper than <br/> Cloud Storage</span>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white/10 backdrop-blur-2xl p-6 rounded-3xl border border-white/20"
            >
              <LiveBenchmarking />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
