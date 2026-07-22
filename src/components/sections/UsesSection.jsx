import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Utensils, 
  Stethoscope, 
  Sparkles, 
  HeartPulse, 
  Microscope, 
  Leaf,
  FlaskRound,
  Pill,
  Droplets,
  Scissors,
  Beaker,
  Syringe,
  TestTube,
  Package,
  Shield,
  Gauge
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

const USES = [
  {
    id: "food-beverage",
    title: "Food & Beverage",
    icon: <Utensils className="w-6 h-6 text-erode-amber" />,
    desc: "Used as a natural spice, flavoring agent, and approved food color (E100) in sauces, dairy products, snacks, beverages, and processed foods.",
    stat: "Natural Color E100",
    processes: ["Spice blending", "Flavoring", "Natural coloring"],
    products: ["Sauces", "Dairy", "Snacks", "Beverages"]
  },
  {
    id: "pharmaceutical",
    title: "Pharmaceuticals",
    icon: <Pill className="w-6 h-6 text-erode-amber" />,
    desc: "Formulated into capsules, tablets, syrups, ointments, and herbal medicines. Curcumin is purified and standardized for pharmaceutical applications.",
    stat: "Standardized Curcumin",
    processes: ["Solvent extraction", "Supercritical CO₂ extraction", "Purification"],
    products: ["Capsules", "Tablets", "Syrups", "Ointments"]
  },
  {
    id: "nutraceutical",
    title: "Nutraceuticals & Supplements",
    icon: <HeartPulse className="w-6 h-6 text-erode-amber" />,
    desc: "Produced as turmeric supplements, immunity blends, and wellness formulations—often combined with black pepper extract (piperine) to enhance curcumin absorption by 2000%.",
    stat: "2000% Bio-boost",
    processes: ["Curcumin standardization", "Piperine enhancement", "Capsule filling"],
    products: ["Supplements", "Immunity blends", "Wellness formulas"]
  },
  {
    id: "cosmetics",
    title: "Cosmetics & Personal Care",
    icon: <Sparkles className="w-6 h-6 text-erode-amber" />,
    desc: "Incorporated into face creams, soaps, facial cleansers, serums, masks, shampoos, and anti-aging skincare products for natural skin brightening and anti-inflammatory benefits.",
    stat: "Natural Skincare",
    processes: ["Extract formulation", "Emulsion blending", "Quality testing"],
    products: ["Creams", "Soaps", "Serums", "Face masks"]
  },
  {
    id: "essential-oil",
    title: "Essential Oil & Aromatherapy",
    icon: <Droplets className="w-6 h-6 text-erode-amber" />,
    desc: "Turmeric essential oil is extracted through steam distillation, producing aromatic compounds such as turmerone, atlantone, and zingiberene for aromatherapy and therapeutic applications.",
    stat: "Steam Distilled",
    processes: ["Steam distillation", "Compound isolation", "Oil purification"],
    products: ["Essential oil", "Aromatherapy blends", "Massage oils"]
  },
  {
    id: "textile",
    title: "Textile & Natural Dyeing",
    icon: <Scissors className="w-6 h-6 text-erode-amber" />,
    desc: "Used as a natural yellow dye for fabrics and traditional handicrafts, providing eco-friendly coloring alternatives to synthetic dyes.",
    stat: "Natural Yellow Dye",
    processes: ["Dye extraction", "Fabric treatment", "Color fixing"],
    products: ["Fabrics", "Handicrafts", "Traditional textiles"]
  },
  {
    id: "ayurveda",
    title: "Traditional Medicine",
    icon: <Leaf className="w-6 h-6 text-erode-amber" />,
    desc: "Revered for 5,000 years in Ayurveda, Siddha, and Unani systems as 'Haridra'—the divine cleansing herb used in medicinal preparations for blood purification and vitality.",
    stat: "5,000 Years Heritage",
    processes: ["Herbal preparation", "Traditional formulation", "Medicinal blending"],
    products: ["Herbal medicines", "Traditional remedies", "Wellness tonics"]
  },
  {
    id: "research",
    title: "Research & Biotechnology",
    icon: <Microscope className="w-6 h-6 text-erode-amber" />,
    desc: "Active clinical research continues to study curcumin for its antioxidant, anti-inflammatory, and antimicrobial properties, leading to new pharmaceutical and biomedical applications.",
    stat: "10,000+ Studies",
    processes: ["Clinical trials", "Bioactivity testing", "Biomedical research"],
    products: ["Research compounds", "Biomedical applications", "Novel formulations"]
  },
  {
    id: "chemical",
    title: "Chemical & Botanical Extract",
    icon: <Beaker className="w-6 h-6 text-erode-amber" />,
    desc: "Industrial extraction of curcuminoids, essential oils, and bioactive compounds for chemical, botanical, and industrial applications.",
    stat: "Industrial Grade",
    processes: ["Solvent extraction", "Crystallization", "Compound isolation"],
    products: ["Curcuminoids", "Botanical extracts", "Industrial compounds"]
  }
];

export function UsesSection() {
  const [selectedUse, setSelectedUse] = useState(0);

  const handleSelect = (idx) => {
    setSelectedUse(idx);
    soundEngine?.playScrollTick();
  };

  const currentUse = USES[selectedUse];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 pointer-events-none">
      <div className="max-w-6xl mx-auto space-y-12 pointer-events-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center space-y-3"
        >
          <span className="text-xs uppercase tracking-wide-apple text-erode-amber font-semibold">
            Scene 07 / Transformation
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-erode-dark tracking-tight-apple">
            Versatility Across Industries
          </h2>
          <p className="text-erode-gray max-w-2xl mx-auto text-sm md:text-base">
            From raw agricultural product to high-value products across 10+ industries—turmeric transforms into food, 
            pharmaceuticals, cosmetics, textiles, and cutting-edge biomedical research.
          </p>
        </motion.div>

        {/* Industry Categories - Top row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-xs font-medium text-erode-gray/60 uppercase tracking-wider">Industries:</span>
          {USES.slice(0, 9).map((item, idx) => (
            <span 
              key={item.id}
              className={`text-xs px-2.5 py-1 rounded-full transition-all cursor-default ${
                idx === selectedUse 
                  ? 'bg-erode-amber text-white' 
                  : 'bg-erode-gold/10 text-erode-gray'
              }`}
            >
              {item.title.split('&')[0].trim()}
            </span>
          ))}
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {USES.map((item, idx) => {
            const isSelected = idx === selectedUse;
            return (
              <motion.div
                key={item.id}
                onClick={() => handleSelect(idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: false }}
                className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 space-y-3 border ${
                  isSelected
                    ? 'bg-white shadow-apple-glow border-erode-amber ring-2 ring-erode-gold/30 scale-[1.02]'
                    : 'glass-panel shadow-apple-soft hover:bg-white/90 border-gray-100 hover:scale-[1.02]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-erode-gold/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-erode-amber px-2.5 py-1 rounded-full bg-erode-gold/10">
                    {item.stat}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-erode-dark leading-tight">{item.title}</h3>
                <p className="text-sm text-erode-gray leading-relaxed">{item.desc}</p>
                
                {/* Process tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.processes.map((process) => (
                    <span key={process} className="text-[9px] text-erode-gray/70 bg-erode-gold/5 px-2 py-0.5 rounded-full">
                      {process}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Industry Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedUse}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto p-5 rounded-3xl glass-panel shadow-apple-soft border border-gray-100 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-erode-gold/10 flex items-center justify-center">
                {currentUse.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-erode-dark">{currentUse.title}</h4>
                <p className="text-xs text-erode-gray/60">Products & Applications</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentUse.products.map((product) => (
                <span key={product} className="text-xs px-3 py-1.5 rounded-full bg-erode-gold/10 text-erode-dark font-medium">
                  {product}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Industry Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <p className="text-xs text-erode-gray/50 font-medium uppercase tracking-widest">
            Serving 10+ Industries • Food • Pharma • Nutraceutical • Cosmetics • Textile • Traditional Medicine • Research • Biotechnology
          </p>
        </motion.div>

      </div>
    </section>
  );
}