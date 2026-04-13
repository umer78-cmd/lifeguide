import React, { Suspense, lazy } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import JourneyHero from '../components/journey/JourneyHero';
import ComparisonSection from '../components/journey/ComparisonSection';
import TransformationPoint from '../components/journey/TransformationPoint';
import LegacySection from '../components/journey/LegacySection';
import BridgeSection from '../components/journey/BridgeSection';
import DustMotes from '../components/DustMotes';

const JourneyPage = () => {
  const { scrollYProgress } = useScroll();
  
  // Background "Warm Up" Transition from Cream to Amber-tinted Cream
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#fdfcfb', '#fbf7f0', '#f9f1e1'] // Subtle Brand-Cream to Warm Amber
  );

  return (
    <motion.div 
      style={{ backgroundColor: bgColor }}
      className="relative transition-colors duration-1000 ease-out"
    >
      
      {/* Background Dust Motes */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.2]">
        <DustMotes />
      </div>

      {/* Atmospheric Radial Glows - Optimized with Gradients instead of Blur */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ background: 'radial-gradient(circle, rgba(180, 83, 9, 0.12) 0%, transparent 70%)' }}
          className="absolute top-0 right-0 w-[80vw] h-[80vw] rounded-full -translate-y-1/2 translate-x-1/2"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
          style={{ background: 'radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%)' }}
          className="absolute bottom-0 left-0 w-[60vw] h-[60vw] rounded-full translate-y-1/2 -translate-x-1/2"
        ></motion.div>
      </div>

      <div className="relative z-10">
        <JourneyHero />
        <ComparisonSection />
        <TransformationPoint />
        <LegacySection />
        <BridgeSection />
      </div>

    </motion.div>
  );
};

export default JourneyPage;
