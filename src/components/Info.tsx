"use client";

import { useState } from "react";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronDown, Phone, Mail, MapPin, Camera, Share2, X } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Alexander Wright",
    role: "Food Critic",
    content: "The Wagyu was transcendent. Saintce has managed to blend the raw beauty of nature with absolute culinary precision.",
  },
  {
    name: "Elena Rodriguez",
    role: "Frequent Guest",
    content: "My favorite spot for special occasions. The ambiance is unmatched, and the service makes you feel like royalty.",
  },
  {
    name: "James Chen",
    role: "Lifestyle Blogger",
    content: "A cinematic dining experience. Every plate is a masterpiece, and the immersive garden setting is just breathtaking.",
  },
];

const FAQS = [
  {
    q: "Do you have a dress code?",
    a: "We recommend a smart casual or formal attire to complement our dining environment.",
  },
  {
    q: "Is the restaurant halal certified?",
    a: "We source our ingredients from certified suppliers and offer a variety of halal-friendly options. Please inquire for specific details.",
  },
  {
    q: "What are your opening hours?",
    a: "We are open Monday to Sunday. Lunch: 12:00 PM - 3:00 PM. Dinner: 6:00 PM - 11:00 PM.",
  },
  {
    q: "Is valet parking available?",
    a: "Yes, complimentary valet parking is available for all our guests at the main entrance.",
  },
];

export default function Info() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Testimonials */}
      <Section className="bg-brand-black text-brand-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <Quote className="mx-auto text-brand-gold mb-6" size={48} />
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Guest <span className="text-brand-gold italic">Reflections</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="space-y-6 text-center md:text-left">
                <p className="text-brand-cream/70 italic text-lg leading-relaxed">"{t.content}"</p>
                <div className="pt-4 border-t border-brand-gold/20">
                  <h4 className="font-heading font-bold text-brand-gold">{t.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-brand-cream/40">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ & Contact */}
      <Section id="faq" className="bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* FAQ Side */}
            <div className="space-y-12">
              <div>
                <span className="text-brand-gold uppercase tracking-[0.2em] text-sm font-bold block mb-4">
                  Information
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-black">
                  Frequently Asked <br />
                  <span className="text-brand-gold italic">Questions</span>
                </h2>
              </div>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="border-b border-brand-gold/10">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between py-6 text-left group"
                    >
                      <span className={cn(
                        "text-lg font-heading font-bold transition-colors",
                        openFaq === idx ? "text-brand-gold" : "text-brand-black group-hover:text-brand-gold"
                      )}>
                        {faq.q}
                      </span>
                      <ChevronDown 
                        className={cn("text-brand-gold transition-transform duration-300", openFaq === idx && "rotate-180")} 
                        size={20} 
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-brand-gray/70 font-body leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Side */}
            <div id="contact" className="space-y-12">
              <div>
                <span className="text-brand-gold uppercase tracking-[0.2em] text-sm font-bold block mb-4">
                  Get in touch
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-black">
                  Contact <span className="text-brand-gold italic">Us</span>
                </h2>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-black text-xl mb-1">Our Location</h4>
                    <p className="text-brand-gray/70 text-sm">123 Culinary Garden Avenue, <br />Epicurean District, New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-black text-xl mb-1">Reservations</h4>
                    <p className="text-brand-gray/70 text-sm">+1 (555) 123-4567</p>
                    <a href="https://wa.me/15551234567" className="text-brand-gold text-xs font-bold uppercase tracking-widest hover:underline mt-2 inline-block">WhatsApp Us</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-black text-xl mb-1">General Inquiry</h4>
                    <p className="text-brand-gray/70 text-sm">hello@saintce.com</p>
                  </div>
                </div>

                {/* Real Interactive Map */}
                <div className="relative h-64 bg-brand-gray/10 rounded-sm overflow-hidden border border-brand-gold/10 group shadow-inner">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617540194511!2d-73.9856556!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a147!2sEmpire%20State%20Building!5e0!3m2!1sen!3sus!4v1700000000000!5m2!1sen!3sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 pointer-events-none border border-brand-gold/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
