import React from "react";
import { TbHexagonLetterDFilled } from "react-icons/tb";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="w-screen fixed top-0 bg-slate-50 z-20 shadow-md pr-8">
      <div className="container flex justify-between items-center w-full px-6 py-4 md:px-10 md:py-6">
        {/* Logo as a Link */}
        <Link
          to="home"
          smooth={true}
          className="text-2xl font-bold text-orange-500 cursor-pointer"
        >
          <TbHexagonLetterDFilled className="text-3xl md:text-4xl inline" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 md:space-x-10 items-center justify-center text-black text-sm md:text-base">
          <li className="hover:text-orange-500 hover:underline underline-offset-4">
            <Link to="home" smooth duration={600} offset={-50} className="cursor-pointer">
              Home
            </Link>
          </li>
          <li className="hover:text-orange-500 hover:underline underline-offset-4">
            <Link to="aboutnext" smooth duration={700} offset={-100} className="cursor-pointer">
              About
            </Link>
          </li>
          <li className="hover:text-orange-500 hover:underline underline-offset-4">
            <Link to="projects" smooth duration={800} offset={-50} className="cursor-pointer">
              Projects
            </Link>
          </li>
          <li className="hover:text-orange-500 hover:underline underline-offset-4">
            <Link to="contact" smooth duration={900} offset={-50} className="cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
