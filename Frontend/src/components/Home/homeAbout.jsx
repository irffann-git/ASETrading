// About.jsx
import { Link } from "react-router-dom";
import { Award, Globe, Heart, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const HomeAbout = () => {
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
    <section className="bg-[#F6F8FC] py-16 md:py-24 px-4 sm:px-6 lg:px-8 rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Top: label, heading, description, and link */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <span className="text-[#195CCF] text-sm font-semibold tracking-widest uppercase reveal reveal-fade-up">
              {t('about.badge')}
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1B2430] leading-tight reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>
              {t('about.heading.prefix')} <br />
              <span className="text-[#195CCF]">{t('about.heading.highlight')}</span>
            </h2>
            <p className="mt-5 text-[#6E7B8F] text-base md:text-lg leading-relaxed max-w-xl reveal reveal-fade-up" style={{ transitionDelay: "0.2s" }}>
              {t('about.description')}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-[#195CCF] font-semibold hover:text-[#2E7BFF] transition-colors duration-200 group reveal reveal-fade-up"
              style={{ transitionDelay: "0.3s" }}
            >
              {t('about.link')}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Right column: three feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-[#DCE6F2] hover:shadow-md transition-shadow duration-200 reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#195CCF]/10 text-[#195CCF] flex-shrink-0">
                <Award size={20} />
              </div>
              <div>
                <h3 className="text-[#1B2430] font-bold text-lg">{t('about.card1.title')}</h3>
                <p className="text-[#6E7B8F] text-sm mt-1">{t('about.card1.desc')}</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-[#DCE6F2] hover:shadow-md transition-shadow duration-200 reveal reveal-fade-up" style={{ transitionDelay: "0.2s" }}>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#195CCF]/10 text-[#195CCF] flex-shrink-0">
                <Globe size={20} />
              </div>
              <div>
                <h3 className="text-[#1B2430] font-bold text-lg">{t('about.card2.title')}</h3>
                <p className="text-[#6E7B8F] text-sm mt-1">{t('about.card2.desc')}</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-[#DCE6F2] hover:shadow-md transition-shadow duration-200 reveal reveal-fade-up" style={{ transitionDelay: "0.3s" }}>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#195CCF]/10 text-[#195CCF] flex-shrink-0">
                <Heart size={20} />
              </div>
              <div>
                <h3 className="text-[#1B2430] font-bold text-lg">{t('about.card3.title')}</h3>
                <p className="text-[#6E7B8F] text-sm mt-1">{t('about.card3.desc')}</p>
              </div>
            </div>
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

export default HomeAbout;