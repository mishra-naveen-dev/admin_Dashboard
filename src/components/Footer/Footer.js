import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="footer  rounded mc-footer flex justify-between items-center mb-3">
      {/* Centered Name */}

      <div className="text-center flex-grow">
        <span className="footer-text text-lg pl-4 mr-4">
          Made By{" 💖"}
          <a
            href="https://github.com/mishra-naveen-dev"
            className="hover:underline ml-1"
            aria-label="Visit mishra-naveen-dev's GitHub profile"
          >
            Naveen Mishra
          </a>{" "}
          © 2025
        </span>

        {/* Right-Aligned Icons */}

        <a
          href="https://github.com/mishra-naveen-dev"
          className="hover:underline"
          aria-label="Visit mishra-naveen-dev's GitHub"
        >
          <FaGithub
            size="30px"
            className="text-black hover:text-gray-800 transition-transform transform hover:scale-110 ml-4"
            style={{ color: "#211F1F" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mishra-naveen-dev"
          className="hover:underline"
          aria-label="Visit mishra-naveen-dev's LinkedIn"
        >
          <FaLinkedin
            size="30px"
            className="hover:text-gray-80  transition-transform transform hover:scale-110 ml-4"
            style={{ color: "#0077b5" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
