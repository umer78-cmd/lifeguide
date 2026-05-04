import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BrushHighlight from '../BrushHighlight';

const BridgeSection = () => {
  return (
    <section className="relative pt-32 pb-64 overflow-hidden">
      
      {/* Final Portal Glow - Optimized with Radial Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: 'radial-gradient(circle, rgba(180, 83, 9, 0.12) 0%, transparent 70%)' }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vw] rounded-full translate-y-1/2"
        ></motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-12"
        >
          Inner Foundation, Modern Access
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-stone mb-12 leading-[1.1] tracking-normal"
        >
          The Foundation is the Same. <br />
          <BrushHighlight className="italic">The Access is Yours.</BrushHighlight>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-stone-700 font-medium text-xl md:text-2xl leading-snug max-w-2xl mx-auto mb-20 tracking-normal"
        >
          While the core of my research has remained unwavering, the doorway has evolved. The "commIN" space is the new container for 2026—designed to house the evolution of your life potential.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link 
            to="/" 
            onClick={() => {
                setTimeout(() => {
                    document.getElementById('voices-of-change')?.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }}
            className="group relative inline-flex items-center gap-8 px-16 py-8 bg-brand-stone text-white uppercase text-[10px] tracking-[0.15em] font-bold rounded-full overflow-hidden transition-all duration-700 hover:shadow-[0_30px_100px_rgba(180,83,9,0.3)]"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-brand-stone">Begin the Process</span>
            <div className="w-10 h-[1px] bg-brand-gold group-hover:bg-brand-stone transition-all duration-500 relative z-10"></div>
            
            {/* Liquid Fill Hover Effect */}
            <span className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1] z-0"></span>
          </Link>
        </motion.div>

      </div>

    </section>
  );
};

export default BridgeSection;
