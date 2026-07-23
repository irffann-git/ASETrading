import React, { useEffect } from "react";
import { Eye, Target, Gem, Check } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const ServicesVisionMission = () => {
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

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden rounded-t-3xl">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#195CCF] via-[#46B8FF] to-[#195CCF] opacity-20" />

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#195CCF]/5 rounded-full blur-[180px]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#195CCF]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#46B8FF]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Vision */}
          <div className="group bg-[#081B33] rounded-2xl p-8 border border-white/10 hover:border-[#46B8FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(25,92,207,0.1)] reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>
            <div className="w-14 h-14 rounded-xl bg-[#195CCF]/20 flex items-center justify-center mb-5 group-hover:bg-[#195CCF] transition-colors duration-300">
              <Eye className="w-7 h-7 text-[#46B8FF] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#46B8FF] transition-colors duration-300">
              {t('vision.title')}
            </h3>
            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
              {t('vision.text')}
            </p>
          </div>

          {/* Mission */}
          <div className="group bg-[#081B33] rounded-2xl p-8 border border-white/10 hover:border-[#46B8FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(25,92,207,0.1)] reveal reveal-fade-up" style={{ transitionDelay: "0.2s" }}>
            <div className="w-14 h-14 rounded-xl bg-[#195CCF]/20 flex items-center justify-center mb-5 group-hover:bg-[#195CCF] transition-colors duration-300">
              <Target className="w-7 h-7 text-[#46B8FF] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#46B8FF] transition-colors duration-300">
              {t('mission.title')}
            </h3>
            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
              {t('mission.text')}
            </p>
          </div>

          {/* Core Values */}
          <div className="group bg-[#081B33] rounded-2xl p-8 border border-white/10 hover:border-[#46B8FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(25,92,207,0.1)] reveal reveal-fade-up" style={{ transitionDelay: "0.3s" }}>
            <div className="w-14 h-14 rounded-xl bg-[#195CCF]/20 flex items-center justify-center mb-5 group-hover:bg-[#195CCF] transition-colors duration-300">
              <Gem className="w-7 h-7 text-[#46B8FF] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#46B8FF] transition-colors duration-300">
              {t('values.title')}
            </h3>
            <ul className="space-y-2">
              {t('values.list').map((value, index) => (
                <li key={index} className="flex items-start gap-2.5 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  <Check className="w-4 h-4 text-[#46B8FF] mt-1 shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
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

export default ServicesVisionMission;