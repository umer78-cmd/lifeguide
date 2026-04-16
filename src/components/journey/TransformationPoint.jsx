import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BrushHighlight from '../BrushHighlight';

const TransformationPoint = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const glassY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  
  return (
    <section ref={containerRef} className="relative h-[120vh] md:h-[140vh] overflow-hidden flex items-center justify-center">
      
      {/* Background Parallax Layer */}
      <div className="absolute inset-0 z-0 scale-110">
        <motion.div 
          style={{ y: imgY, willChange: 'transform' }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="/images/katharina_dignity_warm_1776083737023.png" 
            alt="The Transformation"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          {/* Subtle Radiant Overlays - Optimized */}
          <div className="absolute inset-0 bg-brand-cream/10"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-stone/20 via-transparent to-brand-gold/10"></div>
        </motion.div>
      </div>

      {/* Floating Glass Architectural Portal */}
      <motion.div 
        style={{ y: glassY, willChange: 'transform' }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6"
      >
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
           className="relative group"
           style={{ willChange: 'transform, opacity' }}
        >
          {/* Advanced Architectural Card - Optimized */}
          <div className="absolute inset-0 bg-white/95 rounded-[3rem] border border-stone-200 shadow-[0_40px_120px_-30px_rgba(28,25,23,0.12)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
            {/* Shimmer line */}
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              style={{ willChange: 'transform' }}
            ></motion.div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 text-center py-20 md:py-32 px-8 md:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-10 block opacity-80">The Turning Point</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-stone mb-12 leading-[1.1] tracking-wide">
                A Profound <br />
                <BrushHighlight className="italic">Realization.</BrushHighlight>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 1.2 }}
              className="w-24 h-[1px] bg-brand-gold/40 mx-auto mb-12 origin-center"
              style={{ willChange: 'transform' }}
            ></motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-stone-600 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto tracking-wide"
              style={{ willChange: 'transform, opacity' }}
            >
              Transformation expanded the frame. Beyond the science of systems, I found the "soul" of order. Not just as a theory, but as a lived, unhurried truth that grounds everything I do.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Atmospheric Fades */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-brand-cream/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-brand-cream/80 to-transparent z-10 pointer-events-none"></div>

    </section>
  );
};

export default TransformationPoint;
