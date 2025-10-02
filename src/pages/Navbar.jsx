import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Hammer, Image as ImageIcon } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const NavLink = ({ to, Icon, children }) => (
    <Link
      to={to}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all
        ${currentPath === to
          ? 'text-orange-500 bg-gray-800'
          : 'text-gray-300 hover:text-orange-400 hover:bg-gray-800'
        }
      `}
    >
      <Icon className="w-5 h-5" />
      {children}
    </Link>
  );

 return (
    <header className="sticky top-0 z-10 bg-gray-900 shadow-xl border-b-4 border-orange-500">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center gap-3 text-white">
          <Hammer className="w-8 h-8 text-orange-500 animate-spin-slow" />
          <h1 className="text-2xl font-extrabold tracking-widest uppercase">
            Balaji Fabrication
          </h1>
        </div>

        <div className="flex gap-2 font-medium">
          <NavLink to="/" Icon={Hammer}>Home</NavLink>
          <NavLink to="/gallery" Icon={ImageIcon}>Gallery</NavLink>
        </div>
      </nav>
    </header>
  );
}
