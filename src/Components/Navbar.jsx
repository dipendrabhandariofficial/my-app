import React from "react";
import {
  FaHome,
  FaUser,
  FaPhone,
  FaAdjust,
  FaProjectDiagram,
} from "react-icons/fa";
import { FaRProject } from "react-icons/fa6";
import { TbCircleLetterD, TbHexagonLetterDFilled } from "react-icons/tb";

function Navbar() {
  return (
    <nav className="w-screen sticky top-0 bg-slate-50 z-20 shadow-md pr-8">
        <div className="container flex justify-between items-center w-full px-10 pt-6 pb-4">
          <TbHexagonLetterDFilled className="flex flex-col text-6xl text-orange-500" />

          <ul className="flex space-x-16 items-center justify-center text-black text-lg font-medium">
            <li className="flex flex-col items-center  hover:text-orange-500">
              <FaHome className="text-black-500 text-2xl" />
              <a href="home" className="">
                Home
              </a>
            </li>
            <li className="flex flex-col items-center  hover:text-orange-500">
              <FaUser className="text-black-500 text-2xl " />
              <a href="about" className="">
                About
              </a>
            </li>
            <li className="flex flex-col items-center  hover:text-orange-500">
              <FaAdjust className="text-black-500 text-2xl " />
              <a href="skills" className="">
                Skills
              </a>
            </li>
            <li className="flex flex-col items-center  hover:text-orange-500">
              <FaProjectDiagram className="text-black-500 text-2xl " />
              <a href="projects" className="">
                Projects
              </a>
            </li>
            <li className="flex flex-col items-center  hover:text-orange-500 ">
              <FaPhone className="text-black-500 text-2xl " />
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
