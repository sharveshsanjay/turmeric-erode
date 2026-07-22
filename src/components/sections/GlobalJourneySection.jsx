import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  Ship, 
  ShieldCheck, 
  Truck, 
  Warehouse, 
  Package, 
  Award,
  Factory,
  Beaker,
  Pill,
  Scissors,
  Leaf
} from 'lucide-react';

const EXPORT_DESTINATIONS = [
  { 
    country: "United States", 
    region: "North America", 
    share: "Largest Importer",
    industries: "Food, Pharma, Nutraceutical"
  },
  { 
    country: "United Kingdom", 
    region: "Europe", 
    share: "Organic EU Compliant",
    industries: "Culinary, Supplements"
  },
  { 
    country: "Germany", 
    region: "Europe", 
    share: "Pharma Grade Hub",
    industries: "Standardized Extracts"
  },
  { 
    country: "Singapore", 
    region: "Southeast Asia", 
    share: "Direct Logistics Hub",
    industries: "Wellness, Food"
  },
  { 
    country: "Malaysia", 
    region: "Southeast Asia", 
    share: "Regional Distribution",
    industries: "Culinary & Wellness"
  },
  { 
    country: "Australia", 
    region: "Oceania", 
    share: "Biosecurity Verified",
    industries: "Organic Grocery"
  },
  { 
    country: "Canada", 
    region: "North America", 
    share: "Organic Chains",
    industries: "Grocery, Supplements"
  },
  { 
    country: "UAE", 
    region: "Middle East", 
    share: "Gold Trade Route",
    industries: "Spice, Culinary"
  },
  { 
    country: "Japan", 
    region: "East Asia", 
    share: "High Quality Demand",
    industries: "Food, Traditional Medicine"
  }
];

export function GlobalJourneySection() {
  return (
    <section className="min-h-screen flex items-center justify-between px-6 md:px-16 py-24 pointer-events-none">
      
      {/* Left Text Narrative Container */}
      <div className="max-w-xl space-y-8 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-wide-apple text-erode-amber font-semibold flex items-center space-x-2">
            <Globe2 className="w-4 h-4" />
            <span>Scene 06 / Export</span>
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-erode-dark tracking-tight-apple">
            From Erode to the World
          </h2>
          <p className="text-erode-gray text-base md:text-lg leading-relaxed">
            Premium-grade turmeric from Erode's markets is purchased by exporters and transported to certified processing facilities. There, it is cleaned, graded, and tested for moisture content, curcumin levels, pesticide residues, microbial safety, and overall quality to meet international import standards.
          </p>
        </motion.div>

        {/* Export Process Steps */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="space-y-3 p-4 rounded-3xl glass-panel shadow-apple-soft border border-gray-100"
        >
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Warehouse className="w-4 h-4 text-erode-amber" />
              <span className="font-medium text-erode-dark">Processing</span>
            </div>
            <span className="text-erode-gray">→</span>
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-erode-amber" />
              <span className="font-medium text-erode-dark">Food-Grade Bags</span>
            </div>
            <span className="text-erode-gray">→</span>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-erode-amber" />
              <span className="font-medium text-erode-dark">Port Transport</span>
            </div>
            <span className="text-erode-gray">→</span>
            <div className="flex items-center gap-2">
              <Ship className="w-4 h-4 text-erode-amber" />
              <span className="font-medium text-erode-dark">Global Export</span>
            </div>
          </div>
        </motion.div>

        {/* Export Ports */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="flex items-center gap-4 p-3 rounded-2xl glass-panel shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-2">
            <Ship className="w-4 h-4 text-erode-amber" />
            <span className="text-xs font-medium text-erode-dark">Export Ports:</span>
          </div>
          <span className="text-xs text-erode-gray">Chennai Port</span>
          <span className="w-px h-4 bg-gray-200" />
          <span className="text-xs text-erode-gray">V.O. Chidambaranar Port (Tuticorin)</span>
        </motion.div>

        {/* Key Quality Tests */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="flex flex-wrap items-center gap-2 p-3 rounded-2xl glass-panel shadow-sm border border-gray-100"
        >
          <span className="text-xs font-medium text-erode-dark flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-erode-amber" />
            Quality Tests:
          </span>
          <span className="text-xs text-erode-gray bg-erode-gold/10 px-2 py-0.5 rounded-full">Moisture</span>
          <span className="text-xs text-erode-gray bg-erode-gold/10 px-2 py-0.5 rounded-full">Curcumin %</span>
          <span className="text-xs text-erode-gray bg-erode-gold/10 px-2 py-0.5 rounded-full">Pesticide Residue</span>
          <span className="text-xs text-erode-gray bg-erode-gold/10 px-2 py-0.5 rounded-full">Microbial Safety</span>
        </motion.div>

        {/* Export Destinations Grid */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-erode-amber uppercase tracking-wider">
            Export Markets
          </p>
          <div className="grid grid-cols-3 gap-2">
            {EXPORT_DESTINATIONS.slice(0, 9).map((dest, idx) => (
              <motion.div
                key={dest.country}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: false }}
                className="p-2 rounded-xl glass-panel shadow-sm border border-gray-100 text-center"
              >
                <div className="text-xs font-bold text-erode-dark">{dest.country}</div>
                <div className="text-[10px] text-erode-gray truncate">{dest.region}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: false }}
          className="flex flex-wrap items-center gap-3 p-3 rounded-2xl glass-panel shadow-sm border border-gray-100"
        >
          <span className="text-xs font-medium text-erode-dark">Used In:</span>
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] text-erode-gray bg-erode-gold/10 px-2 py-0.5 rounded-full flex items-center gap-1">
              <Factory className="w-3 h-3" /> Food
            </span>
            <span className="text-[10px] text-erode-gray bg-erode-gold/10 px-2 py-0.5 rounded-full flex items-center gap-1">
              <Pill className="w-3 h-3" /> Pharma
            </span>
            <span className="text-[10px] text-erode-gray bg-erode-gold/10 px-2 py-0.5 rounded-full flex items-center gap-1">
              <Beaker className="w-3 h-3" /> Nutraceutical
            </span>
            <span className="text-[10px] text-erode-gray bg-erode-gold/10 px-2 py-0.5 rounded-full flex items-center gap-1">
              <Scissors className="w-3 h-3" /> Cosmetics
            </span>
          </div>
        </motion.div>

      </div>

    </section>
  );
}