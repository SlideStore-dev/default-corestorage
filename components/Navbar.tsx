"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we are on the homepage to decide initial text color
  const isHomePage = pathname === "/";

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 
      ${isScrolled 
        ? "bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-slate-200/50" 
        : "bg-transparent py-6"
      }`}>
      
      <div className="max-w-[90rem] mx-auto flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="group">
          <motion.div whileHover={{ x: -2 }} className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <span className="flex items-start">
              <span className="relative">
                {/* Logic: If scrolled or NOT on homepage, use Black. Else use White. */}
                <span className={(isScrolled || !isHomePage) ? "text-black" : "text-white"}>
                  CORE
                </span>
                <span className="text-slate-500 group-hover:text-blue-600 transition-colors">
                  STORAGE
                </span>
                <span className="absolute -right-3 text-[10px] text-slate-500 font-bold">&reg;</span>
              </span>
            </span>
          </motion.div>
        </Link>

        <div className="hidden md:flex gap-10 items-center">
          <NavLink href="/product" isScrolled={isScrolled} isHomePage={isHomePage}>Product</NavLink>
          <NavLink href="/solution" isScrolled={isScrolled} isHomePage={isHomePage}>Solutions</NavLink>
          
          <li className="flex list-none">
            <a href="https://wa.me/919876307748" target="_blank" className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#25D366]/10 text-[#25D366] rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all border border-[#25D366]/20 active:scale-95 cursor-pointer">
              <span>Chat on WhatsApp</span>
            </a>
          </li>

          <Link href="https://calendar.google.com/calendar/render?action=TEMPLATE&add=suvansharora07@gmail.com,amalgeorgem94@gmail.com&text=Core+Storage+Demo+Meeting&details=Requesting+a+technical+walkthrough+of+the+Core+Storage+NAS+Integrator." target="_blank">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-4 text-md font-bold transition-all hover:scale-105 shadow-lg shadow-blue-500/20 cursor-pointer">
              Book Demo
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

// Helper component for cleaner code
function NavLink({ href, children, isScrolled, isHomePage }: any) {
  const textColor = (isScrolled || !isHomePage) ? "text-black" : "text-white";
  return (
    <Link href={href} className={`text-lg font-bold tracking-tight transition-all hover:text-blue-600 cursor-pointer ${textColor}`}>
      {children}
    </Link>
  );
}