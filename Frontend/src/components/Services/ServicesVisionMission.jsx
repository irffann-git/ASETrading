import React from "react";
import { Eye, Target, Gem, Check } from "lucide-react";

const ServicesVisionMission = () => {
  const values = [
    "Integrity",
    "Excellence",
    "Innovation",
    "Commitment",
    "Customer Focus",
  ];

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#195CCF] via-[#46B8FF] to-[#195CCF] opacity-20" />

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#195CCF]/5 rounded-full blur-[180px]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#195CCF]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#46B8FF]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Vision */}
          <div className="group bg-[#081B33] rounded-2xl p-8 border border-white/10 hover:border-[#46B8FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(25,92,207,0.1)]">
            <div className="w-14 h-14 rounded-xl bg-[#195CCF]/20 flex items-center justify-center mb-5 group-hover:bg-[#195CCF] transition-colors duration-300">
              <Eye className="w-7 h-7 text-[#46B8FF] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#46B8FF] transition-colors duration-300">
              Vision
            </h3>
            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
              To be the undisputed leader and most trusted system integrator
              and IT infrastructure provider in the Kingdom and the wider
              MENA region, recognized for innovation, service excellence,
              and delivering sustainable digital transformation.
            </p>
          </div>

          {/* Mission */}
          <div className="group bg-[#081B33] rounded-2xl p-8 border border-white/10 hover:border-[#46B8FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(25,92,207,0.1)]">
            <div className="w-14 h-14 rounded-xl bg-[#195CCF]/20 flex items-center justify-center mb-5 group-hover:bg-[#195CCF] transition-colors duration-300">
              <Target className="w-7 h-7 text-[#46B8FF] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#46B8FF] transition-colors duration-300">
              Mission
            </h3>
            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
              To provide professional, positive, and unparalleled high-tech
              service orientation by serving as the essential link between
              technology and business results.
            </p>
          </div>

          {/* Core Values */}
          <div className="group bg-[#081B33] rounded-2xl p-8 border border-white/10 hover:border-[#46B8FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(25,92,207,0.1)]">
            <div className="w-14 h-14 rounded-xl bg-[#195CCF]/20 flex items-center justify-center mb-5 group-hover:bg-[#195CCF] transition-colors duration-300">
              <Gem className="w-7 h-7 text-[#46B8FF] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#46B8FF] transition-colors duration-300">
              Core Values
            </h3>
            <ul className="space-y-2">
              {values.map((value, index) => (
                <li key={index} className="flex items-start gap-2.5 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  <Check className="w-4 h-4 text-[#46B8FF] mt-1 shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesVisionMission;