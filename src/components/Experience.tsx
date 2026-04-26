"use client";

import Image from "next/image";
import Section from "./Section";
import { motion } from "framer-motion";
import { Utensils, Star, Leaf, Clock } from "lucide-react";

const FEATURES = [
  {
    icon: Utensils,
    title: "Master Chefs",
    desc: "Led by world-renowned experts in modern gastronomy.",
  },
  {
    icon: Star,
    title: "Luxurious Ambiance",
    desc: "A meticulously designed space that blends nature with elegance.",
  },
  {
    icon: Leaf,
    title: "Pure Ingredients",
    desc: "Sourced daily from our private garden and local organic farms.",
  },
  {
    icon: Clock,
    title: "Exquisite Service",
    desc: "Impeccable attention to detail, ensuring a seamless experience.",
  },
];

const IMAGES = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1000",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000",
];

export default function Experience() {
  return (
    <>
      {/* Why Us Section */}
      <Section className="bg-brand-cream border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-4 group"
              >
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto transition-colors group-hover:bg-brand-gold group-hover:text-brand-black text-brand-gold">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-black">{feature.title}</h3>
                <p className="text-brand-gray/70 text-sm font-body leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery" className="bg-brand-black pt-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-bold block mb-4">
            Visual Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-cream">
            The <span className="text-brand-gold italic">Gallery</span>
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 px-6 lg:px-12 space-y-6">
          {IMAGES.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden group rounded-sm"
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={800}
                height={800}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 border border-brand-gold rounded-full flex items-center justify-center text-brand-gold">
                  <Utensils size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
