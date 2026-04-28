import React, { useEffect, useRef } from 'react';

/**
 * DustMotes Component
 * Creates a sophisticated Canvas-based background with organic drifting 'dust motes'
 * features Brownian motion, Depth of Field (blur), and Mouse Repel interactivity.
 */
const DustMotes = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -2000, y: -2000 });

  useEffect(() => {
    console.log("%c DustMotes Mounted ", "background: #b45309; color: #fff; border-radius: 4px; padding: 2px 6px;");
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let particles = [];
    const particleCount = 60; // Optimized for performance
    const repelRadius = 200;
    const returnForce = 0.015;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.reset();
        // Initial random placement
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
      }

      reset() {
        this.size = Math.random() * 2 + 1; // 1px to 3px
        this.opacity = Math.random() * 0.3 + 0.2; // 0.2 to 0.5
        
        // Brownian motion velocities
        this.vx = (Math.random() - 0.5) * 0.15;
        this.vy = (Math.random() - 0.5) * 0.15;
      }

      update() {
        // Slow organic Brownian drift
        this.vx += (Math.random() - 0.5) * 0.005;
        this.vy += (Math.random() - 0.5) * 0.005;
        
        const speedLimit = 0.3;
        this.vx = Math.max(-speedLimit, Math.min(speedLimit, this.vx));
        this.vy = Math.max(-speedLimit, Math.min(speedLimit, this.vy));

        this.baseX += this.vx;
        this.baseY += this.vy;

        // Interaction: Mouse Repel
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < repelRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (repelRadius - distance) / repelRadius;
          const pushX = Math.cos(angle) * force * 2.5;
          const pushY = Math.sin(angle) * force * 2.5;
          
          this.x -= pushX;
          this.y -= pushY;
        } else {
          // Gently return to the organic drift path
          this.x += (this.baseX - this.x) * returnForce;
          this.y += (this.baseY - this.y) * returnForce;
        }

        // Wrap around logic
        if (this.x < -20) { this.x = canvas.width + 20; this.baseX = this.x; }
        if (this.x > canvas.width + 20) { this.x = -20; this.baseX = this.x; }
        if (this.y < -20) { this.y = canvas.height + 20; this.baseY = this.y; }
        if (this.y > canvas.height + 20) { this.y = -20; this.baseY = this.y; }
      }

      draw() {
        // Optimized draw: No gradients, no shadows, no save/restore
        ctx.fillStyle = `rgba(180, 83, 9, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for(let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!animationFrameId) animate();
        } else {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      },
      { threshold: 0.1 }
    );

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    
    resize();
    observer.observe(canvas);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
      style={{ opacity: 1 }}
    />
  );
};

export default DustMotes;
