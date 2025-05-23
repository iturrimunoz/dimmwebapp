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
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white bg-opacity-80 shadow-md backdrop-blur"
          : "bg-transparent"
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
          Theranostics Clinic
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
            <button className="text-gray-custom hover:text-primary font-medium focus:outline-none">
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
            <button className="text-gray-custom hover:text-primary font-medium focus:outline-none">
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
          <a href="#blog" className="text-gray-custom hover:text-primary font-medium">Blog</a>
          <a href="#testimonials" className="text-gray-custom hover:text-primary font-medium">Testimonials</a>
          <a href="#gallery" className="text-gray-custom hover:text-primary font-medium">Gallery</a>
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
  );
};

export default Navbar; 