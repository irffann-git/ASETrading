import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  ShieldCheck,
  Rocket,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const WhyChooseAse = () => {
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

  const features = [
    {
      icon: Users,
      titleKey: "whyChoose.feature1",
      descKey: "whyChoose.feature1.desc",
      link: "/about",
    },
    {
      icon: ShieldCheck,
      titleKey: "whyChoose.feature2",
      descKey: "whyChoose.feature2.desc",
      link: "/about",
    },
    {
      icon: Rocket,
      titleKey: "whyChoose.feature3",
      descKey: "whyChoose.feature3.desc",
      link: "/about",
    },
    {
      icon: Briefcase,
      titleKey: "whyChoose.feature4",
      descKey: "whyChoose.feature4.desc",
      link: "/about",
    },
  ];

  return (
    <section className="relative bg-[#020B1D] py-16 md:py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#195CCF]/5 rounded-full blur-[180px]" />

      <div className="relative max-w-8xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="uppercase tracking-[0.25em] text-[#46B8FF] text-sm font-semibold reveal reveal-fade-up">
            {t('whyChoose.badge')}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>
            {t('whyChoose.heading')}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46B8FF] to-[#195CCF]">
              {t('whyChoose.highlight')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#46B8FF] to-[#195CCF] mx-auto mt-5 rounded-full" />
        </div>

        {/* Features Grid - 4 cards in a line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#081B33] rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#46B8FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(25,92,207,0.1)] overflow-hidden reveal reveal-fade-up"
                style={{ transitionDelay: `${0.1 + index * 0.06}s` }}
              >
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#195CCF]/5 to-transparent" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#195CCF]/20 flex items-center justify-center mb-5 group-hover:bg-[#195CCF] transition-colors duration-300">
                    <Icon
                      size={28}
                      className="text-[#46B8FF] group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Title with number */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#46B8FF] font-bold text-sm opacity-60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#46B8FF] transition-colors duration-300">
                      {t(feature.titleKey)}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {t(feature.descKey)}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    to={feature.link}
                    className="inline-flex items-center gap-2 text-[#46B8FF] font-semibold text-sm mt-4 hover:text-white transition-colors duration-300 group/link"
                  >
                    {t('whyChoose.learnMore')}
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
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

export default WhyChooseAse;