import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PageHeader.css";

const PageHeader = ({ pageName }) => {
  return (
    <div className="header bg-white p-4 rounded shadow flex justify-between items-center">
      <h1 className="text-xl font-bold">{pageName}</h1>
      <div className="text-blue-500">
        <Link to="/dashboard" className="hover:underline">
          Home
        </Link>
        <Link to="/products" className="hover:underline">
          ~<span>{pageName}</span>
        </Link>{" "}
        ~<span>{pageName}</span>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default PageHeader;
