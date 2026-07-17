// HomeNetworkLogos.jsx – Optimized canvas network + big logo on the right
import React, { useEffect, useRef, useCallback } from "react";

const HomeNetworkLogos = React.memo(() => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const resizeTimerRef = useRef(null);

  const logo = {
    name: "logo",
    logo: "/ase_logo.png", // replace with your own path
  };

  // ─── Throttled resize handler ───
  const handleResize = useCallback(() => {
    if (resizeTimerRef.current) return;
    resizeTimerRef.current = setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      resizeTimerRef.current = null;
    }, 100);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    const ctx = canvas.getContext("2d");

    let width = parent.clientWidth;
    let height = parent.clientHeight;
    canvas.width = width;
    canvas.height = height;

    // ─── Optimized parameters ───
    const PARTICLE_COUNT = 60;
    const MAX_DIST = 120;
    let particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = 1.5 + Math.random() * 2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#00CFFF";
        // No shadow per particle – huge performance gain
        ctx.fill();
      }
    }

    // ─── Init particles ───
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    // ─── Animation loop ───
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Update & draw particles
      for (const p of particles) {
        p.update();
        p.draw();
      }

      // 2. Draw connections in ONE SINGLE PATH (reduces draw calls)
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      ctx.strokeStyle = "rgba(0, 207, 255, 0.35)";
      ctx.lineWidth = 1;
      // No shadow on lines either
      ctx.stroke();

      animationRef.current = requestAnimationFrame(animate);
    };

    // ─── Start animation ───
    animate();

    // ─── Visibility API: pause when tab is hidden ───
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      } else {
        if (!animationRef.current) {
          animationRef.current = requestAnimationFrame(animate);
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // ─── Resize listener ───
    window.addEventListener("resize", handleResize);

    // ─── Cleanup ───
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
        resizeTimerRef.current = null;
      }
    };
  }, [handleResize]); // handleResize is stable thanks to useCallback

  // ─── Render ───
  return (
    <section className="relative py-8 md:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#020B1D] min-h-[200px] flex items-center rounded-[32px] border border-[#0D4EA7]/30 shadow-[0_0_40px_rgba(13,78,167,0.15)]">
      {/* Canvas background – network animation */}
      <div className="absolute inset-0 w-full h-full">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Overlay gradient to soften edges */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020B1D]/80 via-transparent to-[#020B1D]/80 pointer-events-none" />

      {/* Content – logo on the right – MUCH BIGGER now */}
      <div className="relative z-10 w-full flex justify-end items-center">
        <div className="w-full max-w-2xl flex justify-center md:justify-end">
          <div className="w-80 h-48 md:w-112 md:h-64 lg:w-128 lg:h-72 transition-all duration-500 hover:scale-105">
            <img
              src={logo.logo}
              alt={logo.name}
              className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(13,78,167,0.4)]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default HomeNetworkLogos;