import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-white-500 py-6 px-16 h-32">
      <div className="container  flex flex-row  justify-between">
        {/* Logo */}
        <div className="flex gap-12 items-center"> 
          <div>
            <img
              src="/d_logo.png" // Replace with your logo path
              alt="Logo"
              className="h-10 " // Adjust height as needed
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6 ">
            <a href="#home" className="hover:text-orange-500">
              HOME
            </a>
            <a href="#work" className="hover:text-orange-500">
              WORK
            </a>
            <a href="#about" className="hover:text-orange-500">
              ABOUT
            </a>
            <a href="#contact" className="hover:text-orange-500">
              CONTACT
            </a>
          </nav>
        </div>
        {/* Social Media Links */}
        <div className="flex space-x-4  mt-4">
          <a
            href="#linkedin"
            className="hover:text-orange-500"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a href="#github" className="hover:text-orange-500" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a
            href="#instagram"
            className="hover:text-orange-500"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#twitter"
            className="hover:text-orange-500"
            aria-label="Twitter"
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
        © 2024 Dipendra Bhandari
      </div>
    </footer>
  );
};

export default Footer;
