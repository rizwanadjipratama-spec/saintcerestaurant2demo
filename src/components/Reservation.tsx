"use client";

import { useState } from "react";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Calendar, Users, Clock, Send } from "lucide-react";
import Image from "next/image";


export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      window.scrollTo({ top: contact.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Reservation Section */}
      <Section id="reservation" className="bg-brand-cream py-0 md:py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-brand-gold/20 shadow-2xl overflow-hidden">
            {/* Form Side */}
            <div className="bg-brand-black p-8 md:p-16 text-brand-cream relative">
              <div className="relative z-10">
                <span className="text-brand-gold uppercase tracking-[0.2em] text-sm font-bold block mb-4">
                  Secure your table
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                  Table <span className="text-brand-gold italic">Reservation</span>
                </h2>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest text-brand-gold font-bold">Full Name</label>
                          <input
                            required
                            type="text"
                            placeholder="John Doe"
                            className="w-full bg-brand-gray/30 border border-brand-gold/10 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors text-brand-cream placeholder:text-brand-cream/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest text-brand-gold font-bold">Guests</label>
                          <div className="relative">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold" size={18} />
                            <select className="w-full bg-brand-gray/30 border border-brand-gold/10 pl-12 pr-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors text-brand-cream appearance-none">
                              <option>2 People</option>
                              <option>4 People</option>
                              <option>6 People</option>
                              <option>8+ People</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest text-brand-gold font-bold">Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold" size={18} />
                            <input
                              required
                              type="date"
                              className="w-full bg-brand-gray/30 border border-brand-gold/10 pl-12 pr-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors text-brand-cream"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest text-brand-gold font-bold">Time</label>
                          <div className="relative">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold" size={18} />
                            <input
                              required
                              type="time"
                              className="w-full bg-brand-gray/30 border border-brand-gold/10 pl-12 pr-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors text-brand-cream"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-brand-gold font-bold">Special Requests</label>
                        <textarea
                          rows={3}
                          placeholder="e.g. Birthday, Anniversary, Dietary restrictions..."
                          className="w-full bg-brand-gray/30 border border-brand-gold/10 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors text-brand-cream resize-none placeholder:text-brand-cream/20"
                        />
                      </div>

                      <button
                        disabled={loading}
                        type="submit"
                        className="w-full bg-brand-gold text-brand-black py-4 font-bold uppercase tracking-widest hover:bg-brand-cream transition-all flex items-center justify-center gap-2 disabled:opacity-50 group"
                      >
                        {loading ? "Processing..." : (
                          <>
                            Confirm Reservation <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto text-brand-gold">
                        <CheckCircle2 size={48} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-heading font-bold text-brand-gold">Booking Confirmed!</h3>
                        <p className="text-brand-cream/60">
                          We&apos;ve received your request. A confirmation email and SMS will be sent shortly. 
                          We look forward to serving you!
                        </p>
                      </div>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-brand-gold underline uppercase tracking-widest text-xs font-bold"
                      >
                        Make another booking
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-3xl -z-0" />
            </div>

            {/* Image Side */}
            <div className="relative hidden lg:block h-full min-h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
                alt="Dining Space"
                fill
                sizes="50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-gold/10" />
            </div>
          </div>
        </div>
      </Section>

      {/* Events Section */}
      <Section id="events" className="bg-brand-cream pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
          <span className="text-brand-gold uppercase tracking-[0.2em] text-sm font-bold block mb-4">
            Special Occasions
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-black">
            Private Dining & <span className="text-brand-gold italic">Events</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 lg:px-12">
          {[
            { title: "Corporate Gatherings", desc: "Sophisticated environment for business meetings and networking events." },
            { title: "Wedding Receptions", desc: "A dreamy garden setting for your most unforgettable celebration." },
            { title: "Private Celebrations", desc: "Intimate dining experiences for birthdays and special milestones." },
          ].map((event, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 border border-brand-gold/20 bg-white shadow-sm space-y-4 group"
            >
              <h3 className="text-xl font-heading font-bold text-brand-black group-hover:text-brand-gold transition-colors">{event.title}</h3>
              <p className="text-brand-gray/70 text-sm leading-relaxed">{event.desc}</p>
              <button 
                onClick={scrollToContact}
                className="inline-block text-brand-gold font-bold text-xs uppercase tracking-widest border-b border-brand-gold/20 pb-1 hover:border-brand-gold transition-all"
              >
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
