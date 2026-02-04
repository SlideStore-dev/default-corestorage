"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, Terminal, Zap, CheckCircle2, 
  CreditCard, ChevronDown, QrCode, ArrowRight,
  ShieldCheck, HardDrive, Network, Layers, 
  Box, Wind, Activity, Database, Home, Briefcase, Play, CloudOff, Linkedin, Instagram, HelpCircle, Plus,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductOrderPage() {
  const [isManifestOpen, setIsManifestOpen] = useState(false);

const [showCheckoutModal, setShowCheckoutModal] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
  
  const [config, setConfig] = useState({
    os: "Raspberry Pi OS",
    memory: "4GB",
    emmc: "None",
    nvme: false,
    network: "1GbE",
    raid: "ZFS",
    boot: "eMMC",
    fs: "ZFS"
  });

  const addOnPrices: Record<string, number> = {
    "4GB": 0, "8GB": 4500,
    "None": 0, "16GB": 1200, "32GB": 2200, "64GB": 3500,
    "NVMe_Slot": 1800,
    "1GbE": 0, "2.5GbE": 2800, "10GbE": 7500,
  };

  const pricing = useMemo(() => {
    const baseAmount = 21186.44; 
    const addons = (addOnPrices[config.memory] || 0) + 
                   (addOnPrices[config.emmc] || 0) + 
                   (config.nvme ? addOnPrices["NVMe_Slot"] : 0) + 
                   (addOnPrices[config.network] || 0);
    
    const subtotal = baseAmount + addons;
    const gst = subtotal * 0.18;
    const total = Math.round(subtotal + gst);

    return { 
      base: Math.round(baseAmount), 
      addons, 
      gst: Math.round(gst), 
      total 
    };
  }, [config]);

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-emerald-500 selection:text-white">
        {/* ADD THIS BLOCK: */}
<AnimatePresence>
  {showCheckoutModal && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      onClick={() => {setShowCheckoutModal(false); setIsSubmitted(false);}}
      className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
    />
    <motion.div 
      initial={{ scale: 0.9, y: 20, opacity: 0 }} 
      animate={{ scale: 1, y: 0, opacity: 1 }} 
      exit={{ scale: 0.9, y: 20, opacity: 0 }}
      className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl relative overflow-hidden z-[101]"
    >
      <button 
        onClick={() => {setShowCheckoutModal(false); setIsSubmitted(false);}} 
        className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"
      >
        <Plus className="rotate-45" size={28} />
      </button>
  
      <div className="p-10 md:p-14">
        {!isSubmitted ? (
          <form 
            onSubmit={(e) => { 
              e.preventDefault(); 
              
              // Constructing the body
              const emailBody = `NEW ORDER: Core Storage Model S
                -------------------------------------------
                CUSTOMER: ${formData.name}
                PHONE: ${formData.phone}
                ADDRESS: ${formData.address}

                SPECS:
                - OS: ${config.os}
                - Memory: ${config.memory}
                - Flash: ${config.emmc}
                - Network: ${config.network}
                - NVMe: ${config.nvme ? "Yes" : "No"}

                TOTAL: ₹${pricing.total.toLocaleString()}
                -------------------------------------------`;
              const mailtoLink = `mailto:suvansharora07@gmail.com,amalgeorgem94@gmail.com?subject=${encodeURIComponent(`Order Request - ${formData.name}`)}&body=${encodeURIComponent(emailBody)}`;
              
              // Instant Trigger
              const link = document.createElement('a');
              link.href = mailtoLink;
              link.click();
              
              setIsSubmitted(true); 
            }} 
            className="space-y-4"
          >
            <h2 className="text-4xl font-black tracking-tight mb-6">Finalize Order</h2>
            
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
              <input required type="text" placeholder="Your Name" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 outline-none" onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
  
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                <input required type="email" placeholder="email@example.com" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone</label>
                <input 
                    required 
                    type="tel" 
                    placeholder="10-digit Phone Number" 
                    pattern="[0-9]{10}" 
                    maxLength={10}
                    title="Please enter a valid 10-digit phone number"
                    className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl" 
                    onChange={(e) => {
                        // This regex ensures only numbers are typed
                        const val = e.target.value.replace(/\D/g, "");
                        setFormData({...formData, phone: val});
                    }} 
                    value={formData.phone}
                    />
              </div>
            </div>
  
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Shipping Address</label>
              <textarea required placeholder="Full Address..." className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl resize-none focus:ring-2 focus:ring-emerald-500/20 outline-none" rows={3} onChange={(e) => setFormData({...formData, address: e.target.value})} />
            </div>
  
            <Button type="submit" className="w-full bg-slate-900 text-white py-8 rounded-2xl text-lg font-black group shadow-xl hover:bg-emerald-600 transition-all">
              Proceed to Email <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform text-emerald-400" />
            </Button>
          </form>
        ) : (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8 shadow-inner">
              <CheckCircle2 size={48} className="text-emerald-500" />
            </div>
            <h2 className="text-4xl font-black mb-4">Email Drafted!</h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm">
              We've opened your mail app with your build details. <br/><br/>
              <span className="text-slate-900 font-bold underline decoration-emerald-500 underline-offset-4">Just hit send</span> and Suvansh & Amal will take it from there!
            </p>
            <Button 
              onClick={() => {setShowCheckoutModal(false); setIsSubmitted(false);}} 
              className="mt-10 bg-slate-900 text-white px-16 py-4 rounded-xl font-bold active:scale-95 transition-all"
            >
              Done
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  </div>
  )}
</AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-40 grid lg:grid-cols-12 gap-12">
        
        {/* LEFT: CONFIGURATION */}
        <div className="lg:col-span-7 space-y-12">
          <header className="space-y-6">
            <h1 className="text-7xl font-black tracking-tight leading-none">NAS - Model <span className="text-emerald-500">S</span></h1>
            
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
              Industrial-grade ARM storage. 4-Bay SATA expandability, 10GbE ready, and zero cloud-dependence.
            </p>

            {/* USE CASES SECTION */}
            <div className="grid grid-cols-2 gap-3 pt-4">
                <UseCaseCard icon={<Home size={18}/>} title="Home NAS" />
                <UseCaseCard icon={<Briefcase size={18}/>} title="Small Office Storage"  />
                <UseCaseCard icon={<Play size={18}/>} title="Media Server"  />
                <UseCaseCard icon={<CloudOff size={18}/>} title="Backup Appliance" />
            </div>
          </header>

          {/* HARDWARE MANIFEST */}
          <section className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm">
            <button onClick={() => setIsManifestOpen(!isManifestOpen)} className="w-full flex items-center justify-between p-8 hover:bg-slate-50 transition-all">
              <div className="flex items-center gap-4">
                <Terminal size={20} className="text-emerald-600" />
                <div className="text-left">
                  <h2 className="font-bold text-lg leading-none mb-1">Hardware Blueprint</h2>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Standard Core Components</p>
                </div>
              </div>
              <motion.div animate={{ rotate: isManifestOpen ? 180 : 0 }}><ChevronDown /></motion.div>
            </button>
            <AnimatePresence>
              {isManifestOpen && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-slate-50/50">
                  <div className="p-8 pt-0 space-y-2">
                  <ManifestItem label="Compute Module" val="Raspberry Pi Compute Module 5" />
                    <ManifestItem label="CPU" val="Quad-core ARM Cortex-A76 (64-bit)" />
                    <ManifestItem label="Maximum Raw Capacity" val="Depends on drive selection (e.g., 4× 22 TB HDD supported)" />
                    <ManifestItem label="Primary Storage Bays" val="4x 2.5” Hot-Swap Ready (Up to 88TB)" />
                    <ManifestItem label="Connectivity" val="Gigabit Ethernet + WiFi 5 + BT" />
                    <ManifestItem label="Cooling" val="Active" />
                    <ManifestItem label="USB" val="2x High-Speed USB 3.0" />
                    <ManifestItem label="Power" val="12V External DC Input" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* UPGRADES */}
          <div className="space-y-12">
          <UpgradeSection title="Performance Cache" sub="PCIe Expansion">
               <ConfigCard 
                  active={config.nvme} 
                  label="M.2 NVMe SSD Slot" 
                  price={addOnPrices["NVMe_Slot"]} 
                  onClick={() => setConfig({...config, nvme: !config.nvme})} 
               />
            </UpgradeSection>

            <UpgradeSection title="Operating System" sub="Pre-installed Software">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {["Raspberry Pi OS", "TrueNAS SCALE", "Unraid"].map((o) => (
                <ConfigCard 
                    key={o} 
                    active={config.os === o} 
                    label={o} 
                    price={0} 
                    hidePrice={true} // This removes the "Included" text
                    onClick={() => setConfig({...config, os: o})} 
                />
                ))}
            </div>
            </UpgradeSection>

            <UpgradeSection title="Compute Memory" sub="LPDDR4X High-Speed">
               <div className="flex gap-3">
                 {["4GB", "8GB"].map((m) => (
                   <ConfigCard key={m} active={config.memory === m} label={m} price={addOnPrices[m]} onClick={() => setConfig({...config, memory: m})} />
                 ))}
               </div>
            </UpgradeSection>

            <UpgradeSection title="System Flash" sub="Integrated eMMC">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                 {["None", "16GB", "32GB", "64GB"].map((e) => (
                   <ConfigCard key={e} active={config.emmc === e} label={e} price={addOnPrices[e]} onClick={() => setConfig({...config, emmc: e})} />
                 ))}
               </div>
            </UpgradeSection>

            <UpgradeSection title="Network Link" sub="Port Upgrades">
               <div className="grid grid-cols-3 gap-3">
                 {["1GbE", "2.5GbE", "10GbE"].map((n) => (
                   <ConfigCard key={n} active={config.network === n} label={n} price={addOnPrices[n]} onClick={() => setConfig({...config, network: n})} />
                 ))}
               </div>
            </UpgradeSection>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="sticky top-80 space-y-8">
            
            {/* PRODUCT IMAGE */}
            {/* 2. PRODUCT IMAGE (MOVED DOWN & FITTED) */}
            <div className="w-full h-48 bg-slate-50 border border-slate-200 rounded-[2rem] overflow-hidden group relative">
            <img 
                src="/My-NAS.png" 
                alt="Core Storage Model S" 
                /* Remove p-6 (padding) and use object-cover */
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            </div>
        {/* RIGHT: BILLING */}
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="p-[1px] bg-gradient-to-br from-slate-200 via-emerald-200 to-slate-200 rounded-[2.5rem] shadow-2xl">
              <div className="bg-white/95 backdrop-blur-3xl rounded-[2.45rem] p-10">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-400">Your Build Summary</h3>
                  <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                </div>

                <div className="space-y-4 mb-10">
                <PriceRow 
                label={<>NAS - Model <span className="text-emerald-500">S</span> Core Node</>} 
                val={pricing.base} 
                />
                  {config.memory !== "4GB" && <PriceRow label={`8GB Memory Premium`} val={addOnPrices[config.memory]} isAdd />}
                   <PriceRow label={<>OS: <span className="text-emerald-600">{config.os}</span></>} val={0} isAdd />
                  {config.emmc !== "None" && <PriceRow label={`eMMC Flash (${config.emmc})`} val={addOnPrices[config.emmc]} isAdd />}
                  {config.network !== "1GbE" && <PriceRow label={`Network Speed (${config.network})`} val={addOnPrices[config.network]} isAdd />}
                  {config.nvme && <PriceRow label="NVMe Expansion Slot" val={addOnPrices["NVMe_Slot"]} isAdd />}
                  
                  <div className="pt-6 mt-6 border-t border-slate-100 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Total (GST Included)</p>
                      <h4 className="text-5xl font-black tracking-tighter">₹{pricing.total.toLocaleString()}</h4>
                    </div>
                  </div>
                </div>

                {/* REPLACE YOUR EXISTING CHECKOUT LINK WITH THIS: */}
                <Button 
                onClick={() => setShowCheckoutModal(true)}
                className="w-full bg-slate-900 hover:bg-emerald-600 text-white py-8 rounded-2xl text-lg font-black transition-all active:scale-[0.97] group shadow-xl"
                >
                Checkout
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform text-emerald-400" />
                </Button>

                <div className="mt-8 flex justify-center gap-8 border-t border-slate-50 pt-8 opacity-50">
                  <div className="flex flex-col items-center gap-1">
                    <ShieldCheck size={18} />
                    <span className="text-[8px] font-black uppercase tracking-[0.2em]">Verified</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <QrCode size={18} />
                    <span className="text-[8px] font-black uppercase tracking-[0.2em]">UPI 2.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </main>
      {/* FAQ SECTION */}
      <section className="py-24 px-6 md:px-20">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 flex items-center justify-center gap-3"><HelpCircle /> FAQs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    q: "How to track my order?",
                    a: "The founders will reach out with a tracking ID within 24 hours of your email.",
                  },
                  {
                    q: "Will I get V2.0 and V3.0 features?",
                    a: "Early adopters will receive a complimentary upgrade from the Beta release to V2.0.",
                  },
                  {
                    q: "where can I find the user manual?",
                    a: "A printed User Manual is included in every delivery package.",
                  },
                  {
                    q: "Is this suitable for Enterprise workloads?",
                    a: "Yes, it is suitable for Enterprise workloads.",
                  },
                ].map((f, i) => (
                  <Card key={i} className="bg-white border border-slate-200 shadow-sm">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">{f.q}</h4>
                      <p className="text-slate-600">{f.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
    </div>
  );
}

// Sub-components
function UseCaseCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="p-5 bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:border-emerald-200 transition-colors group">
            <div className="text-slate-400 group-hover:text-emerald-500 mb-3 transition-colors">{icon}</div>
            <p className="text-xs font-black uppercase tracking-tight text-slate-900 mb-1">{title}</p>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{desc}</p>
        </div>
    );
}

function ManifestItem({ label, val }: { label: string, val: string }) {
  return (
    <div className="py-3 border-b border-slate-200/40 flex justify-between items-center">
      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{label}</span>
      <span className="text-xs font-bold text-slate-700">{val}</span>
    </div>
  );
}

function UpgradeSection({ title, sub, children }: { title: string, sub: string, children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="flex items-end gap-3 justify-between">
        <div>
            <h3 className="font-black text-2xl tracking-tight leading-none mb-1">{title}</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{sub}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function ConfigCard({ active, label, price, onClick, hidePrice = false }: { 
    active: boolean, 
    label: string, 
    price: number, 
    onClick: () => void,
    hidePrice?: boolean // Add this
  }) {
    return (
      <div 
        onClick={onClick}
        className={`cursor-pointer flex-1 p-5 rounded-2xl border-2 transition-all flex flex-col justify-between ${
          active ? "border-emerald-500 bg-white shadow-lg translate-y-[-2px]" : "border-slate-100 bg-transparent hover:border-slate-200"
        }`}
      >
        <div className="flex justify-between items-start mb-6">
          <span className="font-black text-sm">{label}</span>
          {active && <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shadow-sm"><CheckCircle2 size={12} className="text-white" /></div>}
        </div>
        
        {/* Update this part: only show if hidePrice is false */}
        {!hidePrice && (
          <p className="text-[12px] font-black text-slate-400 uppercase tracking-tighter">
            {price > 0 ? `+ ₹${price.toLocaleString()}` : "Included"}
          </p>
        )}
      </div>
    );
  }

function PriceRow({ label, val, isAdd = false }: { label: React.ReactNode, val: number, isAdd?: boolean }) {
    return (
      <div className="flex justify-between items-center">
        {/* Changed text-slate-400 to text-slate-900 for a deep black look */}
        <span className={`text-[14px] font-bold ${isAdd ? 'text-slate-900' : 'text-slate-900'}`}>
          {label}
        </span>
        <span className="font-mono text-[14px] font-black text-slate-900">
          ₹{val.toLocaleString()}
        </span>
      </div>
    );
  }