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
      <div className="container flex flex-col items-center justify-between sm:flex-row sm:items-start">
        <div className="flex flex-col items-center justify-between gap-12 sm:flex-row sm:items-start sm:mb-0">
          <div className="-mt-2">
            <Link
              to="home"
              smooth={true}
              duration={600}
              className="text-2xl font-bold text-orange-500 cursor-pointer"
            >
              <TbHexagonLetterDFilled className="inline text-4xl md:text-4xl" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2 text-center sm:flex-row sm:space-y-0 sm:space-x-6 sm:text-left ">
            <ul className="flex items-center justify-center space-x-6 text-sm text-black md:space-x-10 md:text-base">
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
        <div className="flex justify-center mt-4 space-x-4 sm:mt-0 sm:justify-start">
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
      <div className="flex items-center justify-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="italic text-orange-500 bold">Dipendra Bhandari</span>. All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
