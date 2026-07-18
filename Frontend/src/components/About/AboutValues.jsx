import React, { useEffect } from "react";   // ✨ NEW: added useEffect
import { Eye, Target, Gem, Check, Quote } from "lucide-react";

const AboutMessage = () => {
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
    <section className="relative w-full py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#030712] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Experience paragraph – optional, but we can keep it as is (no reveal) */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          {/* empty, but we leave it */}
        </div>

        {/* Three columns: Vision, Mission, Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Vision */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] group reveal reveal-fade-up" style={{ transitionDelay: "0.1s" }}>   {/* ✨ NEW */}
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Eye className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Vision</h3>
            <p className="text-slate-400 leading-relaxed">
             To be the undisputed leader and most trusted System Integrator and IT Infrastructure provider in the Kingdom of Saudi Arabia and the wider MENA region, recognized for innovation, service excellence, and sustainable digital transformation.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] group reveal reveal-fade-up" style={{ transitionDelay: "0.2s" }}>   {/* ✨ NEW */}
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Target className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Mission</h3>
            <p className="text-slate-400 leading-relaxed">
                To deliver professional, reliable, and innovative IT and electromechanical solutions by combining certified expertise, international quality standards, and long-term customer partnerships that drive business success.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] group reveal reveal-fade-up" style={{ transitionDelay: "0.3s" }}>   {/* ✨ NEW */}
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Gem className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Core Values</h3>
            <ul className="space-y-2.5">
              {[
                "Integrity",
                "Excellence",
                "Innovation",
                "Commitment",
                "Customer Focus",
                "Accountability",
                "Continuous Improvement"
              ].map((value, index) => (
                <li key={index} className="flex items-start gap-2.5 text-slate-300">
                  <Check className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
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

export default AboutMessage;