"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap, Stethoscope, Droplets, Users, Building, AlertTriangle,
  Heart, ArrowRight, ChevronRight, Calendar, MapPin, Target, TrendingUp,
  Shield, Clock, CheckCircle2, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const programData: Record<string, {
  title: string; category: string; description: string; longDescription: string;
  impacted: number; raised: number; goal: number; donors: number;
  icon: React.ComponentType<{ className?: string }>; color: string;
  location: string; startDate: string; image: string;
  milestones: { title: string; date: string; completed: boolean }[];
  allocation: { label: string; percent: number }[];
  testimonials: { name: string; quote: string; role: string }[];
  stats: { label: string; value: string }[];
}> = {
  education: {
    title: "Rural Education Initiative", category: "Education",
    description: "Bringing quality education to 5,000+ children in underserved rural communities across India.",
    longDescription: "The Rural Education Initiative is our flagship program designed to bridge the educational divide between urban and rural India. We partner with local communities to build schools, train teachers, provide digital learning tools, and create scholarship programs that give every child the opportunity to learn, grow, and dream. Our holistic approach addresses not just academics but also nutrition, mental health, and career guidance — because education is more than textbooks.",
    impacted: 5200, raised: 4200000, goal: 5000000, donors: 2340,
    icon: GraduationCap, color: "from-emerald-600 to-teal-500", image: "/images/edu.png",
    location: "Rajasthan, Bihar, Jharkhand", startDate: "January 2019",
    milestones: [
      { title: "Program Launch — First 5 schools", date: "Jan 2019", completed: true },
      { title: "Digital Learning Labs installed", date: "Jul 2020", completed: true },
      { title: "1,000 students enrolled", date: "Mar 2021", completed: true },
      { title: "Teacher training program expanded", date: "Sep 2022", completed: true },
      { title: "5,000 students milestone", date: "Dec 2023", completed: true },
      { title: "10,000 students goal", date: "Dec 2025", completed: false },
    ],
    allocation: [
      { label: "Teacher Salaries & Training", percent: 40 },
      { label: "Learning Materials & Tech", percent: 25 },
      { label: "Infrastructure", percent: 20 },
      { label: "Student Nutrition", percent: 10 },
      { label: "Administration", percent: 5 },
    ],
    testimonials: [
      { name: "Priya Sharma", quote: "VIDIYAL didn't just give me books — they gave me wings. I'm the first in my family to attend college, studying computer science.", role: "Student, Class of 2023" },
      { name: "Ramesh Kumar", quote: "As a teacher trained by VIDIYAL, I learned new methods that keep children curious and engaged. The dropout rate in our school fell from 40% to just 5%.", role: "Trained Teacher" },
    ],
    stats: [
      { label: "Schools Built", value: "45" },
      { label: "Teachers Trained", value: "180" },
      { label: "Graduation Rate", value: "94%" },
      { label: "Dropout Reduction", value: "87%" },
    ],
  },
  healthcare: {
    title: "Mobile Health Clinics", category: "Healthcare",
    description: "Deploying mobile clinics providing free healthcare to remote villages.",
    longDescription: "Our Mobile Health Clinic program brings quality healthcare directly to communities that have never had access to a doctor. Each fully-equipped mobile unit carries diagnostic equipment, medicines, and trained medical professionals who provide primary care, vaccinations, maternal health services, and health education. We believe healthcare is a right, not a privilege.",
    impacted: 12800, raised: 1800000, goal: 3000000, donors: 1205,
    icon: Stethoscope, color: "from-teal-600 to-cyan-500", image: "/images/health.png",
    location: "Uttar Pradesh, Madhya Pradesh", startDate: "March 2020",
    milestones: [
      { title: "First mobile clinic deployed", date: "Mar 2020", completed: true },
      { title: "5,000 patients treated", date: "Dec 2021", completed: true },
      { title: "Maternal care program launched", date: "Jun 2022", completed: true },
      { title: "10,000 patients milestone", date: "Jan 2024", completed: true },
      { title: "20 clinic fleet target", date: "Jun 2025", completed: false },
    ],
    allocation: [
      { label: "Medical Staff & Equipment", percent: 45 },
      { label: "Medicines & Supplies", percent: 30 },
      { label: "Vehicle Maintenance", percent: 15 },
      { label: "Administration", percent: 10 },
    ],
    testimonials: [
      { name: "Dr. Anita Mehra", quote: "In 10 years of practice, I've never felt this fulfilled. These communities had never seen a doctor before us.", role: "Lead Physician" },
      { name: "Sunita Devi", quote: "When my child was sick with high fever, the mobile clinic saved her life. The nearest hospital is 60km away.", role: "Beneficiary Mother" },
    ],
    stats: [
      { label: "Patients Treated", value: "12,800+" },
      { label: "Mobile Clinics", value: "12" },
      { label: "Villages Covered", value: "340" },
      { label: "Lives Saved", value: "890+" },
    ],
  },
  "clean-water": {
    title: "Clean Water for All", category: "Clean Water",
    description: "Installing sustainable water purification systems in drought-affected regions.",
    longDescription: "Access to clean water changes everything. Our Clean Water program installs community-owned water purification systems, bore wells, and rainwater harvesting infrastructure in regions devastated by drought and contamination. We also train local technicians to maintain these systems, ensuring sustainability for decades.",
    impacted: 8400, raised: 2700000, goal: 4000000, donors: 1890,
    icon: Droplets, color: "from-cyan-600 to-blue-500", image: "/images/water.png",
    location: "Maharashtra, Karnataka, Tamil Nadu", startDate: "June 2018",
    milestones: [
      { title: "First purification system installed", date: "Jun 2018", completed: true },
      { title: "10 villages connected", date: "Feb 2019", completed: true },
      { title: "Rainwater harvesting program", date: "Aug 2021", completed: true },
      { title: "50 systems operational", date: "Mar 2023", completed: true },
      { title: "100 systems target", date: "Dec 2025", completed: false },
    ],
    allocation: [
      { label: "Equipment & Installation", percent: 50 },
      { label: "Local Technician Training", percent: 20 },
      { label: "Water Quality Testing", percent: 15 },
      { label: "Community Education", percent: 10 },
      { label: "Administration", percent: 5 },
    ],
    testimonials: [
      { name: "Lakshmi Devi", quote: "Before VIDIYAL, my children were sick every month from dirty water. Now they're healthy and attending school regularly.", role: "Community Leader" },
      { name: "Ravi Patel", quote: "I was trained as a water technician. Now I maintain 5 systems and my village has clean water 24/7.", role: "Local Technician" },
    ],
    stats: [
      { label: "Systems Installed", value: "68" },
      { label: "Daily Beneficiaries", value: "8,400" },
      { label: "Disease Reduction", value: "72%" },
      { label: "Villages Served", value: "52" },
    ],
  },
  empowerment: {
    title: "Women Empowerment Program", category: "Empowerment",
    description: "Empowering women through skill training, micro-finance support, and entrepreneurship programs.",
    longDescription: "Our Women Empowerment Program creates leaders who uplift entire communities. Through vocational training, micro-finance support, and entrepreneurship mentorship, we help women gain financial independence and become agents of change in their villages.",
    impacted: 3600, raised: 1500000, goal: 2500000, donors: 980,
    icon: Users, color: "from-purple-600 to-pink-500", image: "/images/empowerment.png",
    location: "Kerala, Andhra Pradesh", startDate: "August 2020",
    milestones: [
      { title: "First training center opened", date: "Aug 2020", completed: true },
      { title: "500 women trained", date: "Mar 2021", completed: true },
      { title: "Micro-finance program launched", date: "Jan 2022", completed: true },
      { title: "1,000 businesses started", date: "Dec 2023", completed: true },
      { title: "5,000 women target", date: "Dec 2025", completed: false },
    ],
    allocation: [
      { label: "Skill Training", percent: 35 },
      { label: "Micro-Finance Grants", percent: 30 },
      { label: "Mentorship Programs", percent: 20 },
      { label: "Infrastructure", percent: 10 },
      { label: "Administration", percent: 5 },
    ],
    testimonials: [
      { name: "Meena Kumari", quote: "VIDIYAL taught me tailoring and gave me a loan to start my own shop. Now I support my entire family.", role: "Entrepreneur" },
      { name: "Fatima Begum", quote: "I went from being dependent to running a successful catering business. My daughters now dream bigger.", role: "Business Owner" },
    ],
    stats: [
      { label: "Women Trained", value: "3,600" },
      { label: "Businesses Started", value: "1,200" },
      { label: "Income Increase", value: "340%" },
      { label: "Communities Reached", value: "85" },
    ],
  },
  development: {
    title: "Rural Infrastructure", category: "Development",
    description: "Building essential infrastructure — roads, schools, community centers.",
    longDescription: "Rural Infrastructure development is the backbone of sustainable progress. We build roads, schools, community centers, and sanitation facilities that connect remote villages to opportunities and modernize living conditions for thousands.",
    impacted: 15000, raised: 3200000, goal: 5000000, donors: 1650,
    icon: Building, color: "from-amber-600 to-orange-500", image: "/images/development.png",
    location: "Odisha, Chhattisgarh", startDate: "April 2017",
    milestones: [
      { title: "First community center built", date: "Apr 2017", completed: true },
      { title: "5 village roads constructed", date: "Nov 2018", completed: true },
      { title: "Solar lighting in 20 villages", date: "Jun 2020", completed: true },
      { title: "Sanitation facilities for 50 villages", date: "Mar 2023", completed: true },
      { title: "100 villages modernized", date: "Dec 2025", completed: false },
    ],
    allocation: [
      { label: "Construction & Materials", percent: 50 },
      { label: "Labor & Skilled Workers", percent: 25 },
      { label: "Solar & Energy", percent: 15 },
      { label: "Administration", percent: 10 },
    ],
    testimonials: [
      { name: "Village Elder Mohan", quote: "The new road cut our travel to the nearest town from 4 hours to 45 minutes. Everything changed.", role: "Village Elder" },
      { name: "Geeta Devi", quote: "The community center is where our children study, women meet, and the village comes together.", role: "Community Member" },
    ],
    stats: [
      { label: "Structures Built", value: "120+" },
      { label: "Roads Constructed", value: "45 km" },
      { label: "Solar Installations", value: "200" },
      { label: "People Benefited", value: "15,000" },
    ],
  },
  "disaster-relief": {
    title: "Disaster Relief Fund", category: "Disaster Relief",
    description: "Providing immediate emergency response, shelter, food, and rehabilitation support.",
    longDescription: "When disaster strikes, every minute counts. Our Disaster Relief Fund provides immediate emergency response including shelter, food, medical aid, and long-term rehabilitation support to communities affected by natural disasters and humanitarian crises across India.",
    impacted: 22000, raised: 5500000, goal: 8000000, donors: 4200,
    icon: AlertTriangle, color: "from-rose-600 to-red-500", image: "/images/disaster.png",
    location: "Pan-India Response", startDate: "January 2015",
    milestones: [
      { title: "Emergency response team formed", date: "Jan 2015", completed: true },
      { title: "Chennai floods relief", date: "Dec 2015", completed: true },
      { title: "Kerala floods response", date: "Aug 2018", completed: true },
      { title: "COVID-19 relief operations", date: "Mar 2020", completed: true },
      { title: "Permanent rapid-response units", date: "Dec 2025", completed: false },
    ],
    allocation: [
      { label: "Emergency Supplies", percent: 40 },
      { label: "Shelter & Rehabilitation", percent: 30 },
      { label: "Medical Aid", percent: 20 },
      { label: "Administration", percent: 10 },
    ],
    testimonials: [
      { name: "Rajesh Verma", quote: "When the floods destroyed our home, VIDIYAL was the first to arrive with food and shelter. They stayed until we rebuilt.", role: "Flood Survivor" },
      { name: "Dr. Kavitha", quote: "The speed of their response saves lives. I've worked with many NGOs but VIDIYAL's ground coordination is unmatched.", role: "Relief Volunteer" },
    ],
    stats: [
      { label: "People Rescued", value: "22,000" },
      { label: "Relief Camps", value: "85" },
      { label: "Homes Rebuilt", value: "3,400" },
      { label: "Response Time", value: "<24 hrs" },
    ],
  },
};

const defaultProgram = programData.education;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const program = programData[slug] || defaultProgram;
  const progress = (program.raised / program.goal) * 100;
  const Icon = program.icon;

  return (
    <div className="bg-charcoal-950 pb-20">
      {/* ═══════════════════ CINEMATIC HERO ═══════════════════ */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <Image src={program.image} alt={program.title} fill className="object-cover opacity-40" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/50 via-transparent to-charcoal-950/50" />

        <div className="relative z-10 section-padding max-w-7xl mx-auto w-full pb-16 pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 backdrop-blur-sm mb-4">{program.category}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4 max-w-3xl">{program.title}</h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8 font-light">{program.description}</p>
            <div className="flex flex-wrap items-center gap-6 text-white/50 text-sm">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" />{program.location}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" />Since {program.startDate}</span>
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-emerald-400" />{program.impacted.toLocaleString()} impacted</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ MAIN CONTENT ═══════════════════ */}
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-3 gap-12 -mt-10 relative z-20">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Story */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="p-8 md:p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md">
              <h2 className="text-2xl font-display font-bold text-white mb-6">Our Story</h2>
              <p className="text-white/60 leading-[1.8] mb-8 font-light">{program.longDescription}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {program.stats.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <p className="font-display font-bold text-xl text-emerald-400">{stat.value}</p>
                    <p className="text-xs text-white/40 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Timeline */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl font-display font-bold text-white mb-8">Timeline of Change</h2>
              <div className="relative">
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-emerald-500 to-emerald-900/30" />
                <div className="space-y-6">
                  {program.milestones.map((m, i) => (
                    <motion.div key={m.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="relative pl-10">
                      <div className={`absolute left-0 top-1 w-[30px] h-[30px] rounded-full border-2 flex items-center justify-center ${
                        m.completed ? "bg-emerald-500 border-emerald-500" : "bg-charcoal-800 border-white/20"}`}>
                        {m.completed ? <CheckCircle2 className="w-4 h-4 text-white" /> : <Clock className="w-3.5 h-3.5 text-white/40" />}
                      </div>
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                        <p className="font-display font-semibold text-white text-sm">{m.title}</p>
                        <p className="text-xs text-white/40 mt-1">{m.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Fund Allocation */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="p-8 md:p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-emerald-400" />
                <h2 className="text-2xl font-display font-bold text-white">Transparent Fund Allocation</h2>
              </div>
              <div className="space-y-5">
                {program.allocation.map((item, i) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-white/60">{item.label}</span>
                      <span className="font-semibold text-emerald-400">{item.percent}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.percent}%` }}
                        viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut", delay: i * 0.15 }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Testimonials */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl font-display font-bold text-white mb-8">Voices from the Field</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {program.testimonials.map((t, i) => (
                  <motion.div key={t.name} variants={fadeUp} custom={i}
                    className="p-7 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500">
                    <Quote className="w-7 h-7 text-emerald-500/30 mb-3" />
                    <p className="text-white/70 leading-relaxed mb-5 italic text-sm font-light">&ldquo;{t.quote}&rdquo;</p>
                    <div>
                      <p className="font-display font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-xs text-emerald-400">{t.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column — Sticky Donation */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="p-7 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(16,185,129,0.05)]">
                <h3 className="font-display font-bold text-xl text-white mb-4">Support This Program</h3>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold text-emerald-400 text-lg">₹{(program.raised / 100000).toFixed(1)}L</span>
                    <span className="text-white/40">of ₹{(program.goal / 100000).toFixed(0)}L goal</span>
                  </div>
                  <Progress value={progress} className="h-3 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-teal-400" />
                  <div className="flex justify-between text-xs text-white/40 mt-2">
                    <span>{program.donors.toLocaleString()} donors</span>
                    <span>{Math.round(progress)}% funded</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[500, 1000, 2000].map((amount) => (
                    <button key={amount} className="py-3 rounded-xl border border-emerald-500/30 text-emerald-400 font-semibold text-sm hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all">
                      ₹{amount}
                    </button>
                  ))}
                </div>
                <Link href="/donate" className="block">
                  <Button size="lg" className="w-full gap-2 mb-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <Heart className="w-4 h-4" /> Donate Now
                  </Button>
                </Link>
                <div className="flex items-center gap-2 justify-center text-xs text-white/40">
                  <Shield className="w-3.5 h-3.5" /><span>Secure & Tax Deductible (80G)</span>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Your Impact</p>
                  <div className="space-y-2.5 text-sm">
                    {["₹500 = School supplies for 2 children", "₹2,000 = One month of teacher training", "₹10,000 = Digital learning lab setup"].map((text) => (
                      <div key={text} className="flex items-center gap-2 text-white/50">
                        <Target className="w-4 h-4 text-emerald-500 shrink-0" /><span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════ MOBILE STICKY CTA ═══════════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-charcoal-950/90 backdrop-blur-xl border-t border-white/10 p-4 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-sm font-display font-bold text-white">{program.title}</p>
            <p className="text-xs text-emerald-400">{Math.round(progress)}% funded</p>
          </div>
          <Link href="/donate">
            <Button className="gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full">
              <Heart className="w-4 h-4" /> Donate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
