import React from "react";
import {
  Building2,
  Cpu,
  Network,
  Award,
  Rocket,
} from "lucide-react";

const timelineData = [
  {
    year: "2004",
    icon: Building2,
    title: "Company Founded",
    description:
      "ASE was established in Dammam, Kingdom of Saudi Arabia with a vision to deliver reliable IT Infrastructure and System Integration solutions.",
  },
  {
    year: "Growth",
    icon: Cpu,
    title: "Technical Excellence",
    description:
      "Built a highly experienced engineering team with internationally certified professionals delivering enterprise technology solutions.",
  },
  {
    year: "Expansion",
    icon: Network,
    title: "Enterprise Solutions",
    description:
      "Expanded capabilities across Networking, Datacenter, Security, Structured Cabling, Microsoft Infrastructure and Integrated IT Solutions.",
  },
  {
    year: "Recognition",
    icon: Award,
    title: "Trusted Technology Partner",
    description:
      "Successfully completed enterprise infrastructure projects while maintaining international quality standards and long-term customer relationships.",
  },
  {
    year: "Today",
    icon: Rocket,
    title: "Complete IT Solutions Provider",
    description:
      "Continuing to empower organizations across Saudi Arabia with secure, scalable and future-ready technology solutions.",
  },
];

const AboutTimeline = () => {
  return (
    <section className="relative bg-[#020B1D] py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#195CCF]/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.25em] text-[#46B8FF] text-sm font-semibold">
            Our Journey
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            Building Trust Through
            <span className="text-[#46B8FF]"> Innovation</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8 text-lg">
            Since our establishment in 2004, ASE has continuously evolved
            into a trusted provider of enterprise IT Infrastructure and
            System Integration solutions across the Kingdom of Saudi Arabia.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line – visible on all screens, position changes */}
          <div className="absolute left-4 lg:left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-[#46B8FF] via-[#195CCF] to-transparent"></div>

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center mb-16 lg:mb-20 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot – positioned on the line */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#46B8FF] border-4 border-[#020B1D] shadow-[0_0_20px_#46B8FF] z-10">
                  <div className="absolute inset-0 rounded-full bg-[#46B8FF]/30 animate-ping" />
                </div>

                {/* Card – positioned to the right on mobile, alternating on desktop */}
                <div className="w-full lg:w-1/2 pl-12 lg:pl-0">
                  <div
                    className={`${
                      isLeft
                        ? "lg:pr-14"
                        : "lg:pl-14"
                    }`}
                  >
                    <div className="bg-[#081B33] border border-white/10 rounded-3xl p-8 hover:border-[#195CCF] transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(25,92,207,.20)]">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#195CCF]/10 flex items-center justify-center">
                          <Icon className="text-[#46B8FF]" size={28} />
                        </div>
                        <div>
                          <p className="text-[#46B8FF] font-bold">{item.year}</p>
                          <h3 className="text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-slate-400 leading-8">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty spacer for desktop alternating layout */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;