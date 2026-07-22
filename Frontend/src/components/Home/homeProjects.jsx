import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const HomeProjects = () => {
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

  const projects = [
    {
      titleKey: "projects.project1.title",
      descKey: "projects.project1.desc",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      link: "/projects/campus-network",
    },
    {
      titleKey: "projects.project2.title",
      descKey: "projects.project2.desc",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      link: "/projects/industrial-data-center",
    },
    {
      titleKey: "projects.project3.title",
      descKey: "projects.project3.desc",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      link: "/projects/cloud-migration",
    },
    {
      titleKey: "projects.project4.title",
      descKey: "projects.project4.desc",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80",
      link: "/projects/retail-pos-upgrade",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="text-[#1D4ED8] text-xs font-bold tracking-widest uppercase reveal reveal-fade-up">
              {t('projects.badge')}
            </span>
            <h2 className="mt-2 text-3xl md:text-[2.25rem] font-bold text-[#0A0A23] leading-tight reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>
              {t('projects.heading')}
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-[#1D4ED8] text-sm font-semibold whitespace-nowrap hover:text-[#1E40AF] transition-colors duration-200 reveal reveal-fade-up"
            style={{ transitionDelay: "0.2s" }}
          >
            {t('projects.viewAll')}
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Cards – responsive: slider on mobile, grid on larger screens */}
        <div
          className="
            flex flex-nowrap overflow-x-auto gap-4 snap-x snap-mandatory pb-4 -mx-4 px-4
            sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0
            scrollbar-hide
          "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                min-w-[280px] w-[85%] flex-shrink-0 snap-start
                sm:w-auto sm:min-w-0 sm:flex-shrink
                bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group
                reveal reveal-fade-up
              "
              style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[#0A0A23] text-base font-bold leading-snug">
                  {t(project.titleKey)}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2">
                  {t(project.descKey)}
                </p>
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-1.5 text-[#1D4ED8] text-sm font-semibold mt-4 hover:text-[#1E40AF] transition-colors duration-200"
                >
                  {t('projects.cta')}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
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

export default HomeProjects;