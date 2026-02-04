"use client";

import React, { useState } from "react"; // ✅ import useState
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProductOrderPage() {
  const [isManifestOpen, setIsManifestOpen] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Example config & pricing objects (replace with your real logic)
  const config = {
    os: "Linux",
    memory: "64GB",
    emmc: "2TB",
    network: "10GbE",
    nvme: true,
  };

  const pricing = {
    total: 120000,
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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

    const subject = encodeURIComponent(`Order Request - ${formData.name}`);
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:suvansharora07@gmail.com,amalgeorgem94@gmail.com?subject=${subject}&body=${body}`;

    const link = document.createElement("a");
    link.href = mailtoLink;
    link.click();

    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* CHECKOUT MODAL */}
      <AnimatePresence>
        {showCheckoutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden relative"
            >
              <button
                onClick={() => {
                  setShowCheckoutModal(false);
                  setIsSubmitted(false);
                }}
                className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <Plus className="rotate-45" size={32} />
              </button>

              <div className="p-12">
                {!isSubmitted ? (
                  <>
                    <div className="mb-10">
                      <h2 className="text-4xl font-black tracking-tight mb-2">
                        Secure your Build
                      </h2>
                      <p className="text-slate-500 font-medium text-lg">
                        We'll open your mail app to send the request.
                      </p>
                    </div>

                    <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                          Full Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                            Email
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="john@company.com"
                            className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                            Phone Number
                          </label>
                          <input
                            required
                            type="tel"
                            placeholder="10-digit Phone Number"
                            pattern="[0-9]{10}"
                            maxLength={10}
                            title="Please enter a valid 10-digit phone number"
                            className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl"
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, "");
                              setFormData({ ...formData, phone: val });
                            }}
                            value={formData.phone}
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                          Shipping Address
                        </label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Complete building, street, city..."
                          className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium resize-none"
                          onChange={(e) =>
                            setFormData({ ...formData, address: e.target.value })
                          }
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-8 rounded-2xl text-lg font-black transition-all group mt-4 shadow-lg shadow-emerald-500/20"
                      >
                        Proceed to Email
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8 shadow-inner">
                      <CheckCircle2 size={48} className="text-emerald-500" />
                    </div>
                    <h2 className="text-4xl font-black tracking-tight mb-4">
                      Email Drafted!
                    </h2>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm">
                      Your mail app should have opened.{" "}
                      <span className="text-slate-900 font-bold">Once you hit send</span>, Suvansh and Amal will get back to you with payment details.
                    </p>
                    <Button
                      onClick={() => {
                        setShowCheckoutModal(false);
                        setIsSubmitted(false);
                      }}
                      className="mt-10 bg-slate-900 text-white px-12 py-4 rounded-xl font-bold"
                    >
                      Close
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-40 grid lg:grid-cols-12 gap-12">
        {/* RIGHT COLUMN */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 space-y-8">
            <div className="w-full h-48 bg-slate-50 border border-slate-200 rounded-[2rem] overflow-hidden group relative">
              <img
                src="/My-NAS.png"
                alt="NAS"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-[1px] bg-gradient-to-br from-slate-200 via-emerald-200 to-slate-200 rounded-[2.5rem] shadow-2xl">
              <div className="bg-white/95 backdrop-blur-3xl rounded-[2.45rem] p-10">
                {/* Checkout Button */}
                <Button
                  onClick={() => setShowCheckoutModal(true)}
                  className="w-full bg-slate-900 hover:bg-emerald-600 text-white py-8 rounded-2xl text-lg font-black transition-all active:scale-[0.97] group shadow-xl"
                >
                  Checkout
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform text-emerald-400" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
