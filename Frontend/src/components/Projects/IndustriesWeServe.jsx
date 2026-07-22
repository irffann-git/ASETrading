import React, { useEffect } from "react";
import { Factory, Building2, Landmark, Heart, GraduationCap, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const IndustriesWeServe = () => {
  const { t } = useLanguage();   // <-- ADD

  // ─── Scroll reveal effect ──────────────────────────────────────────
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

  const INDUSTRIES = [
    { id: 1, key: "industries.industrial", icon: Factory },
    { id: 2, key: "industries.commercial", icon: Building2 },
    { id: 3, key: "industries.banking", icon: Landmark },
    { id: 4, key: "industries.healthcare", icon: Heart },
    { id: 5, key: "industries.education", icon: GraduationCap },
    { id: 6, key: "industries.government", icon: ShieldCheck },
  ];

  return (
    <section className="bg-white text-slate-900 py-16 px-6 sm:px-10 md:px-16 lg:px-20 relative overflow-hidden rounded-t-3xl border-t border-slate-100">
      
      {/* Soft Ambient Light Glow in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-[#195CCF]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-8xl mx-auto relative z-10">
        
        {/* Section Label */}
        <div className="text-center mb-12">
          <h2 className="uppercase tracking-[0.25em] text-[#195CCF] text-xs font-bold sm:text-sm reveal reveal-fade-up">
            {t('industries.badge')}
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-[#195CCF] to-transparent mx-auto mt-3" />
        </div>

        {/* Premium Interactive Grid Wrapper */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-slate-200/80 bg-slate-50/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(148,163,184,0.12)]">
          {INDUSTRIES.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={industry.id}
                className={`group relative flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 py-8 px-5 transition-all duration-500 hover:bg-[#195CCF]/5 cursor-default
                  /* Responsive Grid Border Separation */
                  border-b border-slate-200/80 sm:border-b-0
                  ${index % 2 !== 0 ? "" : "border-r border-slate-200/80"} 
                  md:border-b-0 md:[&:not(:nth-child(3n))]:border-r md:border-slate-200/80
                  lg:[&:not(:last-child)]:border-r lg:border-b-0 lg:border-slate-200/80
                `}
              >
                {/* Active Hover Background Radial Light Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(25,92,207,0.05)_0%,transparent_70%)] transition-opacity duration-500 pointer-events-none" />

                {/* Light Mode Tech Icon Treatment */}
                <div className="relative text-[#195CCF] group-hover:text-[#46B8FF] transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-0.5">
                  <IconComponent 
                    size={28} 
                    strokeWidth={1.5} 
                    className="drop-shadow-[0_2px_6px_rgba(25,92,207,0.15)] group-hover:drop-shadow-[0_0_10px_rgba(70,184,255,0.5)]" 
                  />
                </div>

                {/* Typography Label */}
                <span className="text-xs sm:text-sm font-bold tracking-wide text-slate-600 group-hover:text-slate-900 transition-colors duration-300 whitespace-nowrap text-center sm:text-left select-none">
                  {t(industry.key)}
                </span>

                {/* Elegant active accent bar at the bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#195CCF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            );
          })}
        </div>

      </div>

      {/* Scroll reveal styles (self‑contained) */}
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

export default IndustriesWeServe;