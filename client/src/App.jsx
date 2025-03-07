/** @format */

import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./views/Home";
import About from "./views/About";
import Create from "./views/Create";
import Contact from "./views/Contact";
import Services from "./views/Services";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap globally
import './static/index.css'; // Correct import path for index.css in static folder


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/create" element={<Create />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

