// HomeServices.jsx – Small cards in one horizontal row (scrollable on mobile)
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const HomeServices = () => {
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

  const services = [
    {
      titleKey: "services.security",
      image: "/it_infrastructure.jpg",
    },
    {
      titleKey: "services.datacenter",
      image: "/Intelligent_Datacenter.jpg",
    },
    {
      titleKey: "services.switching",
      image: "/switching.jpg",
    },
    {
      titleKey: "services.cabling",
      image: "/LV_Electrical.jpg",
    },
    {
      titleKey: "services.panel",
      image: "/Electrical_Panel.jpg",
    },
    {
      titleKey: "services.microsoftCore",
      image: "/Microsoft_Core.jpg",
    },
    {
      titleKey: "services.civil",
      image: "/civil_work.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#F6F8FC] rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <span className="text-[#0D4EA7] text-sm font-semibold tracking-widest uppercase reveal reveal-fade-up">
              {t('services.badge')}
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-[#1B2430] leading-tight reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>
              {t('services.heading')} <br />
              <span className="text-[#0D4EA7]">{t('services.highlight')}</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-[#0D4EA7] font-semibold hover:text-[#1565D8] transition-colors duration-200 group reveal reveal-fade-up"
            style={{ transitionDelay: "0.2s" }}
          >
            {t('services.viewAll')}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Horizontal row – small cards, scrollable on mobile */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-4 w-max">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden border-3 border-[#0D4EA7] shadow-md transition-all duration-300 flex-shrink-0 w-56 reveal reveal-fade-up"
                style={{ transitionDelay: `${0.1 + index * 0.06}s` }}
              >
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="w-56 h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay – smaller padding and font */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D]/80 via-[#020B1D]/40 to-transparent flex items-end p-3">
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {t(service.titleKey)}
                  </h3>
                </div>
              </div>
            ))}
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

export default HomeServices;