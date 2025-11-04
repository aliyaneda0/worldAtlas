import { NavLink } from "react-router"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
          <header className="bg-[#131212] shadow-md  h-20  sticky top-0 z-50 w-full opacity-96">
            <div className="max-w-[68rem]  mx-auto px-7  py-5 flex justify-between items-center ">
        
                {/* Logo */}
                <h1 className="urbanist text-4xl  font-bold text-white-900">
                  <NavLink to ="/">
                    World Atlas
                  </NavLink>
                </h1>

                {/* Desktop Menu */}
                <nav className="hidden md:block">
                  <ul className="flex gap-8 text-md font-light text-white-700">
                    <li><a href="/" className="hover:text-gray-400 transition shadow:white">Home</a></li>
                    <li><a href="/about" className="hover:text-gray-400 transition">About</a></li>
                    <li><a href="/country" className="hover:text-gray-400 transition">Country</a></li>
                    <li><a href="/contact" className="hover:text-gray-400 transition">Contact</a></li>
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