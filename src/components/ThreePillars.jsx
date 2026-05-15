import React, { useEffect, useRef } from 'react';
import BrushHighlight from './BrushHighlight';
import { useLanguage } from '../context/LanguageContext';

const GuidanceWork = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  const tiers = [
    {
      title: t('threepillars.t1Title'),
      sessions: t('threepillars.t1Sessions'),
      subtitle: t('threepillars.t1Subtitle'),
      desc: t('threepillars.t1Desc')
    },
    {
      title: t('threepillars.t2Title'),
      sessions: t('threepillars.t2Sessions'),
      subtitle: t('threepillars.t2Subtitle'),
      desc: t('threepillars.t2Desc')
    },
    {
      title: t('threepillars.t3Title'),
      sessions: t('threepillars.t3Sessions'),
      subtitle: t('threepillars.t3Subtitle'),
      desc: t('threepillars.t3Desc')
    }
  ];

  return (
    <section id="guidance-work" ref={sectionRef} className="py-40 bg-stone-100 px-6 relative z-10 overflow-hidden">
      {/* Background glow — Optimized with radial-gradient */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(180, 83, 9, 0.08) 0%, rgba(180, 83, 9, 0) 70%)',
          transform: 'translateZ(0)' 
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <p className="text-brand-gold/80 text-base uppercase tracking-brand-wide mb-8 font-semibold">
            {t('threepillars.subtitle')}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-stone-900 tracking-normal group leading-tight mb-10">
            {t('threepillars.titleLine1')}<BrushHighlight className="italic text-brand-gold">{t('threepillars.titleHighlight')}</BrushHighlight>
          </h2>
          <p className="text-stone-700 font-serif italic text-xl md:text-2xl tracking-normal max-w-3xl mx-auto">
            {t('threepillars.quote')}
          </p>
        </div>

        {/* Depth-Based Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col items-center text-center p-8 md:p-12 rounded-[2rem] bg-white/40 backdrop-blur-sm ring-1 ring-stone-200/50 hover:ring-brand-gold/20 transition-all duration-700 hover:shadow-[0_30px_80px_-20px_rgba(180,83,9,0.1)]"
            >
              <p className="text-brand-gold/60 text-xs uppercase tracking-[0.15em] font-bold mb-6">
                {tier.sessions}
              </p>
              
              <h3 className="text-2xl md:text-3xl font-serif text-amber-950 mb-3 tracking-normal group-hover:text-brand-gold transition-colors duration-500">
                {tier.title}
              </h3>
              
              <p className="text-stone-700 text-[10px] uppercase tracking-[0.2em] font-medium mb-8">
                {tier.subtitle}
              </p>

              <div className="w-12 h-[1px] bg-stone-200 mb-10 group-hover:w-20 group-hover:bg-brand-gold/30 transition-all duration-700"></div>

              <p className="text-stone-700 font-medium leading-snug tracking-normal text-base md:text-base">
                {tier.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GuidanceWork;
