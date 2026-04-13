import React, { useEffect, useRef, useState } from 'react';

const BrushHighlight = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={`brush-underline ${revealed ? 'revealed' : ''} ${className}`}>
      {children}
    </span>
  );
};

export default BrushHighlight;
