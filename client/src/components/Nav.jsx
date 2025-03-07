/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css"; // Ensure this is properly imported

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid px-3 d-flex justify-content-between w-100">
        {" "}
        {/* Flexbox to evenly space links */}
        <a className="navbar-brand" href="#">
          Brand
        </a>
        <div className="d-flex w-50 justify-content-between">
          {" "}
          {/* Flexbox for the links */}
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            About
          </a>
          <a className="nav-link" href="#">
            Services
          </a>
          <a className="nav-link" href="#">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
