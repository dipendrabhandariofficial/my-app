import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { TbHexagonLetterDFilled } from "react-icons/tb";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu
  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle scroll to apply shadow on navbar and close menu
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (menuOpen) {
        setMenuOpen(false); // Close the menu on scroll
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed  top-0 w-full z-20 px-7 transition-all duration-300 ${
        scrolled ? "py-4 md:bg-white/90 bg-white backdrop-blur-md shadow-lg" : "py-6  md:bg-[#F5F5F5] bg-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} duration={800} offset={-80}>
          <button className="group relative">
            <TbHexagonLetterDFilled className="text-3xl md:text-4xl text-orange-500 transform transition-transform" />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
          </button>
        </Link>

        {/* Navbar Links */}
        <ul
          className={`fixed  md:static md:flex md:space-x-8 font-medium bg-white md:bg-transparent backdrop-blur-md  top-16 left-0  md:top-auto md:right-auto w-full md:w-auto md:h-full sm:h-auto flex flex-col md:flex-row items-center justify-center transition-transform duration-400 ${
            menuOpen ? " translate-y-0 bg-white " : " hidden  "
          } `}
        >
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={800}
                offset={-80} // Adjust offset to account for navbar height
                spy={true}
                hashSpy={true} // Ensures proper section detection
                activeClass="text-orange-800 font-bold" // Active link styles
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                <button className="capitalize relative group text-gray-700 hover:text-orange-500 transition-colors">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
                </button>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            className="text-3xl text-gray-700"
            onClick={toggleNavbar}
          >
            {menuOpen ? <MdOutlineClose />: <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
