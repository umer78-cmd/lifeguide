import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ── Reusable: A single paragraph that fades in on scroll ── */
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

/* ── Reusable: A thin gold divider between sections ── */
const SectionDivider = () => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="flex items-center justify-center py-24 md:py-32"
  >
    <div className="flex items-center gap-4">
      <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-brand-gold/30"></div>
      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30"></div>
      <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-brand-gold/30"></div>
    </div>
  </motion.div>
);

/* ── Reusable: A narrative section with title + paragraphs ── */
const NarrativeBlock = ({ title, children, isCentered = false }) => (
  <div className={`max-w-2xl mx-auto px-6 ${isCentered ? 'text-center' : 'text-center'}`}>
    {title && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-brand-gold/50 text-[11px] md:text-xs uppercase tracking-[0.25em] font-semibold mb-16"
      >
        {title}
      </motion.p>
    )}
    <div className="space-y-10 md:space-y-12">
      {children}
    </div>
  </div>
);

const pStyle = "text-stone-700 text-lg md:text-xl font-serif font-normal leading-[1.9] md:leading-[2.1]";
const pStyleEmphasis = "text-stone-800 text-lg md:text-xl font-serif font-normal leading-[1.9] md:leading-[2.1]";

const NarrativeScroll = () => {
  return (
    <section className="bg-brand-cream relative z-10">
      <div className="py-16 md:py-24">

        {/* ──────────────────── Step 3: SYSTEM ──────────────────── */}
        <NarrativeBlock title="System">
          <RevealParagraph className={pStyleEmphasis}>
            The human being is matter — and far beyond that.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            Within every human being, there is a system —<br/>
            a living structure in which body, mind, emotions,<br className="hidden md:inline"/>
            and awareness constantly interact.
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyle}>
            The center of this system is the life potential.<br/>
            It expresses outward into life<br/>
            and at the same time responds to what comes from the outside.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            A continuous exchange —<br/>
            a living flow in both directions.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            When this interaction is balanced, life unfolds naturally.<br/>
            When it is disturbed,<br/>
            the effects become visible across different areas of life.
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyleEmphasis}>
            To understand life,<br/>
            we need to understand the human being as a whole.
          </RevealParagraph>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mt-12"
          >
            <Link to="/journey" className="text-brand-gold/70 text-sm font-sans tracking-wide hover:text-brand-gold transition-colors duration-300 inline-flex items-center gap-2">
              Read deeper into the systemic foundation
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </motion.div>
        </NarrativeBlock>

        <SectionDivider />

        {/* ──────────────────── Step 4: FOUNDATIONAL WORK ──────────────────── */}
        <NarrativeBlock title="Foundational Work">
          <RevealParagraph className={pStyleEmphasis}>
            This work has always begun with the human being as they are.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            With what is present.<br/>
            With what is felt.<br/>
            With what shows itself in life.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={`${pStyle} italic text-stone-600`}>
            A situation.<br/>
            A challenge.<br/>
            A recurring pattern.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            From there, the process begins to move inward.<br/>
            Following what is connected. Step by step.<br/>
            Toward the core of the system. Toward the life potential.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            This work does not solve problems.<br/>
            It operates at the level where their energy is held and bound.
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyleEmphasis}>
            This way of working has formed the foundation of my work<br className="hidden md:inline"/>
            over many years. It is precise. Focused.<br/>
            And deeply effective within the field it addresses.
          </RevealParagraph>
        </NarrativeBlock>

        <SectionDivider />

        {/* ──────────────────── Step 5: EVOLUTION ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center py-20 md:py-28 px-6"
        >
          <p className="text-2xl md:text-4xl font-serif italic text-brand-gold/80 leading-relaxed">
            From this foundation,<br/>
            a deeper and wider access has emerged.
          </p>
        </motion.div>

        <SectionDivider />

        {/* ──────────────────── Step 6: GUIDANCE PATH ──────────────────── */}
        <NarrativeBlock title="Guidance Path">
          <RevealParagraph className={pStyleEmphasis}>
            Guidance Path begins at this point.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            It does not focus on isolated issues. It works at the source.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            The moment we begin, an impulse is set at the core of your system.<br/>
            From there, movement unfolds.<br/>
            What has been held begins to release.<br/>
            What was not accessible becomes available again.
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyleEmphasis}>
            This is not a step-by-step process.<br/>
            It unfolds as a whole. In your own rhythm.
          </RevealParagraph>
        </NarrativeBlock>

        <SectionDivider />

        {/* ──────────────────── Step 7: COMMIN ──────────────────── */}
        <NarrativeBlock title="commIN">
          <RevealParagraph className={pStyle}>
            There is also a way to enter this work<br className="hidden md:inline"/>
            without direct one-to-one guidance.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            commIN opens a space where understanding begins.<br/>
            Where you start to see how your system moves,<br className="hidden md:inline"/>
            how it reacts, and how your life potential expresses itself.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={`${pStyle} italic text-stone-600`}>
            It is not the work itself — but an entry into it.<br/>
            A field of orientation.
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyle}>
            From here, some remain in this space and continue<br className="hidden md:inline"/>
            to unfold their understanding.<br/>
            Others feel the impulse to go further — into direct work.
          </RevealParagraph>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mt-14"
          >
            <Link 
              to="/communion"
              className="group relative inline-block px-10 py-4 bg-transparent text-stone-700 uppercase text-xs tracking-[0.2em] font-semibold overflow-hidden rounded-full border border-stone-300 hover:border-brand-gold hover:text-brand-gold transition-all duration-500"
            >
              <span className="absolute inset-0 w-full h-full bg-brand-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
              <span className="relative z-10 flex items-center gap-3">
                Explore the Space
                <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </Link>
          </motion.div>
        </NarrativeBlock>

      </div>
    </section>
  );
};

export default NarrativeScroll;
