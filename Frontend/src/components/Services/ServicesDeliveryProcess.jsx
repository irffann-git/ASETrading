import React from "react";
import {
  Search,
  PenTool,
  Workflow,
  CheckCircle,
  Rocket,
  Headphones,
} from "lucide-react";

const ServicesDeliveryProcess = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Consultation",
      description:
        "We begin by understanding your business objectives, technical challenges, existing infrastructure, and future growth plans to define the most effective solution.",
    },
    {
      number: "02",
      icon: PenTool,
      title: "Solution Design",
      description:
        "Our engineers design a secure, scalable, and cost-effective solution tailored to your operational and technical requirements while following industry best practices.",
    },
    {
      number: "03",
      icon: Workflow,
      title: "Implementation & Integration",
      description:
        "Certified specialists deploy, configure, and integrate all systems with minimal disruption, ensuring seamless compatibility with your existing infrastructure.",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Testing & Quality Assurance",
      description:
        "Every component undergoes comprehensive testing, performance validation, security verification, and quality checks before project handover.",
    },
    {
      number: "05",
      icon: Rocket,
      title: "Deployment & Training",
      description:
        "The completed solution is commissioned successfully, and your team receives the necessary guidance and operational training for smooth day-to-day management.",
    },
    {
      number: "06",
      icon: Headphones,
      title: "Maintenance & 24/7 Support",
      description:
        "Our commitment continues after deployment with preventive maintenance, technical assistance, system optimization, and rapid response support whenever required.",
    },
  ];

  return (
    <section className="relative bg-[#020B1D] py-16 md:pt-20 pb-50 overflow-hidden">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#195CCF] via-[#46B8FF] to-[#195CCF] opacity-20" />

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#195CCF]/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#46B8FF]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="uppercase tracking-[0.25em] text-[#46B8FF] text-sm font-semibold">
            Our Delivery Process
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            From Planning to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46B8FF] to-[#195CCF]">
              Long-Term Support
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#46B8FF] to-[#195CCF] mx-auto mt-5 rounded-full" />
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            We follow a structured project delivery methodology that ensures
            every solution is carefully planned, professionally implemented,
            thoroughly tested, and continuously supported for long-term
            business success.
          </p>
        </div>

        {/* --- MOBILE: Vertical Timeline (visible on small screens) --- */}
        <div className="md:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#46B8FF] via-[#195CCF] to-transparent" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex items-start gap-4 pb-10 last:pb-0 group"
              >
                {/* Step Circle */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#195CCF]/20 border-2 border-[#46B8FF] flex items-center justify-center group-hover:bg-[#195CCF] group-hover:border-[#195CCF] transition-all duration-300">
                    <span className="text-[#46B8FF] font-bold text-xs group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-6 bg-gradient-to-b from-[#46B8FF] to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-1">
                    <Icon className="w-5 h-5 text-[#46B8FF] group-hover:text-white transition-colors duration-300" />
                    <h3 className="text-base font-semibold text-white group-hover:text-[#46B8FF] transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- DESKTOP: Horizontal Stepped Process (visible on md and up) --- */}
        <div className="hidden md:block relative">
          {/* Horizontal connecting line */}
          <div className="absolute top-20 left-[60px] right-[60px] h-0.5 bg-gradient-to-r from-[#46B8FF] via-[#195CCF] to-[#46B8FF]/30" />

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <div className="flex flex-col items-center text-center">
                    {/* Number Circle */}
                    <div className="relative z-10 mb-4">
                      <div className="w-16 h-16 rounded-full bg-[#195CCF]/20 border-2 border-[#46B8FF] flex items-center justify-center group-hover:bg-[#195CCF] group-hover:border-[#195CCF] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(70,184,255,0.3)]">
                        <span className="text-[#46B8FF] font-bold text-sm group-hover:text-white transition-colors duration-300">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-3">
                      <Icon className="w-6 h-6 text-[#46B8FF] group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#46B8FF] transition-colors duration-300 leading-tight">
                      {step.title}
                    </h3>

                    {/* Description Tooltip (appears on hover) */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-[#081B33] p-4 rounded-xl border border-white/10 shadow-xl z-20 pointer-events-none">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#081B33] border-t border-l border-white/10 rotate-45" />
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDeliveryProcess;