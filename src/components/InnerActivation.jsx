import React from 'react';
import { motion } from 'framer-motion';

const InnerActivation = () => {
  return (
    <section id="inner-activation" className="py-32 bg-brand-cream px-6 relative z-10 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center py-20">
          {[
            "The conditions we live in are changing.",
            "Not visibly at first -",
            "but in how deeply we are affected.",
            "You have been maintaining stability.",
            "Compensating.",
            "Adapting.",
            "It worked.",
            "It no longer works the same way.",
            "GAP",
            "Here you are.",
            "You say yes.",
            "You respond."
          ].map((phrase, i) => {
            if (phrase === "GAP") {
              return (
                <div key={i} className="h-[60vh] md:h-[100vh] w-full" />
              );
            }
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-30%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="min-h-[100vh] w-full flex items-center justify-center"
              >
                <p className="text-stone-800 text-2xl md:text-3xl font-serif font-normal leading-relaxed tracking-wide">
                  {phrase}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InnerActivation;
