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
    <footer className="h-auto px-6 py-6 text-gray-700 bg-gradient-to-t from-neutral-50 to-neutral-100 sm:px-16">
      <div className="container flex flex-col items-center justify-between pb-4 md:flex-row">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-12">
          <Link
            to="home"
            smooth={true}
            duration={600}
            className="text-2xl font-bold text-orange-500 cursor-pointer"
          >
            <TbHexagonLetterDFilled className="inline -mt-4 text-4xl " />
          </Link>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-col items-center space-y-2 text-sm text-black md:flex-row md:space-y-0 md:space-x-6 md:text-base">
              {[
                { to: "home", label: "Home" },
                { to: "about", label: "About" },
                { to: "projects", label: "Projects" },
                { to: "contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to} className="hover:text-orange-500">
                  <Link to={link.to} smooth duration={800} className="cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social Media Links */}
        <div className="flex mt-4 space-x-4 md:mt-0">
          {[
            { href: "https://www.linkedin.com/in/dipendrabhandariofficial/", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
            { href: "https://github.com/dipendrabhandariofficial", icon: <FaGithub size={20} />, label: "GitHub" },
            { href: "https://www.instagram.com/_happy_zappy/", icon: <FaInstagram size={20} />, label: "Instagram" },
            { href: "https://www.facebook.com/dipendra.bhandari.16144", icon: <FaFacebook size={20} />, label: "Facebook" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="hover:text-orange-500"
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="ml-1 italic font-bold text-orange-500">Dipendra Bhandari</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
