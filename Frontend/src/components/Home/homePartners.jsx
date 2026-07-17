// HomePartners.jsx – Clean, responsive partner logos grid
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomePartners = () => {
  const partners = [
    { name: "Cisco", logo: "/cisco.png" },
    { name: "Microsoft", logo: "/microsoft.png" },
    { name: "Dell", logo: "/Dell.png" },
    { name: "VMware", logo: "/VMware.png" },
    { name: "Juniper", logo: "/juniper.png" },
    { name: "f5", logo: "/f5.png" },
    { name: "hp", logo: "/hp.png" },
    { name: "avaya", logo: "/avaya.png" },
    { name: "sonicwall", logo: "/sonicwall.png" },
    { name: "cyberoam", logo: "/cyberoam.png" },
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#F6F8FC]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="text-[#0D4EA7] text-sm font-semibold tracking-widest uppercase">
              Our Partners
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl d-flex flex-direction: column; font-bold text-[#1B2430] leading-tight">
              Trusted by Leading{" "}
            </h2>
             <h2 className="mt-2 text-2xl md:text-3xl d-flex flex-direction: column; font-bold leading-tight text-[#0D4EA7]">Technology Providers</h2> 
          </div>
          <Link
            to="/partners"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-[#0D4EA7] font-semibold hover:text-[#1565D8] transition-colors duration-200 group"
          >
            Show More
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Logo grid – responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 p-4 h-24 md:h-28"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-full h-full object-contain max-h-16 md:max-h-20"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePartners;