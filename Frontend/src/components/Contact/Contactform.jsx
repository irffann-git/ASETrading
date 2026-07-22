import React, { useState } from "react";
import { Send, Building2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";   // <-- ADD

const ContactFormAndMap = () => {
  const { t } = useLanguage();   // <-- ADD

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `
${t('contactForm.whatsapp.header')}
${t('contactForm.whatsapp.name')} ${formData.name}
${t('contactForm.whatsapp.company')} ${formData.company}
${t('contactForm.whatsapp.email')} ${formData.email}
${t('contactForm.whatsapp.phone')} ${formData.phone}
${t('contactForm.whatsapp.inquiry')} ${formData.inquiryType}
${t('contactForm.whatsapp.message')}
${formData.message}
`;
    const phone = "966594943333";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const inputClasses =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#1B2430] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#195CCF]/30 focus:border-[#195CCF] transition-colors duration-200";

  const inquiryOptions = [
    { value: "general", labelKey: "contactForm.inquiry.general" },
    { value: "consultation", labelKey: "contactForm.inquiry.consultation" },
    { value: "support", labelKey: "contactForm.inquiry.support" },
    { value: "partnership", labelKey: "contactForm.inquiry.partnership" },
    { value: "other", labelKey: "contactForm.inquiry.other" }
  ];

  return (
    <section className="bg-[#F6F8FC] py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl border border-gray-200 bg-white overflow-hidden">

          {/* Left: Contact Form */}
          <div className="p-6 sm:p-8 md:p-10 border-b border-gray-200 lg:border-b-0 lg:border-r">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B2430]">
              {t('contactForm.heading')}
            </h2>
            <div className="w-10 h-0.5 bg-[#195CCF] rounded-full mt-3 mb-4" />
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              {t('contactForm.description')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t('contactForm.placeholder.name')}
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <input
                  type="text"
                  name="company"
                  placeholder={t('contactForm.placeholder.company')}
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t('contactForm.placeholder.email')}
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t('contactForm.placeholder.phone')}
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <select
                name="inquiryType"
                required
                value={formData.inquiryType}
                onChange={handleChange}
                className={`${inputClasses} appearance-none cursor-pointer ${
                  formData.inquiryType === "" ? "text-gray-400" : "text-[#1B2430]"
                }`}
              >
                <option value="" disabled>
                  {t('contactForm.placeholder.inquiryType')}
                </option>
                {inquiryOptions.map(({ value, labelKey }) => (
                  <option key={value} value={value}>
                    {t(labelKey)}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                required
                rows={5}
                placeholder={t('contactForm.placeholder.message')}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
              />

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1F4D] hover:bg-[#0D2B66] text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-colors duration-200"
              >
                {t('contactForm.submitBtn')}
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Right: Find Us */}
          <div className="p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B2430]">
              {t('contactForm.findUs')}
            </h2>
            <div className="w-10 h-0.5 bg-[#195CCF] rounded-full mt-3 mb-6" />

            {/* Map */}
            <div className="relative rounded-xl overflow-hidden border border-gray-200 h-72">
              <iframe
                title={t('contactForm.mapTitle')}
                src="https://maps.google.com/maps?q=Saihati%20Building%20King%20Abdul%20Aziz%20Road%20Dammam%20Saudi%20Arabia&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Office Details */}
            <div className="mt-6 rounded-xl border border-gray-200 bg-[#F6F8FC] p-6">
              <div className="flex items-start gap-4">
                <Building2 size={24} className="text-[#195CCF]" />

                <div>
                  <h3 className="text-lg font-bold text-[#1B2430]">
                    {t('contactForm.officeTitle')}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {t('contactForm.officeAddress.line1')}
                    <br />
                    {t('contactForm.officeAddress.line2')}
                    <br />
                    {t('contactForm.officeAddress.line3')}
                    <br />
                    {t('contactForm.officeAddress.line4')}
                  </p>

                  <div className="mt-5 space-y-2 text-sm text-[#1B2430]">
                    <p>
                      <span className="font-semibold">{t('contactForm.office.phone')}:</span>{" "}
                      +966 13 855 9421
                    </p>

                    <p>
                      <span className="font-semibold">{t('contactForm.office.fax')}:</span>{" "}
                      +966 13 851 1106
                    </p>

                    <p>
                      <span className="font-semibold">{t('contactForm.office.mobile')}:</span>{" "}
                      +966 59 494 3333
                    </p>

                    <p>
                      <span className="font-semibold">{t('contactForm.office.support')}:</span>{" "}
                      +966 59 233 0800
                    </p>

                    <p>
                      <span className="font-semibold">{t('contactForm.office.email')}:</span>{" "}
                      <a
                        href="mailto:info@asetrading.com"
                        className="text-[#195CCF] hover:underline"
                      >
                        info@asetrading.com
                      </a>
                    </p>

                    <p>
                      <span className="font-semibold">{t('contactForm.office.website')}:</span>{" "}
                      <a
                        href="https://www.asetrading.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#195CCF] hover:underline"
                      >
                        www.asetrading.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormAndMap;