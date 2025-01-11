import React, { useState, useEffect } from "react";
import { TbHexagonLetterDFilled } from "react-icons/tb";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-20 px-8 transition-all duration-300 ${
        scrolled ? "py-4 bg-white/90 backdrop-blur-md shadow-lg" : "py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth duration={800}>
        <button className="group relative">
          <TbHexagonLetterDFilled  className="text-3xl md:text-4xl text-orange-500 transform transition-transform group-hover:-rotate-180" />
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
        </button>
        </Link>
        

        {/* Navbar Links */}
        <ul className="flex space-x-8 md:space-x-12 font-medium">
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth
                offset={-10}
                duration={800}
                spy
                activeClass="text-orange-500"
                aria-label={`Navigate to ${item}`}
              >
                <button
                  className="capitalize relative group text-orange-500 hover:text-orange-500 transition-colors"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        nav {
          transform: translateZ(0);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
