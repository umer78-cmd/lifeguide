import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import BrushHighlight from '../BrushHighlight';

const ComparisonSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smoother progress for line drawing
  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const evolutionStages = [
    {
      label: 'Inner Order',
      tagline: 'Internal Architecture',
      description: 'The process of internal reorganization where systems align with their true source.'
    },
    {
      label: 'Systemic Creator',
      tagline: 'Active Architecture',
      description: 'Recognizing that the human is a system, and every action is a creation within that system.'
    },
    {
      label: 'Lived Life Potential',
      tagline: 'Ultimate Emergence',
      description: 'Where the work transcends theory and becomes a lived, unhurried reality.'
    },
    {
      label: 'The Three Comms',
      tagline: 'Core Elements',
      description: 'Commitment, Communication, and Communion—the pillars that have emerged to the surface.'
    }
  ];

  // SVG Wavy Path definition - Adjusted for 4 segments
  const pathD = "M 50 0 C 50 100, 80 150, 50 250 S 20 350, 50 450 S 80 550, 50 650 S 20 750, 50 850";
  const pathLength = 1000;

  return (
    <section ref={containerRef} className="relative py-32 md:py-64 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Cinematic Header */}
        <div className="text-center mb-32 md:mb-48">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-brand-stone mb-10 leading-[1.1] tracking-wide"
          >
            Beyond the Familiar <br />
            <BrushHighlight className="italic">Models.</BrushHighlight>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto tracking-wide"
          >
            Following the "Unhurried Path" revealing how systemic order differs from conventional troubleshooting.
          </motion.p>
        </div>

        {/* The Process Path Container */}
        <div className="relative">
          
          {/* SVG Animated Path (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[100px] hidden md:block pointer-events-none z-0 overflow-visible">
            <svg 
              viewBox="0 0 100 850" 
              fill="none" 
              className="w-full h-full" 
              preserveAspectRatio="none"
              style={{ overflow: 'visible' }}
            >
              {/* Background trail */}
              <path 
                d={pathD} 
                stroke="rgba(180,83,9,0.05)" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round"
              />
              {/* Animated drawing path */}
              <motion.path 
                d={pathD} 
                stroke="rgba(180,83,9,0.3)" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round"
                style={{ 
                  pathLength: pathProgress,
                  willChange: 'pathLength'
                }}
              />
              {/* Glowing head dot (Seeker) - Optimized */}
              <motion.circle
                r="3"
                fill="rgba(251, 191, 36, 0.8)"
                style={{
                  offsetPath: `path('${pathD}')`,
                  offsetDistance: useTransform(pathProgress, [0, 1], ["0%", "100%"]),
                  willChange: 'offset-distance'
                }}
              />
            </svg>
          </div>

          {/* Vertical Evolution Experience */}
          <div className="space-y-32 md:space-y-48 relative z-10">
            {evolutionStages.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                className="relative max-w-2xl mx-auto"
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Floating Point indicator on path (Desktop) */}
                <div className="absolute top-1/2 -left-24 w-1.5 h-1.5 rounded-full bg-brand-gold/40 hidden md:block -translate-y-1/2">
                   <motion.div 
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     viewport={{ once: true }}
                     className="w-full h-full bg-brand-gold/60 rounded-full"
                   />
                </div>

                <div className="bg-white/90 border border-stone-100 p-12 md:p-16 rounded-[3rem] relative overflow-hidden group text-center shadow-[0_20px_50px_-20px_rgba(28,25,23,0.05)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/[0.03] to-transparent pointer-events-none"></div>
                  
                  <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-brand-gold mb-8 block opacity-80">{item.tagline}</span>
                  <h3 className="text-3xl md:text-5xl font-serif text-brand-stone mb-8 leading-tight tracking-wide">
                    {item.label}
                  </h3>
                  <p className="text-stone-500 font-light text-lg md:text-xl leading-relaxed tracking-wide">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;
