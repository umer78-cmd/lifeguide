import React from 'react';
import { motion } from 'framer-motion';

const OrganicDivider = ({ variant = 0, className = "" }) => {
  const rotations = ['-0.3deg', '0.2deg', '-0.15deg', '0.4deg'];
  const widths = ['w-24 md:w-36', 'w-20 md:w-32', 'w-28 md:w-40', 'w-24 md:w-36'];
  const margins = ['my-24 md:my-32', 'my-20 md:my-28', 'my-28 md:my-36', 'my-24 md:my-32'];

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`flex items-center justify-center ${className || margins[variant % margins.length]}`}
    >
      <div
        className="flex items-center gap-6"
        style={{ transform: `rotate(${rotations[variant % rotations.length]})` }}
      >
        {/* Left Line: Fades from transparent to rich solid brand-gold */}
        <div className={`${widths[variant % widths.length]} h-[1.5px] bg-gradient-to-r from-transparent to-brand-gold/80`}></div>
        {/* Central Dot with Ring */}
        <div className="w-2.5 h-2.5 rounded-full bg-brand-gold/75 ring-4 ring-brand-gold/20 shadow-sm" style={{ transform: `translateY(${variant % 2 === 0 ? '-1px' : '1px'})` }}></div>
        {/* Right Line: Fades from transparent to rich solid brand-gold */}
        <div className={`${widths[variant % widths.length]} h-[1.5px] bg-gradient-to-l from-transparent to-brand-gold/80`}></div>
      </div>
    </motion.div>
  );
};

export default OrganicDivider;
