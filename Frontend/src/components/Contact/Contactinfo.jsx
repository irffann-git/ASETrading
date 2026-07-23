import React from "react";
import { Phone, Mail, MapPin, Headset, Clock } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const ContactInfoBar = () => {
  const { t } = useLanguage();   // <-- ADD

  const CONTACT_ITEMS = [
    {
      id: 1,
      icon: Phone,
      titleKey: "contactBar.call.title",
      lines: [
        { key: "contactBar.call.line1" },
        { key: "contactBar.call.line2" }
      ]
    },
    {
      id: 2,
      icon: Mail,
      titleKey: "contactBar.email.title",
      lines: [
        { key: "contactBar.email.line1" },
        { key: "contactBar.email.line2" }
      ]
    },
    {
      id: 3,
      icon: MapPin,
      titleKey: "contactBar.visit.title",
      lines: [
        { key: "contactBar.visit.line1" },
        { key: "contactBar.visit.line2" },
        { key: "contactBar.visit.line3" }
      ]
    },
    {
      id: 4,
      icon: Headset,
      titleKey: "contactBar.support.title",
      lines: [
        { key: "contactBar.support.line1" },
        { key: "contactBar.support.line2" }
      ]
    },
    {
      id: 5,
      icon: Clock,
      titleKey: "contactBar.hours.title",
      lines: [
        { key: "contactBar.hours.line1" },
        { key: "contactBar.hours.line2" }
      ]
    }
  ];

  return (
    <section className="bg-white text-[#1B2430] py-10 md:py-12 px-5 sm:px-8 md:px-12 lg:px-20 rounded-t-3xl">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {CONTACT_ITEMS.map(({ id, icon: Icon, titleKey, lines }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center gap-2 px-4 py-2 lg:border-l lg:border-gray-200 lg:first:border-l-0"
            >
              <Icon size={26} strokeWidth={1.75} className="text-[#195CCF]" />
              <h3 className="mt-1 text-sm sm:text-base font-bold text-[#1B2430]">
                {t(titleKey)}
              </h3>
              <div className="space-y-0.5">
                {lines.map((line, i) => (
                  <p key={i} className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {t(line.key)}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoBar;