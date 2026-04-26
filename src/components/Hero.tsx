"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070"
          alt="Saintce Fine Dining"
          fill
          sizes="100vw"
          className="object-cover scale-105 animate-subtle-zoom"
          priority
        />
        <div className="absolute inset-0 bg-brand-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-brand-gold uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-4 block">
              Welcome to Saintce
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading font-bold text-brand-cream leading-none tracking-tighter mb-8">
              The Art of <br />
              <span className="text-brand-gold italic">Fine Dining</span>
            </h1>
            <p className="text-brand-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body tracking-wide">
              Experience a symphony of flavors in an atmosphere designed for the extraordinary. 
              Where every dish tells a story of passion and precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#reservation"
                className="w-full sm:w-auto bg-brand-gold text-brand-black px-10 py-4 font-bold uppercase tracking-[0.2em] hover:bg-brand-cream hover:scale-105 transition-all duration-300"
              >
                Reserve Now
              </Link>
              <Link
                href="#menu"
                className="w-full sm:w-auto border border-brand-cream/30 text-brand-cream px-10 py-4 font-bold uppercase tracking-[0.2em] hover:bg-brand-cream hover:text-brand-black transition-all duration-300"
              >
                Explore Menu
              </Link>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      {mounted && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-brand-gold/0 via-brand-gold to-brand-gold/0 animate-scroll-line" />
        </motion.div>
      )}
    </section>
  );
}
