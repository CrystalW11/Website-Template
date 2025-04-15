import React from "react";
import { Link } from "react-router-dom"; // import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css"; // Ensure this is properly imported

const NavBar = () => {
  return (
    <Nav className="navbar navbar-light bg-light custom-navbar">
      <div className="container-fluid-nav px-3 d-flex justify-content-between w-100">
        <Link className="navbar-brand" to="/">
          <img
            src="/kristens1_logo.png"
            alt="Brand Logo"
            className="navbar-logo"
            style={{ width: "150px", height: "auto" }}
          />
        </Link>
        <div className="d-flex w-50 justify-content-between">
          <Link className="nav-link active" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/reservation">
            Reservation
          </Link>
          <Link className="nav-link" to="/services">
            Services
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
