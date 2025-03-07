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
        paddingLeft: 15
      }}
    >
      <h1>Welcome to Triple R Ranch and Winery</h1>
      <p>This is the home page of your winery application.</p>
    </div>
  );
};

export default Home;
