import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

// Category translation keys mapping
const CATEGORY_KEYS = {
  "All Projects": "projectsPage.categories.all",
  "Enterprise Networking": "projectsPage.categories.networking",
  "Data Centers": "projectsPage.categories.datacenter",
  "Cyber Security": "projectsPage.categories.security",
  "Microsoft & Cloud": "projectsPage.categories.cloud",
  "Electrical Infrastructure": "projectsPage.categories.electrical",
  "Civil Infrastructure": "projectsPage.categories.civil",
};

// Original categories list for state management (using English strings)
const CATEGORIES = Object.keys(CATEGORY_KEYS);

// Project data with translation keys
const PROJECTS_DATA = [
  {
    id: 1,
    category: "Enterprise Networking",
    sectorKey: "projectsPage.project1.sector",
    image: "/NetworkDeployment.jpg",
    titleKey: "projectsPage.project1.title",
    location: "Eastern Province, KSA",   // can be kept as is, or translated if needed
    year: "2023",
    challengeKey: "projectsPage.project1.challenge",
    solutionKey: "projectsPage.project1.solution",
    resultsKeys: [
      "projectsPage.project1.result1",
      "projectsPage.project1.result2",
      "projectsPage.project1.result3",
      "projectsPage.project1.result4",
    ],
  },
  {
    id: 2,
    category: "Data Centers",
    sectorKey: "projectsPage.project2.sector",
    image: "/IndustrialData.jpg",
    titleKey: "projectsPage.project2.title",
    location: "Dammam, KSA",
    year: "2022",
    challengeKey: "projectsPage.project2.challenge",
    solutionKey: "projectsPage.project2.solution",
    resultsKeys: [
      "projectsPage.project2.result1",
      "projectsPage.project2.result2",
      "projectsPage.project2.result3",
      "projectsPage.project2.result4",
    ],
  },
  {
    id: 3,
    category: "Cyber Security",
    sectorKey: "projectsPage.project3.sector",
    image: "/SecureNetwork.jpg",
    titleKey: "projectsPage.project3.title",
    location: "Riyadh, KSA",
    year: "2021",
    challengeKey: "projectsPage.project3.challenge",
    solutionKey: "projectsPage.project3.solution",
    resultsKeys: [
      "projectsPage.project3.result1",
      "projectsPage.project3.result2",
      "projectsPage.project3.result3",
      "projectsPage.project3.result4",
    ],
  },
];

const FeaturedProjects = () => {
  const { t } = useLanguage();   // <-- ADD
  const [activeTab, setActiveTab] = useState("All Projects");

  // ─── Scroll reveal: one persistent observer, attached via ref callback ───
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

  // Filter projects dynamically based on active tab selection
  const filteredProjects = activeTab === "All Projects"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category === activeTab);

  return (
    <section className="bg-[#020B1D] text-white py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar scroll-smooth">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                activeTab === category
                  ? "bg-[#195CCF] border-[#195CCF] text-white shadow-[0_4px_20px_rgba(25,92,207,0.25)]"
                  : "bg-[#06132D] border-white/5 text-slate-400 hover:text-white hover:border-white/10"
              }`}
            >
              {t(CATEGORY_KEYS[category])}
            </button>
          ))}
        </div>

        {/* Section Heading */}
        <div className="mb-8">
          <h2
            ref={revealRef}
            className="uppercase tracking-[0.2em] text-[#46B8FF] text-sm font-bold reveal reveal-fade-up"
          >
            {t('projectsPage.badge')}
          </h2>
        </div>

        {/* Empty state when a category has no matching projects */}
        {filteredProjects.length === 0 ? (
          <p className="text-slate-400 text-sm">{t('projectsPage.emptyMessage')}</p>
        ) : (
          /* Responsive Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={revealRef}
                className="group flex flex-col bg-[#051129] border border-white/5 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-[#195CCF]/30 hover:shadow-[0_10px_30px_rgba(2,11,29,0.5)] reveal reveal-fade-up"
                style={{ transitionDelay: `${0.1 + index * 0.07}s` }}
              >
                {/* Card Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Sector Badge */}
                  <span className="absolute top-4 left-4 bg-[#195CCF] text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md">
                    {t(project.sectorKey)}
                  </span>
                </div>

                {/* Card Content Core */}
                <div className="p-6 lg:p-7 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug group-hover:text-[#46B8FF] transition-colors duration-200">
                    {t(project.titleKey)}
                  </h3>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-xs sm:text-sm text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={15} className="text-[#46B8FF]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={15} className="text-[#46B8FF]" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Segment Details */}
                  <div className="mt-6 space-y-4 flex-grow">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#46B8FF] mb-1">
                        {t('projectsPage.card.challenge')}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {t(project.challengeKey)}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#46B8FF] mb-1">
                        {t('projectsPage.card.solution')}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {t(project.solutionKey)}
                      </p>
                    </div>

                    {/* Bulleted Results Grid */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#46B8FF] mb-2">
                        {t('projectsPage.card.results')}
                      </h4>
                      <ul className="space-y-2">
                        {project.resultsKeys.map((resultKey, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                            <CheckCircle2 size={16} className="text-[#46B8FF] shrink-0 mt-0.5" />
                            <span>{t(resultKey)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Button Action */}
                  <div className="mt-8 pt-4 border-t border-white/5">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#091B3A] border border-white/10 text-white font-semibold text-sm transition-all duration-300 hover:bg-[#195CCF] hover:border-[#195CCF] group/btn"
                    >
                      {t('projectsPage.card.btn')}
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

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
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;