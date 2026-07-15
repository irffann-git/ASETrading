// HomeProjects.jsx – Simple version
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomeProjects = () => {
  const projects = [
    {
      title: "Campus Network Deployment",
      description:
        "Designed & implemented a high-performance network for a leading educational institution.",
      link: "/projects/campus-network",
    },
    {
      title: "Industrial Data Center Solution",
      description:
        "End-to-end data center infrastructure for a large industrial enterprise.",
      link: "/projects/industrial-data-center",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#020B1D]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center md:text-left">
          <span className="text-[#00CFFF] text-sm font-semibold tracking-widest uppercase">
            Featured Projects
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white leading-tight">
            Delivering Impactful <br className="sm:hidden" />
            <span className="text-[#0D4EA7]">IT Solutions</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0B162C] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 md:p-8 hover:border-[#00CFFF]/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <h3 className="text-white text-xl font-bold group-hover:text-[#00CFFF] transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-[#B8C4D9] mt-2 leading-relaxed">
                {project.description}
              </p>
              <Link
                to={project.link}
                className="inline-flex items-center gap-2 text-[#00CFFF] font-semibold mt-4 hover:text-[#4DDCFF] transition-colors duration-200 group/link"
              >
                Read Case Study
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom link */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[#00CFFF] font-semibold hover:text-[#4DDCFF] transition-colors duration-200 group"
          >
            View All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;