"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap, Stethoscope, Droplets, Users, Building, AlertTriangle,
  ChevronRight, Heart, Filter, MapPin, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const categories = ["All", "Education", "Healthcare", "Clean Water", "Empowerment", "Development", "Disaster Relief"];

const programs = [
  {
    id: "education",
    title: "Rural Education Initiative",
    category: "Education",
    description: "Providing quality education, teacher training, and digital learning tools to children in underserved rural communities, bridging the gap between potential and opportunity.",
    impacted: 5200,
    raised: 4200000,
    goal: 5000000,
    donors: 2340,
    icon: GraduationCap,
    urgent: true,
    color: "from-emerald-900/80 to-teal-800/80",
    bgLight: "bg-emerald-500/20",
    image: "/images/edu.png"
  },
  {
    id: "healthcare",
    title: "Mobile Health Clinics",
    category: "Healthcare",
    description: "Deploying fully-equipped mobile clinics to provide free healthcare, vaccinations, and maternal care services to remote villages lacking access to hospitals.",
    impacted: 12800,
    raised: 1800000,
    goal: 3000000,
    donors: 1205,
    icon: Stethoscope,
    urgent: false,
    color: "from-teal-900/80 to-cyan-800/80",
    bgLight: "bg-teal-500/20",
    image: "/images/health.png"
  },
  {
    id: "clean-water",
    title: "Clean Water for All",
    category: "Clean Water",
    description: "Installing sustainable water purification systems and bore wells in drought-affected regions, ensuring safe drinking water for entire communities.",
    impacted: 8400,
    raised: 2700000,
    goal: 4000000,
    donors: 1890,
    icon: Droplets,
    urgent: true,
    color: "from-cyan-900/80 to-blue-800/80",
    bgLight: "bg-cyan-500/20",
    image: "/images/water.png"
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment Program",
    category: "Empowerment",
    description: "Empowering women through skill training, micro-finance support, and entrepreneurship programs — creating leaders who uplift entire communities.",
    impacted: 3600,
    raised: 1500000,
    goal: 2500000,
    donors: 980,
    icon: Users,
    urgent: false,
    color: "from-violet-900/80 to-purple-800/80",
    bgLight: "bg-violet-500/20",
    image: "/images/empowerment.png"
  },
  {
    id: "rural-development",
    title: "Rural Infrastructure",
    category: "Development",
    description: "Building essential infrastructure — roads, schools, community centers — that connect remote villages to opportunities and modern services.",
    impacted: 15000,
    raised: 3200000,
    goal: 5000000,
    donors: 1650,
    icon: Building,
    urgent: false,
    color: "from-amber-900/80 to-orange-800/80",
    bgLight: "bg-amber-500/20",
    image: "/images/development.png"
  },
  {
    id: "disaster-relief",
    title: "Disaster Relief Fund",
    category: "Disaster Relief",
    description: "Providing immediate emergency response, shelter, food, and rehabilitation support to communities affected by natural disasters and crises.",
    impacted: 22000,
    raised: 5500000,
    goal: 8000000,
    donors: 4200,
    icon: AlertTriangle,
    urgent: true,
    color: "from-rose-900/80 to-red-800/80",
    bgLight: "bg-rose-500/20",
    image: "/images/disaster.png"
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const filtered = activeCategory === "All"
    ? programs
    : programs.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-charcoal-950 pb-20">
      {/* ═══════════════════ CINEMATIC HERO ═══════════════════ */}
      <section ref={heroRef} className="relative h-[70svh] flex items-center justify-center overflow-hidden mb-20">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0 origin-center">
          <Image
            src="/images/edu.png"
            alt="Children in classroom"
            fill
            priority
            className="object-cover opacity-50"
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
            Programs That <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">Transform</span> Lives
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Every initiative is designed with deep community insight, rigorous
            planning, and an unwavering commitment to measurable, lasting change.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════ CINEMATIC STATS ═══════════════════ */}
      <section className="max-w-7xl mx-auto mb-32 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: 6, label: "Core Initiatives" },
            { value: 67000, label: "People Impacted", suffix: "+" },
            { value: 18, label: "States Covered" },
            { value: 95, label: "Fund Efficiency", suffix: "%" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix || ""} />
              </div>
              <p className="text-sm text-emerald-400 font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════ SPLIT STORYTELLING ═══════════════════ */}
      <section className="max-w-7xl mx-auto mb-32 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-6">Our Approach</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              A Human-Centered <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">Methodology</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6 font-light">
              We don't believe in one-size-fits-all solutions. Our programs are born from listening. We sit with community leaders, mothers, teachers, and elders to understand the exact bridges they need to build a better future.
            </p>
            <div className="flex gap-4 items-center text-white/80 border-l-2 border-emerald-500 pl-6 my-8">
              <Quote className="w-8 h-8 text-emerald-500/50" />
              <p className="italic text-lg">"We build the foundation, but the community builds the future."</p>
            </div>
            <ul className="space-y-4">
              {[
                "Community-led program design",
                "Sustainable long-term implementation",
                "Rigorous impact measurement"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Heart className="w-3 h-3 text-emerald-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/development.png"
              alt="Community meeting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <Badge className="bg-white/20 text-white backdrop-blur-md border-white/20 mb-3">Field Work</Badge>
              <h3 className="text-2xl font-display font-bold text-white">Listening Before Acting</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ PROGRAMS GRID ═══════════════════ */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-8">Active Initiatives</h2>
          
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-3"
          >
            <Filter className="w-5 h-5 text-white/40 mr-2 hidden md:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                  activeCategory === cat
                    ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((program, i) => {
              const progress = (program.raised / program.goal) * 100;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="rounded-[2rem] bg-charcoal-900 border border-white/5 overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-2xl"
                >
                  {/* Image Header with Cinematic Feel */}
                  <div className="h-56 relative overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${program.color} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/20 to-transparent" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                      <program.icon className="w-16 h-16 text-white drop-shadow-2xl" />
                    </div>

                    {program.urgent && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-rose-500 text-white border-none shadow-[0_0_20px_rgba(244,63,94,0.5)]">
                          🔥 Urgent
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-5 left-6">
                      <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                        {program.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                      {program.description}
                    </p>

                    {/* Impact Badge */}
                    <div className="flex items-center gap-3 mb-6 bg-white/5 rounded-2xl p-3 border border-white/5">
                      <div className={`w-10 h-10 rounded-xl ${program.bgLight} flex items-center justify-center`}>
                        <Users className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <span className="block text-xs text-white/40 uppercase tracking-wider mb-0.5">Direct Impact</span>
                        <span className="block text-sm font-semibold text-white">
                          {program.impacted.toLocaleString()} people
                        </span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-3">
                        <span className="font-semibold text-emerald-400">
                          ₹{(program.raised / 100000).toFixed(1)}L
                        </span>
                        <span className="text-white/40">
                          of ₹{(program.goal / 100000).toFixed(0)}L
                        </span>
                      </div>
                      <Progress value={progress} className="h-2 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-teal-400" />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <span className="text-xs text-white/40 flex items-center gap-1.5">
                        <Heart className="w-3.5 h-3.5 text-rose-400" />
                        {program.donors.toLocaleString()} donors
                      </span>
                      <Link href={`/programs/${program.id}`}>
                        <Button size="sm" variant="ghost" className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 gap-2 rounded-full">
                          View Details
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ═══════════════════ LARGE VISUAL BREAK ═══════════════════ */}
      <section className="mt-32 h-[50svh] relative flex items-center justify-center overflow-hidden">
         <Image
            src="/images/empowerment.png"
            alt="Community"
            fill
            className="object-cover"
         />
         <div className="absolute inset-0 bg-charcoal-950/60" />
         <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-transparent to-charcoal-950/40" />
         <div className="relative z-10 text-center max-w-3xl px-6">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Want to make a difference?</h2>
            <p className="text-xl text-white/80 mb-10 font-light">Join thousands of donors writing stories of hope.</p>
            <Link href="/donate">
               <Button size="xl" className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-10 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  Donate to a Program
               </Button>
            </Link>
         </div>
      </section>
    </div>
  );
}
