import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, UploadCloud } from "lucide-react";

const generateUUID = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export default function Gallery() {
  const [images, setImages] = useState([
    { id: generateUUID(), url: "https://placehold.co/800x500/374151/f3f4f6?text=Welding+Structure+1" },
    { id: generateUUID(), url: "https://placehold.co/800x500/1f2937/f3f4f6?text=Industrial+Equipment" },
    { id: generateUUID(), url: "https://placehold.co/800x500/374151/f3f4f6?text=Custom+Railings" },
    { id: generateUUID(), url: "https://placehold.co/800x500/1f2937/f3f4f6?text=Fabricated+Component" },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = images.length;

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({ id: generateUUID(), url: URL.createObjectURL(file) }));
    setImages(prev => [...prev, ...newImages]);
    setCurrentSlide(images.length);
  };

  const nextSlide = useCallback(() => setCurrentSlide(prev => (prev + 1) % totalSlides), [totalSlides]);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    if (totalSlides > 1) {
      const interval = setInterval(nextSlide, 4500);
      return () => clearInterval(interval);
    }
  }, [totalSlides, nextSlide]);

  const currentImage = images[currentSlide];

  return (
    <div className="mt-12 max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 border-b-2 border-orange-500 pb-2">
        Our Work Portfolio
      </h2>

      <div className="flex justify-center mb-8">
        <label className="flex items-center justify-center px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition cursor-pointer font-medium">
          <UploadCloud className="w-5 h-5 mr-2" />
          Upload Your Project Images
          <input type="file" multiple accept="image/*" onChange={handleUpload} className="hidden" />
        </label>
      </div>

      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-gray-200">
        {totalSlides === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500 text-xl">
            No images in the gallery. Please upload some!
          </div>
        ) : (
          <>
            <img
              key={currentImage.id}
              src={currentImage.url}
              alt={`Work Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover transition-opacity duration-700 animate-fadeIn"
              onError={e => { e.target.onerror = null; e.target.src = "https://placehold.co/800x500/374151/f3f4f6?text=Image+Load+Error"; }}
            />
            <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white">
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all ${index === currentSlide ? 'bg-orange-500 w-6' : 'bg-gray-400'}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 text-white">
              <p className="text-lg font-medium">Project {currentSlide + 1} of {totalSlides}</p>
              <p className="text-sm text-gray-300">A showcase of our high-quality fabrication work.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
