import React, { useEffect } from "react";
import {
  Search,
  PenTool,
  Workflow,
  CheckCircle,
  Rocket,
  Headphones,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const ServicesDeliveryProcess = () => {
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

  const steps = [
    {
      number: "01",
      icon: Search,
      titleKey: "delivery.step1",
      descKey: "delivery.step1.desc",
    },
    {
      number: "02",
      icon: PenTool,
      titleKey: "delivery.step2",
      descKey: "delivery.step2.desc",
    },
    {
      number: "03",
      icon: Workflow,
      titleKey: "delivery.step3",
      descKey: "delivery.step3.desc",
    },
    {
      number: "04",
      icon: CheckCircle,
      titleKey: "delivery.step4",
      descKey: "delivery.step4.desc",
    },
    {
      number: "05",
      icon: Rocket,
      titleKey: "delivery.step5",
      descKey: "delivery.step5.desc",
    },
    {
      number: "06",
      icon: Headphones,
      titleKey: "delivery.step6",
      descKey: "delivery.step6.desc",
    },
  ];

  return (
    <section className="relative bg-[#020B1D] py-16 md:pt-20 pb-50 overflow-hidden">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#195CCF] via-[#46B8FF] to-[#195CCF] opacity-20" />

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#195CCF]/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#46B8FF]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="uppercase tracking-[0.25em] text-[#46B8FF] text-sm font-semibold reveal reveal-fade-up">
            {t('delivery.badge')}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>
            {t('delivery.heading.prefix')}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46B8FF] to-[#195CCF]">
              {t('delivery.heading.highlight')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#46B8FF] to-[#195CCF] mx-auto mt-5 rounded-full" />
          <p className="mt-6 text-slate-400 text-lg leading-relaxed reveal reveal-fade-up" style={{ transitionDelay: "0.2s" }}>
            {t('delivery.sub')}
          </p>
        </div>

        {/* --- MOBILE: Vertical Timeline (visible on small screens) --- */}
        <div className="md:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#46B8FF] via-[#195CCF] to-transparent" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex items-start gap-4 pb-10 last:pb-0 group reveal reveal-fade-up"
                style={{ transitionDelay: `${0.1 + index * 0.06}s` }}
              >
                {/* Step Circle */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#195CCF]/20 border-2 border-[#46B8FF] flex items-center justify-center group-hover:bg-[#195CCF] group-hover:border-[#195CCF] transition-all duration-300">
                    <span className="text-[#46B8FF] font-bold text-xs group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-6 bg-gradient-to-b from-[#46B8FF] to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-1">
                    <Icon className="w-5 h-5 text-[#46B8FF] group-hover:text-white transition-colors duration-300" />
                    <h3 className="text-base font-semibold text-white group-hover:text-[#46B8FF] transition-colors duration-300">
                      {t(step.titleKey)}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- DESKTOP: Horizontal Stepped Process (visible on md and up) --- */}
        <div className="hidden md:block relative">
          {/* Horizontal connecting line */}
          <div className="absolute top-20 left-[60px] right-[60px] h-0.5 bg-gradient-to-r from-[#46B8FF] via-[#195CCF] to-[#46B8FF]/30" />

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group reveal reveal-fade-up" style={{ transitionDelay: `${0.1 + index * 0.06}s` }}>
                  <div className="flex flex-col items-center text-center">
                    {/* Number Circle */}
                    <div className="relative z-10 mb-4">
                      <div className="w-16 h-16 rounded-full bg-[#195CCF]/20 border-2 border-[#46B8FF] flex items-center justify-center group-hover:bg-[#195CCF] group-hover:border-[#195CCF] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(70,184,255,0.3)]">
                        <span className="text-[#46B8FF] font-bold text-sm group-hover:text-white transition-colors duration-300">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-3">
                      <Icon className="w-6 h-6 text-[#46B8FF] group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#46B8FF] transition-colors duration-300 leading-tight">
                      {t(step.titleKey)}
                    </h3>

                    {/* Description Tooltip */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-[#081B33] p-4 rounded-xl border border-white/10 shadow-xl z-20 pointer-events-none">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#081B33] border-t border-l border-white/10 rotate-45" />
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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

export default ServicesDeliveryProcess;