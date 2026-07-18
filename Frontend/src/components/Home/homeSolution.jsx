// Solutions.jsx – 5 cards in a row on large screens
import { Link } from "react-router-dom";
import {
  Shield,
  Network,
  Server,
  Cloud,
  Monitor,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";   // ✨ NEW

const HomeSolutions = () => {
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

  const solutions = [
    {
      icon: Shield,
      title: "Cyber Security",
      description:
        "Protect your business with advanced security solutions.",
    },
    {
      icon: Network,
      title: "Network Solutions",
      description:
        "Reliable, scalable & high-performance network infrastructure.",
    },
    {
      icon: Server,
      title: "Data Center",
      description:
        "Modern data center design, deployment & management.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Enable agility and scalability with our cloud services.",
    },
    {
      icon: Monitor,
      title: "Microsoft Solutions",
      description:
        "Transform with Microsoft technologies & cloud platforms.",
    },
  ];

  return (
    <section className="relative py-6 md:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background – from Background to Secondary Background to Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020B1D] via-[#071427] to-[#0B162C]"></div>

      {/* Subtle glow overlay */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(13,78,167,0.45),transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-[#00CFFF] text-sm font-semibold tracking-widest uppercase reveal reveal-fade-up">   {/* ✨ NEW */}
              Our Solutions
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white leading-tight reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>   {/* ✨ NEW */}
              Complete IT Solutions <br />
              <span className="text-[#0D4EA7]">for Every Need</span>
            </h2>
          </div>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-[#0D4EA7] font-semibold hover:text-[#1565D8] transition-colors duration-200 group reveal reveal-fade-up"   // ✨ NEW
            style={{ transitionDelay: "0.2s" }}   // ✨ NEW
          >
            View All Solutions
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Grid – 5 cards in a row on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {solutions.map((sol, index) => (
            <div
              key={index}
              className="bg-[#0B162C] border border-[rgba(255,255,255,0.10)] rounded-xl p-6 text-center hover:shadow-[0_0_30px_rgba(0,207,255,0.25)] transition-all duration-300 hover:-translate-y-1 group reveal reveal-fade-up"   // ✨ NEW
              style={{ transitionDelay: `${0.1 + index * 0.08}s` }}   // ✨ NEW
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#0D4EA7]/20 text-[#00CFFF] mb-4 group-hover:bg-[#0D4EA7] group-hover:text-white transition-all duration-300">
                <sol.icon size={24} />
              </div>

              <h3 className="text-white font-bold text-lg mb-2">
                {sol.title}
              </h3>

              <p className="text-[#B8C4D9] text-sm leading-relaxed">
                {sol.description}
              </p>
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

export default HomeSolutions;