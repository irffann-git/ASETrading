import React from 'react';

const AboutHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#030712] flex items-center justify-center px-6 pt-20 md:px-10 lg:px-20 overflow-hidden select-none">
      
      {/* Background Ambient Decorative Brand Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Main Container Grid Layout - 7:5 split for content:image */}
      <div className="max-w-8xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-20">
        
        {/* Left Typography Content Column - 7 columns, larger text */}
        <div className="lg:col-span-7 space-y-6 text-left w-full">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500 block">
            About ASE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            A Legacy of Innovation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              and Excellence
            </span>
          </h1>
          <div className="space-y-6 text-base sm:text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-3xl">
            <p>
              Established in Dammam, Kingdom of Saudi Arabia, in 2004, 
              ASE has grown into a highly respected System Integrator and 
              technology solutions provider.
            </p>
            <p>
              Our two decades of experience have allowed us to successfully 
              deliver mission-critical IT Infrastructure projects and build 
              long-term partnerships with our clients.
            </p>
          </div>
        </div>

        {/* Right Column - 5 columns, image size unchanged */}
        <div className="lg:col-span-5 w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/10] lg:aspect-[16/9] rounded-3xl overflow-hidden border border-slate-800/60 shadow-2xl relative bg-[#040817]">
          
          <img 
            src="/about_hero.jpg"
            alt="Riyadh Skyline" 
            className="w-full h-full object-cover select-none pointer-events-none"
            loading="eager"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
          <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(3,7,18,0.4)] pointer-events-none" />
          
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;