import React, { useState } from 'react';
import BrushHighlight from './BrushHighlight';
import { useLanguage } from '../context/LanguageContext';

const VoicesOfChange = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="voices-of-change" className="py-32 bg-stone-100 px-6 relative z-10 border-t border-stone-200/50 overflow-hidden">
      
      {/* Background glow — Optimized with radial-gradient */}
      <div 
        className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-x-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(180, 83, 9, 0.08) 0%, rgba(180, 83, 9, 0) 70%)' }}
      ></div>

      <div className="max-w-5xl mx-auto relative z-10">

        <div className="text-center mb-16 md:mb-24">
          <p className="text-brand-gold/80 text-base uppercase tracking-brand-wide font-semibold mb-6">
            {t('lifeguide.caseStudies')}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 tracking-normal mb-4 group">
            {t('lifeguide.title')} <BrushHighlight className="italic text-brand-gold">{t('lifeguide.titleHighlight')}</BrushHighlight>
          </h2>
          <p className="text-stone-700 font-medium text-base md:text-base uppercase tracking-brand-wide">
            {t('lifeguide.subtitle')}
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl md:rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] ring-1 ring-stone-200/50 transition-all duration-500 hover:shadow-[0_25px_70px_-15px_rgba(217,119,6,0.12)]">
            
            {/* Quotation mark */}
            <div className="text-7xl md:text-8xl font-serif text-brand-gold/10 leading-none mb-4 md:-mb-4 select-none">
              "
            </div>

            {/* Testimonial text */}
            <div className="text-stone-700 font-medium leading-snug text-base md:text-base tracking-normal space-y-4">
              <p>
                {t('lifeguide.p1')}
              </p>
              <p>
                {t('lifeguide.p2')}
              </p>

              {/* Expandable content */}
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="pt-4">
                  {t('lifeguide.p3')}
                </p>
                <p>
                  {t('lifeguide.p4')}
                </p>
                <p>
                  {t('lifeguide.p5')}
                </p>
              </div>
            </div>

            {/* Read More / Less Toggle */}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 text-brand-gold uppercase text-xs tracking-[0.2em] font-semibold hover:text-brand-gold/80 transition-colors duration-300 flex items-center gap-2 group"
            >
              {isExpanded ? t('lifeguide.readLess') : t('lifeguide.readMore')}
              <svg 
                className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {/* Attribution */}
            <div className="mt-8 pt-6 border-t border-stone-200/60 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <span className="text-brand-gold font-serif text-xl">M</span>
              </div>
              <div>
                <p className="text-brand-stone font-serif text-base tracking-normal">Michaela Bobinger</p>
                <p className="text-stone-700 text-xs uppercase tracking-[0.2em] mt-1">{t('lifeguide.authorRole')}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VoicesOfChange;
