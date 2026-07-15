// HomeNetworkLogos.jsx – Big logo on the right
import { useEffect, useRef } from "react";

const HomeNetworkLogos = () => {
  const canvasRef = useRef(null);

  const logo = {
    name: "logo",
    logo: "/ase_logo.png", // replace with your own
  };

  // Canvas network animation (unchanged)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = parent.clientWidth);
    let height = (canvas.height = parent.clientHeight);
    let particles = [];
    const particleCount = 80;
    const maxDistance = 150;

    const handleResize = () => {
      width = canvas.width = parent.clientWidth;
      height = canvas.height = parent.clientHeight;
    };
    window.addEventListener("resize", handleResize);

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
        ctx.shadowColor = "rgba(0, 207, 255, 0.4)";
        ctx.shadowBlur = 8;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < maxDistance) {
            const opacity = 1 - dist / maxDistance;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 207, 255, ${opacity * 0.35})`;
            ctx.lineWidth = 1;
            ctx.shadowColor = "rgba(0, 207, 255, 0.1)";
            ctx.shadowBlur = 4;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative py-8 md:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#020B1D] min-h-[2    00px] flex items-center">
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
};

export default HomeNetworkLogos;