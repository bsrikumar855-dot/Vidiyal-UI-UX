"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/donate", label: "Donate" },
];

export function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-charcoal-950/80 backdrop-blur-2xl shadow-2xl shadow-black/50 border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="relative h-20 px-6 md:px-12">
          <div className="relative flex h-full items-center justify-end">
            {/* Logo */}
            <Link href="/" className="absolute left-0 flex items-center group">
              <span className="font-display font-extrabold text-2xl tracking-[0.15em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.15)] group-hover:from-amber-100 group-hover:via-yellow-200 group-hover:to-amber-300 transition-all duration-500 select-none">
                VIDIYAL
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                    pathname === link.href
                      ? "text-emerald-400"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-white/10 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="absolute right-0 md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-20 z-40 bg-charcoal-950/95 backdrop-blur-3xl md:hidden border-b border-white/5"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center px-4 py-4 rounded-2xl text-lg font-medium transition-all",
                      pathname === link.href
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4"
              >
                <Link href="/donate" className="block">
                  <Button size="xl" className="w-full gap-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <Heart className="w-5 h-5" />
                    Donate Now
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
