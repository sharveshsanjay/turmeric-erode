import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { RotateCcw, Heart } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

export function EndingSection({ onReset, onAuthor }) {
  const handleReset = () => {
    soundEngine.playChime();
    
    // Gold confetti celebration burst
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#E5A93C', '#D97706', '#FFFFFF']
      });
    } catch (e) {
      // ignore
    }

    onReset();
  };

  return (
    <section className="min-h-screen flex flex-col justify-between items-center text-center px-6 pt-32 pb-16 pointer-events-none">
      
      {/* Top Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: false }}
        className="max-w-3xl mx-auto space-y-4"
      >
        <span className="text-xs uppercase tracking-wide-apple text-erode-amber font-semibold">
          Final Scene / Reflection
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-erode-dark leading-tight text-balance">
          “Every Golden Root Carries the Story of Erode.”
        </h2>
      </motion.div>

      {/* Experience Again Call To Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.3 }}
        viewport={{ once: false }}
        className="max-w-md mx-auto space-y-6 pointer-events-auto mb-12"
      >
        <p className="text-sm text-erode-black font-light">
          The cycle of harvest continues forever in the fertile banks of the Kaveri.
        </p>

        <button
          onClick={handleReset}
          className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-erode-dark hover:bg-erode-amber text-white text-sm font-medium transition-all duration-300 shadow-apple-soft group transform hover:scale-105"
        >
          <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          <span>Experience Again</span>
        </button>
      </motion.div>

    </section>
  );
}
