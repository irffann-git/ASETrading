import React from "react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

// Logo files live in /public (e.g. /public/cisco.png → src="/cisco.png").
const PARTNERS = [
  {
    id: 1,
    name: "Cisco",
    logo: "/cisco.png",
    taglineKey: "partners.cisco.tagline",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "/microsoft.png",
    taglineKey: "partners.microsoft.tagline",
  },
  {
    id: 3,
    name: "Dell Technologies",
    logo: "/Dell.png",
    taglineKey: "partners.dell.tagline",
  },
  {
    id: 4,
    name: "VMware",
    logo: "/VMware.png",
    taglineKey: "partners.vmware.tagline",
  },
  {
    id: 5,
    name: "Juniper Networks",
    logo: "/juniper.png",
    taglineKey: "partners.juniper.tagline",
  },
  {
    id: 6,
    name: "F5",
    logo: "/f5.png",
    taglineKey: "partners.f5.tagline",
  },
  {
    id: 7,
    name: "HP",
    logo: "/hp.png",
    taglineKey: "partners.hp.tagline",
  },
  {
    id: 8,
    name: "Avaya",
    logo: "/avaya.png",
    taglineKey: "partners.avaya.tagline",
  },
  {
    id: 9,
    name: "SonicWall",
    logo: "/sonicwall.png",
    taglineKey: "partners.sonicwall.tagline",
  },
  {
    id: 10,
    name: "Cyberoam",
    logo: "/cyberoam.png",
    taglineKey: "partners.cyberoam.tagline",
  },
];

// Duplicated once so the track can loop seamlessly
const LOOP_PARTNERS = [...PARTNERS, ...PARTNERS];

const PartnerCard = ({ partner, t }) => (
  <div className="relative overflow-hidden shrink-0 w-[220px] flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-8 transition-all duration-300 hover:border-[#195CCF]/40 hover:bg-white/[0.04]">
    {/* Simple glow — soft blue highlight at the top corners */}
    <span className="pointer-events-none absolute -top-10 -left-10 w-24 h-24 rounded-full bg-[#3B82F6]/25 blur-2xl" />
    <span className="pointer-events-none absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#3B82F6]/25 blur-2xl" />

    <img
      src={partner.logo}
      alt={partner.name}
      className="relative h-16 sm:h-20 w-auto max-w-[190px] object-contain"
    />
    <p className="relative text-xs sm:text-sm text-slate-300 leading-snug min-h-[2.5rem]">
      {t(partner.taglineKey)}
    </p>
    <span className="relative text-xs font-medium text-slate-300 border border-white/15 rounded-lg px-3 py-1.5">
      {t('partners.certifiedBadge')}
    </span>
  </div>
);

const FeaturedPartnersSlider = () => {
  const { t } = useLanguage();   // <-- ADD

  return (
    <section className="bg-[#020B1D] text-white py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {t('partners.featuredHeading')}
          </h2>
          <div className="w-14 h-1 bg-[#195CCF] rounded-full mx-auto mt-4" />
        </div>

        {/* Infinite auto-scrolling track */}
        <div className="relative overflow-hidden marquee-fade">
          <div className="marquee-track flex gap-5 w-max">
            {LOOP_PARTNERS.map((partner, index) => (
              <PartnerCard key={`${partner.id}-${index}`} partner={partner} t={t} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-fade {
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 6%,
            #000 94%,
            transparent 100%
          );
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 6%,
            #000 94%,
            transparent 100%
          );
        }
      `}</style>
    </section>
  );
};

export default FeaturedPartnersSlider;