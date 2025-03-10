/** @format */

// src/views/Contact.jsx
import React from "react";
import "../static/index.css";
import locationImage from "../assets/location.png";// import the image here
import phoneImage from "../assets/phone.png";
import emailImage from "../assets/email.png";

const Contact = () => {
  return (
    <div className="card m-accordion-body">
      <div className="text-center">
        <h1>Contact Us</h1>
        <p>
          <img
            src={emailImage}
            alt="Phone Icon"
            style={{ width: "20px", height: "20px", marginLeft: "10px" }} // You can adjust the style here
          />
          Email: example@example.com
        </p>
        <p>
          <img
            src={phoneImage}
            alt="Phone Icon"
            style={{ width: "20px", height: "20px", marginLeft: "10px" }} // You can adjust the style here
          />
          Phone: 123-456-7890
        </p>
        <p>
          <img
            src={locationImage}
            alt="Location Icon"
            style={{ width: "20px", height: "20px", marginLeft: "10px" }} // You can adjust the style here
          />
          Address: 123 Main St, City, Country
        </p>
      </div>
    </div>
  );
};

export default Contact;
