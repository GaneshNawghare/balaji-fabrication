import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import video10 from "../assets/videos/whatsapp10.mp4";
import video2 from "../assets/videos/whatsapp1.mp4";
import video3 from "../assets/videos/whatsapp2.mp4";
import video4 from "../assets/videos/whatsapp3.mp4";
import video5 from "../assets/videos/whatsapp4.mp4";
import video6 from "../assets/videos/whatsapp5.mp4";
import video7 from "../assets/videos/whatsapp6.mp4";
import video8 from "../assets/videos/whatsapp7.mp4";
import video1 from "../assets/videos/whatsapp8.mp4";
import video9 from "../assets/videos/whatsapp9.mp4";
import Image1 from "../assets/images/whatsapp1.png";
import Image2 from "../assets/images/whatsapp2.png";
import Image3 from "../assets/images/whatsapp3.png";
import Image4 from "../assets/images/whatsapp4.png";
import Image5 from "../assets/images/whatsapp5.png";
import Image6 from "../assets/images/whatsapp6.png";
import Image7 from "../assets/images/whatsapp7.png";
import Image8 from "../assets/images/whatsapp8.png";

const generateUUID = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID)
    return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export default function Gallery() {
  const [media, setMedia] = useState([
    { id: generateUUID(), type: "video", url: video10 },
    {
      id: generateUUID(),
      type: "video",
      url: video2
    },
    {
      id: generateUUID(),
      type: "image",
       url: Image1
    },
    {
      id: generateUUID(),
      type: "video",
       url: video3
    },
     {
      id: generateUUID(),
      type: "image",
       url: Image2
    },
    {
      id: generateUUID(),
      type: "video",
      url: video4
    },
     {
      id: generateUUID(),
      type: "image",
       url: Image3
    },
    {
      id: generateUUID(),
      type: "video",
        url: video5
    },
     {
      id: generateUUID(),
      type: "image",
       url: Image4
    },
    {
      id: generateUUID(),
      type: "video",
      url: video6
    },
     {
      id: generateUUID(),
      type: "image",
       url: Image5
    },
     {
      id: generateUUID(),
      type: "video",
      url: video7
    },
     {
      id: generateUUID(),
      type: "image",
       url: Image6
    },
     {
      id: generateUUID(),
      type: "video",
      url: video8
    },
      {
      id: generateUUID(),
      type: "image",
       url: Image7
    },
     {
      id: generateUUID(),
      type: "video",
      url: video1
    },
      {
      id: generateUUID(),
      type: "image",
       url: Image8
    },
      {
      id: generateUUID(),
      type: "video",
      url: video9
    },
  ]);

  return (
    <div className="mt-8 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto bg-white rounded-xl shadow-2xl">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800 border-b-2 border-orange-500 pb-2">
        Our Work Portfolio
      </h2>

      <div className="max-h-[80vh] overflow-y-auto space-y-6 p-2 sm:p-4">
        {media.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500 text-base sm:text-lg">
            No media in the gallery.
          </div>
        ) : (
          media.map((item, idx) => (
            <div
              key={item.id}
              className="relative w-full rounded-xl overflow-hidden shadow-2xl border-4 border-gray-200"
            >
              {item.type === "image" ? (
                <img
                  src={item.url}
                  alt={`Media ${idx + 1}`}
                  className="w-full object-contain"
                  style={{ maxHeight: "80vh" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/800x500/374151/f3f4f6?text=Image+Load+Error";
                  }}
                />
              ) : (
                <video
                  src={item.url}
                  controls
                  className="w-full object-contain"
                  style={{ maxHeight: "80vh" }}
                />
              )}

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-2 sm:p-4 text-white text-xs sm:text-sm">
                <p className="font-medium">
                  {item.type === "image"
                    ? `Image ${idx + 1}`
                    : `Video ${idx + 1}`}
                </p>
                <p className="text-gray-300">
                  A showcase of our high-quality fabrication work.
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
