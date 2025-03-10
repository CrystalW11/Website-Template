/** @format */

import React from "react";
import { Link } from "react-router-dom"; // import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css"; // Ensure this is properly imported

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light custom-navbar">
      <div className="container-fluid-nav px-3 d-flex justify-content-between w-100">
        <a className="navbar-brand" href="#">
          <img
            src="/kristens1_logo.png"
            alt="Brand Logo"
            className="navbar-logo"
            style={{ width: "150px", height: "auto" }}
          />
        </a>
        <div className="d-flex w-50 justify-content-between">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
          <a className="nav-link" href="/about">
            About
          </a>
          <a className="nav-link" href="/reservation">
            Reservation
          </a>
          <a className="nav-link" href="/services">
            Services
          </a>
          <a className="nav-link" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
