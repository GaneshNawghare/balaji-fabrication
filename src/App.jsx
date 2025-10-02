import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        {/* Navbar */}
        <nav className="flex justify-between items-center bg-gray-900 text-white px-6 py-3 rounded-lg">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="3" />
              <path
                d="M20 44 L44 20 M28 20 L44 36"
                stroke="orange"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="32" cy="32" r="4" fill="orange" />
            </svg>
            <h1 className="text-xl font-bold">Balaji Fabrication</h1>
          </div>

          <div className="flex gap-4">
            <Link to="/" className="hover:text-orange-400">Home</Link>
            <Link to="/gallery" className="hover:text-orange-400">Gallery</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}
