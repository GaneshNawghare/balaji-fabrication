import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative isolate min-h-[85vh] flex items-center justify-center bg-gray-900 p-8 shadow-2xl overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 bg-repeat" 
        style={{ backgroundImage: "url('https://placehold.co/100x100/1f2937/111827?text=Steel')", backgroundSize: '20px' }}
      />

      <div className="relative text-center max-w-4xl bg-white/5 backdrop-blur-sm p-12 rounded-xl border-4 border-orange-600/50 shadow-[0_0_50px_rgba(234,88,12,0.5)] transform hover:scale-[1.01] transition duration-500">
        <p className="text-sm font-extrabold text-orange-500 mb-4 uppercase tracking-[0.2em]">
          Precision | Strength | Durability
        </p>
        <h2 className="text-6xl font-black text-white mb-6 leading-tight font-sans">
          Crafting <span className="text-orange-500">Excellence</span> in Metal Fabrication
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          We are specialists in professional **welding and heavy fabrication**, delivering robust projects built with unparalleled precision for the industrial and commercial sectors.
        </p>
        <button
          onClick={() => navigate('/gallery')}
          className="group relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-lg font-bold rounded-lg bg-gradient-to-br from-orange-500 to-red-500 group-hover:from-orange-600 group-hover:to-red-600 shadow-lg shadow-orange-500/50 transition duration-300 transform hover:translate-y-[-2px]"
        >
          <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 text-white">
            View Our Portfolio &rarr;
          </span>
        </button>
      </div>
    </div>
  );
}
