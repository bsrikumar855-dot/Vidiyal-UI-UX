"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart, ArrowRight, GraduationCap, Stethoscope, Droplets, Users, Globe,
  Shield, Star, TrendingUp, ChevronRight, Sparkles, Quote, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AnimatedCounter } from "@/components/AnimatedCounter";

/* ────────────────────────── animation variants ────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const scaleReveal = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
};

/* ──────────────────────────── data ──────────────────────────── */
const stats = [
  { value: 150000, suffix: "+", label: "Lives Impacted", icon: Heart },
  { value: 48, suffix: "", label: "Communities Served", icon: Globe },
  { value: 95, suffix: "%", label: "Funds to Programs", icon: Shield },
  { value: 12, suffix: "+", label: "Years of Impact", icon: TrendingUp },
];

const campaigns = [
  {
    title: "Rural Education Initiative",
    category: "Education",
    description: "Bringing quality education to 5,000+ children in underserved rural communities across India.",
    raised: 4200000,
    goal: 5000000,
    donors: 2340,
    icon: GraduationCap,
    urgent: true,
    color: "from-emerald-900/80 to-teal-800/80",
    image: "/images/edu.png",
  },
  {
    title: "Mobile Health Clinics",
    category: "Healthcare",
    description: "Deploying mobile clinics to provide free healthcare services to remote villages.",
    raised: 1800000,
    goal: 3000000,
    donors: 1205,
    icon: Stethoscope,
    urgent: false,
    color: "from-teal-900/80 to-cyan-800/80",
    image: "/images/health.png",
  },
  {
    title: "Clean Water for All",
    category: "Clean Water",
    description: "Installing sustainable water purification systems in drought-affected regions.",
    raised: 2700000,
    goal: 4000000,
    donors: 1890,
    icon: Droplets,
    urgent: true,
    color: "from-cyan-900/80 to-blue-800/80",
    image: "/images/water.png",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Beneficiary, Education Program",
    quote: "VIDIYAL didn't just give me books — they gave me dreams. Today, I'm the first in my family to attend college.",
    location: "Rajasthan, India",
    image: "/images/edu.png"
  },
  {
    name: "Dr. Anand Verma",
    role: "Volunteer Doctor",
    quote: "The transparency is what keeps me giving and serving. I can see exactly where the effort goes and the lives it changes.",
    location: "Mumbai, India",
    image: "/images/health.png"
  },
  {
    name: "Lakshmi Devi",
    role: "Community Leader",
    quote: "The clean water project transformed our village. Children are healthier, women have more time, and hope has returned.",
    location: "Bihar, India",
    image: "/images/empowerment.png"
  },
];

const partners = [
  "UNICEF", "WHO", "World Bank", "Bill & Melinda Gates Foundation", "UNDP", "Red Cross",
];

/* ──────────────────────────── page ──────────────────────────── */
export default function HomePage() {
  const heroRef = useRef(null);
  const impactRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 250]);
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);

  const { scrollYProgress: impactProgress } = useScroll({
    target: impactRef,
    offset: ["start end", "end start"],
  });
  const impactY = useTransform(impactProgress, [0, 1], [-100, 100]);

  return (
    <div className="overflow-hidden bg-charcoal-950">
      {/* ═══════════════════ HERO (Cinematic Parallax) ═══════════════════ */}
      <section ref={heroRef} className="relative h-[100svh] flex items-center justify-center overflow-hidden bg-charcoal-950">
        {/* Parallax Background Image */}
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0 origin-center">
          <Image
            src="/images/kids_hero.png"
            alt="Children smiling looking at camera"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
        </motion.div>
        
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/20 to-charcoal-950" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-950/40 via-transparent to-charcoal-950/40" />
        
        {/* Ambient floating glow */}
        <motion.div
          animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.05, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70rem] h-[40rem] bg-gradient-to-t from-emerald-500/20 to-transparent rounded-full blur-[100px] z-0 pointer-events-none"
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20"
        >


          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="heading-xl mb-6 text-white text-balance leading-[1.1]"
          >
            Every Donation{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              Creates
            </span>
            <br />
            a Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg sm:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-10 font-light"
          >
            We bridge the gap between compassion and impact. Your generosity
            transforms communities, empowers dreams, and writes stories of hope.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link href="/donate">
              <Button size="xl" className="gap-2 w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-8 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                <Heart className="w-5 h-5" />
                Make an Impact
              </Button>
            </Link>
            <Link href="/programs">
              <Button size="xl" variant="outline" className="gap-2 w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-full px-8 backdrop-blur-sm">
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator down */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2 backdrop-blur-sm bg-white/5"
            >
              <motion.div className="w-1 h-2 rounded-full bg-white/60" />
            </motion.div>
          </motion.div>
      </section>

      {/* ═══════════════════ LIVE IMPACT STATS (Cinematic Blur) ═══════════════════ */}
      <section className="relative py-32 section-padding overflow-hidden bg-charcoal-950">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/edu.png"
            alt="Community"
            fill
            className="object-cover opacity-10 blur-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                className="relative p-8 text-center group rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:bg-white/10 transition-colors duration-500"
              >
                {/* Hover gradient effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500 border border-emerald-500/20 relative z-10">
                  <stat.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="text-4xl sm:text-5xl font-display font-bold text-white mb-2 tracking-tight drop-shadow-sm relative z-10">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <p className="text-sm md:text-base text-white/60 font-medium tracking-wide relative z-10 uppercase letter-spacing-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS (Split Storytelling) ═══════════════════ */}
      <section ref={impactRef} className="py-32 section-padding bg-charcoal-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left side: Cinematic Parallax Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[650px] rounded-[2.5rem] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <motion.div style={{ y: impactY }} className="absolute -inset-10">
                <Image
                  src="/images/kids_hero.png"
                  alt="Children smiling"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
              
              <div className="absolute bottom-10 left-10 right-10 text-white z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <Quote className="w-10 h-10 text-emerald-400 mb-6 drop-shadow-md" />
                <p className="text-2xl font-light leading-snug mb-6 text-balance text-white/90">
                  "VIDIYAL brought joy back to our village. Seeing our children smile and learn is the greatest gift we could ever receive."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 relative">
                    <Image src="/images/health.png" alt="Avatar" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Ananya</p>
                    <p className="text-sm text-white/60">Community Leader, Rajasthan</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side: Content */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="mb-16"
              >

                <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Your Journey of <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">Transformation</span>
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="text-lg text-white/60 font-light leading-relaxed">
                  We believe in complete transparency. Every action you take sets off a ripple effect of hope that spans across generations. Here&apos;s how your compassion reaches them.
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-10"
              >
                {[
                  {
                    step: "01",
                    title: "The Act of Giving",
                    description: "You choose a program. We ensure a secure, transparent donation process where every rupee is accounted for.",
                    icon: Heart,
                  },
                  {
                    step: "02",
                    title: "Direct Implementation",
                    description: "Our volunteers on the ground immediately deploy funds to programs, ensuring 95% reaches the people who need it.",
                    icon: Globe,
                  },
                  {
                    step: "03",
                    title: "Generational Change",
                    description: "You receive documented impact reports, photos, and stories of the lives you've personally touched.",
                    icon: Star,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    variants={fadeUp}
                    custom={i}
                    className="flex gap-6 items-start group"
                  >
                    <div className="shrink-0 relative">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-all duration-500 backdrop-blur-sm">
                        <item.icon className="w-7 h-7 text-emerald-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-emerald-500 text-white text-[11px] font-bold flex items-center justify-center shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/50 text-base leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED CAMPAIGNS (Immersive Cards) ═══════════════════ */}
      <section className="py-32 section-padding bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-20"
          >

            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Where Your Impact <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">Begins</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-white/60 font-light max-w-2xl mx-auto">
              Choose a cause that speaks to your heart. Every active campaign is a community waiting for a miracle.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {campaigns.map((campaign, i) => {
              const progress = (campaign.raised / campaign.goal) * 100;
              return (
                <motion.div
                  key={campaign.title}
                  variants={fadeUp}
                  custom={i}
                  className="rounded-[2rem] bg-charcoal-950 border border-white/5 overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-2xl"
                >
                  {/* Cinematic Card Header */}
                  <div className="h-64 relative overflow-hidden">
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${campaign.color} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                    
                    {campaign.urgent && (
                      <div className="absolute top-5 right-5">
                        <Badge className="bg-rose-500 text-white border-none shadow-[0_0_20px_rgba(244,63,94,0.5)]">
                          Urgent Needs
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-5 left-6 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <campaign.icon className="w-6 h-6 text-white drop-shadow-lg" />
                      </div>
                      <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                        {campaign.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {campaign.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-8 font-light">
                      {campaign.description}
                    </p>

                    {/* Progress Track */}
                    <div className="mb-6 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="flex justify-between text-sm mb-3">
                        <span className="font-medium text-emerald-400">
                          ₹{(campaign.raised / 100000).toFixed(1)}L raised
                        </span>
                        <span className="text-white/40">
                          ₹{(campaign.goal / 100000).toFixed(0)}L goal
                        </span>
                      </div>
                      <Progress value={progress} className="h-2 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-teal-400" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[1,2,3].map((_, idx) => (
                           <div key={idx} className="w-8 h-8 rounded-full border-2 border-charcoal-950 bg-charcoal-800 flex items-center justify-center overflow-hidden">
                             <Users className="w-4 h-4 text-white/30" />
                           </div>
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-charcoal-950 bg-emerald-900/50 flex items-center justify-center text-[10px] text-emerald-300 font-bold">
                          +{campaign.donors - 3}
                        </div>
                      </div>
                      <Link href={`/programs/${campaign.category.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Button size="sm" variant="ghost" className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 gap-2 rounded-full px-5">
                          Support
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-16"
          >
            <Link href="/programs">
              <Button size="lg" variant="outline" className="gap-2 rounded-full border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 h-14">
                View All Humanitarian Programs
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS (Cinematic Portraits) ═══════════════════ */}
      <section className="py-32 section-padding relative overflow-hidden bg-charcoal-950">
        {/* Abstract dark glows */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-24"
          >

            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Real Stories, <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">Real Human Impact</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-white/60 font-light max-w-2xl mx-auto">
              Behind every donation is a human life forever changed. Hear from the people whose futures you've helped rewrite.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative h-full bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md flex flex-col justify-between hover:bg-white/10 transition-all duration-500">
                  <div>
                    <Quote className="w-10 h-10 text-emerald-500/30 mb-6 group-hover:text-emerald-400 transition-colors duration-500" />
                    <p className="text-white/80 text-lg leading-relaxed mb-10 font-light italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-5 border-t border-white/10 pt-6">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/30 group-hover:border-emerald-400 transition-colors">
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-white tracking-wide">{t.name}</p>
                      <p className="text-xs text-white/50 mt-1 flex items-center gap-1.5 font-medium">
                         <span className="text-emerald-400">{t.role}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ TRUSTED PARTNERS ═══════════════════ */}
      <section className="py-24 section-padding bg-charcoal-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p className="text-sm font-medium text-white/30 uppercase tracking-[0.2em] mb-12">
              Empowered by Global Partnerships
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
              {partners.map((partner, i) => (
                <motion.span
                  key={partner}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="text-xl md:text-2xl font-display font-bold text-white/20 hover:text-white/60 transition-colors duration-500 cursor-default"
                >
                  {partner}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

