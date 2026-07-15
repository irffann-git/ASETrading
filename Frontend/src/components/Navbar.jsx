// navbar.jsx
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation links – corrected to match your image (Solutions)
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Solutions', href: '#' },      // was 'Solution'
    { name: 'Services', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-500">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30"> {/* increased height for logo */}

          {/* Logo – using your image, height adjusted to fit navbar */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="/ase_logo.png"          // place this image in your public folder
                alt="ASE Logo"
                className="h-40 w-auto object-contain" // smaller, navbar‑friendly
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg text-white font-medium hover:text-white transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#0D4EA7] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            {/* Get in Touch Button */}
            <a
              href="#"
              className="bg-[#0D4EA7] hover:bg-[#2E7BFF] text-white font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#081B33] focus:outline-none"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="space-y-1.5">
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-[#081B33] px-4 pb-4`}>
        <div className="flex flex-col space-y-3 pt-3 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-[#00CFFF] text-base font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="bg-[#195CCF] hover:bg-[#2E7BFF] text-white font-semibold px-5 py-2 rounded-full text-center transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;