import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DustMotes from '../components/DustMotes';
import OrganicDivider from '../components/OrganicDivider';
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

const CommunionPage = () => {
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
    <div className="bg-brand-cream overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <DustMotes />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
            style={{ background: 'radial-gradient(circle, rgba(180, 83, 9, 0.08) 0%, transparent 70%)' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-brand-gold text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-12"
          >
            {t('commin.kicker')}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-8xl font-serif text-stone-800 mb-10 leading-tight tracking-tight"
          >
            comm<span className="text-brand-gold">IN</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 1.5 }}
            className="max-w-xl mx-auto text-stone-600 text-lg md:text-xl font-serif font-normal leading-relaxed"
          >
            {t('commin.heroDesc')}
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

      {/* ── What is commIN? ── */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-10 md:space-y-12">
          <RevealParagraph className={pStyleEmphasis}>
            {t('commin.p1')}<br/>
            {t('commin.p2')}
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            {t('commin.p3')}<br/>
            {t('commin.p4')}
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            {t('commin.p5')}<br/>
            {t('commin.p6')}
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyle}>
            {t('commin.p7')}<br/>
            {t('commin.p8')}<br/>
            {t('commin.p9')}
          </RevealParagraph>
        </div>
      </section>

      <OrganicDivider variant={0} />

      {/* ── The Three Movements ── */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-12"
          >
            {t('commin.movementsKicker')}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-20 md:space-y-28">
          {[
            {
              number: "01",
              title: t('commin.mov1Title'),
              description: t('commin.mov1Desc')
            },
            {
              number: "02",
              title: t('commin.mov2Title'),
              description: t('commin.mov2Desc')
            },
            {
              number: "03",
              title: t('commin.mov3Title'),
              description: t('commin.mov3Desc')
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
              <span className="text-brand-gold/25 font-serif text-4xl md:text-5xl block mb-6">{item.number}</span>
              <h3 className="text-2xl md:text-3xl font-serif text-stone-800 mb-6 tracking-tight">{item.title}</h3>
              <p className="text-stone-600 text-lg md:text-xl font-serif font-normal leading-[1.9]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <OrganicDivider variant={1} />

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-stone-600 font-serif text-xl md:text-2xl italic leading-relaxed mb-16"
          >
            {t('commin.quote')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/connection"
              className="group relative inline-block px-12 py-5 bg-transparent text-stone-800 uppercase text-xs tracking-[0.25em] font-semibold overflow-hidden rounded-full border border-stone-300 hover:border-brand-gold hover:text-brand-gold transition-all duration-500"
            >
              <span className="absolute inset-0 w-full h-full bg-brand-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
              <span className="relative z-10 flex items-center justify-center gap-3">
                {t('commin.cta')}
                <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CommunionPage;
