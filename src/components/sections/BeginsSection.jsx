import React from 'react';
import { motion } from 'framer-motion';
import { CloudRain, Sun, Thermometer, Sprout } from 'lucide-react';

export function BeginsSection() {
  const cards = [
    {
      icon: <Sprout className="w-5 h-5 text-erode-amber" />,
      title: "Soil Composition",
      desc: "Rich alluvial and red loamy soil deposited by the Kaveri River basin, enriched with organic minerals."
    },
    {
      icon: <Sun className="w-5 h-5 text-erode-amber" />,
      title: "Subtropical Climate",
      desc: "Warm tropical temperature ranging between 20°C to 35°C ideal for high curcumin synthesis."
    },
    {
      icon: <CloudRain className="w-5 h-5 text-erode-amber" />,
      title: "Monsoon Irrigation",
      desc: "Optimal annual rainfall of 800-1000mm complemented by historic canal irrigation networks."
    },
    {
      icon: <Thermometer className="w-5 h-5 text-erode-amber" />,
      title: "9-Month Cultivation",
      desc: "Patience and heritage: planted in June and meticulously nurtured until harvest in February."
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 pointer-events-none">
      <div className="max-w-5xl mx-auto space-y-16 pointer-events-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center space-y-4"
        >
          <span className="text-xs uppercase tracking-wide-apple text-erode-amber font-semibold">
            Scene 01 / Origin
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-erode-dark tracking-tight-apple">
            Where Every Golden Root Begins
          </h2>
          <p className="text-lg text-erode-gray max-w-2xl mx-auto">
            Beneath the surface of Erode lies a unique subterranean environment found nowhere else on Earth.
          </p>
        </motion.div>

        {/* 4 Pillar Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: false }}
              className="p-6 rounded-2xl glass-panel shadow-apple-soft space-y-4 hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="w-10 h-10 rounded-xl bg-erode-gold/10 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-erode-dark">{card.title}</h3>
              <p className="text-sm text-erode-gray leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
