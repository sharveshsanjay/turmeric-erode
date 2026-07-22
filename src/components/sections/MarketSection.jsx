import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, 
  Building2, 
  TrendingUp, 
  Award, 
  Truck, 
  Warehouse, 
  Gauge, 
  Globe,
  Package,
  Leaf,
  Timer,
  BadgeCheck
} from 'lucide-react';

export function MarketSection() {
  const marketHighlights = [
    {
      icon: <Building2 className="w-5 h-5 text-erode-amber" />,
      title: "Regulated Market Yards",
      desc: "Erode, Salem, Namakkal, Karur, Tiruppur, Coimbatore, and Dharmapuri—multiple centers handling thousands of gunny bags daily."
    },
    {
      icon: <Scale className="w-5 h-5 text-erode-amber" />,
      title: "Open Auction System",
      desc: "Licensed traders walk through rows of 50–70 kg bags, inspecting finger length, bulb size, aroma, and moisture before bidding."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-erode-amber" />,
      title: "Daily Price Discovery",
      desc: "Prices fluctuate based on supply, demand, export orders, quality, and national & international spice markets."
    },
    {
      icon: <Award className="w-5 h-5 text-erode-amber" />,
      title: "GI Tag Certified",
      desc: "Geographical Indication (GI) status officially granted for Erode's distinctive turmeric—unique yellow hue, aroma, and curcumin content."
    },
    {
      icon: <Package className="w-5 h-5 text-erode-amber" />,
      title: "Commercial Grading",
      desc: "Turmeric graded into Long Finger, Medium Finger, Bulb Turmeric, Premium Export, and Domestic Processing quality."
    },
    {
      icon: <Globe className="w-5 h-5 text-erode-amber" />,
      title: "Global Distribution",
      desc: "Exported to Asia, Europe, the Middle East, and North America—supplying spice processors, curcumin extractors, and Ayurvedic manufacturers."
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 pointer-events-none">
      <div className="max-w-6xl mx-auto space-y-16 pointer-events-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center space-y-4"
        >
          <span className="text-xs uppercase tracking-wide-apple text-erode-amber font-semibold">
            Scene 05 / Commerce
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-erode-dark tracking-tight-apple">
            The Turmeric Capital Market
          </h2>
          <p className="text-lg text-erode-gray max-w-3xl mx-auto">
            Every trading day, farmers from across western Tamil Nadu bring their turmeric to Erode's regulated markets, where licensed traders, wholesalers, processors, exporters, and commission agents inspect, grade, auction, and purchase thousands of bags for distribution across India and international markets.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketHighlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: false }}
              className="p-6 rounded-3xl glass-panel shadow-apple-soft space-y-4 hover:shadow-lg transition-all border border-gray-100 flex items-start space-x-5"
            >
              <div className="w-11 h-11 rounded-2xl bg-erode-gold/10 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-erode-dark leading-tight">{item.title}</h3>
                <p className="text-sm text-erode-gray leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real Market Data Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl glass-panel shadow-apple-soft border border-gray-100"
        >
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-2">
              <Timer className="w-4 h-4 text-erode-amber" />
              <span className="text-xs font-medium text-erode-gray uppercase">Arrival</span>
            </div>
            <p className="text-sm font-bold text-erode-dark">5:00–8:00 AM</p>
            <p className="text-xs text-erode-gray">Gunny bags arrive by tractors & lorries</p>
          </div>
          
          <div className="text-center space-y-1 border-l border-gray-100 pl-4">
            <div className="flex items-center justify-center gap-2">
              <Gauge className="w-4 h-4 text-erode-amber" />
              <span className="text-xs font-medium text-erode-gray uppercase">Inspection</span>
            </div>
            <p className="text-sm font-bold text-erode-dark">10+ Criteria</p>
            <p className="text-xs text-erode-gray">Length, color, aroma, moisture</p>
          </div>
          
          <div className="text-center space-y-1 border-l border-gray-100 pl-4">
            <div className="flex items-center justify-center gap-2">
              <BadgeCheck className="w-4 h-4 text-erode-amber" />
              <span className="text-xs font-medium text-erode-gray uppercase">Grading</span>
            </div>
            <p className="text-sm font-bold text-erode-dark">4–5 Grades</p>
            <p className="text-xs text-erode-gray">Export → Domestic → Processing</p>
          </div>
          
          <div className="text-center space-y-1 border-l border-gray-100 pl-4">
            <div className="flex items-center justify-center gap-2">
              <Package className="w-4 h-4 text-erode-amber" />
              <span className="text-xs font-medium text-erode-gray uppercase">Packaging</span>
            </div>
            <p className="text-sm font-bold text-erode-dark">50 kg Bags</p>
            <p className="text-xs text-erode-gray">Gunny & poly-lined sacks</p>
          </div>
        </motion.div>

        {/* Distribution Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <p className="text-xs text-erode-gray/60 max-w-2xl mx-auto leading-relaxed">
            From Erode, turmeric reaches spice processing factories, powder manufacturing units, curcumin extraction plants, 
            Ayurvedic medicine manufacturers, food ingredient companies, and cosmetic manufacturers across India and the world.
          </p>
        </motion.div>

      </div>
    </section>
  );
}