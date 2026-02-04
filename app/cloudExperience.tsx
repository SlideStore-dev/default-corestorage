import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const CloudExperienceSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#F8F7F2]"> {/* Matches the off-white background in the image */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="lg:w-1/2 order-2 lg:order-1">
          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-black tracking-tight mb-6">
              Cloud-like experience...
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
              With a built-in hard drive and everything preconfigured, BeeStation is ready to 
              replace your current cloud storage services right out of the box.
            </p>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-black tracking-tight mb-10">
              ...but more than a cloud
            </h2>
            
            <div className="space-y-10">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="mt-1 bg-[#FCBF1D] p-1 rounded-sm h-fit">
                  <Check size={18} strokeWidth={4} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-1">One-time purchase</h3>
                  <p className="text-slate-500">No more monthly subscription fees</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="mt-1 bg-[#FCBF1D] p-1 rounded-sm h-fit">
                  <Check size={18} strokeWidth={4} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-1">100% data ownership</h3>
                  <p className="text-slate-500">Full control without sacrificing privacy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Placeholder Image */}
        <motion.div 
          className="lg:w-1/2 order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
             {/* ASPECT RATIO BOX FOR IMAGE */}
             <div className="aspect-[4/5] bg-slate-200 flex items-center justify-center relative">
                {/* Replace the <img> src with your actual photo later */}
                <img 
                   src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000" 
                   className="object-cover w-full h-full opacity-80 mix-blend-multiply"
                   alt="Lifestyle Placeholder" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                     Lifestyle Photography Placeholder
                   </p>
                </div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CloudExperienceSection;