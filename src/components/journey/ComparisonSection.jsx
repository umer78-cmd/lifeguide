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

  const comparisonData = [
    {
      label: 'The Focus',
      old: 'Symptom-focused investigation',
      new: 'Inner Order & Architecture'
    },
    {
      label: 'The Origin',
      old: 'Outside solutions & advice',
      new: 'Systemic Center of Potential'
    },
    {
      label: 'The Goal',
      old: 'Constant adaptation to issues',
      new: 'Lived Life Potential'
    },
    {
      label: 'The View',
      old: 'Isolated symptoms & issues',
      new: 'The Human as a Whole System'
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

          {/* Tiered Vertical Experience */}
          <div className="space-y-48 md:space-y-64 relative z-10">
            {comparisonData.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                className="relative"
                style={{ willChange: 'opacity' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                  
                  {/* Left: Conventional */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 0.4, x: 0 }}
                    viewport={{ once: true }}
                    className="text-center md:text-right group"
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-300 mb-6 block">Conventional</span>
                    <p className="text-xl md:text-2xl font-serif text-stone-400 italic font-light group-hover:text-stone-500 transition-all duration-700">
                      {item.old}
                    </p>
                  </motion.div>

                  {/* Right: commIN */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                    style={{ willChange: 'transform, opacity' }}
                  >
                    {/* Floating Point indicator on path (Desktop) */}
                    <div className="absolute top-1/2 -left-32 w-2 h-2 rounded-full border border-brand-gold/40 hidden md:block -translate-y-1/2">
                       <motion.div 
                         initial={{ scale: 0 }}
                         whileInView={{ scale: 1 }}
                         viewport={{ once: true }}
                         className="w-full h-full bg-brand-gold/20 rounded-full"
                         style={{ willChange: 'transform' }}
                       />
                    </div>

                    <div className="bg-white/95 border border-stone-200 shadow-[0_20px_60px_-15px_rgba(28,25,23,0.08)] p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent pointer-events-none"></div>
                      
                      <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block">{item.label}</span>
                      <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-stone leading-tight">
                        {item.new}
                      </p>
                    </div>
                  </motion.div>

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
