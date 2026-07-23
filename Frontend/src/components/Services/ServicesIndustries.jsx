import React, { useEffect } from "react";
import {
  Building2,
  Heart,
  GraduationCap,
  Landmark,
  Hotel,
  Droplets,
  Factory,
  ShoppingBag,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const ServicesIndustries = () => {
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

  const industries = [
    { key: "servicesIndustries.gov", icon: Building2 },
    { key: "servicesIndustries.healthcare", icon: Heart },
    { key: "servicesIndustries.education", icon: GraduationCap },
    { key: "servicesIndustries.banking", icon: Landmark },
    { key: "servicesIndustries.hospitality", icon: Hotel },
    { key: "servicesIndustries.oil", icon: Droplets },
    { key: "servicesIndustries.manufacturing", icon: Factory },
    { key: "servicesIndustries.retail", icon: ShoppingBag },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#EEF4FF] to-[#F0F7FF] rounded-t-3xl">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #195CCF 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative blurred circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#195CCF]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#46B8FF]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#195CCF]/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#195CCF]/10 text-[#195CCF] text-xs font-semibold uppercase tracking-[0.2em] mb-4 reveal reveal-fade-up">
            {t('servicesIndustries.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>
            {t('servicesIndustries.heading.prefix')}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#195CCF] to-[#46B8FF]">
              {t('servicesIndustries.heading.highlight')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#195CCF] to-[#46B8FF] mx-auto mt-5 rounded-full" />
          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto reveal reveal-fade-up" style={{ transitionDelay: "0.2s" }}>
            {t('servicesIndustries.sub')}
          </p>
        </div>

        {/* Industries Grid – Clean Design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative transition-all duration-300 reveal reveal-fade-up"
                style={{ transitionDelay: `${0.1 + index * 0.04}s` }}
              >
                {/* Glass Card */}
                <div className="relative backdrop-blur-sm bg-white/70 rounded-2xl p-6 border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(25,92,207,0.12)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden group-hover:border-[#195CCF]/30">
                  
                  {/* Subtle gradient glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-br from-[#195CCF]/5 via-transparent to-[#46B8FF]/5" />

                  {/* Colored accent bar at top */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300 group-hover:h-1.5 bg-gradient-to-r from-[#195CCF] to-[#46B8FF]" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-2xl bg-[#195CCF]/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#195CCF] group-hover:scale-110 group-hover:shadow-[0_4px_20px_rgba(25,92,207,0.3)]">
                      <Icon className="w-8 h-8 text-[#195CCF] transition-colors duration-300 group-hover:text-white" />
                    </div>

                    {/* Name */}
                    <h3 className="text-gray-800 font-semibold text-base group-hover:text-[#195CCF] transition-colors duration-300">
                      {t(industry.key)}
                    </h3>

                    {/* Decorative line */}
                    <div className="w-8 h-0.5 rounded-full mt-2 transition-all duration-300 group-hover:w-12 bg-[#195CCF]/30 group-hover:bg-[#195CCF]" />
                  </div>
                </div>
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

export default ServicesIndustries;