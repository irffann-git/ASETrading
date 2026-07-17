// navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle a solid background once the user scrolls past a small threshold
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll(); // set correct state on mount (e.g. page loaded mid-scroll)
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll while the full-screen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close the menu on Escape for keyboard users
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation links – corrected to match your image (Solutions)
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Solutions', to: '/solutions' },      // was 'Solution'
    { name: 'Services', to: '/services' },
    { name: 'Projects', to: '/projects' },
    { name: 'Partners', to: '/partners' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        scrolled
          ? 'bg-[#020B1D]/90 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="relative z-50 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-30">

          {/* Logo – scales up gradually, full size preserved on large screens */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/ase_logo.png"          // place this image in your public folder
                alt="ASE Logo"
                className="h-10 sm:h-14 md:h-20 lg:h-40 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation – switches on at lg so 7 links + button never overflow/wrap on tablets */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-sm xl:text-lg text-white font-medium hover:text-white transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#0D4EA7] after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            {/* Get in Touch Button */}
            <Link
              to="/contact"
              className="bg-[#0D4EA7] hover:bg-[#2E7BFF] text-white font-semibold text-sm xl:text-base px-4 xl:px-5 py-2 rounded-full transition-all duration-200 hover:scale-105 whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile / tablet menu button – visible below lg */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-md hover:bg-white/10 active:bg-white/15 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00CFFF]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
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

      {/* Mobile / tablet menu – full-screen overlay, fades & slides in smoothly */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-0 h-[100dvh] w-full bg-[#020B1D]/98 backdrop-blur-md z-40 overflow-y-auto transition-opacity duration-500 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-center items-center min-h-[100dvh] px-6 py-24">
          <div className="flex flex-col items-center w-full max-w-xs space-y-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.to}
                style={{
                  transitionDelay: mobileMenuOpen ? `${i * 60 + 100}ms` : '0ms',
                }}
                className={`w-full text-center py-3 border-b border-white/10 text-white hover:text-[#00CFFF] text-base sm:text-lg font-semibold transition-all duration-300 ease-out ${
                  mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            style={{
              transitionDelay: mobileMenuOpen ? `${navLinks.length * 60 + 150}ms` : '0ms',
            }}
            className={`bg-[#0D4EA7] hover:bg-[#2E7BFF] text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-full text-center transition-all duration-300 ease-out hover:scale-105 mt-6 ${
              mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;