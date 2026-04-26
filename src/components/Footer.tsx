"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ArrowUp, Camera, Share2, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-brand-black text-brand-cream py-20 border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link href="/" className="text-3xl font-heading font-bold tracking-tighter text-brand-gold">
              SAINTCE
            </Link>
            <p className="text-brand-cream/40 text-sm leading-relaxed font-body">
              An immersive garden dining experience where nature meets culinary perfection. 
              Elevating the art of the table since 2010.
            </p>
            <div className="flex space-x-4">
              {[Camera, Share2, X].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 border border-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm">Navigation</h4>
            <div className="flex flex-col space-y-3">
              {["Home", "Menu", "About", "Gallery", "Reservation", "Events"].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-brand-cream/60 hover:text-brand-gold transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm">Dining Hours</h4>
            <div className="space-y-3 text-sm text-brand-cream/60 font-body">
              <div className="flex justify-between border-b border-brand-gold/5 pb-2">
                <span>Mon - Fri</span>
                <span>12:00 - 23:00</span>
              </div>
              <div className="flex justify-between border-b border-brand-gold/5 pb-2">
                <span>Sat - Sun</span>
                <span>11:00 - 00:00</span>
              </div>
              <div className="pt-2 text-brand-gold italic text-xs">
                * Kitchen closes 1 hour before.
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm">Stay Updated</h4>
            <p className="text-brand-cream/40 text-sm font-body">Subscribe for seasonal menu updates and private events.</p>
            {!subscribed ? (
              <form className="flex" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address" 
                  className="bg-brand-gray/30 border border-brand-gold/10 px-4 py-3 text-sm w-full focus:outline-none focus:border-brand-gold transition-colors text-brand-cream"
                />
                <button type="submit" className="bg-brand-gold text-brand-black px-4 hover:bg-brand-cream transition-colors font-bold text-xs uppercase">
                  Join
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-brand-gold font-bold text-sm"
              >
                <Check size={18} /> Thank you for subscribing!
              </motion.div>
            )}
          </div>
        </div>

        <div className="pt-12 border-t border-brand-gold/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-brand-cream/20 uppercase tracking-widest font-semibold">
          <p>&copy; 2026 Saintce Immersive Garden. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-brand-gold transition-colors group"
          >
            Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
