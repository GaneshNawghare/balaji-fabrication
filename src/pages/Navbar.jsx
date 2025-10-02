import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Hammer, Image as ImageIcon, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ to, Icon, children }) => (
    <Link
      to={to}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all
        ${
          currentPath === to
            ? "text-orange-500 bg-gray-800"
            : "text-gray-300 hover:text-orange-400 hover:bg-gray-800"
        }
      `}
      onClick={() => setIsOpen(false)} // close menu on link click
    >
      <Icon className="w-5 h-5" />
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-10 bg-gray-900 shadow-xl border-b-4 border-orange-500">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3 text-white">
          <Hammer className="w-8 h-8 text-orange-500 animate-spin-slow" />
          <h1 className="text-2xl font-extrabold tracking-widest uppercase">
            Balaji Fabrication
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <div className="flex gap-2">
            <NavLink to="/" Icon={Hammer}>
              Home
            </NavLink>
            <NavLink to="/gallery" Icon={ImageIcon}>
              Gallery
            </NavLink>
          </div>

          {/* Contact Info */}
          <a
            href="tel:+9860888198"
            className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition mt-2"
          >
            <Phone className="w-5 h-5 text-orange-500" />
            <div className="flex flex-col text-sm">
              <span className="font-semibold text-white">Satish Nawghare</span>
              <span>+91 9860888198</span>
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-orange-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-4 flex flex-col gap-4">
          <NavLink to="/" Icon={Hammer}>
            Home
          </NavLink>
          <NavLink to="/gallery" Icon={ImageIcon}>
            Gallery
          </NavLink>

          {/* Contact Info for Mobile */}
          <a
            href="tel:+9860888198"
            className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition mt-2"
          >
            <Phone className="w-5 h-5 text-orange-500" />
            <div className="flex flex-col text-sm">
              <span className="font-semibold text-white">Satish Nawghare</span>
              <span>+91 9860888198</span>
            </div>
          </a>
        </div>
      )}
    </header>
  );
}
