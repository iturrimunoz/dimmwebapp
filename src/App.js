import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />

      {/* Botón flotante del Director Médico - Lado izquierdo centrado verticalmente */}
      <div className="fixed left-6 top-1/2 z-40 transform -translate-y-1/2">
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-all duration-300 transform hover:scale-110 group"
        >
          <div className="relative">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
        </button>
        
        {/* Información del Director Médico - A la derecha del botón */}
        {showInfo && (
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-xl p-4 w-64 transition-all duration-300 animate-scaleIn">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                DR
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Dr. John Doe</h3>
                <p className="text-sm text-gray-600">Director Médico</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                doctor@example.com
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                +1 234 567 890
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Hospital Principal, Ciudad
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
