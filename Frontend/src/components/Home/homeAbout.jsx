// About.jsx
import { Link } from "react-router-dom";
import { Award, Globe, Heart, ArrowRight } from "lucide-react";

const HomeAbout = () => {
  return (
    <section className="bg-[#F6F8FC] py-16 md:py-24 px-4 sm:px-6 lg:px-8 rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Top: label, heading, description, and link */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <span className="text-[#195CCF] text-sm font-semibold tracking-widest uppercase">
              About ASE
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1B2430] leading-tight">
              Trusted IT Infrastructure <br />
              <span className="text-[#195CCF]">Partner Since 2004</span>
            </h2>
            <p className="mt-5 text-[#6E7B8F] text-base md:text-lg leading-relaxed max-w-xl">
              Established in Dammam, Saudi Arabia, ASE is a leading System
              Integrator and IT solutions provider. For over two decades, we have
              delivered innovative, secure and scalable solutions that meet
              international standards and drive digital transformation.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-[#195CCF] font-semibold hover:text-[#2E7BFF] transition-colors duration-200 group"
            >
              Learn More About Us
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Right column: three feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-[#DCE6F2] hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#195CCF]/10 text-[#195CCF] flex-shrink-0">
                <Award size={20} />
              </div>
              <div>
                <h3 className="text-[#1B2430] font-bold text-lg">Certified Experts</h3>
                <p className="text-[#6E7B8F] text-sm mt-1">
                  Highly skilled & certified engineering team
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-[#DCE6F2] hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#195CCF]/10 text-[#195CCF] flex-shrink-0">
                <Globe size={20} />
              </div>
              <div>
                <h3 className="text-[#1B2430] font-bold text-lg">Global Partnerships</h3>
                <p className="text-[#6E7B8F] text-sm mt-1">
                  Strong ecosystem of leading technology partners
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-[#DCE6F2] hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#195CCF]/10 text-[#195CCF] flex-shrink-0">
                <Heart size={20} />
              </div>
              <div>
                <h3 className="text-[#1B2430] font-bold text-lg">Customer Focused</h3>
                <p className="text-[#6E7B8F] text-sm mt-1">
                  Committed to quality, reliability & long term support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;