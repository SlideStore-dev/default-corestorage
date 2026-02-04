"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, Database, Search, AlertTriangle, ArrowRight, Image as ImageIcon, HelpCircle, ChevronRight 
} from "lucide-react";
import ArchitectureComparison from "./ArchitectureComparison";
import Link from "next/link";

// ---------------- TYPE DEFINITIONS ----------------
type Feature = {
  icon: React.ReactElement<any>; // <- Explicitly ReactElement
  title: string;
  desc: string;
  version?: string;
  href: string;
};

export default function CoreStorageLanding() {
  const [tb, setTb] = useState(200);
  const [egress, setEgress] = useState(80);
  const [cloudPerTB] = useState(276);

  const cloudCost = tb * (cloudPerTB + egress);
  const coreCost = tb * 32;
  const savings = Math.max(0, cloudCost - coreCost);

  const slides = [
    {
      image: "/NAS.jpg",
      title: "Make Your ",
      highlightedText: "Storage Intelligent",
      highlightClass: "bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent",
      desc: "Core Storage sits on top of your cloud or NAS and turns it into a searchable, self-managed, HOT data system.",
      duration: 6000,
      showPanels: true,
    },
    {
      image: "/My-NAS.png",
      title: "Create Private Cloud with ",
      highlightedText: "Model S",
      highlightClass: "bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]",
      desc: "88TB of sovereign hardware. Industrial-grade ZFS protection for your most critical assets.",
      duration: 6000,
      showPanels: false,
    },
    {
      image: "/video.webp",
      title: "Built for ",
      highlightedText: "Content Flows",
      highlightClass: "bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent",
      desc: "Zero-latency 8K editing and automated media tagging for high-growth creative teams.",
      duration: 6000,
      showPanels: false,
    },
    {
      image: "/infinity.png",
      title: "Infinite Storage",
      highlightedText: ", Zero Friction",
      highlightClass: "bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent",
      desc: "Stop paying the cloud tax. Save up to 80% on storage costs while keeping your data high-performance.",
      duration: 6000,
      showPanels: false,
    },
  ];

  const features: Feature[] = [
    { icon: <Zap />, title: "HOT Data On‑Demand", desc: "Any file becomes instantly local without migration.", version: "V2.0", href: "/vision" },
    { icon: <Search />, title: "Google‑like Search", desc: "Search files using rich custom labels and metadata.", version: "V2.0", href: "/vision" },
    { icon: <AlertTriangle />, title: "Smart Alerts", desc: "Know when data patterns or storage behavior goes wrong.", version: "V2.0", href: "/vision" },
    { icon: <Database />, title: "Self Managing", desc: "Automatic organization, tagging and lifecycle control.", version: "V2.0", href: "/vision" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ---------------- EFFECTS ----------------
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let resumeTimer: ReturnType<typeof setTimeout>;

    if (isPaused) {
      resumeTimer = setTimeout(() => {
        setIsPaused(false);
      }, 10000);
    }

    const slideTimer = setTimeout(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, slides[currentSlide].duration);

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(resumeTimer);
    };
  }, [currentSlide, isPaused, slides]);

  // ---------------- CHILD COMPONENTS ----------------
  const CTAButton = ({ href, children, outline = false }: { href: string; children: React.ReactNode; outline?: boolean }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-lg px-10 py-6 rounded-xl shadow-xl transition inline-flex items-center justify-center
        ${outline ? "border border-slate-300 text-slate-700 hover:bg-slate-100" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
    >
      {children}
    </a>
  );

  const SectionImage = ({ label }: { label: string }) => (
    <div className="w-full h-64 md:h-80 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-400">
      <div className="flex items-center gap-3">
        <ImageIcon />
        <span>{label}</span>
      </div>
    </div>
  );

  // ---------------- RENDER ----------------
  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      
      {/* HERO */}
      <section className={`relative pt-40 pb-24 px-10 overflow-hidden transition-colors duration-1000 ${slides[currentSlide].image ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            {slides[currentSlide].image ? (
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img src={slides[currentSlide].image} className="w-full h-full object-cover" alt="Background" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
              </motion.div>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full" />
              </div>
            )}
          </AnimatePresence>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col">
              <div className="h-12 flex items-center shrink-0">
                <Link href="/vision" className="group block w-fit">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold transition-all hover:bg-emerald-500/20 cursor-pointer active:scale-95">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    V1.0 NOW LIVE
                    <ChevronRight size={12} className="opacity-50 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </div>

              <div className="h-[280px] flex flex-col justify-start mt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1 className={`text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-4 transition-colors duration-500 ${slides[currentSlide].image ? 'text-white' : 'text-slate-900'}`}>
                      {slides[currentSlide].title}
                      <span className={slides[currentSlide].highlightClass}>
                        {slides[currentSlide].highlightedText}
                      </span>
                    </h1>
                    <p className={`mt-6 text-xl max-w-xl transition-colors duration-500 ${slides[currentSlide].image ? 'text-slate-400' : 'text-slate-600'}`}>
                      {slides[currentSlide].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="relative h-[400px] w-full hidden md:block">
              <AnimatePresence>
                {slides[currentSlide].showPanels && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, x: 40 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Tech Panels Rendered Here */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col items-center mt-12 w-full">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild className="text-lg px-8 py-7 bg-blue-600 hover:bg-blue-700 text-white shadow-xl transition-all active:scale-95 h-16 min-w-[200px] cursor-pointer">
                <Link href="/product" target="_blank" rel="noopener noreferrer">Book Your NAS</Link>
              </Button>
              <Link href="https://calendar.google.com/calendar/render?action=TEMPLATE&add=suvansharora07@gmail.com,amalgeorgem94@gmail.com&text=Core+Storage+Demo+Meeting&details=Requesting+a+technical+walkthrough+of+the+Core+Storage+NAS+Integrator." target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="ghost" 
                  className={`text-lg px-8 py-7 transition-all active:scale-95 h-16 min-w-[200px] border shadow-sm cursor-pointer
                    ${slides[currentSlide].image ? 'border-white/30 text-white hover:bg-white/10' : 'border-slate-300 text-slate-700 bg-white hover:bg-slate-50'}`}
                >
                  Request a Demo
                </Button>
              </Link>
            </div>

            <div className="flex gap-4 items-center justify-center mt-24">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPaused(true);
                    setCurrentSlide(index);
                  }}
                  className="group relative flex flex-col items-center p-3 cursor-pointer outline-none z-50"
                >
                  <div className={`transition-all duration-500 ease-in-out rounded-full ${
                    currentSlide === index 
                    ? "w-14 h-2 bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.6)]" 
                    : slides[currentSlide].image 
                      ? "w-2.5 h-2.5 bg-white/30 hover:bg-white/70" 
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-500"
                  }`} />
                  <span className={`mt-2 text-[10px] font-black tracking-widest transition-opacity duration-300 ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  } ${slides[currentSlide].image ? "text-white/60" : "text-slate-400"}`}>
                    0{index + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USP GRID */}
      <section className="py-12 px-8 md:px-20 relative z-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={f.href} className="block h-full group">
                <Card className="relative h-full border-slate-200/60 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {f.version && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[9px] font-bold tracking-tighter uppercase group-hover:bg-slate-900 group-hover:text-white">
                        <span className="w-1 h-1 rounded-full bg-slate-400 animate-pulse group-hover:bg-emerald-400" />
                        {f.version}
                      </span>
                    </div>
                  )}

                  <CardContent className="p-8 relative z-10">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                      className="mb-6 w-12 h-12 rounded-xl bg-blue-600/5 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm"
                    >
                      {React.cloneElement(f.icon, { size: 24, strokeWidth: 2.5 })}
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3 tracking-tight text-slate-900 flex items-center gap-2">
                      {f.title}
                      <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">{f.desc}</p>
                    <div className="absolute bottom-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-700" />
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <ArchitectureComparison />

      {/* TCO Section */}
      <section className="py-24 px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">See Your Savings Live</h2>
        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <label className="text-slate-600">Data Size (TB): {tb}</label>
            <input type="range" min="50" max="2000" value={tb} onChange={(e) => setTb(parseInt(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-slate-600">Egress $/TB/Year: {egress}</label>
            <input type="range" min="20" max="200" value={egress} onChange={(e) => setEgress(parseInt(e.target.value))} className="w-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <Card className="bg-white border border-slate-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <p className="text-slate-500">Cloud + NAS Cost</p>
                <h3 className="text-3xl font-bold mt-2">${cloudCost.toLocaleString()}</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <p className="text-slate-500">Core Storage Cost</p>
                <h3 className="text-3xl font-bold mt-2">${coreCost.toLocaleString()}</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
              <CardContent className="p-6 text-center">
                <p>You Save Per Year</p>
                <h3 className="text-4xl font-extrabold mt-2">${savings.toLocaleString()}</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
