"use client";

import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import { 
  ShieldCheck, 
  Cpu, 
  Check, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  FileSpreadsheet,
  HardDrive
} from 'lucide-react';

// --- ANIMATION CONSTANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } as Transition 
  }
};

// Floating animation with proper easing type
const floatingAnimation = (delay = 0): Variants => ({
  initial: { y: 0, opacity: 0 },
  animate: { 
    y: [0, -15, 0],
    opacity: 1,
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      delay, 
      ease: [0.42, 0, 0.58, 1] // cubic-bezier equivalent of easeInOut
    } as Transition
  }
});

// --- TYPES ---
interface FileCardProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  pos: string;
  delay?: number;
}

// --- FLOATING FILE CARD ---
const FileCard: React.FC<FileCardProps> = ({ icon, label, color, pos, delay = 0 }) => (
  <motion.div 
    variants={floatingAnimation(delay)}
    initial="initial"
    animate="animate"
    className={`absolute ${pos} hidden md:flex items-center gap-3 p-4 rounded-2xl bg-white shadow-xl border border-slate-100 z-30 pointer-events-none`}
  >
    <div className={`${color} p-3 rounded-xl`}>{icon}</div>
    <span className="font-black text-xs tracking-tight">{label}</span>
  </motion.div>
);

// --- MAIN COMPONENT ---
const BeeStationComplete: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-yellow-200 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-slate-50 to-white">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            Your files <br /> <span className="text-blue-600 italic">everywhere.</span>
          </h1>
          <p className="text-xl text-slate-500 mb-10">The personal cloud that handles images, PDFs, and everything in between.</p>
          <div className="aspect-video max-w-4xl mx-auto bg-slate-200 rounded-[2.5rem] flex items-center justify-center border-8 border-white shadow-2xl">
            <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Main Product Video/Image Placeholder</span>
          </div>
        </motion.div>
      </section>

      {/* 2. FLOATING FILE GALLERY */}
      <section className="py-32 px-6 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="text-4xl font-black mb-4"
          >
            Any file at your fingertips
          </motion.h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-20">
            Back up your documents, designs, and memories to relive moments or finish work no matter where you are.
          </p>

          <div className="relative h-[500px] flex items-center justify-center">
            {/* Center Phone Mockup */}
            <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl relative z-20 flex flex-col p-4 overflow-hidden">
                <div className="w-20 h-6 bg-slate-800 rounded-full mx-auto mb-6" />
                <div className="space-y-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="h-16 bg-slate-800/50 rounded-xl animate-pulse" />
                    ))}
                </div>
                <div className="absolute bottom-10 left-0 right-0 text-center text-white/20 font-bold text-[10px] tracking-widest uppercase">Mobile App UI</div>
            </div>

            {/* Floating Files */}
            <FileCard icon={<FileText size={24}/>} label="Contract.pdf" color="bg-blue-100 text-blue-600" pos="top-10 left-10 md:left-20" delay={0} />
            <FileCard icon={<ImageIcon size={24}/>} label="Vacation.jpg" color="bg-orange-100 text-orange-600" pos="top-40 right-10 md:right-20" delay={1} />
            <FileCard icon={<Video size={24}/>} label="Demo.mp4" color="bg-purple-100 text-purple-600" pos="bottom-20 left-0 md:left-10" delay={0.5} />
            <FileCard icon={<FileSpreadsheet size={24}/>} label="Budget.xlsx" color="bg-green-100 text-green-600" pos="bottom-40 right-0 md:right-32" delay={1.5} />
          </div>
        </div>
      </section>

      {/* 3. CLOUD VS PRIVATE SECTION */}
      <section className="py-32 px-6 bg-[#F8F7F2]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-5xl font-black tracking-tighter mb-6 leading-tight">Cloud-like experience...</h2>
              <p className="text-slate-500 text-lg mb-16 max-w-md">
                With a built-in hard drive and everything preconfigured, BeeStation is ready to replace your current cloud storage right out of the box.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              <h2 className="text-5xl font-black tracking-tighter mb-8 italic">...but more than a cloud</h2>
              <ul className="space-y-8">
                <li className="flex gap-4 items-start">
                  <div className="bg-[#FCBF1D] p-1 rounded shadow-lg shadow-yellow-500/20"><Check size={20} className="text-white" strokeWidth={3} /></div>
                  <div>
                    <h4 className="font-black text-xl">One-time purchase</h4>
                    <p className="text-slate-500">No more monthly subscription fees</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-[#FCBF1D] p-1 rounded shadow-lg shadow-yellow-500/20"><Check size={20} className="text-white" strokeWidth={3} /></div>
                  <div>
                    <h4 className="font-black text-xl">100% data ownership</h4>
                    <p className="text-slate-500">Full control without sacrificing privacy</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:w-1/2 relative">
            <div className="aspect-[4/5] bg-slate-200 rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl flex items-center justify-center">
              <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Lifestyle Context Image Placeholder</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. TECH SPECS TABLE */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto border-t pt-20">
            <h3 className="text-center font-black text-3xl mb-12">Technical Specifications</h3>
            <table className="w-full text-left">
                <tbody>
                    <tr className="border-b"><td className="py-4 font-bold">Storage</td><td className="py-4">4TB / 8TB Built-in</td></tr>
                    <tr className="border-b"><td className="py-4 font-bold">Processor</td><td className="py-4">Realtek Quad-core 1.7GHz</td></tr>
                    <tr className="border-b"><td className="py-4 font-bold">LAN</td><td className="py-4">1GbE RJ-45</td></tr>
                </tbody>
            </table>
        </div>
      </section>

    </div>
  );
};

export default BeeStationComplete;
