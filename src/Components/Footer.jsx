import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { TbHexagonLetterDFilled } from "react-icons/tb";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#D4D9D5] text-white-500 py-6 px-6 sm:px-16 h-auto">
      <div className="container flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div className="flex flex-col sm:flex-row gap-12 items-center sm:items-start  sm:mb-0">
          <div>
            <Link
              to="home"
              smooth={true}
              duration={600}
              className="text-2xl font-bold text-orange-500 cursor-pointer"
            >
              <TbHexagonLetterDFilled className="text-3xl md:text-4xl inline" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left ">
            <ul className="flex space-x-6 md:space-x-10 items-center justify-center text-black text-sm md:text-base">
              <li className="hover:text-orange-500 ">
                <Link
                  to="home"
                  smooth
                  duration={800}
                  className="cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-orange-500 ">
                <Link
                  to="about"
                  smooth
                  duration={800}
                  
                  className="cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li className="hover:text-orange-500 ">
                <Link
                  to="projects"
                  smooth
                  duration={800}
                  className="cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li className="hover:text-orange-500 ">
                <Link
                  to="contact"
                  smooth
                  duration={800}
                  className="cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 sm:mt-0 justify-center sm:justify-start">
          <a
            href="https://www.linkedin.com/in/dipendrabhandariofficial/"
            className="hover:text-orange-500"
            aria-label="LinkedIn"
            target="_blank"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/dipendrabhandariofficial"
            className="hover:text-orange-500"
            aria-label="GitHub"
            target="_blank"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.instagram.com/"
            className="hover:text-orange-500"
            aria-label="Instagram"
             target="_blank"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://x.com/iamdipendra001"
            className="hover:text-orange-500"
            aria-label="Twitter"
             target="_blank"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.facebook.com/dipendra.bhandari.16144"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 mt-4 text-sm mx-10">
        © {new Date().getFullYear()} <span className="italic bold text-orange-500">Dipendra Bhandari</span>. All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
