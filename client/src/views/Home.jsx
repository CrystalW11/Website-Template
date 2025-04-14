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


