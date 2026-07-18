import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const MORE_PROJECTS_DATA = [
  {
    id: 4,
    image: "/HospitalityNetwork.jpg", // Replace with your asset path
    title: "Hospitality Network Upgrade",
    location: "Jeddah, KSA",
    year: "2022",
  },
  {
    id: 5,
    image: "/ElectricalInfrastructure.jpg", // Replace with your asset path
    title: "Low Voltage Electrical Infrastructure",
    location: "Jubail, KSA",
    year: "2023",
  },
  {
    id: 6,
    image: "/IPSurveillance.jpg", // Replace with your asset path
    title: "IP Surveillance & Access Control",
    location: "Riyadh, KSA",
    year: "2022",
  },
  {
    id: 7,
    image: "/CloudMigration.jpg", // Replace with your asset path
    title: "Microsoft 365 Cloud Migration",
    location: "Dammam, KSA",
    year: "2023",
  },
];

const MoreProjects = () => {
  return (
    <section className="bg-[#020B1D] text-white py-12 md:py-16 px-5 sm:px-8 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-8xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="uppercase tracking-[0.2em] text-[#46B8FF] text-sm font-bold">
            More Projects
          </h2>
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {MORE_PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-[#051129] border border-white/5 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-[#195CCF]/30 hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-[#46B8FF] transition-colors duration-200 line-clamp-2">
                  {project.title}
                </h3>

                {/* Location and Date Metadata */}
                <div className="flex items-center gap-4 mt-3 text-xs text-slate-400 border-t border-white/5 pt-3">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <MapPin size={14} className="text-[#46B8FF] shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 ml-auto shrink-0">
                    <Calendar size={14} className="text-[#46B8FF]" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Bottom Action Button */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/all-projects"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-lg bg-[#051129] border border-white/10 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-[#195CCF] hover:border-[#195CCF] group"
          >
            VIEW ALL PROJECTS
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default MoreProjects;