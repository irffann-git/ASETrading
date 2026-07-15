// HomeServices.jsx – Small cards in one horizontal row (scrollable on mobile)
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomeServices = () => {
  const services = [
    {
      title: "IT Infrastructure Security",
      image: "/it_infrastructure.jpg",
    },
    {
      title: "Intelligent Datacenter",
      image: "/Intelligent_Datacenter.jpg",
    },
    {
      title: "Switching & Routing",
      image: "/switching.jpg",
    },
    {
      title: "Structured Cabling & LV Electrical",
      image: "/LV_Electrical.jpg",
    },
    {
      title: "Electrical Panel Board Installation",
      image: "/Electrical_Panel.jpg",
    },
    {
      title: "Microsoft Core Infrastructure",
      image: "/Microsoft_Core.jpg",
    },
    {
      title: "Civil Works",
      image: "/civil_work.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#F6F8FC] rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <span className="text-[#0D4EA7] text-sm font-semibold tracking-widest uppercase">
              Our Services
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-[#1B2430] leading-tight">
              Comprehensive IT & <br />
              <span className="text-[#0D4EA7]">Infrastructure Services</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-[#0D4EA7] font-semibold hover:text-[#1565D8] transition-colors duration-200 group"
          >
            View All Services
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Horizontal row – small cards, scrollable on mobile */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-4 w-max">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden border-3 border-[#0D4EA7] shadow-md transition-all duration-300 flex-shrink-0 w-56"
                  >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-56 h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay – smaller padding and font */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D]/80 via-[#020B1D]/40 to-transparent flex items-end p-3">
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;