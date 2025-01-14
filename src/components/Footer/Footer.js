import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Assuming you have a CSS file for additional styles

const Footer = () => {
  return (
    <footer className="footer bg-white p-4 rounded shadow flex justify-between items-center">
      <div className="text-gray-600">
        Made By <a href="https://github.com/mishra-naveen-dev" className="hover:underline">mishra-naveen-dev</a> © 2025
      </div>
      <div className="text-blue-500 flex space-x-4">
        <a href="https://github.com/mishra-naveen-dev" className="hover:underline">
          <FaGithub size="1.5em" />
        </a>
        <a href="https://www.linkedin.com/in/mishra-naveen-dev" className="hover:underline">
          <FaLinkedin size="1.5em" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;