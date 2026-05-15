import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DustMotes from '../components/DustMotes';
import BrushHighlight from '../components/BrushHighlight';
import { useLanguage } from '../context/LanguageContext';

const RevealParagraph = ({ children, delay = 0, className = "" }) => (
  <motion.p
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 1, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.p>
);

const SectionDivider = () => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="flex items-center justify-center py-24 md:py-32"
  >
    <div className="flex items-center gap-6">
      {/* Thicker 1.5px line, wider desktop size, fades to solid brand-gold */}
      <div className="w-20 md:w-32 h-[1.5px] bg-gradient-to-r from-transparent to-brand-gold/80"></div>
      {/* Prominent central dot with outer ring */}
      <div className="w-2.5 h-2.5 rounded-full bg-brand-gold/75 ring-4 ring-brand-gold/20 shadow-sm"></div>
      <div className="w-20 md:w-32 h-[1.5px] bg-gradient-to-l from-transparent to-brand-gold/80"></div>
    </div>
  </motion.div>
);

const JourneyPage = () => {
  const [isReady, setIsReady] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const pStyle = "text-stone-700 text-lg md:text-xl font-serif font-normal leading-[1.9] md:leading-[2.1]";
  const pStyleEmphasis = "text-stone-800 text-lg md:text-xl font-serif font-normal leading-[1.9] md:leading-[2.1]";

  return (
    <div className="bg-brand-cream overflow-x-hidden relative">

      {/* Background Dust */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.15]">
        <DustMotes />
      </div>

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
            style={{ background: 'radial-gradient(circle, rgba(180, 83, 9, 0.1) 0%, transparent 70%)' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-brand-gold text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-12"
          >
            {t('methodology.kicker')}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-8xl font-serif text-stone-800 mb-10 leading-tight tracking-tight"
          >
            {t('methodology.title1')}<br/>
            <span className="italic text-brand-gold">{t('methodology.titleHighlight')}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 1.5 }}
            className="max-w-xl mx-auto text-stone-600 text-lg md:text-xl font-serif font-normal leading-relaxed"
          >
            {t('methodology.heroDesc')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-16"
          >
            <div className="w-px h-20 bg-gradient-to-b from-brand-gold/30 to-transparent mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* ── The Science: How the System Works ── */}
      <section className="py-20 md:py-32 px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-16"
          >
            {t('methodology.approachKicker')}
          </motion.p>
          <div className="space-y-10 md:space-y-12">
            <RevealParagraph className={pStyleEmphasis}>
              {t('methodology.app1')}<br/>
              {t('methodology.app2')}
            </RevealParagraph>
            <RevealParagraph delay={0.1} className={pStyle}>
              {t('methodology.app3')}<br/>
              {t('methodology.app4')}<br className="hidden md:inline"/>
              {t('methodology.app5')}
            </RevealParagraph>
            <RevealParagraph delay={0.1} className={pStyle}>
              {t('methodology.app6')}<br/>
              {t('methodology.app7')}<br className="hidden md:inline"/>
              {t('methodology.app8')}
            </RevealParagraph>
            <RevealParagraph delay={0.15} className={pStyleEmphasis}>
              {t('methodology.app9')}<br/>
              {t('methodology.app10')}
            </RevealParagraph>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── The Evolution: Inner Order → Systemic Creator → Life Potential ── */}
      <section className="py-20 md:py-32 px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-12"
          >
            {t('methodology.evoKicker')}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-20 md:space-y-28">
          {[
            {
              number: "01",
              title: t('methodology.evo1Title'),
              tagline: t('methodology.evo1Tag'),
              description: t('methodology.evo1Desc')
            },
            {
              number: "02",
              title: t('methodology.evo2Title'),
              tagline: t('methodology.evo2Tag'),
              description: t('methodology.evo2Desc')
            },
            {
              number: "03",
              title: t('methodology.evo3Title'),
              tagline: t('methodology.evo3Tag'),
              description: t('methodology.evo3Desc')
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center max-w-xl mx-auto"
            >
              <span className="text-brand-gold/25 font-serif text-4xl md:text-5xl block mb-4">{item.number}</span>
              <p className="text-brand-gold text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-6">{item.tagline}</p>
              <h3 className="text-2xl md:text-4xl font-serif text-stone-800 mb-6 tracking-tight">{item.title}</h3>
              <p className="text-stone-600 text-lg md:text-xl font-serif font-normal leading-[1.9]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ── Voices of Change (Testimonials) ── */}
      <section className="py-20 md:py-32 px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-12"
          >
            {t('methodology.vocKicker')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-stone-800 tracking-tight"
          >
            {t('methodology.vocTitle1')}<span className="italic text-brand-gold">{t('methodology.vocHighlight')}</span>{t('methodology.vocTitle2')}
          </motion.h2>
        </div>

        {/* Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-10 md:p-14 ring-1 ring-stone-200/50">
            <div className="text-6xl font-serif text-brand-gold/15 leading-none mb-2 select-none">"</div>
            <div className="text-stone-700 font-serif text-lg md:text-xl leading-[1.9] space-y-6">
              <p>
                {t('methodology.test1')}
              </p>
              <p>
                {t('methodology.test2')}
              </p>
              <p>
                {t('methodology.test3')}
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-stone-200/60 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <span className="text-brand-gold font-serif text-lg">M</span>
              </div>
              <div>
                <p className="text-stone-800 font-serif text-base">Michaela Bobinger</p>
                <p className="text-stone-500 text-xs uppercase tracking-[0.2em] mt-1">{t('methodology.testRole')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default JourneyPage;
