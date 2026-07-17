// CTASection.jsx – Dark network-effect CTA banner
import React, { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const CTASection = React.memo(() => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const resizeTimerRef = useRef(null);

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

    const PARTICLE_COUNT = 30;
    const MAX_DIST = 200;
    let particles = [];

    // Particles are seeded toward the left and right thirds, leaving the
    // center clearer for the headline/button (matches the reference image).
    function randomX() {
      const zone = Math.random();
      if (zone < 0.45) return Math.random() * width * 0.32; // left band
      if (zone < 0.9) return width * 0.68 + Math.random() * width * 0.32; // right band
      return Math.random() * width; // sparse elsewhere
    }

    class Particle {
      constructor() {
        this.x = randomX();
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = 1.2 + Math.random() * 1.8;
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
        ctx.fill();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.update();
        p.draw();
      }

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
      ctx.strokeStyle = "rgba(0, 207, 255, 0.28)";
      ctx.lineWidth = 1;
      ctx.stroke();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

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
    window.addEventListener("resize", handleResize);

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
  }, [handleResize]);

  return (
    <section className="relative w-full overflow-hidden bg-[#020B1D] border-t border-white/10 py-10 md:py-12 px-6 sm:px-10 lg:px-16">
      {/* Canvas background – particle network */}
      <div className="absolute inset-0 w-full h-full">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Soften edges so the center stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020B1D] via-transparent to-[#020B1D] opacity-70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 max-w-7xl mx-auto">
        <div>
          <h2 className="text-white font-bold text-2xl md:text-3xl leading-snug">
            Ready to Transform Your
            <br className="hidden md:block" /> IT Infrastructure?
          </h2>
          <p className="text-[#B8C4D9] text-sm md:text-base mt-2">
            Let's build the future together.
          </p>
        </div>

        <Link
          to="/contact"
          className="flex items-center gap-2 bg-[#0D4EA7] hover:bg-[#2E7BFF] text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 whitespace-nowrap shrink-0"
        >
          Contact Us Today
          <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white/70">
            <ArrowUpRight size={12} />
          </span>
        </Link>
      </div>
    </section>
  );
});

export default CTASection;