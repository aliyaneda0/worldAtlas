import { NavLink } from "react-router"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
          <header className="bg-[#1F1F1F] shadow-md  h-16">
            <div className="max-w-6xl mx-auto px-7 py-3 flex justify-between items-center bg-[#1F1F1F]">
        
                {/* Logo */}
                <h1 className="font-JetBrains Mono text-3xl  font-bold text-white-900">
                  <NavLink to ="/">
                    World Atlas
                  </NavLink>
                </h1>

                {/* Desktop Menu */}
                <nav className="hidden md:block">
                  <ul className="flex gap-8 text-sm font-semibold text-white-700">
                    <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
                    <li><a href="/about" className="hover:text-blue-500 transition">About</a></li>
                    <li><a href="/country" className="hover:text-blue-500 transition">Country</a></li>
                    <li><a href="/contact" className="hover:text-blue-500 transition">Contact</a></li>
                  </ul>
                </nav>

                  {/* Hamburger Button (Mobile) */}
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-2xl md:hidden"
                  >
                    <GiHamburgerMenu color="white"  />
                  </button>
            </div>

              {/* Mobile Menu */}
              {menuOpen && (
                <nav className="md:hidden bg-[#eaf2f8] border-t border-gray-300 animate-slideDown">
                  <ul className="flex flex-col items-center gap-4 py-4 text-sm font-semibold text-white-700">
                    <li><a href="#" className="hover:text-blue-500">Home</a></li>
                    <li><a href="#" className="hover:text-blue-500">About</a></li>
                    <li><a href="#" className="hover:text-blue-500">Services</a></li>
                    <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                  </ul>
                </nav>
              )}
          </header>
        </>
    )
}