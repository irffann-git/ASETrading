import React from "react";
import {
  Shield,
  Server,
  Network,
  Cloud,
  Wifi,
  HardDrive,
  Building2,
  Cable,
  Check,
} from "lucide-react";

const ServicesCapabilities = () => {
  const coreServices = [
    {
      icon: Shield,
      title: "IT Infrastructure Security",
      description:
        "Holistic, layered security solutions to defend against evolving cyber threats.",
      details: [
        "Next-Generation Firewalls (NGFWs)",
        "Unified Threat Management (UTM)",
        "Endpoint Detection & Response (EDR)",
        "Penetration Testing & Vulnerability Assessments",
        "Security Information & Event Management (SIEM)",
        "24/7 Managed Security Services (MSS)",
      ],
    },
    {
      icon: Server,
      title: "Intelligent Datacenter Services",
      description:
        "Design, build, and optimize high-availability, resilient, and energy-efficient data centers.",
      details: [
        "Precision Cooling Systems (CRAC/CRAH)",
        "Uninterrupted Power Supplies (UPS)",
        "Enterprise Servers & Storage",
        "Virtualization Platforms (VMware)",
        "Data Center Switching & Fiber Cabling",
        "Backup & Disaster Recovery",
      ],
    },
    {
      icon: Network,
      title: "Switching & Routing Services",
      description:
        "Robust network infrastructure forming the communication backbone of your organization.",
      details: [
        "Enterprise LAN & WAN Design",
        "Core, Distribution & Access Switching",
        "Advanced Routing Protocols (OSPF, BGP)",
        "SD-WAN Solutions",
        "VLAN Segmentation & Security",
        "QoS & Network Optimization",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Microsoft Solutions",
      description:
        "Design, deploy, and manage enterprise productivity using the Microsoft ecosystem.",
      details: [
        "Active Directory & Identity Management",
        "Windows Server & Virtualization",
        "Microsoft 365 Migration",
        "Azure Cloud Services",
        "Multi-Factor Authentication (MFA)",
        "Group Policy Management",
      ],
    },
    {
      icon: Wifi,
      title: "Wireless & Mobility Solutions",
      description:
        "Seamless, secure, and high-performance wireless connectivity for modern workplaces.",
      details: [
        "Wi-Fi 6/6E Access Points",
        "Centralized Wireless Controllers",
        "Guest Access & BYOD Solutions",
        "Wireless Site Surveys",
        "RF Optimization",
        "Secure Wireless Authentication (802.1X)",
      ],
    },
    {
      icon: Building2,
      title: "Electrical & LV Infrastructure",
      description:
        "Comprehensive LV electrical and certified structured cabling solutions for modern facilities.",
      details: [
        "Main & Sub-Main Distribution Boards (MDB/SMDB)",
        "Structured Cabling (Cat 6/6A/7)",
        "Fiber Optic Backbone Systems",
        "Power Distribution & Load Balancing",
        "Thermographic Surveys",
        "24/7 Emergency Support",
      ],
    },
    {
      icon: Cable,
      title: "Structured Cabling Solutions",
      description:
        "Certified, high-performance cabling systems compliant with TIA/EIA standards.",
      details: [
        "Copper Cabling (Cat 6/6A/7)",
        "Fiber Optic Cabling",
        "Network Cabinets & Racks",
        "Cable Management Systems",
        "Testing & Certification",
        "Complete Documentation",
      ],
    },
    {
      icon: HardDrive,
      title: "Storage & Backup Solutions",
      description:
        "Enterprise-grade storage and backup solutions ensuring data availability and business continuity.",
      details: [
        "SAN & NAS Storage Systems",
        "Data Backup & Recovery",
        "Disaster Recovery Planning",
        "Storage Virtualization",
        "Data Replication",
        "Automated Backup Scheduling",
      ],
    },
  ];

  return (
<section className="relative bg-[#020B1D] rounded-t-3xl -mt-12 z-10 overflow-hidden py-16 md:py-24">      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#195CCF] via-[#46B8FF] to-[#195CCF] opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#195CCF]/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#46B8FF]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="uppercase tracking-[0.25em] text-[#46B8FF] text-sm font-semibold">
            Our Technical Capabilities
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Complete IT Solutions &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46B8FF] to-[#195CCF]">
              Services
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#46B8FF] to-[#195CCF] mx-auto mt-5 rounded-full" />
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            ASE delivers end-to-end technology solutions that help organizations
            build secure, scalable, and future-ready infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-[#081B33] rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#46B8FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(25,92,207,0.1)]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#195CCF]/20 flex items-center justify-center shrink-0 group-hover:bg-[#195CCF] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#46B8FF] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#46B8FF] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-16">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <Check className="w-3.5 h-3.5 text-[#46B8FF] mt-1 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCapabilities;