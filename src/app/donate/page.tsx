"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Heart, Shield, ArrowRight, Lock, CheckCircle2, Building, Smartphone, Calendar, AlertCircle, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";

const presetAmounts = [
  { amount: 1000, impact: "Provides books for 2 children" },
  { amount: 2500, impact: "Provides clean water for a family" },
  { amount: 5000, impact: "Sponsors a child's education for a year", popular: true },
  { amount: 10000, impact: "Funds a medical camp for 50 people" },
];

export default function DonatePage() {
  const [amount, setAmount] = useState<number | "">("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="bg-charcoal-950 text-white min-h-screen">
      {/* ═══════════════════ CINEMATIC HERO ═══════════════════ */}
      <section ref={heroRef} className="relative h-[60svh] flex items-center justify-center overflow-hidden mb-20">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0 origin-center">
          <Image
            src="/images/edu.png"
            alt="Children smiling"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/40 to-charcoal-950" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white leading-tight">
            Be the <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">Bridge</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Your generosity today writes a story of hope for tomorrow. Join us in transforming lives across India.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════ DONATION INTERFACE & STORYTELLING ═══════════════════ */}
      <section className="max-w-7xl mx-auto px-6 mb-32 -mt-32 relative z-20">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Storytelling Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 hidden lg:flex flex-col relative rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <Image
               src="/images/empowerment.png"
               alt="A child in school"
               fill
               className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />
            
            <div className="relative mt-auto p-10 z-10">
               <Quote className="w-10 h-10 text-emerald-500/50 mb-6" />
               <p className="text-2xl font-display font-medium text-white mb-6 leading-relaxed italic">
                 "I want to be a doctor so I can help my village. Because someone helped me."
               </p>
               <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                 <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image src="/images/health.png" alt="Student" fill className="object-cover" />
                 </div>
                 <div>
                    <p className="font-bold text-white">Anjali, 12</p>
                    <p className="text-sm text-emerald-400">Rural Education Program</p>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 bg-charcoal-900 border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
          >
            {/* Frequency Tabs */}
            <div className="flex bg-white/5 p-1 rounded-2xl mb-10 backdrop-blur-sm border border-white/5">
              <button
                onClick={() => setFrequency("one-time")}
                className={`flex-1 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  frequency === "one-time"
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                Give Once
              </button>
              <button
                onClick={() => setFrequency("monthly")}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  frequency === "monthly"
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Calendar className="w-4 h-4" />
                Monthly Impact
              </button>
            </div>

            {/* Presets */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {presetAmounts.map((preset) => (
                <button
                  key={preset.amount}
                  onClick={() => setAmount(preset.amount)}
                  className={`relative p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
                    amount === preset.amount
                      ? "border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                      : "border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {preset.popular && (
                    <span className="absolute -top-3 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      Popular
                    </span>
                  )}
                  <span className="text-xl font-display font-bold">₹{preset.amount}</span>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="relative mb-10">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <span className="text-white/40 text-2xl font-light">₹</span>
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value) || "")}
                placeholder="Custom Amount"
                className="w-full bg-charcoal-950 border border-white/10 text-white text-2xl font-light rounded-2xl py-5 pl-12 pr-6 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>

            {/* Impact Preview */}
            {amount && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-50 flex items-start gap-4"
              >
                <Heart className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-300 mb-1">
                    Your {frequency} impact:
                  </p>
                  <p className="text-sm text-emerald-100/70">
                    {presetAmounts.find((p) => p.amount === amount)?.impact ||
                      "Will be allocated where it's needed most to maximize impact."}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Donate Button */}
            <Button
              size="xl"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl py-7 text-lg font-semibold shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all group"
            >
              Donate ₹{amount || "0"} {frequency === "monthly" && "Monthly"}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Security Badge */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/40 font-light">
              <Lock className="w-4 h-4 text-emerald-500" />
              Secure, 256-bit encrypted transaction
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ TRUST & TRANSPARENCY ═══════════════════ */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "100% Transparent",
              desc: "Every rupee is tracked. We undergo rigorous annual third-party audits."
            },
            {
              icon: Building,
              title: "80G Tax Exemption",
              desc: "All donations are eligible for a 50% tax deduction under Section 80G."
            },
            {
              icon: CheckCircle2,
              title: "Direct Impact",
              desc: "95% of all funds go directly to our field programs, skipping the middleman."
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* ═══════════════════ ALTERNATIVE WAYS ═══════════════════ */}
      <section className="bg-transparent py-24 relative z-10">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-12">Other Ways to Give</h2>
            <div className="grid sm:grid-cols-2 gap-6">
               <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-colors">
                  <Smartphone className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="font-bold text-lg text-white mb-2">UPI / Bank Transfer</h3>
                  <p className="text-sm text-white/50 mb-4 font-light">Scan our QR code or transfer directly to our trust account. Zero processing fees.</p>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full w-full">View Details</Button>
               </div>
               <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-colors">
                  <Heart className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="font-bold text-lg text-white mb-2">Corporate Giving</h3>
                  <p className="text-sm text-white/50 mb-4 font-light">Partner with us for CSR initiatives and employee matching gift programs.</p>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full w-full">Partner with Us</Button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
