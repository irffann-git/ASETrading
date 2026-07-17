// Footer.jsx – Clean, responsive, 5-column layout
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

// ─── Link data ──────────────────────────────────────────
const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const solutionsLinks = [
  { label: "Cyber Security", to: "/solutions/cyber-security" },
  { label: "Network Solutions", to: "/solutions/network-solutions" },
  { label: "Data Center", to: "/solutions/data-center" },
  { label: "Cloud Solutions", to: "/solutions/cloud-solutions" },
  { label: "Microsoft Solutions", to: "/solutions/microsoft-solutions" },
  { label: "Structured Cabling", to: "/solutions/structured-cabling" },
];

const supportLinks = [
  { label: "24/7 Support", to: "/support" },
  { label: "Maintenance", to: "/support/maintenance" },
  { label: "Resources", to: "/resources" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Careers", to: "/careers" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
];

// ─── Reusable column component ──────────────────────────
const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
      {title}
    </h4>
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.to}
            className="text-[#B8C4D9] text-sm hover:text-[#00CFFF] transition-colors duration-200 relative group"
          >
            {link.label}
            <span className="absolute left-0 bottom-0 w-0 h-px bg-[#00CFFF] transition-all duration-300 group-hover:w-full" />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// ─── Main Footer ─────────────────────────────────────────
const Footer = () => {

  return (
    <footer className="bg-[#020B1D] border-t border-white/5">
      {/* Top gradient accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#00CFFF]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        {/* 
          Grid: 
          - mobile: 1 column
          - tablet (sm): 2 columns → brand spans both (full width), others wrap
          - desktop (lg): 6 columns → brand spans 2, other 4 each span 1
          → visually 5 distinct groups
        */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {/* Brand – spans 2 columns on tablet and desktop */}
          <div className="sm:col-span-2">
            <Link to="/" className="inline-block">
              <img
                src="/ase_logo.png"
                alt="ASE – Ahmed Ali Al-Saihati"
                className="h-30 w-auto object-contain"
              />
            </Link>
            <p className="text-[#B8C4D9] text-sm leading-relaxed max-w-xs">
              Delivering innovative IT solutions that empower businesses to
              grow, transform and succeed.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-[#DCE6F2] hover:bg-[#0D4EA7] hover:text-white hover:border-[#0D4EA7] hover:shadow-[0_0_15px_rgba(13,78,167,0.4)] transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Four link columns – each takes 1 column on desktop */}
          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Solutions" links={solutionsLinks} />
          <FooterColumn title="Support" links={supportLinks} />

          {/* Contact column – separate styling */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="text-[#00CFFF] mt-0.5 shrink-0" />
                <span className="text-[#B8C4D9] text-sm leading-snug">
                  Dammam, Kingdom of Saudi Arabia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} className="text-[#00CFFF] shrink-0" />
                <a
                  href="tel:+966130000000"
                  className="text-[#B8C4D9] text-sm hover:text-[#00CFFF] transition-colors"
                >
                  +966 13 xxxx xxx
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={17} className="text-[#00CFFF] shrink-0" />
                <a
                  href="mailto:info@ase.com.sa"
                  className="text-[#B8C4D9] text-sm hover:text-[#00CFFF] transition-colors"
                >
                  info@ase.com.sa
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-[#010712]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-center text-[#8092AD] text-xs md:text-sm">
            © 2004 ASE – Ahmed Ali Al-Saihati Gen. Cont. Est. All Rights Reserved.
          </p>
          <p className="text-center text-[#8092AD] text-xs md:text-sm">
            <Link to="/privacy-policy" className="hover:text-[#00CFFF] transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">·</span>
            <Link to="/terms" className="hover:text-[#00CFFF] transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;