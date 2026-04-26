"use client";

import Image from "next/image";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" className="bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative h-[500px] md:h-[700px] group">
            <div className="absolute -inset-4 border border-brand-gold/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
              alt="Our Story"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover relative z-10"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-gold/10 -z-0" />
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-brand-gold uppercase tracking-[0.2em] text-sm font-bold">
                The Heritage
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-black leading-tight">
                Crafting Memories <br />
                <span className="text-brand-gold italic">Since 2010</span>
              </h2>
            </div>
            
            <p className="text-brand-gray text-lg md:text-xl font-body leading-relaxed opacity-90">
              Saintce was born from a simple vision: to create a sanctuary where culinary excellence meets immersive garden aesthetics. 
              Our journey started with a passion for local ingredients and a dedication to classical techniques, reimagined for the modern palate.
            </p>
            
            <p className="text-brand-gray/80 text-base md:text-lg font-body leading-relaxed">
              Every detail in our restaurant—from the carefully curated lighting to the hand-picked herbs from our rooftop garden—is 
              designed to transport you away from the city's noise. At Saintce, dining isn't just a meal; it's an orchestration 
              of senses, a celebration of heritage, and a commitment to pure, unadulterated quality.
            </p>

            <div className="pt-6 flex items-center space-x-12">
              <div className="text-center">
                <span className="block text-3xl font-heading font-bold text-brand-gold">14+</span>
                <span className="text-xs uppercase tracking-widest font-semibold">Awards</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-heading font-bold text-brand-gold">3</span>
                <span className="text-xs uppercase tracking-widest font-semibold">Michelin Stars</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-heading font-bold text-brand-gold">100%</span>
                <span className="text-xs uppercase tracking-widest font-semibold">Organic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
