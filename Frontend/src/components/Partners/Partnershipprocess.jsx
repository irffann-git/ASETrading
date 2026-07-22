import React from "react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const STEPS = [
  {
    id: 1,
    number: "01",
    titleKey: "partnershipProcess.step1.title",
    descKey: "partnershipProcess.step1.desc",
  },
  {
    id: 2,
    number: "02",
    titleKey: "partnershipProcess.step2.title",
    descKey: "partnershipProcess.step2.desc",
  },
  {
    id: 3,
    number: "03",
    titleKey: "partnershipProcess.step3.title",
    descKey: "partnershipProcess.step3.desc",
  },
  {
    id: 4,
    number: "04",
    titleKey: "partnershipProcess.step4.title",
    descKey: "partnershipProcess.step4.desc",
  },
];

const PartnershipProcess = () => {
  const { t } = useLanguage();   // <-- ADD

  return (
    <section className="bg-[#020B1D] text-white py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {t('partnershipProcess.heading')}
          </h2>
          <div className="w-14 h-1 bg-[#195CCF] rounded-full mx-auto mt-4" />
        </div>

        {/* Stepper: vertical column on mobile, horizontal row on desktop */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center text-center w-full md:w-auto md:flex-1 max-w-[220px]">
                {/* Glowing numbered circle */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#195CCF] bg-[#020B1D] text-lg font-bold text-white shadow-[0_0_18px_rgba(25,92,207,0.6)]">
                  {step.number}
                </div>
                <h3 className="mt-5 text-base sm:text-lg font-semibold text-white">
                  {t(step.titleKey)}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>

              {/* Connector: vertical dashed line on mobile, horizontal dashed line on desktop */}
              {index < STEPS.length - 1 && (
                <div className="w-px h-10 border-l-2 border-dashed border-[#195CCF]/60 my-2 md:my-0 md:mt-8 md:w-auto md:h-px md:flex-1 md:border-l-0 md:border-t-2" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnershipProcess;