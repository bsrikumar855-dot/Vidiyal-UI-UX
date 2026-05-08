"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart, Globe, Users, GraduationCap, Stethoscope, Droplets,
  TrendingUp, Shield, Star, Award, Target, Calendar,
  ArrowRight, MapPin, Building, Quote, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(5px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const yearlyMetrics = [
  { year: "2019", donations: "₹1.2 Cr", lives: "8,000", programs: 4 },
  { year: "2020", donations: "₹2.8 Cr", lives: "22,000", programs: 8 },
  { year: "2021", donations: "₹5.1 Cr", lives: "45,000", programs: 15 },
  { year: "2022", donations: "₹7.5 Cr", lives: "78,000", programs: 28 },
  { year: "2023", donations: "₹10.2 Cr", lives: "120,000", programs: 38 },
  { year: "2024", donations: "₹12.5 Cr", lives: "150,000", programs: 45 },
];

const timeline = [
  { year: "2012", title: "The Seed is Planted", description: "Founded after witnessing rural education gaps in Rajasthan.", image: "/images/development.png" },
  { year: "2014", title: "First 10 Schools", description: "Opened 10 learning centers across Rajasthan, reaching 500 children.", image: "/images/edu.png" },
  { year: "2016", title: "Healthcare Launch", description: "Launched mobile health clinics serving 40 remote villages.", image: "/images/health.png" },
  { year: "2020", title: "Pandemic Response", description: "Distributed 50,000 food kits and launched digital learning.", image: "/images/disaster.png" },
  { year: "2024", title: "150K Lives Milestone", description: "Reached 150,000 lives impacted with 45 programs.", image: "/images/water.png" },
];

const volunteers = [
  {
    name: "Dr. Kavita Sharma",
    role: "Medical Volunteer",
    story: "I spend weekends at VIDIYAL clinics. In two years, I've treated 3,000+ patients in villages that never saw a doctor.",
    location: "Delhi",
    image: "/images/health.png"
  },
  {
    name: "Rajesh Menon",
    role: "Education Mentor",
    story: "Teaching coding to rural kids changed my perspective. These children have incredible potential — they just need the bridge.",
    location: "Bangalore",
    image: "/images/edu.png"
  },
  {
    name: "Fatima Khan",
    role: "Community Organizer",
    story: "Watching women start businesses and support their families through our workshops is the most rewarding work.",
    location: "Lucknow",
    image: "/images/empowerment.png"
  },
];

export default function ImpactPage() {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.1]);

  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(galleryProgress, [0, 1], [0, -100]);
  const y2 = useTransform(galleryProgress, [0, 1], [0, 100]);
  const y3 = useTransform(galleryProgress, [0, 1], [0, -150]);

  return (
    <div className="bg-charcoal-950 overflow-hidden text-white pb-20">
      {/* ═══════════════════ CINEMATIC HERO ═══════════════════ */}
      <section ref={heroRef} className="relative h-[80svh] flex items-center justify-center overflow-hidden mb-20">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0 origin-center">
          <Image
            src="/images/edu.png"
            alt="Smiling faces"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/20 to-charcoal-950" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white leading-tight">
            Building Bridges <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">of Hope</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Since 2012, we've transformed lives through education, healthcare, and empowerment. Every number represents a real story of change.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════ KEY METRICS ═══════════════════ */}
      <section className="max-w-7xl mx-auto mb-32 px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {[
            { value: 150000, suffix: "+", label: "Lives Impacted", icon: Heart },
            { value: 45, label: "Active Programs", icon: Target },
            { value: 18, label: "States Reached", icon: MapPin },
            { value: 28400, suffix: "+", label: "Active Donors", icon: Users },
            { value: 120, label: "Schools Built", icon: GraduationCap },
            { value: 340, suffix: "+", label: "Medical Camps", icon: Stethoscope },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              className="bg-white/5 border border-white/10 p-6 text-center rounded-3xl hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                <stat.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-3xl font-display font-bold text-white mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix || ""} duration={2.5} />
              </div>
              <p className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════ IMMERSIVE GALLERY GRIDS ═══════════════════ */}
      <section ref={galleryRef} className="max-w-7xl mx-auto mb-32 px-6">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4 px-4 py-1.5 rounded-full">Human-Centered Documentary</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Capturing Transformation</h2>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">Moments of pure joy, resilience, and connection from across our programs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px] overflow-hidden">
          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="space-y-6">
            <div className="relative h-96 rounded-[2rem] overflow-hidden group shadow-2xl">
              <Image src="/images/water.png" alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden group shadow-2xl">
              <Image src="/images/health.png" alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
          
          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="space-y-6">
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden group shadow-2xl">
              <Image src="/images/empowerment.png" alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative h-96 rounded-[2rem] overflow-hidden group shadow-2xl">
              <Image src="/images/disaster.png" alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div style={{ y: y3 }} className="space-y-6">
            <div className="relative h-96 rounded-[2rem] overflow-hidden group shadow-2xl">
              <Image src="/images/edu.png" alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden group shadow-2xl">
              <Image src="/images/development.png" alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ TIMELINE OF ACHIEVEMENTS ═══════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4 px-4 py-1.5 rounded-full">Our Journey</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">A Timeline of <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">Change</span></h2>
        </div>

        <div className="space-y-16 max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 md:before:ml-[50%] before:-translate-x-px before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-teal-500 before:to-charcoal-900">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${i % 2 === 0 ? "md:odd:flex-row-reverse" : "md:even:flex-row"}`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-[4px] md:-translate-x-1/2 w-3 h-3 bg-emerald-400 rounded-full border-4 box-content border-charcoal-950 z-10 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
              
              <div className="w-full md:w-[45%] pl-12 md:pl-0">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm overflow-hidden group-hover:border-emerald-500/30">
                  <span className="text-2xl font-bold text-emerald-400 mb-2 block font-display">{item.year}</span>
                  <div className="relative h-40 w-full rounded-2xl overflow-hidden mb-4 border border-white/5">
                     <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ VOLUNTEER STORIES (Cinematic Portraits) ═══════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4 px-4 py-1.5 rounded-full">Our Heroes</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">The People Behind <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">The Mission</span></h2>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">Our volunteers are the heart of VIDIYAL. Their stories inspire us to do more every single day.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {volunteers.map((vol, i) => (
            <motion.div
              key={vol.name}
              variants={fadeUp}
              custom={i}
              className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-emerald-500/30 group-hover:border-emerald-400 transition-colors">
                 <Image src={vol.image} alt={vol.name} fill className="object-cover" />
              </div>
              
              <h3 className="font-display font-bold text-xl text-white mb-1">{vol.name}</h3>
              <p className="text-sm text-emerald-400 mb-5">{vol.role}</p>
              <Quote className="w-8 h-8 text-white/10 mb-4 group-hover:text-emerald-500/30 transition-colors" />
              <p className="text-white/60 text-base leading-relaxed mb-6 font-light italic">
                &ldquo;{vol.story}&rdquo;
              </p>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <MapPin className="w-4 h-4" />
                {vol.location}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════ CINEMATIC CTA ═══════════════════ */}
      <section className="relative mt-20 mb-32 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl py-32 px-10 text-center"
        >
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/development.png"
              alt="Indian mother and child"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/40 to-charcoal-950/80" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Ready to Be Part of the <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">Story?</span>
            </h2>
            <p className="text-xl text-white/80 font-light mb-10 leading-relaxed">
              Whether you donate, volunteer, or spread the word — every action builds another bridge of hope in someone's life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/donate">
                <Button size="xl" className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-10 py-7 text-lg shadow-[0_0_30px_rgba(16,185,129,0.3)] gap-2 group">
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Start Giving
                </Button>
              </Link>
              <Link href="/programs">
                <Button size="xl" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-full px-10 py-7 text-lg backdrop-blur-sm group gap-2">
                  Explore Programs
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
