import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 text-center border-t-4 border-orange-500/50">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Balaji Fabrication. Built with Strength.
      </p>
      <p className="text-xs mt-1">
        Contact us for custom welding and fabrication quotes.
      </p>
      <style>{`
        .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes fadeIn { from {opacity:0;} to {opacity:1;} }
        @keyframes spin { from {transform:rotate(0deg);} to {transform:rotate(360deg);} }
      `}</style>
    </footer>
  );
}
