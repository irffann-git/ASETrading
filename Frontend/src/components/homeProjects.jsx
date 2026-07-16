import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomeProjects = () => {
  const projects = [
    {
      title: "Campus Network Deployment",
      description:
        "Designed & implemented a high-performance network for a leading educational institution.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      link: "/projects/campus-network",
    },
    {
      title: "Industrial Data Center Solution",
      description:
        "End-to-end data center infrastructure for a large industrial enterprise.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      link: "/projects/industrial-data-center",
    },
    {
      title: "Enterprise Cloud Migration",
      description:
        "Seamless migration of legacy systems to a scalable cloud infrastructure.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      link: "/projects/cloud-migration",
    },
    {
      title: "Retail POS Network Upgrade",
      description:
        "Modernized point-of-sale network across 50+ retail locations nationwide.",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80",
      link: "/projects/retail-pos-upgrade",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="text-[#1D4ED8] text-xs font-bold tracking-widest uppercase">
              Featured Projects
            </span>
            <h2 className="mt-2 text-3xl md:text-[2.25rem] font-bold text-[#0A0A23] leading-tight">
              Delivering Impactful IT Solutions
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-[#1D4ED8] text-sm font-semibold whitespace-nowrap hover:text-[#1E40AF] transition-colors duration-200"
          >
            View All Projects
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[#0A0A23] text-base font-bold leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {project.description}
                </p>
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-1.5 text-[#1D4ED8] text-sm font-semibold mt-4 hover:text-[#1E40AF] transition-colors duration-200"
                >
                  Read Case Study
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;