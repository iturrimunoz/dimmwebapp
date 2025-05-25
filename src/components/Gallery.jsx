import React, { useState } from 'react';

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Video 1",
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg",
      videoId: "VIDEO_ID_1"
    },
    {
      id: 2,
      title: "Video 2",
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_2/maxresdefault.jpg",
      videoId: "VIDEO_ID_2"
    },
    {
      id: 3,
      title: "Video 3",
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_3/maxresdefault.jpg",
      videoId: "VIDEO_ID_3"
    },
    // Agrega más videos según necesites
  ];

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Galería de Videos</h2>
        
        {/* Grid de videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openModal(video)}
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fadeIn"
            onClick={closeModal}
          >
            <div 
              className="bg-white rounded-xl w-full max-w-4xl relative transform transition-all duration-300 animate-scaleIn"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10"
                aria-label="Cerrar video"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-w-16 aspect-h-9 bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-t-xl"
                ></iframe>
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50 rounded-b-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedVideo.title}</h3>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    <span>Duración: 5:30</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                    <span>Vistas: 1.2K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 