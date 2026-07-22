import React, { useEffect } from "react";
import {
  Shield,
  Server,
  Network,
  Cloud,
  Wifi,
  HardDrive,
  Building2,
  Cable,
  Check,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const ServicesCapabilities = () => {
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

  const coreServices = [
    {
      icon: Shield,
      titleKey: "servicesCap.s1",
      descKey: "servicesCap.s1.desc",
      detailsKey: "servicesCap.s1.details",
    },
    {
      icon: Server,
      titleKey: "servicesCap.s2",
      descKey: "servicesCap.s2.desc",
      detailsKey: "servicesCap.s2.details",
    },
    {
      icon: Network,
      titleKey: "servicesCap.s3",
      descKey: "servicesCap.s3.desc",
      detailsKey: "servicesCap.s3.details",
    },
    {
      icon: Cloud,
      titleKey: "servicesCap.s4",
      descKey: "servicesCap.s4.desc",
      detailsKey: "servicesCap.s4.details",
    },
    {
      icon: Wifi,
      titleKey: "servicesCap.s5",
      descKey: "servicesCap.s5.desc",
      detailsKey: "servicesCap.s5.details",
    },
    {
      icon: Building2,
      titleKey: "servicesCap.s6",
      descKey: "servicesCap.s6.desc",
      detailsKey: "servicesCap.s6.details",
    },
    {
      icon: Cable,
      titleKey: "servicesCap.s7",
      descKey: "servicesCap.s7.desc",
      detailsKey: "servicesCap.s7.details",
    },
    {
      icon: HardDrive,
      titleKey: "servicesCap.s8",
      descKey: "servicesCap.s8.desc",
      detailsKey: "servicesCap.s8.details",
    },
  ];

  return (
    <section className="relative bg-[#020B1D] rounded-t-3xl -mt-12 z-10 overflow-hidden py-16 md:py-24">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#195CCF] via-[#46B8FF] to-[#195CCF] opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#195CCF]/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#46B8FF]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="uppercase tracking-[0.25em] text-[#46B8FF] text-sm font-semibold reveal reveal-fade-up">
            {t('servicesCap.badge')}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>
            {t('servicesCap.heading')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#46B8FF] to-[#195CCF] mx-auto mt-5 rounded-full" />
          <p className="mt-6 text-slate-400 text-lg leading-relaxed reveal reveal-fade-up" style={{ transitionDelay: "0.2s" }}>
            {t('servicesCap.sub')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-[#081B33] rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#46B8FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(25,92,207,0.1)] reveal reveal-fade-up"
                style={{ transitionDelay: `${0.1 + index * 0.04}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#195CCF]/20 flex items-center justify-center shrink-0 group-hover:bg-[#195CCF] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#46B8FF] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#46B8FF] transition-colors duration-300">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mt-1">
                      {t(service.descKey)}
                    </p>
                  </div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-16">
                  {t(service.detailsKey).map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <Check className="w-3.5 h-3.5 text-[#46B8FF] mt-1 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
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

export default ServicesCapabilities;