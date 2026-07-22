import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const BG_IMAGE = "/contactHero.png";

const ContactHero = () => {
  const { t } = useLanguage();   // <-- ADD

  return (
    <section
      className="relative bg-[#020B1D] text-white bg-cover bg-center min-h-[70vh] md:min-h-[80vh] flex items-center"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      {/* Dark overlay so the globe graphic fades into the brand background and text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020B1D] via-[#020B1D]/80 to-[#020B1D]/10" />

      <div className="relative max-w-screen-3xl mx-auto w-full py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-xl">

          <span className="text-[#46B8FF] text-sm sm:text-md font-bold tracking-[0.2em] uppercase">
            {t('contactHero.badge')}
          </span>

          <h1 className="mt-3 text-3xl sm:text-5xl lg:text-[3.75rem] font-bold leading-tight text-white">
            {t('contactHero.heading')}
          </h1>

          <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            {t('contactHero.sub')}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#195CCF] hover:bg-[#1565D8] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors duration-200"
            >
              {t('contactHero.btn')}
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;