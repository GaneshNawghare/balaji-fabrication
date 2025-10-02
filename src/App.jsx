import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./pages/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        <Navbar />

        <main className="pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* Add more pages here if needed */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
