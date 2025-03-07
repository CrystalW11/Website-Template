/** @format */

import React from "react";
import background from "../assets/background.jpg"; // Corrected import path

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        margin: 0,
        paddingLeft: 10,
        paddingRight: 10,
        border: "2px solid white", // Adds a white border with a width of 2px
      }}>
      <div className="container">
      <h1 className="white-text">Welcome to Triple R Ranch and Winery</h1>
      <p className="white-text">
        This is the home page of your winery application.
        </p>
        </div>
    </div>
  );
};

export default Home;
