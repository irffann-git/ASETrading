import React from "react";
import { Check } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

// Replace this path with wherever you saved your background image
const BG_IMAGE = "/partnerSec.png";

const REASONS = [
  {
    id: 1,
    titleKey: "whyPartner.reason1.title",
    descKey: "whyPartner.reason1.desc",
  },
  {
    id: 2,
    titleKey: "whyPartner.reason2.title",
    descKey: "whyPartner.reason2.desc",
  },
  {
    id: 3,
    titleKey: "whyPartner.reason3.title",
    descKey: "whyPartner.reason3.desc",
  },
  {
    id: 4,
    titleKey: "whyPartner.reason4.title",
    descKey: "whyPartner.reason4.desc",
  },
  {
    id: 5,
    titleKey: "whyPartner.reason5.title",
    descKey: "whyPartner.reason5.desc",
  },
  {
    id: 6,
    titleKey: "whyPartner.reason6.title",
    descKey: "whyPartner.reason6.desc",
  },
];

const WhyPartnerWithASE = () => {
  const { t } = useLanguage();   // <-- ADD

  return (
    <section
      className="relative bg-[#020B1D] text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      {/* Dark overlay so the image blends into the brand background and text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020B1D]/40 via-[#020B1D]/85 to-[#020B1D]" />

      <div className="relative max-w-screen-2xl mx-auto py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20">
        {/* Right-aligned content column so the image shows through on the left */}
        <div className="max-w-2xl ml-auto">

          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {t('whyPartner.heading')}
          </h2>
          <div className="w-14 h-1 bg-[#195CCF] rounded-full mt-4 mb-6" />

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-10">
            {t('whyPartner.subtext')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
            {REASONS.map((reason) => (
              <div key={reason.id} className="flex items-start gap-3">
                <span className="mt-0.5 flex items-center justify-center w-6 h-6 rounded-full border border-[#195CCF] shrink-0">
                  <Check size={13} className="text-[#46B8FF]" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">
                    {t(reason.titleKey)}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-1">
                    {t(reason.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyPartnerWithASE;