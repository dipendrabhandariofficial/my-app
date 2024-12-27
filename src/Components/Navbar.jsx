import React from "react";
import { TbHexagonLetterDFilled } from "react-icons/tb";

function Navbar() {
  return (
    <nav className="w-screen sticky  top-0 bg-slate-50 z-20 shadow-md pr-8">
      <div className="container flex justify-between items-center w-full px-10 pt-6 pb-4">
        {/* Logo as a Link */}
        <a href="home" className="text-2xl font-bold text-orange-500">
          <TbHexagonLetterDFilled className="text-4xl inline" />
        </a>

        {/* Navigation Links */}
        <ul className="flex space-x-10 items-center justify-center text-black text-sm">
          <li className="hover:text-orange-500 hover:underline underline-offset-4">
            <a href="home">Home</a>
          </li>
          <li className="hover:text-orange-500 hover:underline underline-offset-4">
            <a href="about">About</a>
          </li>
          <li className="hover:text-orange-500 hover:underline underline-offset-4 ">
            <a href="skills">Skills</a>
          </li>
          <li className="hover:text-orange-500 hover:underline underline-offset-4 ">
            <a href="projects">Projects</a>
          </li>
          <li className="hover:text-orange-500 hover:underline underline-offset-4 ">
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
