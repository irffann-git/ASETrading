import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const BG_IMAGE = "/clientHero.png";

const ClientsHero = () => {
  const { t } = useLanguage();   // <-- ADD

  return (
    <section
      className="relative bg-[#020B1D] text-white bg-cover bg-center min-h-[80vh] md:min-h-[80vh] flex items-center"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      {/* Dark overlay so the skyline fades into the brand background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020B1D] via-[#020B1D]/85 to-[#020B1D]/20" />

      <div className="relative max-w-screen-3xl mx-auto w-full py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-xl">

          <span className="text-[#46B8FF] text-xs sm:text-md font-bold tracking-[0.2em] uppercase">
            {t('clientsHero.badge')}
          </span>

          <h1 className="mt-3 text-3xl sm:text-5xl lg:text-[3.75rem] font-bold leading-tight text-white">
            {t('clientsHero.heading.prefix')}{" "}
            <span className="text-[#3B82F6]">{t('clientsHero.heading.highlight')}</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            {t('clientsHero.sub')}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 bg-[#195CCF] hover:bg-[#1565D8] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors duration-200"
            >
              {t('clientsHero.btn1')}
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors duration-200"
            >
              {t('clientsHero.btn2')}
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientsHero;