import React, { useEffect } from "react";   // ✨ NEW: added useEffect
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const solutionsData = [
  {
    id: "01",
    title: "Enterprise Network Infrastructure",
    description:
      "Design, implement and optimize secure, reliable and scalable network infrastructures that enable seamless connectivity across your organization.",
    features: [
      "Enterprise LAN & WAN",
      "Core Switching",
      "Routing",
      "Wireless Networks",
      "Network Optimization",
    ],
    link: "/solutions/enterprise-network",
    bgImage: "/netwokingcard.png",
  },
  {
    id: "02",
    title: "Cyber Security Solutions",
    description:
      "Protect your digital assets with intelligent cybersecurity solutions that defend against evolving threats and ensure business continuity.",
    features: [
      "Firewall Security",
      "Endpoint Protection",
      "Threat Detection",
      "Security Monitoring",
      "Risk Assessment",
    ],
    link: "/solutions/cyber-security",
    bgImage: "/cybersecuritycard.png",
  },
  {
    id: "03",
    title: "Intelligent Data Center Solutions",
    description:
      "Build resilient, high-performance and highly available data center environments that support mission-critical business operations.",
    features: [
      "Servers",
      "Enterprise Storage",
      "Virtualization",
      "Backup",
      "Disaster Recovery",
    ],
    link: "/solutions/data-center",
    bgImage: "/intelligentdata.png",
  },
  {
    id: "04",
    title: "Cloud & Microsoft Solutions",
    description:
      "Modernize your workplace with Microsoft technologies and cloud platforms that improve productivity, collaboration and scalability.",
    features: [
      "Microsoft 365",
      "Azure",
      "Active Directory",
      "Exchange",
      "Windows Server",
    ],
    link: "/solutions/cloud-microsoft",
    bgImage: "/cloudmicro.png",
  },
  {
    id: "05",
    title: "Structured Cabling Solutions",
    description:
      "Build a reliable communication backbone using certified structured cabling systems designed for voice, data and video applications.",
    features: [
      "Fiber Optic",
      "Cat6 / Cat6A / Cat7",
      "Network Cabinets",
      "Cable Management",
      "Testing & Certification",
    ],
    link: "/solutions/structured-cabling",
    bgImage: "/cablesolution.png",
  },
  {
    id: "06",
    title: "Integrated Infrastructure Solutions",
    description:
      "Deliver complete infrastructure solutions by integrating electrical systems and civil works into a single, efficient ecosystem.",
    features: [
      "Electrical Infrastructure",
      "Panel Boards (MDB/SMDB)",
      "Power Distribution",
      "Civil Works",
      "Trenching & Backfilling",
    ],
    link: "/solutions/integrated-infrastructure",
    bgImage: "/integrated.png",
  },
];

const SolutionsGrid = () => {
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

  return (
    <section className="relative bg-[#020B1D] py-16 md:py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#195CCF]/5 rounded-full blur-[180px]" />

      <div className="relative max-w-8xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="uppercase tracking-[0.25em] text-[#46B8FF] text-sm font-semibold reveal reveal-fade-up">   {/* ✨ NEW */}
            Our Complete Solutions
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>   {/* ✨ NEW */}
            Integrated Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46B8FF] to-[#195CCF]">
              Every Business Need
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#46B8FF] to-[#195CCF] mx-auto mt-5 rounded-full" />   {/* no reveal needed */}
        </div>

        {/* Solutions Grid – wider cards, better image visibility */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {solutionsData.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-[#081B33] rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#46B8FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(25,92,207,0.1)] overflow-hidden reveal reveal-fade-up"   // ✨ NEW
              style={{ transitionDelay: `${0.1 + index * 0.05}s` }}   // ✨ NEW
            >
              {/* Background Image – unique per card, now more visible */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${solution.bgImage})`
                }}
              />

              {/* Overlay – softer, shows image better */}
              <div 
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(circle at 0% 0%, rgba(8,27,51,0.85) 0%, rgba(8,27,51,0.5) 50%, rgba(8,27,51,0.15) 80%, transparent 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#195CCF]/20 text-[#46B8FF] font-bold text-lg group-hover:bg-[#195CCF] group-hover:text-white transition-colors duration-300 mb-5">
                  {solution.id}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#46B8FF] transition-colors duration-300">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-200 text-sm">
                      <Check className="w-4 h-4 text-[#46B8FF] mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  to={solution.link}
                  className="inline-flex items-center gap-2 text-[#46B8FF] font-semibold hover:text-white transition-colors duration-300 group/link"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform duration-300"
                  />
                </Link>
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

export default SolutionsGrid;