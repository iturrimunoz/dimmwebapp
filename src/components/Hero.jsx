import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-primary text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Theranostics Center
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Tratamientos de Medicina Nuclear y PET Scans de Clase Mundial – Lucha contra el cáncer con precisión
        </p>
        <a
          href="#contact"
          className="inline-block bg-secondary text-white font-semibold px-8 py-3 rounded-md shadow hover:bg-opacity-90 transition"
        >
          Contáctanos
        </a>
      </div>
      {/* Imagen decorativa opcional */}
      {/* <img src="/ruta/a/imagen.png" alt="" className="absolute right-0 bottom-0 w-1/3 opacity-20" /> */}
    </section>
  );
};

export default Hero; 