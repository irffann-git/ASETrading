import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

const SolutionsHero = () => {
  return (
    <section className="relative bg-[#020B1D] min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/solutionHero.png')",
        }}
      >
        {/* Left-to-Right Black Shadow Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #020B1D 0%, rgba(2,11,29,0.8) 35%, rgba(2,11,29,0.2) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#195CCF]/10 rounded-full blur-[150px] md:blur-[180px] z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-[#46B8FF]/5 rounded-full blur-[120px] md:blur-[150px] z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative w-full max-w-8xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 z-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-5 md:mb-6">
            <span className="w-8 md:w-10 h-0.5 bg-[#46B8FF]" />
            <span className="uppercase tracking-[0.2em] md:tracking-[0.25em] text-[#46B8FF] text-xs md:text-sm font-semibold">
              Our Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] sm:leading-tight">
            End-to-End IT Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46B8FF] to-[#195CCF]">
              Built for Your Success
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl lg:max-w-2xl">
            ASE delivers integrated and innovative technology solutions that
            help organizations build secure, scalable and future-ready
            infrastructure to drive digital transformation.
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#195CCF] to-[#46B8FF] text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:shadow-[0_0_40px_rgba(25,92,207,0.4)] transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              Request Consultation
              <ArrowRight size={18} className="shrink-0" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 hover:border-[#46B8FF] w-full sm:w-auto text-sm sm:text-base"
            >
              Talk to an Expert
              <ChevronRight size={18} className="shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;