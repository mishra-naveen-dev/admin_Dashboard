import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaHome, FaProductHunt } from "react-icons/fa"; // Import icons
import "./PageHeader.css";

const PageHeader = ({ pageName }) => {
  const links = [
    { name: "Home", icon: <FaHome />, path: "/dashboard" },
    {
      name: pageName,
      icon: <FaProductHunt />,
      path: `/products/${pageName.toLowerCase()}`,
    },
    // Add more links here as needed
  ];

  return (
    <div className="header bg-white p-4 rounded shadow flex justify-between items-center">
      <h1 className="text-2xl font-bold flex items-center bg-[#f4f4f4] text-black p-2 rounded">
        <FaHome className="mr-1" /> {pageName}
      </h1>
      <div>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="hover:underline flex items-center"
            style={{ textDecoration: "none", fontSize: "18px" }}
          >
            {React.cloneElement(link.icon, { className: " ml-3" })}
            <span className="ml-1">{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default PageHeader;
