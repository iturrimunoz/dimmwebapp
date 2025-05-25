import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Barra de redes sociales */}
      <div className="fixed top-0 w-full bg-primary text-white py-2 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-end space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
      <header
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white bg-opacity-80 shadow-md backdrop-blur rounded-b-2xl mx-4 top-12"
            : "bg-transparent top-8"
        }`}
      >
        <div className={`max-w-7xl mx-auto px-4 transition-all duration-300
          ${scrolled ? "flex justify-between items-center h-16" : "flex flex-col items-center justify-center h-28"}
        `}>
          {/* Logo */}
          <a href="/" className={`font-bold text-2xl tracking-wide transition-all duration-300
            ${scrolled ? "text-primary" : "text-white"}
            ${scrolled ? "" : "mb-2"}
          `}>
            DIMM
          </a>
          {/* Links desktop */}
          <nav className={`hidden md:flex space-x-8 transition-all duration-300
            ${scrolled ? "" : "justify-center"}
          `}>
            <a href="/" className={`font-medium transition-all duration-300 relative group
              ${scrolled ? "text-gray-custom hover:text-primary" : "text-white hover:text-secondary"}
              after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full
            `}>
              Home
            </a>
            <a href="#about" className={`font-medium transition-all duration-300 relative group
              ${scrolled ? "text-gray-custom hover:text-primary" : "text-white hover:text-secondary"}
              after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full
            `}>
              About Us
            </a>
            <div className="relative group">
              <button className={`font-medium transition-all duration-300 relative group
                ${scrolled ? "text-gray-custom hover:text-primary" : "text-white hover:text-secondary"}
                after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full
              `}>
                Therapies
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                <a href="#i131-thyroid-cancer" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">I-131 Therapy for Thyroid Cancer</a>
                <a href="#i131-thyrotoxicosis" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">I-131 Therapy for Thyrotoxicosis</a>
                <a href="#lu-psma" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">Lu-PSMA Therapy for Prostate Cancer</a>
                <a href="#ac-psma" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">Ac-PSMA Therapy for Prostate Cancer</a>
                <a href="#ac-prrt" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">Ac-PRRT Therapy for Neuroendocrine Tumors</a>
                <a href="#fapi" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">FAPI Therapy for various Cancers</a>
                <a href="#lu-prrt" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">Lu-PRRT Therapy for NET</a>
                <a href="#sm-153" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">Sm-153 Therapy for Cancer Bone Pain</a>
                <a href="#synovectomy" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">Radiation Synovectomy</a>
                <a href="#tare" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">TARE</a>
              </div>
            </div>
            <div className="relative group">
              <button className={`font-medium transition-all duration-300 relative group
                ${scrolled ? "text-gray-custom hover:text-primary" : "text-white hover:text-secondary"}
                after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full
              `}>
                PET Scans
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                <a href="#whole-body" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">Whole-Body PET Scan</a>
                <a href="#dotatate" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">DOTATATE PET Scan</a>
                <a href="#fdopa" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">FDOPA PET Scan</a>
                <a href="#fdg" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">FDG PET Scan</a>
                <a href="#psma" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">PSMA PET Scan</a>
                <a href="#fapi-pet" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">FAPI PET Scan</a>
                <a href="#exendin" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">Exendin PET Scan</a>
                <a href="#f-choline" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">F-Choline PET Scan</a>
                <a href="#trivehexin" className="block px-4 py-2 text-gray-custom hover:bg-primary hover:text-white">Trivehexin PET Scan</a>
              </div>
            </div>
            <a href="#blog" className={`font-medium transition-all duration-300 relative group
              ${scrolled ? "text-gray-custom hover:text-primary" : "text-white hover:text-secondary"}
              after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full
            `}>
              Blog
            </a>
            <a href="#testimonials" className={`font-medium transition-all duration-300 relative group
              ${scrolled ? "text-gray-custom hover:text-primary" : "text-white hover:text-secondary"}
              after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full
            `}>
              Testimonials
            </a>
            <a href="#gallery" className={`font-medium transition-all duration-300 relative group
              ${scrolled ? "text-gray-custom hover:text-primary" : "text-white hover:text-secondary"}
              after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-current after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full
            `}>
              Gallery
            </a>
            <a href="#contact" className={`font-semibold border px-4 py-1 rounded transition-all duration-300 relative overflow-hidden group
              ${scrolled ? "text-secondary border-secondary hover:bg-secondary hover:text-white" : "text-white border-white hover:bg-white hover:text-primary"}
              before:content-[''] before:absolute before:w-full before:h-full before:bg-current before:left-0 before:top-0 before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300 group-hover:before:scale-x-100 group-hover:before:opacity-10
            `}>
              <span className="relative z-10">Contact Us</span>
            </a>
          </nav>
          {/* Botón menú móvil */}
          <div className="md:hidden absolute right-4 top-4">
            <button
              onClick={() => setOpen(!open)}
              className={`focus:outline-none transition-colors duration-300
                ${scrolled ? "text-primary" : "text-white"}
              `}
              aria-label="Abrir menú"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Menú móvil */}
        {open && (
          <nav className="md:hidden bg-white shadow-lg px-4 pb-4">
            <a href="/" className="block py-2 text-gray-custom hover:bg-primary hover:text-white rounded">Home</a>
            <a href="#about" className="block py-2 text-gray-custom hover:bg-primary hover:text-white rounded">About Us</a>
            <a href="#therapies" className="block py-2 text-gray-custom hover:bg-primary hover:text-white rounded">Therapies</a>
            <a href="#pet-scans" className="block py-2 text-gray-custom hover:bg-primary hover:text-white rounded">PET Scans</a>
            <a href="#blog" className="block py-2 text-gray-custom hover:bg-primary hover:text-white rounded">Blog</a>
            <a href="#testimonials" className="block py-2 text-gray-custom hover:bg-primary hover:text-white rounded">Testimonials</a>
            <a href="#gallery" className="block py-2 text-gray-custom hover:bg-primary hover:text-white rounded">Gallery</a>
            <a href="#contact" className="block py-2 text-secondary font-semibold border border-secondary rounded hover:bg-secondary hover:text-white transition">Contact Us</a>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar; 