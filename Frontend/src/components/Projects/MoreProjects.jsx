import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const MoreProjects = () => {
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

  const MORE_PROJECTS_DATA = [
    {
      id: 4,
      image: "/HospitalityNetwork.jpg",
      titleKey: "moreProjects.project4.title",
      locationKey: "moreProjects.project4.location",
      year: "2022",
    },
    {
      id: 5,
      image: "/ElectricalInfrastructure.jpg",
      titleKey: "moreProjects.project5.title",
      locationKey: "moreProjects.project5.location",
      year: "2023",
    },
    {
      id: 6,
      image: "/IPSurveillance.jpg",
      titleKey: "moreProjects.project6.title",
      locationKey: "moreProjects.project6.location",
      year: "2022",
    },
    {
      id: 7,
      image: "/CloudMigration.jpg",
      titleKey: "moreProjects.project7.title",
      locationKey: "moreProjects.project7.location",
      year: "2023",
    },
  ];

  return (
    <section className="bg-[#020B1D] text-white py-12 md:py-16 px-5 sm:px-8 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-8xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="uppercase tracking-[0.2em] text-[#46B8FF] text-sm font-bold reveal reveal-fade-up">
            {t('moreProjects.badge')}
          </h2>
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {MORE_PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              className="group flex flex-col bg-[#051129] border border-white/5 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-[#195CCF]/30 hover:-translate-y-1 reveal reveal-fade-up"
              style={{ transitionDelay: `${0.1 + index * 0.06}s` }}
            >
              {/* Card Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-[#46B8FF] transition-colors duration-200 line-clamp-2">
                  {t(project.titleKey)}
                </h3>

                {/* Location and Date Metadata */}
                <div className="flex items-center gap-4 mt-3 text-xs text-slate-400 border-t border-white/5 pt-3">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <MapPin size={14} className="text-[#46B8FF] shrink-0" />
                    <span className="truncate">{t(project.locationKey)}</span>
                  </div>
                  <div className="flex items-center gap-1.5 ml-auto shrink-0">
                    <Calendar size={14} className="text-[#46B8FF]" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Bottom Action Button */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-lg bg-[#051129] border border-white/10 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-[#195CCF] hover:border-[#195CCF] group reveal reveal-fade-up"
            style={{ transitionDelay: "0.4s" }}
          >
            {t('moreProjects.btn')}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
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

export default MoreProjects;