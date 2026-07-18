import React, { useState, useEffect } from "react";   // ✨ NEW: added useEffect
import { Link } from "react-router-dom";
import { MapPin, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

// Sample mock data matching the exact content structure of your design
const CATEGORIES = [
  "All Projects",
  "Enterprise Networking",
  "Data Centers",
  "Cyber Security",
  "Microsoft & Cloud",
  "Electrical Infrastructure",
  "Civil Infrastructure"
];

const PROJECTS_DATA = [
  {
    id: 1,
    category: "Enterprise Networking",
    sector: "Education Sector",
    image: "/NetworkDeployment.jpg", // Replace with your asset path
    title: "Large Campus Network Deployment",
    location: "Eastern Province, KSA",
    year: "2023",
    challenge: "A major educational institution required a secure, unified and high-speed network across multiple campus buildings to support thousands of users.",
    solution: "Designed and deployed a Cisco-based Core-Distribution-Access architecture with a high-speed fiber backbone and more than 300 Wi-Fi 6 access points.",
    results: [
      "99.999% Network Availability",
      "300+ Enterprise Access Points",
      "40% Reduction in Network Management Complexity",
      "Seamless Enterprise Connectivity"
    ]
  },
  {
    id: 2,
    category: "Data Centers",
    sector: "Industrial Sector",
    image: "/IndustrialData.jpg", // Replace with your asset path
    title: "Industrial Data Center Modernization",
    location: "Dammam, KSA",
    year: "2022",
    challenge: "Modernize an aging enterprise data center suffering from poor energy efficiency and unstable infrastructure.",
    solution: "Installed modular UPS systems, precision cooling, VMware-based hyper-converged infrastructure, enterprise storage and disaster recovery solutions.",
    results: [
      "35% Better Energy Efficiency",
      "Tier III Infrastructure Standards",
      "25% Faster Infrastructure Management",
      "Cloud-Ready Architecture"
    ]
  },
  {
    id: 3,
    category: "Cyber Security",
    sector: "Government Sector",
    image: "/SecureNetwork.jpg", // Replace with your asset path
    title: "Secure Network & Security Infrastructure",
    location: "Riyadh, KSA",
    year: "2021",
    challenge: "Government organization required a robust security infrastructure to protect critical data and ensure compliance with regulations.",
    solution: "Implemented next-generation firewalls, SIEM, endpoint protection, secure VPN, and network segmentation across all departments.",
    results: [
      "Zero Major Security Incidents",
      "100% Regulatory Compliance Achieved",
      "Centralized Security Monitoring",
      "Enhanced Threat Detection & Response"
    ]
  }
];

const FeaturedProjects = () => {
  const [activeTab, setActiveTab] = useState("All Projects");

  // ─── ✨ NEW: Scroll reveal effect ────────────────────────────────
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
  // ─── End of scroll reveal ──────────────────────────────────────

  // Filter projects dynamically based on active tab selection
  const filteredProjects = activeTab === "All Projects"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category === activeTab);

  return (
    <section className="bg-[#020B1D] text-white py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-8xl mx-auto">
        
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
              {category}
            </button>
          ))}
        </div>

        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="uppercase tracking-[0.2em] text-[#46B8FF] text-sm font-bold reveal reveal-fade-up">   {/* ✨ NEW */}
            Featured Projects
          </h2>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-[#051129] border border-white/5 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-[#195CCF]/30 hover:shadow-[0_10px_30px_rgba(2,11,29,0.5)] reveal reveal-fade-up"   // ✨ NEW
              style={{ transitionDelay: `${0.1 + index * 0.07}s` }}   // ✨ NEW
            >
              {/* Card Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Sector Badge */}
                <span className="absolute top-4 left-4 bg-[#195CCF] text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md">
                  {project.sector}
                </span>
              </div>

              {/* Card Content Core */}
              <div className="p-6 lg:p-7 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug group-hover:text-[#46B8FF] transition-colors duration-200">
                  {project.title}
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
                      Challenge
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#46B8FF] mb-1">
                      ASE Solution
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Bulleted Results Grid */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#46B8FF] mb-2">
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle2 size={16} className="text-[#46B8FF] shrink-0 mt-0.5" />
                          <span>{result}</span>
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
                    VIEW PROJECT DETAILS
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ─── ✨ NEW: Scroll reveal styles (self-contained) ─── */}
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

export default FeaturedProjects;