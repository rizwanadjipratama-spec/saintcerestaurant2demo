"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Section from "./Section";
import { cn } from "@/lib/utils";
import { X, ChevronRight, Info } from "lucide-react";

const SIGNATURE_DISHES = [
  {
    id: 1,
    name: "Truffle Infused Wagyu",
    price: "$85",
    description: "A5 Grade Wagyu beef with seasonal truffle shavings, bone marrow jus, and smoked sea salt.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000",
    details: "Our Wagyu is sourced from the Miyazaki prefecture, aged for 45 days, and seared over binchotan charcoal for an authentic smoky finish."
  },
  {
    id: 2,
    name: "Lobster Thermidor",
    price: "$72",
    description: "Atlantic lobster tails with a creamy brandy sauce, wild mushrooms, and gruyère crust.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000",
    details: "A classic reimagined. We use fresh Atlantic lobsters delivered daily, finished with a touch of Cognac and aged Gruyère from the Swiss Alps."
  },
  {
    id: 3,
    name: "Saffron Sea Bass",
    price: "$58",
    description: "Wild-caught sea bass served on a bed of saffron risotto, baby asparagus, and lemon foam.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2000",
    details: "The sea bass is pan-seared to achieve a perfectly crispy skin, paired with 24-month aged carnaroli rice and premium Iranian saffron."
  },
];

const MENU_CATEGORIES = [
  {
    id: "appetizer",
    name: "Appetizers",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2000",
    items: [
      { name: "Scallop Carpaccio", price: "$24", desc: "Thinly sliced scallops, citrus vinaigrette, finger lime." },
      { name: "Foie Gras Terrine", price: "$28", desc: "Fig jam, toasted homemade brioche, fleur de sel." },
      { name: "Wild Mushroom Arancini", price: "$18", desc: "Truffle oil infusion, 36-month parmesan dip." },
      { name: "Oyster Selection", price: "$32", desc: "Six fresh Pacific oysters, ginger-mignonette." },
    ]
  },
  {
    id: "main",
    name: "Main Course",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000",
    items: [
      { name: "Duck Confit", price: "$42", desc: "Crispy duck leg, orange-star anise glaze, root mash." },
      { name: "Herb Crusted Lamb", price: "$48", desc: "Rack of lamb, mint pea purée, glazed heirloom carrots." },
      { name: "Roasted Venison", price: "$52", desc: "Blackberry reduction, celeriac silk, charred leeks." },
      { name: "Vegetable Wellington", price: "$36", desc: "Seasonal forest mushrooms, spinach, flaky crust." },
    ]
  },
  {
    id: "dessert",
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=2000",
    items: [
      { name: "Valrhona Soufflé", price: "$16", desc: "Warm 70% dark chocolate, Madagascar vanilla bean gelato." },
      { name: "Golden Leaf Opera", price: "$14", desc: "Espresso soaked layers, gold leaf, hazelnut praline." },
      { name: "Lemon Meringue Tarte", price: "$12", desc: "Zesty curd, basil crystals, torched Swiss meringue." },
    ]
  },
  {
    id: "drinks",
    name: "Drinks",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000",
    items: [
      { name: "Vintage Bordeaux", price: "$120", desc: "Château Margaux, Grand Cru Classé, 2015." },
      { name: "Gold Dust Martini", price: "$22", desc: "Belvedere Vodka, dry vermouth, 24k gold flakes." },
      { name: "Sparkling Elderflower", price: "$12", desc: "Non-alcoholic botanical blend, fresh mint." },
    ]
  }
];

export default function Menu() {
  const [selectedDish, setSelectedDish] = useState<typeof SIGNATURE_DISHES[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll spy for categories
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + (window.innerHeight / 3);

      // Check if user is at the very bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveCategory(MENU_CATEGORIES[MENU_CATEGORIES.length - 1].id);
        return;
      }

      MENU_CATEGORIES.forEach((cat) => {
        const section = document.getElementById(`cat-${cat.id}`);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveCategory(cat.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(`cat-${id}`);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: top,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Signature Section */}
      <Section id="menu" className="bg-brand-black text-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 space-y-4">
            <motion.span 
              initial={{ opacity: 0, tracking: "0.5em" }}
              whileInView={{ opacity: 1, tracking: "0.3em" }}
              className="text-brand-gold uppercase text-sm font-bold block"
            >
              Chef's Masterpieces
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-brand-cream">
              The <span className="text-brand-gold italic">Signatures</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SIGNATURE_DISHES.map((dish) => (
              <motion.div
                key={dish.id}
                whileHover={{ y: -15 }}
                className="group relative bg-brand-gray/20 border border-brand-gold/10 rounded-sm overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60" />
                  <div className="absolute top-6 right-6 bg-brand-gold text-brand-black px-4 py-1 font-bold text-sm shadow-lg">
                    {dish.price}
                  </div>
                </div>
                <div className="p-8 space-y-4 relative">
                  <h3 className="text-2xl font-heading font-bold text-brand-gold">{dish.name}</h3>
                  <p className="text-brand-cream/60 text-sm leading-relaxed">{dish.description}</p>
                  <button 
                    onClick={() => setSelectedDish(dish)}
                    className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-gold hover:text-brand-cream transition-colors group/btn"
                  >
                    View Details <Info size={14} className="group-hover/btn:rotate-12 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Split Scroll Menu Section */}
      <div className="bg-brand-cream py-0 relative overflow-visible">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-screen">
          
          {/* Left Side: Sticky Navigator & Image */}
          <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 p-12 lg:p-24 flex flex-col justify-center space-y-12 bg-brand-black text-brand-cream border-r border-brand-gold/10">
            <div className="space-y-4">
              <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">Gastronomy</span>
              <h2 className="text-5xl font-heading font-bold">The <span className="text-brand-gold italic">Full List</span></h2>
            </div>

            <nav className="flex flex-col space-y-6">
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={cn(
                    "text-left group flex items-center gap-4 transition-all relative py-2",
                    activeCategory === cat.id ? "text-brand-gold" : "text-brand-cream/30 hover:text-brand-cream"
                  )}
                >
                  <div className="relative flex items-center">
                    {activeCategory === cat.id && (
                      <motion.span 
                        layoutId="activeCategory"
                        className="absolute -left-4 w-12 h-[1px] bg-brand-gold"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className={cn(
                      "w-8 h-[1px] transition-all",
                      activeCategory === cat.id ? "opacity-0" : "bg-brand-cream/10 group-hover:bg-brand-cream/30"
                    )} />
                  </div>
                  <span className="text-lg font-heading font-bold tracking-wider uppercase ml-4">{cat.name}</span>
                </button>
              ))}
            </nav>

            <div className="relative h-48 w-full hidden lg:block overflow-hidden rounded-sm border border-brand-gold/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.4, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={MENU_CATEGORIES.find(c => c.id === activeCategory)?.image || ""}
                    alt="Category background"
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Scrollable Menu Items */}
          <div className="lg:w-2/3 p-6 lg:p-24 space-y-32">
            {MENU_CATEGORIES.map((cat) => (
              <div key={cat.id} id={`cat-${cat.id}`} className="space-y-16 py-12 lg:py-24">
                <div className="flex items-center gap-6">
                  <h3 className="text-4xl lg:text-6xl font-heading font-bold text-brand-black">{cat.name}</h3>
                  <div className="flex-1 h-[1px] bg-brand-gold/20" />
                </div>
                
                <div className="grid grid-cols-1 gap-y-12">
                  {cat.items.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="group cursor-default"
                    >
                      <div className="flex justify-between items-baseline gap-4 mb-2">
                        <h4 className="text-xl lg:text-2xl font-heading font-bold text-brand-black group-hover:text-brand-gold transition-colors">
                          {item.name}
                        </h4>
                        <div className="flex-1 border-b border-dashed border-brand-gold/30 mb-1" />
                        <span className="text-xl font-heading font-bold text-brand-gold">{item.price}</span>
                      </div>
                      <p className="text-brand-gray/60 font-body text-sm italic">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dish Detail Modal */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-brand-cream max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-sm shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedDish(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-brand-black text-brand-gold rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all"
              >
                <X size={20} />
              </button>

              <div className="relative h-64 md:h-full">
                <Image
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-10 lg:p-16 flex flex-col justify-center space-y-6">
                <span className="text-brand-gold font-bold tracking-widest text-xs uppercase">Chef's Special</span>
                <h2 className="text-4xl font-heading font-bold text-brand-black">{selectedDish.name}</h2>
                <div className="text-3xl font-heading font-bold text-brand-gold">{selectedDish.price}</div>
                <p className="text-brand-gray leading-relaxed">{selectedDish.details}</p>
                
                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => {
                      setSelectedDish(null);
                      window.scrollTo({ top: document.getElementById('reservation')?.offsetTop, behavior: 'smooth' });
                    }}
                    className="bg-brand-black text-brand-gold px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
