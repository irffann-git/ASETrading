import React, { useEffect } from 'react';   // ✨ NEW: added useEffect
import { Quote } from "lucide-react";

const AboutMessage = () => {
  // ─── ✨ NEW: Scroll reveal effect ────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
  // ─── End of scroll reveal ──────────────────────────────────────

  return (
    <section className="relative bg-[#F8FAFC] py-16 overflow-hidden select-none rounded-t-3xl reveal reveal-fade-up">   {/* ✨ NEW: added reveal classes */}
      {/* Subtle Background Soft Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#195CCF]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Content Area (Columns: 7) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Heading Row with Quote Icon */}
            <div className="flex items-start gap-4">
              <Quote 
                size={32} 
                className="text-[#195CCF] shrink-0 transform scale-x-[-1] mt-0.5" 
                fill="currentColor" 
                fillOpacity={0.1}
              />
              <h2 className="text-xl md:text-4xl font-bold text-[#1B2430] tracking-tight pt-0.5 reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>   {/* ✨ NEW */}
                Message from the Management
              </h2>
            </div>

            {/* Combined Continuous Paragraph Block */}
            <p className="text-[#57657A] text-sm md:text-base leading-relaxed pl-12 font-normal reveal reveal-fade-up" style={{ transitionDelay: "0.2s" }}>   {/* ✨ NEW */}
              Since our founding in 2004, ASE has been driven by the singular vision 
              of transforming the IT landscape in the Kingdom of Saudi Arabia. We have 
              built our success on a foundation of certified expertise, an uncompromising 
              commitment to quality, and a proactive service model. We look forward to 
              partnering with you to power your next generation of digital growth.
            </p>
          </div>

          {/* Right Logo Area (Columns: 5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
            <div className="relative w-full flex justify-center reveal reveal-fade-up" style={{ transitionDelay: "0.15s" }}>   {/* ✨ NEW */}
              <img
                src="/ase_logo.png"
                alt="ASE Logo"
                className="w-[420px] lg:w-[550px] xl:w-[600px] h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ─── ✨ NEW: Scroll reveal styles (self-contained) ─── */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-fade-up {
          transform: translateY(40px);
        }
        .reveal-fade-up.revealed {
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default AboutMessage;