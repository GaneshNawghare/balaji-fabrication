import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to Balaji Fabrication</h2>
      <p className="text-lg mb-6">
        We specialize in welding and fabrication work. View our gallery of projects!
      </p>
      <Link
        to="/gallery"
        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
      >
        View Gallery
      </Link>
    </div>
  );
}
