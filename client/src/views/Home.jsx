/** @format */

import React from "react";
import lower_deck from "../assets/lower_deck.png"; // Corrected import path

const Home = () => {
  return (
    <div>
    {/* <div
      style={{
        backgroundImage: `url(${lower_deck})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "vh",
        width:"80vh",
        margin: 0,
        paddingLeft: 10,
        paddingRight: 10,
        border: "2px solid white", // Adds a white border with a width of 2px
      }}>
            <div className="container">
      <h1 className="white-text">Welcome to <span style={{color:'red'}}>Red</span> Tail river Ranch!</h1>
      <p className="white-text">
        This is the home page of your winery application.
        </p>
        </div>
      </div> */}
      <img src={lower_deck} alt="lower_deck" style={{ width: "50%", height: "50vh" }} />

    </div>
  );
};

export default Home;
