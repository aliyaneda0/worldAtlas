import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#131212] shadow-md h-18 sticky top-0 z-50 w-full bg-opacity-90 backdrop-blur-md">
        <div className="max-w-[68rem] mx-auto px-7 py-4 flex justify-between items-center ">

          <h1 className="urbanist text-4xl font-bold text-white-900">
            <NavLink to="/">World Atlas</NavLink>
          </h1>

          <nav className="hidden md:block">
            <ul className="flex gap-8 text-md font-light text-white-700">
              <li><NavLink to="/" className="hover:text-blue-400 transition">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-blue-400 transition">About</NavLink></li>
              <li><NavLink to="/country" className="hover:text-blue-400 transition">Country</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-blue-400 transition">Contact</NavLink></li>
            </ul>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
          >
            <GiHamburgerMenu color="white" />
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-[#131212] border-t border-gray-500 animate-slideDown">
            <ul className="flex flex-col items-center gap-4 py-4 text-sm font-semibold text-white-700">
              <li><NavLink to="/" className="hover:text-blue-500">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-blue-500">About</NavLink></li>
              <li><NavLink to="/country" className="hover:text-blue-500">Country</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-blue-500">Contact</NavLink></li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};
