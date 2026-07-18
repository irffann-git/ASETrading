import { useEffect } from "react";   // ✨ NEW: added useEffect
import {
  Award,
  ShieldCheck,
  Users,
  Globe,
  Headphones,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "20+ Years Experience",
    description:
      "Delivering enterprise IT infrastructure and system integration solutions since 2004.",
  },
  {
    icon: ShieldCheck,
    title: "International Standards",
    description:
      "Solutions designed and delivered following global quality and safety standards.",
  },
  {
    icon: Cpu,
    title: "Certified Experts",
    description:
      "Highly experienced engineers certified across leading global technology platforms.",
  },
  {
    icon: Globe,
    title: "Global Technology Partners",
    description:
      "Working with world-leading vendors including Cisco, Microsoft, Dell, VMware, Huawei and Juniper.",
  },
  {
    icon: Users,
    title: "Trusted Partnerships",
    description:
      "Building long-term customer relationships through commitment, quality and reliability.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    description:
      "Professional consultation, implementation, maintenance and continuous technical support.",
  },
];

const AboutWhyChoose = () => {
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
    <section className="relative bg-[#020B1D] py-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#195CCF]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.25em] text-[#46B8FF] text-sm font-semibold reveal reveal-fade-up">   {/* ✨ NEW */}
            Why Choose ASE
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>   {/* ✨ NEW */}
            Delivering Technology
            <span className="text-[#46B8FF]"> Excellence </span>
            Since 2004
          </h2>
          <div className="w-24 h-1 bg-[#46B8FF] mx-auto mt-6 rounded-full reveal" style={{ transitionDelay: "0.15s" }} />   {/* ✨ NEW */}
          <p className="mt-6 text-slate-300 text-lg leading-8 max-w-2xl mx-auto reveal reveal-fade-up" style={{ transitionDelay: "0.2s" }}>   {/* ✨ NEW */}
            ASE combines certified expertise, global technology partnerships
            and over two decades of experience to deliver reliable,
            scalable and future-ready IT infrastructure solutions.
          </p>
        </div>

        {/* Cards – standard corporate design */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-[#081B33] rounded-2xl p-8 border border-white/10 hover:border-[#46B8FF] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg reveal reveal-fade-up"   // ✨ NEW
                style={{ transitionDelay: `${0.1 + index * 0.06}s` }}   // ✨ NEW
              >
                <div className="w-14 h-14 rounded-xl bg-[#195CCF]/20 flex items-center justify-center mb-6 group-hover:bg-[#195CCF]/40 transition-colors duration-300">
                  <Icon size={28} className="text-[#46B8FF] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
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

export default AboutWhyChoose;