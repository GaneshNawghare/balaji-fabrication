import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
  const [images, setImages] = useState([
    "https://picsum.photos/id/1011/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
  ]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Work Gallery</h2>

      {/* Image Upload */}
      <div className="flex justify-center mb-4">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleUpload}
          className="border px-3 py-2 rounded-md"
        />
      </div>

      {/* Slider */}
      <div className="max-w-xl mx-auto">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx}>
              <img
                src={img}
                alt={`work-${idx}`}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
