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

/* ── Organic Divider — slightly irregular, not pixel-perfect ── */
const OrganicDivider = ({ variant = 0 }) => {
  // Slight variations for organic feel
  const rotations = ['-0.3deg', '0.2deg', '-0.15deg', '0.4deg'];
  const widths = ['w-16 md:w-24', 'w-12 md:w-20', 'w-14 md:w-22', 'w-10 md:w-18'];
  const margins = ['my-32 md:my-48', 'my-28 md:my-40', 'my-36 md:my-52', 'my-30 md:my-44'];

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`flex items-center justify-center ${margins[variant % margins.length]}`}
    >
      <div
        className="flex items-center gap-4"
        style={{ transform: `rotate(${rotations[variant % rotations.length]})` }}
      >
        <div className={`${widths[variant % widths.length]} h-[1px] bg-gradient-to-r from-transparent to-brand-gold/25`}></div>
        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/25" style={{ transform: `translateY(${variant % 2 === 0 ? '-1px' : '1px'})` }}></div>
        <div className={`${widths[variant % widths.length]} h-[1px] bg-gradient-to-l from-transparent to-brand-gold/25`}></div>
      </div>
    </motion.div>
  );
};

/* ── Reusable: A narrative section with title + paragraphs ── */
const NarrativeBlock = ({ title, children }) => (
  <div className="max-w-2xl mx-auto px-6 text-center">
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

/*
 * ── Entry Point Block ──
 * Each of the three forms of work gets an EQUAL section.
 * They share identical visual weight — same heading size, same structure.
 * The only difference is their content.
 */
const EntryPointBlock = ({ overline, heading, children, link, linkText, sessionTiers }) => (
  <div className="max-w-2xl mx-auto px-6 text-center py-24 md:py-32">
    {/* Overline */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-brand-gold/45 text-[11px] md:text-xs uppercase tracking-[0.25em] font-semibold mb-12 md:mb-16"
    >
      {overline}
    </motion.p>

    {/* Heading — same size for ALL three, ensuring equality */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-stone-800 leading-[1.2] tracking-tight mb-16 md:mb-20"
    >
      {heading}
    </motion.h2>

    {/* Body paragraphs */}
    <div className="space-y-12 md:space-y-16">
      {children}
    </div>

    {/* Session tiers — only for Guidance Path */}
    {sessionTiers && (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 1 }}
        className="max-w-sm mx-auto mt-20 md:mt-24 space-y-8"
      >
        {sessionTiers.map((tier, idx) => (
          <div
            key={idx}
            className="flex justify-between items-baseline border-b border-stone-200/40 pb-6"
          >
            <span className="text-base md:text-lg font-sans font-medium text-stone-700">{tier.title}</span>
            <span className="text-stone-400 font-sans tracking-widest uppercase text-xs">{tier.duration}</span>
          </div>
        ))}
      </motion.div>
    )}

    {/* Optional link — gentle, not pushy */}
    {link && (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1 }}
        className="mt-20 md:mt-24"
      >
        <Link
          to={link}
          className="text-brand-gold/60 text-sm font-sans tracking-wide hover:text-brand-gold transition-colors duration-500 inline-flex items-center gap-2"
        >
          {linkText}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </Link>
      </motion.div>
    )}
  </div>
);

const pStyle = "text-stone-700 text-lg md:text-xl font-serif font-normal leading-[1.9] md:leading-[2.1]";
const pStyleEmphasis = "text-stone-800 text-lg md:text-xl font-serif font-normal leading-[1.9] md:leading-[2.1]";

const NarrativeScroll = () => {
  return (
    <section className="bg-brand-cream relative z-10">
      <div className="py-16 md:py-24">

        {/* ──────────────────── THE SYSTEM ──────────────────── */}
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
            <Link to="/journey" className="text-brand-gold/60 text-sm font-sans tracking-wide hover:text-brand-gold transition-colors duration-500 inline-flex items-center gap-2">
              Read deeper into the systemic foundation
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </motion.div>
        </NarrativeBlock>

        <OrganicDivider variant={0} />

        {/* ──────────────────── BRIDGE — into the three entry points ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center py-16 md:py-24 px-6"
        >
          <p className={`${pStyleEmphasis} mb-10`}>
            This understanding becomes available through three forms of work.
          </p>
          <p className={`${pStyle} italic text-stone-500`}>
            They differ only in where the entry begins.
          </p>
        </motion.div>

        <OrganicDivider variant={1} />

        {/* ═══════════════════════════════════════════════════════════════
            THE THREE ENTRY POINTS — equal, vertical, walked-through
            Each one is its own full-screen breathing section.
            No hierarchy. No "better" or "lesser".
            ═══════════════════════════════════════════════════════════════ */}

        {/* ──────────────────── 1. LifeGuide-KaTao ──────────────────── */}
        <EntryPointBlock
          overline="Entry Point"
          heading="LifeGuide-KaTao"
          link="/journey"
          linkText="Explore the foundational work"
        >
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
            The movement and reorganization unfold specifically<br className="hidden md:inline"/>
            within what is connected to this initial situation.
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyleEmphasis}>
            This way of working has formed the foundation<br className="hidden md:inline"/>
            over many years. It is precise. Focused.<br/>
            And deeply effective within the field it addresses.
          </RevealParagraph>
        </EntryPointBlock>

        <OrganicDivider variant={2} />

        {/* ──────────────────── 2. commIN ──────────────────── */}
        <EntryPointBlock
          overline="Entry Point"
          heading="commIN"
          link="/communion"
          linkText="Enter the shared space"
        >
          <RevealParagraph className={pStyleEmphasis}>
            A space where understanding begins.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            Here, people begin defining their own access<br className="hidden md:inline"/>
            to their inner life power.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={`${pStyle} italic text-stone-600`}>
            Through courses.<br/>
            Through workshops.<br/>
            Through webinars.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            This space creates activation, opening,<br/>
            and first awareness through collective experience.
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyle}>
            Here you define your steps —<br/>
            at your own pace, in your own way,<br className="hidden md:inline"/>
            without direct personal contact.
          </RevealParagraph>
        </EntryPointBlock>

        <OrganicDivider variant={3} />

        {/* ──────────────────── 3. Guidance Path ──────────────────── */}
        <EntryPointBlock
          overline="Entry Point"
          heading="Guidance Path"
          sessionTiers={[
            { title: "Foundation", duration: "3 Sessions" },
            { title: "Stabilization", duration: "5 Sessions" },
            { title: "Deep Work", duration: "8 Sessions" }
          ]}
        >
          <RevealParagraph className={pStyleEmphasis}>
            The most direct form of the work.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            It begins directly at the central inner level<br className="hidden md:inline"/>
            where everything within the person connects.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            From there, movement unfolds<br/>
            across the whole being.
          </RevealParagraph>
          <RevealParagraph delay={0.1} className={pStyle}>
            What has been held begins to release.<br/>
            What was not accessible becomes available again.
          </RevealParagraph>
          <RevealParagraph delay={0.15} className={pStyleEmphasis}>
            This is not a step-by-step process.<br/>
            It unfolds as a whole. In your own rhythm.
          </RevealParagraph>
        </EntryPointBlock>

      </div>
    </section>
  );
};

export default NarrativeScroll;
