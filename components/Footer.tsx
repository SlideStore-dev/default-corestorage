import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 px-6 md:px-20 border-t border-slate-200 bg-white">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* COLUMN 1: COMPANY */}
        <div>
          <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
          <ul className="space-y-4 text-sm text-slate-600">
            <li><Link href="/vision" className="hover:text-blue-600 transition-colors">Our Vision</Link></li>
            <li><Link href="/leadership" className="hover:text-blue-600 transition-colors">Leadership & Board</Link></li>
            <li><Link href="/" className="hover:text-blue-600 transition-colors">Global Locations: India</Link></li>
          </ul>
        </div>

        {/* COLUMN 2: SOLUTIONS */}
        <div>
          <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-xs">Solutions</h4>
          <ul className="space-y-4 text-sm text-slate-600">
            <li><Link href="/solution" className="hover:text-blue-600 transition-colors">AI Infrastructure & LLM Sets</Link></li>
            <li><Link href="/solution" className="hover:text-blue-600 transition-colors">4K/8K Content Creators</Link></li>
            <li><Link href="/solution" className="hover:text-blue-600 transition-colors">Medical Imaging</Link></li>
            <li><Link href="/solution" className="hover:text-blue-600 transition-colors">Hybrid Cloud Acceleration</Link></li>
          </ul>
        </div>

        {/* COLUMN 3: CONTACT */}
        <div>
        <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
        <ul className="space-y-4 text-sm text-slate-600">
            <li className="flex flex-col">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Sales Enquiry</span>
            {/* Both emails are in the href, but only "Contact Sales Team" is visible */}
            <a 
                href="mailto:suvansharora07@gmail.com,amalgeorgem94@gmail.com?subject=Sales%20Enquiry" 
                className="text-slate-900 font-medium hover:text-emerald-600 transition-colors"
            >
                Contact Sales Team
            </a>
            </li>
            <li className="flex flex-col">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Founder Direct</span>
            {/* Clicking this opens a draft to both of you simultaneously */}
            <a 
                href="mailto:suvansharora07@gmail.com,amalgeorgem94@gmail.com?subject=Founder%20Direct%20Message" 
                className="text-slate-900 font-medium italic hover:text-emerald-600 transition-colors"
            >
                Contact Founders
            </a>
            </li>
        </ul>
        </div>

        {/* COLUMN 4: SOCIAL */}
        <div>
          <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-xs">Join the Conversation</h4>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">
            We are building the future of storage in public. Follow our engineering updates.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={20} /></a>
            <a href="#" className="p-3 rounded-full bg-slate-100 hover:bg-pink-600 hover:text-white transition-all"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <span className="text-lg font-black tracking-tighter">CORE<span className="text-slate-400">STORAGE</span></span>
           <span className="text-xs text-slate-400 ml-4">© 2026 Core Storage Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}