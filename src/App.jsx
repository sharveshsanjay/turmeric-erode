import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { SceneCanvas } from './components/canvas/SceneCanvas';
import { Navbar } from './components/ui/Navbar';

import { HeroSection } from './components/sections/HeroSection';
import { BeginsSection } from './components/sections/BeginsSection';
import { CultivationSection } from './components/sections/CultivationSection';
import { HarvestSection } from './components/sections/HarvestSection';
import { ProcessingSection } from './components/sections/ProcessingSection';
import { MarketSection } from './components/sections/MarketSection';
import { GlobalJourneySection } from './components/sections/GlobalJourneySection';
import { UsesSection } from './components/sections/UsesSection';
import { WhyErodeSection } from './components/sections/WhyErodeSection';
import { EndingSection } from './components/sections/EndingSection';
import { Author } from './components/sections/Author';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [currentStage, setCurrentStage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lenisRef = useRef(null);
  const authorRef = useRef(null);

  const totalStages = 10;
  const sectionRefs = useRef([]);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scrolling for butter-smooth Apple momentum
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0, 0);

    // 2. Set up GSAP ScrollTrigger to observe page scroll progress & update stage
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgress(progress);
        
        // Compute active documentary stage based on scroll fraction
        const stageIdx = Math.min(
          totalStages - 1,
          Math.floor(progress * totalStages)
        );
        setCurrentStage(stageIdx);
      }
    });

    return () => {
      lenis.destroy();
      st.kill();
    };
  }, []);

  const scrollToStage = (stageIndex) => {
    if (!lenisRef.current) return;
    const targetY = (document.documentElement.scrollHeight - window.innerHeight) * (stageIndex / (totalStages - 1));
    lenisRef.current.scrollTo(targetY, { duration: 1.8 });
  };

  const scrollToAuthor = () => {
    if (!lenisRef.current || !authorRef.current) return;
    lenisRef.current.scrollTo(authorRef.current.offsetTop, { duration: 1.8 });
  };

  return (
    <div className="relative min-h-screen bg-white text-erode-dark">
      {/* 3D WebGL Canvas Layer (Fixed Background) */}
      <SceneCanvas stage={currentStage} scrollProgress={scrollProgress} />

      {/* Apple-Style Navigation Overlay */}
      <Navbar
        currentStage={currentStage}
        totalStages={totalStages}
        onSelectStage={scrollToStage}
      />

      {/* Continuous Scroll Documentary Narrative Sections */}
      <main className="relative z-10">
        <div ref={el => sectionRefs.current[0] = el}>
          <HeroSection onExplore={() => scrollToStage(1)} />
        </div>

        <div ref={el => sectionRefs.current[1] = el}>
          <BeginsSection />
        </div>

        <div ref={el => sectionRefs.current[2] = el}>
          <CultivationSection />
        </div>

        <div ref={el => sectionRefs.current[3] = el}>
          <HarvestSection />
        </div>

        <div ref={el => sectionRefs.current[4] = el}>
          <ProcessingSection />
        </div>

        <div ref={el => sectionRefs.current[5] = el}>
          <MarketSection />
        </div>

        <div ref={el => sectionRefs.current[6] = el}>
          <GlobalJourneySection />
        </div>

        <div ref={el => sectionRefs.current[7] = el}>
          <UsesSection />
        </div>

        <div ref={el => sectionRefs.current[8] = el}>
          <WhyErodeSection />
        </div>

        <div ref={el => sectionRefs.current[9] = el}>
          <EndingSection onReset={() => scrollToStage(0)} onAuthor={scrollToAuthor} />
        </div>

        <div ref={authorRef} id="author-section">
          <Author
            name="Sharvesh Sanjay"
            title="Full-Stack Developer & Creative Technologist"
            bio="I build immersive web experiences with 3D graphics, motion, and modern frontend design. This project showcases a craft-driven storytelling approach for Erode's turmeric journey, blending interactive visuals with smooth page flow."
            email="sharveshsanjay10@gmail.com"
            website="https://sharveshsanjay.netlify.app"
            linkedin="https://www.linkedin.com/in/sharveshsanjay"
          />
        </div>
      </main>
    </div>
  );
}
