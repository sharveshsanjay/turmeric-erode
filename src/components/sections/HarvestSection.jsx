import React from 'react';
import { motion } from 'framer-motion';

export function HarvestSection() {
  return (
    <section className="min-h-screen flex items-center justify-end px-8 md:px-16 py-24 pointer-events-none">
      <div className="max-w-xl space-y-8 pointer-events-auto text-right">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-wide-apple text-erode-amber font-semibold">
            Scene 03 / Harvest
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-erode-dark tracking-tight-apple">
            Unearthing the Gold
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="space-y-6 text-erode-gray text-base md:text-lg leading-relaxed"
        >
          <p>
            After 7–9 months of growth, leaves turn golden-yellow and dry—the signal that rhizomes beneath have fully matured. Farmers stop irrigation 10–15 days before harvest to dry the soil.
          </p>
          <p>
            Using traditional hand hoes (mamatti) and digging forks, the soil is gently loosened to avoid bruising. Each entire clump is lifted—revealing the mother rhizome at the center surrounded by 3-6 finger rhizomes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="inline-block p-4 rounded-2xl glass-panel shadow-apple-soft text-left border border-gray-100"
        >
          <div className="text-xs font-semibold text-erode-amber uppercase tracking-wider mb-1">
            Harvest Data
          </div>
          <div className="text-sm font-medium text-erode-dark space-y-1">
            <div>Fresh yield: 20–35 tonnes per hectare</div>
            <div>Moisture content: 70–80%</div>
            <div>Mother rhizomes kept as seed for next season</div>
            <div className="text-erode-amber text-xs mt-1">Transport to processing same day to prevent spoilage</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}