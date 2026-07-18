import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProjectsHero = () => {
  return (
    <section className="relative bg-[#020B1D] min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div
          className="w-full lg:w-[60%] h-full bg-cover bg-center bg-no-repeat opacity-30 lg:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage: "url('/projrctHero.png')",
          }}
        />
        
        {/* Adjusted Left-to-Right Fade (Sweeps into the image sooner to close the visual gap) */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#020B1D] via-[#020B1D]/60 to-transparent z-10 pointer-events-none" />
        
        {/* Clean Mobile Tint Overlay */}
        <div className="lg:hidden absolute inset-0 bg-[#020B1D]/75 z-10 pointer-events-none" />
      </div>

      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#195CCF]/10 rounded-full blur-[150px] md:blur-[180px] z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-[#46B8FF]/5 rounded-full blur-[120px] md:blur-[150px] z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative w-full max-w-8xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20 lg:py-24 z-20">
        {/* Maintained crisp boundaries for the typography column */}
        <div className="w-full lg:max-w-[50%] xl:max-w-[45%]">
          
          {/* Section Badge */}
          <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
            <span className="w-8 md:w-10 h-0.5 bg-[#46B8FF]" />
            <span className="uppercase tracking-[0.2em] md:tracking-[0.25em] text-[#46B8FF] text-xs md:text-sm font-bold">
              Our Portfolio
            </span>
          </div>

          {/* Typography Stack */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
            Proven Digital
            <br />
            Success Stories
            <br />
            <span className="inline-block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#46B8FF] to-[#195CCF]">
              Delivered by ASE
            </span>
          </h1>

          <p className="mt-5 md:mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
            Explore our collection of real-world case studies, custom deployments, 
            and transformational IT architectures. Discover how we help enterprise 
            partners solve complex challenges and scale with confidence.
          </p>

          {/* Responsive Interactive Buttons */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#195CCF] to-[#46B8FF] text-white font-semibold px-8 py-3.5 rounded-full hover:shadow-[0_0_40px_rgba(25,92,207,0.4)] transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base whitespace-nowrap"
            >
              Start Your Project
              <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 hover:border-[#46B8FF] text-sm sm:text-base whitespace-nowrap"
            >
              View Our Services
              <ArrowRight size={18} className="shrink-0" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;