import React from 'react';
import { motion } from 'framer-motion';
import BrushHighlight from '../BrushHighlight';

const LegacySection = () => {
  const milestones = [
    {
      year: '2003',
      title: 'Scientific Foundation',
      desc: 'Deep investigation into systemic structures and biological interconnectedness. The first architectural maps of human order were drawn here.'
    },
    {
      year: '2015',
      title: 'Systemic Expansion',
      desc: 'Integrating human behavioral patterns with systemic order. Identifying the silent organizing principles that facilitate deeper shifts.'
    },
    {
      year: '2026',
      title: 'Evolution of commIN',
      desc: 'The birth of a dedicated space for those called to their highest life potential. A portal for modern access to timeless inner foundations.'
    }
  ];

  return (
    <section className="relative py-32 md:py-64 overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <img 
          src="/images/systemic_order_abstract_1776084826206.png" 
          alt="" 
          loading="lazy"
          decoding="async"
          className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-[0.03] mix-blend-multiply"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Cinematic Header */}
        <div className="text-center mb-48">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-6xl font-serif text-brand-stone mb-10 leading-tight tracking-wide"
             >
                Two Decades of <br />
                <BrushHighlight className="italic text-brand-gold">Guidance.</BrushHighlight>
            </motion.h2>
        </div>

        {/* Milestone Sequence */}
        <div className="space-y-64 md:space-y-96">
          {milestones.map((ms, i) => (
            <div key={i} className="relative flex flex-col items-center">
              
              {/* Backdrop Year Anchor */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.05, scale: 1 }}
                viewport={{ margin: "-20%" }}
                transition={{ duration: 1.5 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none z-0"
              >
                <span className="text-[30vw] md:text-[25vw] font-serif text-brand-stone select-none leading-none">
                  {ms.year}
                </span>
              </motion.div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                className="relative z-10 text-center max-w-2xl px-6"
              >
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-6 block">The Milestone</span>
                <h3 className="text-3xl md:text-5xl font-serif text-brand-stone mb-8 leading-tight tracking-wide">
                  {ms.title}
                </h3>
                <p className="text-stone-500 font-light text-lg md:text-xl leading-relaxed tracking-wide">
                  {ms.desc}
                </p>
                <div className="mt-12 w-12 h-[1px] bg-brand-gold/30 mx-auto"></div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Final Methodology Block - Architecting the Future */}
        <div className="mt-64 md:mt-96">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-12 md:p-24 bg-white/95 border border-stone-100 rounded-[3rem] shadow-[0_48px_140px_-40px_rgba(28,25,23,0.12)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 text-center">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-12 block">The Scientist Edge</span>
              <h3 className="text-3xl md:text-5xl font-serif text-brand-stone mb-10 leading-tight">
                The Interconnected <br />
                <span className="italic">System.</span>
              </h3>
              
              <p className="text-stone-600 font-light text-lg md:text-xl leading-relaxed tracking-wide mb-14 max-w-2xl mx-auto">
                "Human systems are dynamic networks of information, biology, and intention. My methodology treats the person, the family, and the organization as a singular, vibrating system that seeks its own point of balance."
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                 {['Information', 'Biology', 'Intention', 'Systemic Order'].map((tag, i) => (
                   <span key={i} className="px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full text-[10px] uppercase tracking-[0.3em] text-brand-stone/60 font-bold border border-white/80 shadow-sm">
                      {tag}
                   </span>
                 ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default LegacySection;
