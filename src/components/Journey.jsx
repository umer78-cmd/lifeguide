import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

/**
 * ClosingInvitation — the gentle end of the walk.
 * Not a hard CTA. A soft moment of recognition and an open door.
 */
const ClosingInvitation = () => {
  const { t } = useLanguage();
  return (
    <section id="closing" className="py-32 md:py-40 bg-brand-cream px-6 relative z-10 overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-normal text-stone-800 leading-relaxed max-w-xl mx-auto">
            {t('journey.closing1')}<br className="hidden sm:inline"/>
            <span className="italic text-brand-gold">{t('journey.closing2')}</span>
          </p>
        </motion.div>

        {/* Prominent Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center justify-center gap-6 my-16 md:my-20"
          style={{ transform: 'rotate(0.3deg)' }}
        >
          <div className="w-16 md:w-24 h-[1.5px] bg-gradient-to-r from-transparent to-brand-gold/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-brand-gold/75 ring-4 ring-brand-gold/20 shadow-sm"></div>
          <div className="w-16 md:w-24 h-[1.5px] bg-gradient-to-l from-transparent to-brand-gold/80"></div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-center"
        >
          <Link
            to="/connection"
            className="group relative inline-block px-12 py-5 bg-transparent text-stone-700 uppercase text-xs tracking-[0.2em] font-semibold overflow-hidden rounded-full border border-stone-300 hover:border-brand-gold hover:text-brand-gold transition-all duration-500"
          >
            <span className="absolute inset-0 w-full h-full bg-brand-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 flex items-center justify-center gap-3">
              {t('journey.cta')}
              <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ClosingInvitation;
