import React from 'react';
import { motion } from 'framer-motion';

export function CultivationSection() {
  return (
    <section className="min-h-screen flex items-center justify-start px-8 md:px-16 py-24 pointer-events-none">
      <div className="max-w-xl space-y-8 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-wide-apple text-erode-amber font-semibold">
            Scene 02 / Cultivation
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-erode-dark tracking-tight-apple">
            Nurtured by Nature & Generations
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="space-y-6 text-erode-gray text-base md:text-lg leading-relaxed"
        >
          <p>
            As morning mist clears over the Kaveri river basin, fields of broad green leaves catch the first rays of sunlight. 
          </p>
          <p>
            Farmers in Erode employ time-honored organic crop rotation methods, ensuring that each plant synthesizes natural curcumin without artificial intervention.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-4"
        >
          <div>
            <div className="text-2xl font-bold text-erode-dark">100%</div>
            <div className="text-xs text-erode-gray uppercase tracking-wider">Natural Sunlight</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-erode-dark">Zero</div>
            <div className="text-xs text-erode-gray uppercase tracking-wider">Synthetic Additives</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
