import { ArrowRight } from "lucide-react";

const ProjectsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#020B1D]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#195CCF]/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-16 py-24">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            <span className="uppercase tracking-[0.25em] text-[#46B8FF] text-sm font-semibold">
              Our Projects
            </span>

            <h1 className="mt-5 text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-white">
              Building Reliable
              <br />
              Infrastructure.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46B8FF] to-[#195CCF]">
                Delivering Results.
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-[#46B8FF] to-[#195CCF] mt-8 mx-auto lg:mx-0 rounded-full" />

            <p className="mt-8 text-lg text-slate-300 leading-8 max-w-xl mx-auto lg:mx-0">
              ASE has successfully delivered mission-critical IT
              infrastructure projects across diverse industries in Saudi
              Arabia. Our commitment to quality, innovation and customer
              satisfaction drives every project from concept to long-term
              support.
            </p>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">

              <button className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#195CCF] hover:bg-[#2E7BFF] text-white font-semibold transition-all duration-300">
                Explore Projects
                <ArrowRight size={18} />
              </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14">

              <div>
                <h3 className="text-4xl font-bold text-white">20+</h3>
                <p className="text-slate-400 mt-2 text-sm">
                  Years of Experience
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">500+</h3>
                <p className="text-slate-400 mt-2 text-sm">
                  Projects Completed
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">KSA</h3>
                <p className="text-slate-400 mt-2 text-sm">
                  Wide Delivery
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="w-full lg:w-1/2 flex justify-center">

            <img
              src="/projectHero.png"
              alt="Global Network"
              className="w-full max-w-[900px] object-contain"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;