import React, { useEffect, useRef, useCallback } from "react";
import { Network, ShieldCheck, Cloud, Server } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

// ─── Partner data (update logo paths with your actual files) ───
const CATEGORIES = [
  {
    id: 1,
    icon: Network,
    titleKey: "partnerCategories.networking",
    partners: [
      { name: "Cisco", logo: "/cisco.png" },
      { name: "Juniper Networks", logo: "/juniper.png" },
      { name: "Huawei", logo: "/Huawei.png" },
    ],
  },
  {
    id: 2,
    icon: ShieldCheck,
    titleKey: "partnerCategories.security",
    partners: [
      { name: "F5", logo: "/f5.png" },
      { name: "SonicWall", logo: "/sonicwall.png" },
    ],
  },
  {
    id: 3,
    icon: Cloud,
    titleKey: "partnerCategories.cloud",
    partners: [
      { name: "Microsoft", logo: "/microsoft.png" },
      { name: "VMware", logo: "/VMware.png" },
    ],
  },
  {
    id: 4,
    icon: Server,
    titleKey: "partnerCategories.infrastructure",
    partners: [
      { name: "Dell Technologies", logo: "/Dell.png" },
      { name: "HP", logo: "/hp.png" },
    ],
  },
];

const PartnerCategories = () => {
  const { t } = useLanguage();   // <-- ADD

  // ─── Scroll reveal (same as before) ─────────────────────────────
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const revealRef = useCallback((node) => {
    if (node && observerRef.current) {
      observerRef.current.observe(node);
    }
  }, []);

  // ─── Render ──────────────────────────────────────────────────────
  return (
    <section className="bg-white py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20 rounded-t-3xl">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Heading */}
        <div ref={revealRef} className="reveal reveal-fade-up text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#195CCF]">
            {t('partnerCategories.heading')}
          </h2>
          <div className="w-14 h-1 bg-[#195CCF] rounded-full mx-auto mt-4" />
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {CATEGORIES.map(({ id, icon: Icon, titleKey, partners }, index) => (
            <div
              key={id}
              ref={revealRef}
              className="reveal reveal-fade-up group flex flex-col rounded-2xl bg-gray-50 border border-gray-200 px-6 py-8 transition-all duration-300 hover:shadow-lg hover:border-[#195CCF]/40"
              style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
            >
              {/* Category Header */}
              <div className="flex justify-center items-center gap-2.5 mb-8">
                <Icon size={20} strokeWidth={1.75} className="text-[#195CCF] shrink-0" />
                <h3 className="text-base font-semibold text-gray-800">{t(titleKey)}</h3>
              </div>

              {/* Partner Logos */}
              <div className="flex flex-1 justify-center items-center gap-6 mb-8 flex-wrap">
                {partners.map((partner) => (
                  <img
                    key={partner.name}
                    src={partner.logo}
                    alt={partner.name}
                    title={partner.name}
                    className="h-8 sm:h-9 w-auto max-w-[110px] object-contain transition-opacity duration-300 group-hover:opacity-80"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Scroll reveal styles ──────────────────────────────────── */}
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

export default PartnerCategories;