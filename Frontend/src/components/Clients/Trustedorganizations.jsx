import React from "react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

// Logo files live in /public
const ORGANIZATIONS = [
  { id: 1, name: "Saudi Aramco", logo: "/saudiaramco.png" },
  { id: 2, name: "Sadara", logo: "/sadara.png" },
  { id: 3, name: "Sabic", logo: "/sabic.png" },
  { id: 4, name: "SWCC", logo: "/saline.png" },
  { id: 5, name: "Mission Laïque Française", logo: "/mission.png" },
  { id: 6, name: "Olayan", logo: "/olayan.png" },
  { id: 7, name: "Sofcon", logo: "/sofcon.webp" },
  { id: 8, name: "SRACO", logo: "/sraco.png" },
  { id: 9, name: "Amana Contracting", logo: "/amana.png" },
  { id: 10, name: "KAFD", logo: "/kafd.png" },
  { id: 11, name: "JBK", logo: "/jbk.png" },
  { id: 12, name: "UNEECO", logo: "/uneeco.png" },
  { id: 13, name: "Dow", logo: "/dow.png" },
  { id: 14, name: "Al Kifah Holding", logo: "/alkifah.png" },
  { id: 15, name: "King Fahd Causeway Authority", logo: "/kfca.png" },
  { id: 16, name: "Ensure Services", logo: "/ensure.png" }
];

const TrustedOrganizations = () => {
  const { t } = useLanguage();   // <-- ADD

  return (
    <section className="bg-[#020B1D] text-white py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-[#46B8FF] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            {t('trustedOrganizations.tagline')}
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
            {t('trustedOrganizations.heading')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            {t('trustedOrganizations.sub')}
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {ORGANIZATIONS.map((org) => (
            <div
              key={org.id}
              className="flex items-center justify-center bg-white rounded-xl px-5 py-6 h-24 md:h-28 shadow-lg transition-transform duration-300 hover:scale-[1.03]"
            >
              <img
                src={org.logo}
                alt={org.name}
                title={org.name}
                className="max-h-15 md:max-h-20 max-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedOrganizations;