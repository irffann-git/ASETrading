import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useLanguage } from '../../context/LanguageContext';   // adjust path if needed

const ServicesHero = () => {
  const { t } = useLanguage();   // <-- add translation hook

  // ─── Scroll reveal effect ──────────────────────────────────────
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
    <section className="relative bg-[#020B1D] min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/serviceshero.png')",
        }}
      >
        {/* Left-to-Right Black Shadow Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #020B1D 0%, rgba(2,11,29,0.8) 35%, rgba(2,11,29,0.2) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#195CCF]/10 rounded-full blur-[150px] md:blur-[180px] z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-[#46B8FF]/5 rounded-full blur-[120px] md:blur-[150px] z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative w-full max-w-8xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 z-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-5 md:mb-6">
            <span className="w-8 md:w-10 h-0.5 bg-[#46B8FF]" />
            <span className="uppercase tracking-[0.2em] md:tracking-[0.25em] text-[#46B8FF] text-xs md:text-sm font-semibold reveal reveal-fade-up">
              {t('servicesHero.badge')}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] sm:leading-tight reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>
            {t('servicesHero.heading')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46B8FF] to-[#195CCF]">
              {t('servicesHero.highlight')}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl lg:max-w-2xl reveal reveal-fade-up" style={{ transitionDelay: "0.2s" }}>
            {t('servicesHero.sub')}
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#195CCF] to-[#46B8FF] text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:shadow-[0_0_40px_rgba(25,92,207,0.4)] transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base reveal reveal-fade-up"
              style={{ transitionDelay: "0.3s" }}
            >
              {t('servicesHero.btn1')}
              <ArrowRight size={18} className="shrink-0" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 hover:border-[#46B8FF] w-full sm:w-auto text-sm sm:text-base reveal reveal-fade-up"
              style={{ transitionDelay: "0.35s" }}
            >
              {t('servicesHero.btn2')}
              <ArrowRight size={18} className="shrink-0" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Reveal Styles (self‑contained) */}
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

export default ServicesHero;