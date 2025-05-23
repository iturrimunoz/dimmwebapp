import React from 'react';

const Gallery = () => {
  // Puedes reemplazar estos enlaces por imágenes reales
  const images = [
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Galería</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Galería ${idx + 1}`} className="rounded-lg shadow-md" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 