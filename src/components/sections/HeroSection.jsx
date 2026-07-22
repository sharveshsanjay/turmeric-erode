import React from 'react';
import { motion } from 'framer-motion';

export function HeroSection({ onExplore }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center text-center px-6 pt-32 pb-16 pointer-events-none">
      
      {/* Top Title Group */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto space-y-4 mt-8"
      >
        <p className="text-xs uppercase tracking-wide-apple text-erode-black font-semibold">
          A Digital Documentary
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-erode-dark tracking-tight-apple font-sans">
          ERODE
        </h1>
        <p className="text-2xl md:text-3xl font-light text-erode-black tracking-wide">
          The Turmeric City
        </p>
        <h4 className="text-2xl md:text-6xl lg:text-3xl font-bold text-erode-dark tracking-tight-apple font-sans">
          மஞ்சள் மாநகரம் - நம்ம ஈரோடு, இந்தியாவின் மஞ்சள் தலைநகர்
        </h4>
      </motion.div>

      {/* Subtitle & Explore Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl mx-auto space-y-8 mb-12 pointer-events-auto"
      >
        <p className="text-lg md:text-xl font-light text-erode-dark text-balance leading-relaxed">
          “From the fertile lands of Erode to millions of homes around the world.”
        </p>

        <button
          onClick={onExplore}
          className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-erode-dark hover:bg-erode-amber text-white text-sm font-medium transition-all duration-300 shadow-apple-soft group transform hover:scale-105"
        >
          <span>Explore the Journey</span>
          <span className="group-hover:translate-y-1 transition-transform">↓</span>
        </button>
      </motion.div>

    </section>
  );
}
