import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  Clock,
  Award,
  Leaf,
  Droplets,
  Sun,
  Zap,
  Package,
  Layers,
  Gauge,
  Ruler,
  Thermometer,
  Droplet,
  Hash,
  BarChart3,
  Shield,
  Truck,
  CloudSun,
  Waves,
  Flame,
  Wind,
  Gem,
  Globe,
  Factory,
  Truck as TruckIcon
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

const STAGES = [
  { 
    id: "cultivation", 
    name: "1. Cultivation", 
    title: "Sacred Soil & Sunrise", 
    desc: "Vast agricultural fields in Erode during sunrise. Farmers prepare rich red soil, plant healthy turmeric rhizomes by hand, irrigate the fields, and nurture the crop over several months.",
    icon: Leaf,
    color: "emerald",
    duration: "7-9 months",
    quality: "Organic Cultivation",
    metrics: {
      "Soil Type": "Red Laterite",
      "Planting Season": "June-July",
      "Harvest Time": "9 months",
      "Irrigation": "Rain-fed + Drip"
    },
    visualDetails: "Aerial drone shots, macro soil textures, floating dust particles, warm golden sunlight, lush green plants swaying"
  },
  { 
    id: "harvesting", 
    name: "2. Harvesting", 
    title: "Golden Harvest Rising", 
    desc: "Mature fields where leaves have turned golden-yellow. Farmers carefully lift large turmeric clusters from the soil using traditional tools. Fresh turmeric rhizomes emerge covered with earth and roots.",
    icon: CloudSun,
    color: "yellow",
    duration: "2-3 weeks",
    quality: "Hand-picked",
    metrics: {
      "Yield": "2.5-3 tons/acre",
      "Finger Length": "5-8 cm",
      "Maturity": "90% yellowing",
      "Harvest Method": "Hand lifting"
    },
    visualDetails: "Slow-motion dirt falling, highly detailed macro textures, realistic soil particles, golden-yellow leaves"
  },
  { 
    id: "cleaning", 
    name: "3. Cleaning", 
    title: "Crystal Cascade Wash", 
    desc: "Thorough cleaning using flowing water. Mud, stones, roots, and impurities are removed as crystal-clear water cascades over vibrant orange rhizomes.",
    icon: Waves,
    color: "blue",
    duration: "30-45 minutes",
    quality: "99.9% Pure",
    metrics: {
      "Water Flow": "500 L/min",
      "Wash Cycles": "Triple wash",
      "Purity": "99.9%",
      "Impurity Removed": "97%"
    },
    visualDetails: "Realistic water physics, reflections, droplets, splashes, satisfying close-up animations, natural beauty of clean turmeric"
  },
  { 
    id: "boiling", 
    name: "4. Boiling", 
    title: "Steam Curing Alchemy", 
    desc: "Large traditional steel vessels filled with turmeric submerged in hot water. Steam rises dramatically as the rhizomes slowly cook. Color transforms, texture softens, golden tones enhance.",
    icon: Flame,
    color: "orange",
    duration: "45-60 minutes",
    quality: "Curcumin Locked",
    metrics: {
      "Temperature": "95-100°C",
      "Starch Gelatinized": "92%",
      "Curcumin Enhanced": "40%",
      "Color Value": "45+ EBC"
    },
    visualDetails: "Cinematic volumetric steam, warm lighting, close-up shots of bubbles and heat, color transformation, softened texture"
  },
  { 
    id: "drying", 
    name: "5. Drying", 
    title: "Sun-Kissed Curing", 
    desc: "Boiled turmeric spread across wide drying yards under bright sunlight. Time-lapse over several days as moisture evaporates, rhizomes shrink, harden, and develop deep golden-orange appearance.",
    icon: Sun,
    color: "amber",
    duration: "10-15 days",
    quality: "10% Moisture",
    metrics: {
      "Sun Exposure": "6-8 hrs/day",
      "Final Moisture": "8-10%",
      "Temperature": "28-35°C",
      "Weight Loss": "60-65%"
    },
    visualDetails: "Time-lapse drying, soft wind, moving shadows, realistic environmental details, deep golden-orange appearance"
  },
  { 
    id: "polishing", 
    name: "6. Polishing", 
    title: "Glossy Gem Reveal", 
    desc: "Turmeric inside rotating polishing drums. Rough outer skin becomes smooth and glossy while vibrant golden color intensifies. Fine surface details emerge with natural imperfections.",
    icon: Gem,
    color: "gold",
    duration: "20-30 minutes",
    quality: "Premium Gloss",
    metrics: {
      "Surface Gloss": "95%",
      "Color Intensity": "+25%",
      "Polish Grade": "A1 Premium",
      "Waste": "3-5%"
    },
    visualDetails: "Macro cinematic camera movements, premium studio lighting, fine surface details, natural imperfections, texture changes"
  },
  { 
    id: "grading", 
    name: "7. Grading", 
    title: "Premium Quality Standard", 
    desc: "Sorted based on size, color, shape, and quality using modern inspection systems and expert hands. Premium export-grade turmeric arranged with perfect precision.",
    icon: Award,
    color: "purple",
    duration: "1-2 hours",
    quality: ">4.5% Curcumin",
    metrics: {
      "Curcumin": "4.5-6.2%",
      "Grade": "Export A1",
      "Length": "5-8 cm uniform",
      "Quality Standard": "ISO 22000"
    },
    visualDetails: "Close-up quality checks, organized stacks, elegant visual comparisons, excellence and consistency emphasis"
  },
  { 
    id: "packaging", 
    name: "8. Global Reach", 
    title: "Erode to Every Continent", 
    desc: "Modern processing facilities transform turmeric into powder, curcumin extract, essential oil, cosmetics, medicines, and food ingredients. Automated packaging, premium retail packaging, export containers, glowing 3D globe with golden trade routes.",
    icon: Globe,
    color: "indigo",
    duration: "Ongoing",
    quality: "World Export",
    metrics: {
      "Shelf Life": "24-36 months",
      "Export Partners": "35+ Countries",
      "Value Added": "6-8 products",
      "Export Ready": "100%"
    },
    visualDetails: "Automated packaging lines, premium retail packaging, export containers, golden trade routes spreading globally, hero shot of perfect rhizome"
  }
];

const colorMap = {
  emerald: "bg-emerald-50/80 text-emerald-600 border-emerald-200/50",
  yellow: "bg-yellow-50/80 text-yellow-600 border-yellow-200/50",
  blue: "bg-blue-50/80 text-blue-600 border-blue-200/50",
  orange: "bg-orange-50/80 text-orange-600 border-orange-200/50",
  amber: "bg-amber-50/80 text-amber-600 border-amber-200/50",
  gold: "bg-yellow-100/80 text-yellow-700 border-yellow-300/50",
  purple: "bg-purple-50/80 text-purple-600 border-purple-200/50",
  indigo: "bg-indigo-50/80 text-indigo-600 border-indigo-200/50"
};

const metricIcons = {
  "Soil Type": Leaf,
  "Planting Season": Sun,
  "Harvest Time": Clock,
  "Irrigation": Droplets,
  "Yield": Gauge,
  "Finger Length": Ruler,
  "Maturity": CloudSun,
  "Harvest Method": Truck,
  "Water Flow": Waves,
  "Wash Cycles": Droplet,
  "Purity": Shield,
  "Impurity Removed": BarChart3,
  "Temperature": Thermometer,
  "Starch Gelatinized": BarChart3,
  "Curcumin Enhanced": Sparkles,
  "Color Value": Gem,
  "Sun Exposure": Sun,
  "Final Moisture": Droplet,
  "Weight Loss": BarChart3,
  "Surface Gloss": Sparkles,
  "Color Intensity": Gauge,
  "Polish Grade": Award,
  "Waste": BarChart3,
  "Curcumin": Hash,
  "Grade": Award,
  "Length": Ruler,
  "Quality Standard": Shield,
  "Shelf Life": Clock,
  "Export Partners": Globe,
  "Value Added": Factory,
  "Export Ready": TruckIcon
};

export function ProcessingSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const autoPlayTimer = useRef(null);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimer.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 0.4;
          if (newProgress >= 100) {
            setActiveStep((prevStep) => (prevStep + 1) % STAGES.length);
            soundEngine.playScrollTick();
            return 0;
          }
          return newProgress;
        });
      }, 40);
    } else {
      clearInterval(autoPlayTimer.current);
      setProgress(0);
    }

    return () => clearInterval(autoPlayTimer.current);
  }, [isAutoPlaying]);

  useEffect(() => {
    setProgress(0);
  }, [activeStep]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    soundEngine.playScrollTick();
    setIsAutoPlaying(false);
    clearTimeout(autoPlayTimer.current);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % STAGES.length);
    soundEngine.playScrollTick();
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + STAGES.length) % STAGES.length);
    soundEngine.playScrollTick();
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const currentStage = STAGES[activeStep];
  const IconComponent = currentStage.icon;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24 pointer-events-none">
      <div className="max-w-6xl w-full mx-auto space-y-12 pointer-events-auto" ref={containerRef}>
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-erode-amber font-semibold bg-amber-50/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-amber-200/30">
              From Heart of Erode to the World
            </span>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-xs px-3 py-1.5 rounded-full transition-all backdrop-blur-sm border ${
                isAutoPlaying 
                  ? 'bg-green-50/80 text-green-600 border-green-200/50 hover:bg-green-100/80' 
                  : 'bg-gray-50/80 text-gray-500 border-gray-200/50 hover:bg-gray-100/80'
              }`}
            >
              {isAutoPlaying ? '● Auto-Play' : '○ Paused'}
            </button>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-erode-dark tracking-tight-apple">
            The Turmeric Journey
          </h2>
          <p className="text-erode-gray max-w-xl mx-auto text-sm md:text-base">
            8 stages of transformation from sacred soil to global premium quality.
          </p>
        </div>

        {/* Progress bar */}
        {isAutoPlaying && (
          <div className="max-w-2xl mx-auto h-1 bg-gray-200/50 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-erode-amber via-amber-400 to-erode-amber"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        )}

        {/* Stage Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar justify-start md:justify-center px-2">
          {STAGES.map((stage, idx) => {
            const isActive = idx === activeStep;
            const isCompleted = idx < activeStep;
            const Icon = stage.icon;
            
            return (
              <button
                key={stage.id}
                onClick={() => handleStepClick(idx)}
                className={`group relative flex-shrink-0 px-3 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 backdrop-blur-sm border ${
                  isActive
                    ? 'bg-erode-dark/90 text-white shadow-lg scale-105 border-erode-dark/20'
                    : isCompleted
                    ? 'bg-green-50/80 text-green-600 border-green-200/50 hover:bg-green-100/80'
                    : 'bg-white/30 text-erode-gray border-gray-200/30 hover:bg-white/50 hover:text-erode-dark'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {isCompleted && <CheckCircle2 className="w-3 h-3" />}
                  {!isCompleted && !isActive && <Icon className="w-3 h-3 opacity-50" />}
                  <span className="hidden sm:inline">{stage.name}</span>
                  <span className="sm:hidden">{stage.id.slice(0, 3)}</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-erode-amber rounded-full"
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative p-6 md:p-10 rounded-3xl backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl min-h-[380px] flex flex-col justify-between"
          >
            {/* Glass gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-erode-amber/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl backdrop-blur-[2px] pointer-events-none" />
            
            {/* Main content */}
            <div className="relative space-y-4">
              <div className="flex items-start justify-between flex-wrap gap-3">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl border-2 ${colorMap[currentStage.color]} backdrop-blur-sm transition-all duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                      <span className="text-erode-amber">Stage {String(activeStep + 1).padStart(2, '0')} of 08</span>
                      <span className="w-1 h-1 bg-gray-300/50 rounded-full" />
                      <span className="text-erode-gray flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {currentStage.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-erode-dark mt-1">
                      {currentStage.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-erode-gray bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200/30">
                    {currentStage.quality}
                  </span>
                </div>
              </div>
              
              <p className="text-erode-gray text-sm md:text-base leading-relaxed max-w-2xl">
                {currentStage.desc}
              </p>

              {/* Visual Details Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                <Sparkles className="w-3 h-3 text-erode-amber" />
                <span className="text-[10px] text-erode-gray/70 font-medium uppercase tracking-wider">
                  Visual: {currentStage.visualDetails}
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                {Object.entries(currentStage.metrics).map(([key, value]) => {
                  const MetricIcon = metricIcons[key] || BarChart3;
                  return (
                    <div key={key} className="bg-white/30 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/40 transition-all">
                      <div className="flex items-center gap-1.5 text-erode-gray/70 text-[10px] font-medium uppercase tracking-wider">
                        <MetricIcon className="w-3 h-3" />
                        <span className="truncate">{key}</span>
                      </div>
                      <div className="text-sm font-bold text-erode-dark mt-0.5">
                        {value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="relative flex justify-between items-center pt-6 mt-4 border-t border-white/30">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full hover:bg-white/30 transition-colors text-erode-gray hover:text-erode-dark backdrop-blur-sm"
                  aria-label="Previous stage"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-erode-gray/70 font-medium">
                  {activeStep + 1} / {STAGES.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full hover:bg-white/30 transition-colors text-erode-gray hover:text-erode-dark backdrop-blur-sm"
                  aria-label="Next stage"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xs text-erode-gray/60 hidden sm:inline">
                  {isAutoPlaying ? 'Auto-scrolling' : 'Manual mode'}
                </span>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-4 py-2 bg-erode-amber/90 backdrop-blur-sm text-white rounded-full text-xs font-medium hover:bg-erode-dark/90 transition-colors shadow-lg hover:shadow-xl border border-white/20"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mini stage indicators */}
        <div className="flex justify-center gap-1.5">
          {STAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleStepClick(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 backdrop-blur-sm ${
                idx === activeStep 
                  ? 'w-6 bg-erode-amber' 
                  : idx < activeStep 
                  ? 'w-3 bg-green-400/70' 
                  : 'w-3 bg-gray-300/50 hover:bg-gray-400/70'
              }`}
              aria-label={`Go to stage ${idx + 1}`}
            />
          ))}
        </div>

        {/* Brand message */}
        <div className="text-center">
          <p className="text-xs text-erode-gray/40 font-medium tracking-widest uppercase">
            From the Heart of Erode to the World
          </p>
        </div>

      </div>
    </section>
  );
}