/** @format */

// src/views/Services.jsx
import React from "react";
import "../static/index.css"; // Ensure the styles are imported

const Services = () => {
  return (
    <div className="container-fluid contact-container">
      <div className="services-content">
        <h1>Our Services</h1>
        <p>We provide a variety of services to meet your needs.</p>
        <ul className="services-list">
          <li>Hot tub</li>
          <li>Disc Golf</li>
          <li>Fishing</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
