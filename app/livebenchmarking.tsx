"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

// Jitter Logic
const genLine = (sX: number, sY: number, eX: number, eY: number, pts: number, vol: number) => {
  let d = `M ${sX},${sY}`;
  for (let i = 1; i <= pts; i++) {
    const p = i / pts;
    const x = sX + (eX - sX) * p;
    const y = sY + (eY - sY) * p + (Math.random() - 0.5) * vol;
    d += ` L ${x},${y}`;
  }
  return d;
};

export default function MiniBenchmark() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const data = useMemo(() => {
    if (!mounted) return [];
    return [
      // 1. CORE STORAGE: The Value King
      // High performance (Y: 40) at a very low cost (X: 160).
      { id: "core", col: "#3b82f6", w: 4, d: genLine(50, 250, 160, 40, 40, 10), lbl: "CORE STORAGE", delay: 0.5 },
      
      // 2. DELL ENTERPRISE: The "Performance at any cost" 
      // Matches and slightly exceeds Core (Y: 25) but at massive cost (X: 480).
      { id: "dell", col: "#94a3b8", w: 2, d: genLine(50, 250, 480, 25, 30, 5), lbl: "DELL ENTERPRISE", delay: 0.1 },
      
      // 3. SYNOLOGY: Can eventually match Core's performance (Y: 45) 
      // but the line is dragged way to the right (X: 420), showing high TCO.
      { id: "syno", col: "#475569", w: 2, d: genLine(50, 250, 420, 45, 20, 4), lbl: "SYNOLOGY (EXPANDED)", delay: 0.3 },
      
      // 4. QNAP: Similar to Synology, high cost for performance parity.
      { id: "qnap", col: "#64748b", w: 2, d: genLine(50, 250, 380, 100, 25, 8), lbl: "QNAP", delay: 0.2 },
      
      // 5. TRUENAS: Good performance, but sits right in the middle of cost.
      { id: "true", col: "#0ea5e9", w: 2, d: genLine(50, 250, 350, 80, 25, 6), lbl: "TRUENAS", delay: 0.15 },
      
      // 6. AWS S3: The outlier—High cost, low relative performance for "HOT" data.
      { id: "cld",  col: "#ef4444", w: 2, d: genLine(50, 250, 490, 220, 50, 20), lbl: "AWS S3", delay: 0 },
    ];
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="bg-[#020617] p-8 rounded-[2.5rem] border border-white/10 w-full max-w-2xl mx-auto shadow-2xl overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs font-black text-blue-500 uppercase tracking-[0.2em]">Comparison Matrix</span>
        <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
      </div>

      <div className="relative aspect-video bg-black/40 rounded-2xl border border-white/5 overflow-visible">
        <svg viewBox="0 0 500 300" className="w-full h-full overflow-visible">
          {/* Axis Labels */}
          <text x="0" y="-10" fill="#334155" fontSize="12" fontWeight="900" className="uppercase">Performance ↑</text>
          <text x="420" y="295" fill="#334155" fontSize="12" fontWeight="900" className="uppercase text-right">Cost →</text>
          
          {/* Grid Axes */}
          <path d="M 50 10 V 250 M 40 250 H 500" stroke="#1e293b" strokeWidth="3" />
          
          {data.map((l) => (
            <g key={l.id}>
              {/* Path Animation */}
              <motion.path
                d={l.d}
                fill="none"
                stroke={l.col}
                strokeWidth={l.w}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                // RE-ANIMATE ON EVERY ENTRY
                viewport={{ once: false, amount: 0.3 }} 
                transition={{ 
                  duration: 2.2, 
                  ease: "circOut", 
                  delay: l.delay 
                }}
              />
              
              {/* Label Animation */}
              <motion.g
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: l.delay + 1.8 // Shows up just before line finish
                }}
              >
                <text
                  x={l.d.split(' ').pop()?.split(',')[0]}
                  y={Number(l.d.split(' ').pop()?.split(',')[1]) - 15}
                  fill={l.id === 'core' ? '#fff' : l.col}
                  fontSize={l.id === 'core' ? "15" : "11"}
                  fontWeight="900"
                  textAnchor="middle"
                  className="uppercase italic drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
                >
                  {l.lbl}
                </text>
              </motion.g>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}