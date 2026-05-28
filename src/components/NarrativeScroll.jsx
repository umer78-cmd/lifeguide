import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CommInIcon, GuidancePathIcon, LifeGuideIcon } from './BrandIcons';
import OrganicDivider from './OrganicDivider';
import { useLanguage } from '../context/LanguageContext';

/* ── Reusable: A single paragraph that fades in on scroll ── */
const RevealParagraph = ({ children, delay = 0, className = "" }) => (
  <motion.p
    variants={{
      hidden: { opacity: 0, y: 16 },
      visible: { opacity: 1, y: 0, transition: { duration: 1, delay, ease: "easeOut" } }
    }}
    className={className}
  >
    {children}
  </motion.p>
);

/* ── Reusable: A narrative section with title + paragraphs ── */
const NarrativeBlock = ({ title, children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, margin: "-15%" }}
    variants={{
      hidden: { opacity: 0, y: 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.2,
          ease: "easeOut",
          staggerChildren: 0.1
        }
      }
    }}
    className="max-w-2xl mx-auto px-6 text-center"
  >
    {title && (
      <motion.p
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } }
        }}
        // Increased font size of word "SYSTEM" (Narrative Block title), increased ocher-opacity, and widened tracking
        className="text-brand-gold text-lg sm:text-xl md:text-2xl uppercase tracking-[0.35em] font-bold mb-16"
      >
        {title}
      </motion.p>
    )}
    <div className="space-y-10 md:space-y-12">
      {children}
    </div>
  </motion.div>
);

/*
 * ── Entry Point Block ──
 * Each of the three forms of work gets an EQUAL section.
 */
const EntryPointBlock = ({ overline, heading, styledHeading, icon: Icon, children, link, linkText, sessionTiers, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, margin: "-15%" }}
    variants={{
      hidden: { opacity: 0, y: 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.2,
          ease: "easeOut",
          staggerChildren: 0.12
        }
      }
    }}
    className={`max-w-2xl mx-auto px-6 text-center pt-24 md:pt-32 pb-16 md:pb-20 ${className}`}
  >
    {/* Overline — Increased font size and ocher-colored presence for "Entry point" */}
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
      className="text-brand-gold text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-8"
    >
      {overline}
    </motion.p>

    {/* Icon — Shared from Hero */}
    {Icon && (
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
        }}
        className="text-brand-gold flex justify-center mb-10 md:mb-14"
      >
        <Icon className="w-16 h-16 md:w-24 md:h-24" />
      </motion.div>
    )}

    {/* Heading — same size for ALL three, ensuring equality */}
    <motion.h2
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
      }}
      className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-stone-800 leading-[1.2] tracking-tight mb-16 md:mb-20"
    >
      {styledHeading || heading}
    </motion.h2>

    {/* Body paragraphs */}
    <div className="space-y-12 md:space-y-16 animate-fade-in-up">
      {children}
    </div>

    {/* Session tiers — only for Guidance Path (Darker, highly present, prominent options) */}
    {sessionTiers && (
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } }
        }}
        className="max-w-sm mx-auto mt-20 md:mt-24 space-y-8"
      >
        {sessionTiers.map((tier, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border-b border-stone-300 pb-6 hover:border-brand-gold/50 transition-colors duration-300"
          >
            {/* Darker stone-900, bold, and larger text */}
            <span className="text-lg md:text-xl font-sans font-semibold text-stone-900">{tier.title}</span>
            {/* Prominent pill shape, darker stone-800 text */}
            <span className="text-stone-800 font-sans tracking-widest uppercase text-xs sm:text-sm font-bold bg-stone-200/60 px-4 py-1.5 rounded-full">{tier.duration}</span>
          </div>
        ))}
      </motion.div>
    )}

    {/* Optional link — Increased font size and ocher presence ("explore the foundational work") */}
    {link && (
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } }
        }}
        className="mt-20 md:mt-24"
      >
        <Link
          to={link}
          className="text-brand-gold text-lg font-sans tracking-wide hover:text-amber-800 transition-colors duration-500 inline-flex items-center gap-2 font-semibold"
        >
          {linkText}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </Link>
      </motion.div>
    )}
  </motion.div>
);

const pStyle = "text-stone-700 text-lg md:text-xl font-serif font-normal leading-[1.9] md:leading-[2.1]";
const pStyleEmphasis = "text-stone-800 text-lg md:text-xl font-serif font-normal leading-[1.9] md:leading-[2.1]";

const NarrativeScroll = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-brand-cream relative z-10">
      {/* ── Continuous Golden Thread starting from the very top of NarrativeScroll section to connect with InnerActivation ── */}
      <div
        className="absolute left-1/2 top-[-80px] md:top-[-160px] h-[76rem] md:h-[90rem] w-px -translate-x-1/2 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(180,83,9,0.25) 0%, rgba(180,83,9,0.16) 45%, rgba(180,83,9,0.12) 90%, transparent 100%)',
        }}
      />
      <div className="pt-4 pb-16 md:py-24">

        {/* ──────────────────── GOLDEN THREAD: Bridge → System ──────────────────── */}
        <div className="relative">

          {/* ── THE BRIDGE ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-15%" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="relative z-10 max-w-3xl mx-auto text-center px-6 pb-0"
          >
            <p className="text-stone-800 text-xl sm:text-2xl md:text-3xl font-serif font-normal leading-[1.8] md:leading-[1.9] tracking-normal max-w-2xl mx-auto">
              {t('ns.bridge1')}<br/>
              {t('ns.bridge2')}<br className="hidden md:inline" />
              {t('ns.bridge3')}<br/>
              {t('ns.bridge4')} <br className="hidden md:inline" />
              {t('ns.bridge5')} <span className="italic text-brand-gold">{t('ns.bridge6')}</span>.
            </p>
            <p className="text-stone-800 text-xl sm:text-2xl md:text-3xl font-serif font-normal leading-[1.8] md:leading-[1.9] tracking-normal max-w-2xl mx-auto mt-12 md:mt-16 py-4 md:py-6">
              {t('ns.bridge7')}
            </p>
          </motion.div>

          {/* ── Thread waypoint ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex justify-center py-8 md:py-12"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-brand-gold/50 shadow-[0_0_8px_rgba(180,83,9,0.4)] animate-pulse" />
          </motion.div>

          {/* ── THE SYSTEM ── */}
          <div className="relative z-10">
            <NarrativeBlock title={t('ns.systemTitle')}>
              <RevealParagraph className={pStyleEmphasis}>
                {t('ns.sys1')}
              </RevealParagraph>
              <RevealParagraph delay={0.1} className={pStyle}>
                {t('ns.sys2')}<br/>
                {t('ns.sys3')}<br className="hidden md:inline"/>
                {t('ns.sys4')}
              </RevealParagraph>
              <RevealParagraph delay={0.15} className={pStyle}>
                {t('ns.sys5')}<br/>
                {t('ns.sys6')}<br/>
                {t('ns.sys7')}
              </RevealParagraph>
              <RevealParagraph delay={0.1} className={pStyle}>
                {t('ns.sys8')}<br/>
                {t('ns.sys9')}
              </RevealParagraph>
              <RevealParagraph delay={0.1} className={pStyle}>
                {t('ns.sys10')}<br/>
                {t('ns.sys11')}<br/>
                {t('ns.sys12')}
              </RevealParagraph>
              <RevealParagraph delay={0.15} className={pStyleEmphasis}>
                {t('ns.sys13')}<br/>
                {t('ns.sys14')}
              </RevealParagraph>
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 1 } }
                }}
                className="mt-12"
              >
                {/* Increased font size, weight, and ocher-colored visibility of link */}
                <Link to="/journey" className="text-brand-gold text-lg font-sans tracking-wide hover:text-amber-800 transition-colors duration-500 inline-flex items-center gap-2 font-semibold">
                  {t('ns.sysLink')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </motion.div>
            </NarrativeBlock>
          </div>
        </div>

        <OrganicDivider variant={1} />

        {/* ──────────────────── BRIDGE — into the three entry points ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-15%" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center py-16 md:py-24 px-6"
        >
          <p className={`${pStyleEmphasis} mb-10`}>
            {t('ns.forms1')}
          </p>
          <p className={`${pStyle} italic text-stone-500`}>
            {t('ns.forms2')}
          </p>
        </motion.div>

        <OrganicDivider variant={2} />

        {/* ═══════════════════════════════════════════════════════════════
            THE THREE ENTRY POINTS — equal, vertical, walked-through
            ═══════════════════════════════════════════════════════════════ */}

        {/* ──────────────────── 1. LifeGuide-KaTao ──────────────────── */}
        <EntryPointBlock
          overline={t('ns.entryLabel')}
          heading={t('ns.lgTitle')}
          styledHeading={<>LifeGuide-<span className="text-brand-gold font-serif italic">KaTao</span></>}
          icon={LifeGuideIcon}
          link="/journey"
          linkText={t('ns.lgLink')}
          className="md:-translate-x-12"
        >
          <RevealParagraph className={pStyleEmphasis}>
            {t('ns.lg1')}
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            {t('ns.lg2')}<br/>
            {t('ns.lg3')}<br/>
            {t('ns.lg4')}
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={`${pStyle} italic text-stone-600`}>
            {t('ns.lg5')}<br/>
            {t('ns.lg6')}<br/>
            {t('ns.lg7')}
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            {t('ns.lg8')}<br/>
            {t('ns.lg9')}<br/>
            {t('ns.lg10')}
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            {t('ns.lg11')}<br className="hidden md:inline"/>
            {t('ns.lg12')}
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyleEmphasis}>
            {t('ns.lg13')}<br className="hidden md:inline"/>
            {t('ns.lg14')}<br/>
            {t('ns.lg15')}
          </RevealParagraph>
        </EntryPointBlock>

        <OrganicDivider variant={3} />

        {/* ──────────────────── 2. commIN ──────────────────── */}
        <EntryPointBlock
          overline={t('ns.entryLabel')}
          heading={t('ns.comTitle')}
          styledHeading={<>comm<span className="text-brand-gold font-semibold">i</span><span className="text-stone-900 font-bold">N</span></>}
          icon={CommInIcon}
          link="/communion"
          linkText={t('ns.comLink')}
          className="md:translate-x-12"
        >
          <RevealParagraph className={pStyleEmphasis}>
            {t('ns.com1')}
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            {t('ns.com2')}<br className="hidden md:inline"/>
            {t('ns.com3')}
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={`${pStyle} italic text-stone-600`}>
            {t('ns.com4')}<br/>
            {t('ns.com5')}<br/>
            {t('ns.com6')}
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            {t('ns.com7')}<br/>
            {t('ns.com8')}
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyle}>
            {t('ns.com9')}<br/>
            {t('ns.com10')}<br className="hidden md:inline"/>
            {t('ns.com11')}
          </RevealParagraph>
        </EntryPointBlock>

        <OrganicDivider variant={0} />

        {/* ──────────────────── 3. Guidance Path ──────────────────── */}
        <EntryPointBlock
          overline={t('ns.entryLabel')}
          heading={t('ns.gpTitle')}
          styledHeading={<>Guidance<span className="text-brand-gold font-serif italic">Path</span></>}
          icon={GuidancePathIcon}
          className="md:-translate-x-6"
          sessionTiers={[
            { title: t('ns.gpt1'), duration: t('ns.gpd1') },
            { title: t('ns.gpt2'), duration: t('ns.gpd2') },
            { title: t('ns.gpt3'), duration: t('ns.gpd3') }
          ]}
        >
          <RevealParagraph className={pStyleEmphasis}>
            {t('ns.gp1')}
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            {t('ns.gp2')}
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyle}>
            {t('ns.gp3')}<br className="hidden md:inline"/>
            {t('ns.gp4')}
          </RevealParagraph>
          <RevealParagraph delay={0.2} className={pStyle}>
            {t('ns.gp5')}
          </RevealParagraph>
          <RevealParagraph delay={0.25} className={pStyleEmphasis}>
            {t('ns.gp6')}
          </RevealParagraph>
          <RevealParagraph delay={0.3} className={pStyle}>
            {t('ns.gp7')}<br/>
            {t('ns.gp8')}
          </RevealParagraph>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1, delay: 0.4 } }
            }}
            className="mt-12"
          >
            <Link 
              to="/connection" 
              className="text-brand-gold text-lg font-sans tracking-wide hover:text-amber-800 transition-colors duration-500 inline-flex items-center gap-2 font-semibold"
            >
              {t('ns.gp9')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </motion.div>
        </EntryPointBlock>

      </div>
    </section>
  );
};

export default NarrativeScroll;
