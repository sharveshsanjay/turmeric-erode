import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  MapPin, 
  Sun, 
  Droplets, 
  Truck, 
  Factory,
  Shield,
  Globe,
  Leaf,
  Thermometer,
  Gauge,
  Building2,
  CloudSun,
  Sprout
} from 'lucide-react';

export function WhyErodeSection() {
  const stats = [
    { 
      label: "Curcumin Content", 
      value: "4.5-6.2%", 
      desc: "Highest natural concentration recorded in Erode turmeric" 
    },
    { 
      label: "Regional Share", 
      value: "70%", 
      desc: "Of total turmeric exports from South India" 
    },
    { 
      label: "Global Destinations", 
      value: "80+", 
      desc: "Countries receiving Erode turmeric annually" 
    },
    { 
      label: "Farming Heritage", 
      value: "300+", 
      desc: "Years of continuous cultivation in the region" 
    }
  ];

  const keyFactors = [
    {
      icon: <Sun className="w-5 h-5 text-erode-amber" />,
      title: "Ideal Climate",
      desc: "Warm tropical climate with temperatures of 20–35°C, supporting healthy crop growth"
    },
    {
      icon: <Droplets className="w-5 h-5 text-erode-amber" />,
      title: "Fertile Soil",
      desc: "Well-drained red loamy soils with good drainage, ideal for rhizome development"
    },
    {
      icon: <CloudSun className="w-5 h-5 text-erode-amber" />,
      title: "Seasonal Rainfall",
      desc: "Perfect rainfall patterns providing excellent conditions for high-quality turmeric"
    },
    {
      icon: <Building2 className="w-5 h-5 text-erode-amber" />,
      title: "Trading Hub",
      desc: "One of India's largest turmeric trading hubs with thousands of tonnes traded annually"
    },
    {
      icon: <Award className="w-5 h-5 text-erode-amber" />,
      title: "GI Tag Certified",
      desc: "Geographical Indication (GI) status awarded in 2019, recognizing unique quality and origin"
    },
    {
      icon: <Factory className="w-5 h-5 text-erode-amber" />,
      title: "Modern Infrastructure",
      desc: "Cleaning, grading, polishing, packaging, and quality testing facilities for export readiness"
    },
    {
      icon: <Truck className="w-5 h-5 text-erode-amber" />,
      title: "Strategic Port Access",
      desc: "Strong road and rail connectivity to Chennai and Tuticorin Ports, facilitating exports"
    },
    {
      icon: <Globe className="w-5 h-5 text-erode-amber" />,
      title: "Global Industries",
      desc: "Supplies to food, pharmaceutical, nutraceutical, cosmetic, and herbal medicine industries worldwide"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 pointer-events-none">
      <div className="max-w-6xl mx-auto space-y-16 pointer-events-auto text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-wide-apple text-erode-amber font-semibold">
            Scene 08 / Benchmark
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-erode-dark tracking-tight-apple">
            Why Erode?
          </h2>
          <p className="text-lg text-erode-black max-w-2xl mx-auto">
            The Turmeric Capital of India — recognized for ideal agro-climatic conditions, 
            established market infrastructure, and centuries of cultivation expertise.
          </p>
        </motion.div>

        {/* Key Benchmark Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: false }}
              className="p-8 rounded-3xl glass-panel shadow-apple-soft space-y-3 border border-black-100 hover:shadow-lg transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold text-erode-dark tracking-tight-apple font-sans">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-erode-amber uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-xs text-erode-black leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* GI Tag Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="max-w-3xl mx-auto p-8 rounded-3xl bg-erode-dark text-white space-y-3 shadow-2xl"
        >
          <div className="flex items-center justify-center gap-3">
            <Award className="w-6 h-6 text-erode-gold" />
            <span className="text-xs uppercase tracking-widest text-erode-gold font-semibold">
              Government of India Certified
            </span>
          </div>
          <h3 className="text-2xl font-bold">Geographical Indication (GI) Tag #289</h3>
          <p className="text-sm text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
            Erode Manjal (Turmeric) is legally protected under GI certification, guaranteeing authentic 
            geographical origin, traditional farming methods, and supreme curcumin standard.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-2">
            <span>Awarded: 2019</span>
            <span className="w-px h-4 bg-gray-600" />
            <span>GI Tag #289</span>
            <span className="w-px h-4 bg-gray-600" />
            <span>Erode Turmeric</span>
          </div>
        </motion.div>

        {/* Key Factors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-left"
        >
          <p className="text-sm font-semibold text-erode-amber uppercase tracking-wider mb-4 text-center">
            Why Erode Turmeric Stands Apart
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyFactors.map((factor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: false }}
                className="p-4 rounded-2xl glass-panel shadow-sm border border-gray-100 flex items-start gap-3 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-erode-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                  {factor.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-erode-dark">{factor.title}</h4>
                  <p className="text-xs text-erode-gray leading-relaxed mt-0.5">{factor.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-sm text-erode-black/60 leading-relaxed">
            Decades of farming expertise and traditional cultivation practices passed down through generations 
            make Erode one of India's most trusted names in turmeric production — supplying premium quality 
            turmeric to food, pharmaceutical, nutraceutical, cosmetic, and herbal medicine industries worldwide.
          </p>
          <div className="flex items-center justify-center gap-6 mt-4 text-xs text-erode-black/40">
            <span className="flex items-center gap-1">
              <Sprout className="w-3 h-3" /> 300+ Years Heritage
            </span>
            <span className="w-px h-4 bg-black-200" />
            <span className="flex items-center gap-1">
              <Leaf className="w-3 h-3" /> Red Loamy Soil
            </span>
            <span className="w-px h-4 bg-black-200" />
            <span className="flex items-center gap-1">
              <Thermometer className="w-3 h-3" /> 20–35°C Climate
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}