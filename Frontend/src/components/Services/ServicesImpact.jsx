import React, { useState, useEffect, useRef } from "react";
import {
  Activity,
  BarChart3,
  Zap,
  Gauge,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const ServicesImpact = () => {
  const { t } = useLanguage();   // <-- ADD

  const metrics = [
    {
      value: "99.999%",
      labelKey: "impact.metric1.label",
      descKey: "impact.metric1.desc",
      icon: Activity,
      color: "#46B8FF",
    },
    {
      value: "40%",
      labelKey: "impact.metric2.label",
      descKey: "impact.metric2.desc",
      icon: BarChart3,
      color: "#2ECC71",
    },
    {
      value: "35%",
      labelKey: "impact.metric3.label",
      descKey: "impact.metric3.desc",
      icon: Zap,
      color: "#F1C40F",
    },
    {
      value: "25%",
      labelKey: "impact.metric4.label",
      descKey: "impact.metric4.desc",
      icon: Gauge,
      color: "#E74C3C",
    },
  ];

  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // ─── Existing observer for metrics ──────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  // ─── Scroll reveal effect for header elements ────────────────────
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
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden "
      style={{
        background: "radial-gradient(ellipse at 50% 0%, #0A1628 0%, #020B1D 70%, #010712 100%)",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none "
        style={{
          backgroundImage: `linear-gradient(rgba(70, 184, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(70, 184, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#195CCF]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#46B8FF]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#195CCF]/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="uppercase tracking-[0.25em] text-[#46B8FF] text-sm font-semibold reveal reveal-fade-up">
            {t('impact.badge')}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>
            {t('impact.heading.prefix')}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46B8FF] to-[#195CCF]">
              {t('impact.heading.highlight')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#46B8FF] to-[#195CCF] mx-auto mt-5 rounded-full" />
          <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto reveal reveal-fade-up" style={{ transitionDelay: "0.2s" }}>
            {t('impact.sub')}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const delay = hasAnimated ? index * 100 : 0;

            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 transform ${
                  hasAnimated
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Glass Card */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#46B8FF]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(25,92,207,0.15)] overflow-hidden">
                  
                  {/* Glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#195CCF]/10 via-transparent to-[#46B8FF]/5" />

                  {/* Accent line at top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300 group-hover:h-1.5"
                    style={{ backgroundColor: metric.color }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${metric.color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: metric.color }} />
                      </div>
                      <span className="text-slate-500 text-sm font-medium">{t('impact.cardLabel')}</span>
                    </div>

                    {/* Value */}
                    <div className="mb-2">
                      <span
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                        style={{ color: metric.color }}
                      >
                        {metric.value}
                      </span>
                    </div>

                    {/* Label */}
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#46B8FF] transition-colors duration-300">
                      {t(metric.labelKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {t(metric.descKey)}
                    </p>

                    {/* Decorative progress bar */}
                    <div className="mt-4 w-full h-0.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 group-hover:w-full"
                        style={{
                          width: hasAnimated ? "100%" : "0%",
                          backgroundColor: metric.color,
                          transitionDelay: `${delay + 300}ms`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#46B8FF]/30 transition-all duration-300 reveal reveal-fade-up" style={{ transitionDelay: "0.3s" }}>
            <TrendingUp className="w-4 h-4 text-[#46B8FF]" />
            <span className="text-slate-300 text-sm">
              {t('impact.callout', { count: 50 })}
            </span>
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

export default ServicesImpact;