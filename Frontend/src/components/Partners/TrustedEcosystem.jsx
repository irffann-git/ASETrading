import React, { useEffect, useRef, useCallback } from "react";
import { ShieldCheck, Handshake, Briefcase, Headset } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const TrustedEcosystem = () => {
  const { t } = useLanguage();   // <-- ADD

  // ─── Scroll reveal: same ref-callback pattern as FeaturedProjects ───
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    return () => {
      observerRef.current && observerRef.current.disconnect();
    };
  }, []);

  const revealRef = useCallback((node) => {
    if (node && observerRef.current) {
      observerRef.current.observe(node);
    }
  }, []);

  const STATS = [
    {
      id: 1,
      icon: ShieldCheck,
      valueKey: "ecosystem.stat1.value",
      labelKey: "ecosystem.stat1.label",
      sublabelKey: "ecosystem.stat1.sublabel",
    },
    {
      id: 2,
      icon: Handshake,
      valueKey: "ecosystem.stat2.value",
      labelKey: "ecosystem.stat2.label",
      sublabelKey: "ecosystem.stat2.sublabel",
    },
    {
      id: 3,
      icon: Briefcase,
      valueKey: "ecosystem.stat3.value",
      labelKey: "ecosystem.stat3.label",
      sublabelKey: "ecosystem.stat3.sublabel",
    },
    {
      id: 4,
      icon: Headset,
      valueKey: "ecosystem.stat4.value",
      labelKey: "ecosystem.stat4.label",
      sublabelKey: "ecosystem.stat4.sublabel",
    },
  ];

  return (
    <section className="bg-[#020B1D] text-white py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 lg:gap-16 items-center">

        {/* Left: Heading & Copy */}
        <div ref={revealRef} className="reveal reveal-fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {t('ecosystem.heading')}
          </h2>
          <div className="w-14 h-1 bg-[#195CCF] rounded-full mt-4 mb-6" />

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t('ecosystem.p1')}
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-4">
            {t('ecosystem.p2')}
          </p>
        </div>

        {/* Right: Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-5">
          {STATS.map(({ id, icon: Icon, valueKey, labelKey, sublabelKey }, index) => (
            <div
              key={id}
              ref={revealRef}
              className="reveal reveal-fade-up group flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-8 transition-all duration-300 hover:border-[#195CCF]/40 hover:bg-white/[0.04]"
              style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
            >
              <Icon
                size={34}
                strokeWidth={1.75}
                className="text-[#195CCF] transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#195CCF] leading-none">
                  {t(valueKey)}
                </div>
                <div className="mt-3 text-sm font-semibold text-white">
                  {t(labelKey)}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 leading-snug">
                  {t(sublabelKey)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ─── Scroll reveal styles (self-contained) ─── */}
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

export default TrustedEcosystem;