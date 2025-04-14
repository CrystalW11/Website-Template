/** @format */

import React from "react";
import Slideshow from "../components/Slideshow"; // Import Slideshow component
import image1 from "../assets/image1.jpg"; // Corrected import path


const Home = () => {
  return (
    <div>
      <Slideshow src={image1} alt="image1" style={{ width: "100%", height: "100%" }}/>
    </div>
  );
};

export default Home;


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