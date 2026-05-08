"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, MapPin, Phone, ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const footerLinks = {
  "Our Work": [
    { label: "Education", href: "/programs" },
    { label: "Healthcare", href: "/programs" },
    { label: "Clean Water", href: "/programs" },
    { label: "Women Empowerment", href: "/programs" },
  ],
  "About Us": [
    { label: "Our Story", href: "/impact" },
    { label: "Impact Report", href: "/impact" },
    { label: "Transparency", href: "/impact" },
    { label: "Team", href: "/impact" },
  ],
  "Get Involved": [
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: "/impact" },
    { label: "Partner With Us", href: "/impact" },
    { label: "Fundraise", href: "/donate" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-charcoal-950 border-t border-white/5 pt-32 overflow-hidden">
      {/* ═══════════════════ CINEMATIC DONATION CTA ═══════════════════ */}
      <div className="max-w-7xl mx-auto px-6 mb-32 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center"
        >
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/development.png"
              alt="Indian community"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-charcoal-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 w-full p-10 md:p-16 lg:w-2/3">
             <div className="flex items-center gap-3 mb-6">
                <Heart className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 font-medium uppercase tracking-wider text-sm">Join The Movement</span>
             </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Write the Next <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">Chapter of Hope</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed font-light max-w-xl">
              From the heart of rural India to the frontlines of change, your support builds the bridges our communities need to thrive.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/donate">
                <Button size="xl" className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] rounded-full px-8 gap-2">
                  Donate Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/programs">
                <Button size="xl" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 backdrop-blur-sm">
                  View Programs
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative z-10 hidden lg:flex w-1/3 p-10 items-end justify-end h-full">
             <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                <Quote className="w-8 h-8 text-emerald-400/50 mb-3" />
                <p className="text-white/80 italic font-light leading-relaxed">"The true measure of any society can be found in how it treats its most vulnerable members."</p>
             </div>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════ FOOTER LINKS ═══════════════════ */}
      <div className="relative z-10 border-t border-white/5 bg-charcoal-950 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6 group">
                <span className="font-display font-extrabold text-3xl tracking-[0.15em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 group-hover:from-amber-100 group-hover:via-yellow-200 group-hover:to-amber-300 transition-all duration-500 select-none">
                  VIDIYAL
                </span>
              </Link>
              <p className="text-white/50 leading-relaxed mb-8 max-w-sm font-light">
                Bridging the gap between compassion and action. Every life touched
                in India is a new beginning.
              </p>
              <div className="space-y-4 text-sm text-white/60 font-light">
                <div className="flex items-center gap-4 hover:text-emerald-400 transition-colors">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-4 hover:text-emerald-400 transition-colors">
                  <Mail className="w-5 h-5 text-emerald-500" />
                  <span>bsrikumar855@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 hover:text-emerald-400 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-500" />
                  <span>+91 81224 56608</span>
                </div>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-6">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-emerald-400 transition-colors duration-300 text-sm font-light flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="border-t border-white/5 pt-12 mb-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-md">
                <h4 className="font-display font-bold text-2xl text-white mb-2">Stay Connected</h4>
                <p className="text-white/50 text-sm font-light">Join our community. Get stories of impact and transformation delivered to your inbox.</p>
              </div>
              <div className="flex w-full lg:w-auto gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 lg:w-80 h-14 px-6 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm backdrop-blur-sm"
                />
                <Button className="h-14 rounded-full px-8 bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shrink-0 gap-2">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm font-light flex items-center gap-2">
              © 2026 VIDIYAL. All rights reserved. Made with <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500" /> in India.
            </p>
            <div className="flex items-center gap-8 text-sm text-white/40 font-light">
              <Link href="#" className="hover:text-emerald-400 transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-emerald-400 transition-colors">Terms</Link>
              <Link href="#" className="hover:text-emerald-400 transition-colors">Transparency</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
