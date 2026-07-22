import React from "react";
import { Fuel, Landmark, Factory, HardHat, Cog, Calendar, Briefcase, ShieldCheck, Headset } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const INDUSTRIES = [
  {
    id: 1,
    icon: Fuel,
    titleKey: "clientIndustries.energy",
    clients: ["Saudi Aramco", "SABIC", "Sadara"]
  },
  {
    id: 2,
    icon: Landmark,
    titleKey: "clientIndustries.government",
    clients: ["SWCC", "KAFD", "King Fahd Causeway Authority"]
  },
  {
    id: 3,
    icon: Factory,
    titleKey: "clientIndustries.industrial",
    clients: ["SRACO", "Olayan", "JBK Controls"]
  },
  {
    id: 4,
    icon: HardHat,
    titleKey: "clientIndustries.construction",
    clients: ["Amana", "UNEECO", "Ensure Services"]
  },
  {
    id: 5,
    icon: Cog,
    titleKey: "clientIndustries.manufacturing",
    clients: ["DOW", "Mission Laïque Française", "Al Kifah Holding"]
  }
];

const STATS = [
  { id: 1, icon: Calendar, valueKey: "clientIndustries.stat1.value", labelKey: "clientIndustries.stat1.label", sublabelKey: "clientIndustries.stat1.sublabel" },
  { id: 2, icon: Briefcase, valueKey: "clientIndustries.stat2.value", labelKey: "clientIndustries.stat2.label", sublabelKey: "clientIndustries.stat2.sublabel" },
  { id: 3, icon: ShieldCheck, valueKey: "clientIndustries.stat3.value", labelKey: "clientIndustries.stat3.label", sublabelKey: "clientIndustries.stat3.sublabel" },
  { id: 4, icon: Headset, valueKey: "clientIndustries.stat4.value", labelKey: "clientIndustries.stat4.label", sublabelKey: "clientIndustries.stat4.sublabel" }
];

const IndustriesWeServe = () => {
  const { t } = useLanguage();   // <-- ADD

  return (
    <section className="bg-[#020B1D] text-white py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">

        {/* Section Label */}
        <div className="text-center mb-10 md:mb-12">
          <span className="text-[#46B8FF] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            {t('clientIndustries.badge')}
          </span>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mb-12 md:mb-16">
          {INDUSTRIES.map(({ id, icon: Icon, titleKey, clients }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-8 transition-all duration-300 hover:border-[#195CCF]/40 hover:bg-white/[0.04]"
            >
              <Icon size={36} strokeWidth={1.5} className="text-[#46B8FF]" />
              <h3 className="mt-4 text-sm sm:text-base font-bold text-white">
                {t(titleKey)}
              </h3>
              <div className="w-8 h-0.5 bg-[#195CCF] rounded-full mt-2 mb-4" />
              <ul className="space-y-1.5">
                {clients.map((client) => (
                  <li key={client} className="text-xs sm:text-sm text-slate-400">
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="rounded-2xl border border-[#195CCF]/40 bg-gradient-to-b from-white/[0.04] to-transparent px-5 py-8 sm:px-8 md:px-10 shadow-[0_0_40px_rgba(25,92,207,0.15)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {STATS.map(({ id, icon: Icon, valueKey, labelKey, sublabelKey }) => (
              <div key={id} className="flex items-center gap-4">
                <Icon size={30} strokeWidth={1.75} className="text-[#46B8FF] shrink-0" />
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white leading-none">
                    {t(valueKey)}
                  </div>
                  <div className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-snug">
                    {t(labelKey)} {t(sublabelKey)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesWeServe;