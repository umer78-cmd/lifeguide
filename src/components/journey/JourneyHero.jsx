import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrushHighlight from '../BrushHighlight';

const JourneyHero = () => {
  const [isEvolved, setIsEvolved] = useState(false);

  useEffect(() => {
    // Cinematic delay for the evolution to begin
    const timer = setTimeout(() => {
      setIsEvolved(true);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col bg-brand-cream overflow-hidden">
      
      {/* Immersive Background Textures */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {!isEvolved ? (
            <motion.div
              key="sci_bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.12 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5 }}
              className="absolute inset-0"
            >
              <img 
                src="/images/energy_logic.png"
                alt=""
                className="w-full h-full object-cover scale-110 opacity-30"
              />
            </motion.div>
          ) : (
            <motion.div
              key="mentor_bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 2.5 }}
              className="absolute inset-0"
            >
              <img 
                src="/images/communion_hero.png"
                alt=""
                className="w-full h-full object-cover scale-110 opacity-40"
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#b45309 1px, transparent 1px), linear-gradient(90deg, #b45309 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-transparent to-brand-cream"></div>
      </div>

      <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden">
        
        {/* Large Year Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            {!isEvolved ? (
              <motion.h2 
                key="2003"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.08, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[35vw] font-serif text-brand-stone select-none absolute"
              >2003</motion.h2>
            ) : (
              <motion.h2 
                key="2026"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.08, scale: 1 }}
                transition={{ duration: 2.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[35vw] font-serif text-brand-gold select-none absolute"
              >2026</motion.h2>
            )}
          </AnimatePresence>
        </div>

        {/* Central Narrative Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
            <AnimatePresence mode="wait">
              {!isEvolved ? (
                <motion.div
                  key="scientist_phase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-700 mb-8 block">The Foundation</span>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-stone mb-10 leading-[1.1] tracking-normal">
                    The Scientist: <br />
                    <BrushHighlight className="italic">Systems of Order.</BrushHighlight>
                  </h1>
                  <p className="text-stone-700 font-medium text-xl md:text-xl leading-snug tracking-normal max-w-xl mx-auto">
                    An investigation into the biological and architectural links that define our living reality.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="mentor_phase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold mb-8 block">The Entry</span>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-stone mb-10 leading-[1.1] tracking-normal">
                    The Guidance Path: <br />
                    <BrushHighlight className="italic text-brand-gold">Reorganizing from Within.</BrushHighlight>
                  </h1>
                  <p className="text-stone-700 font-medium text-xl md:text-xl leading-snug tracking-normal max-w-xl mx-auto">
                    A space where life begins to reorganize from within. Not a sales pitch, but an entry into a profound shift of potential.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
        </div>

        {/* Bottom Scroll Hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.15em] text-stone-300">The Evolution of Order</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-12 bg-stone-200/60"
          ></motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default JourneyHero;
