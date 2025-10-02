import React from "react";
import { useNavigate } from "react-router-dom";
import Image1 from "../assets/images/Labourer-arc-welding.png";
import Image2 from "../assets/images/SMF_blog_header_Oct-1-1-725w.png";
import Image3 from "../assets/images/cover-fabrication-welding.png";
import Image4 from "../assets/images/metal-fabrication-welding-lg.png";
import Image5 from "../assets/images/Industrial-Welding-in-Action.png";
import Image6 from "../assets/images/two-welders0working-on-a-metal-fabrication.png";
import { Phone } from "lucide-react";

const images = [Image1, Image3, Image2, Image5, Image4, Image6];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center bg-gray-900 overflow-hidden p-4 md:p-8 shadow-2xl">
      {/* Scrolling Carousel Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex animate-scroll-lg space-x-4 md:space-x-8">
          {images.concat(images).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`carousel-${idx}`}
              className="w-[18rem] h-[12rem] md:w-[30rem] md:h-[20rem] object-cover rounded-lg shadow-xl opacity-40 hover:opacity-50 transition duration-300 transform scale-105"
            />
          ))}
        </div>
      </div>

      {/* Overlay Hero Content */}
      <div className="mt-32 md:mt-40 relative text-center max-w-xl sm:max-w-2xl md:max-w-4xl bg-gray-900/70 backdrop-blur-md p-8 sm:p-12 md:p-16 rounded-2xl border-4 border-orange-500/70 shadow-[0_0_50px_rgba(234,88,12,0.7)] md:shadow-[0_0_80px_rgba(234,88,12,0.8)] transform hover:scale-[1.01] transition duration-700 ease-in-out">
        {/* Founded Year */}
        <p className="text-sm sm:text-md font-extrabold text-orange-400 mb-2 sm:mb-4 uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-80 transition hover:opacity-100 duration-300">
          Established in 1996
        </p>
        <p className="text-sm sm:text-md font-extrabold text-orange-400 mb-2 sm:mb-4 uppercase tracking-[0.2em] sm:tracking-[0.3em] animate-pulse">
          Precision | Strength | Durability
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-4 sm:mb-8 leading-tight font-sans">
          Crafting <span className="text-orange-500">Excellence</span> in Metal
          Fabrication
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-12 max-w-md sm:max-w-3xl md:max-w-4xl mx-auto">
          We are specialists in professional welding and heavy fabrication,
          delivering robust projects built with unparalleled precision for the
          industrial and commercial sectors.
        </p>

        {/* Button Group (Portfolio & New Call Button) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => navigate("/gallery")}
            className="group relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-lg sm:text-xl font-bold rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-xl shadow-orange-500/60 transition duration-500 transform hover:scale-105 w-full sm:w-auto"
          >
            <span className="relative px-6 sm:px-10 py-3 sm:py-4 transition-all ease-in duration-300 bg-gray-900 rounded-full group-hover:bg-opacity-0 text-white tracking-wider">
              View Our Portfolio &rarr;
            </span>
          </button>

          {/* NEW Prominent 'Call Us' Button for Contact */}
          <a
            href="tel:+919860888198"
            className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg sm:text-xl font-bold rounded-full bg-gradient-to-br from-red-500 to-yellow-400 shadow-xl shadow-red-500/60 transition duration-500 transform hover:scale-105 w-full sm:w-auto animate-pulse"
          >
            <span className="relative px-6 sm:px-10 py-3 sm:py-4 transition-all ease-in duration-300 bg-gray-900 rounded-full group-hover:bg-opacity-0 text-white tracking-wider flex items-center gap-3">
              {/* Assuming 'Phone' is your icon component */}
              <Phone className="w-6 h-6" />
              Call Satish Now
            </span>
          </a>
        </div>
      </div>

      {/* Custom styles for animation */}
      <style>
        {`
          @keyframes scroll-lg {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-lg {
            animation: scroll-lg 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
