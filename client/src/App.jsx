import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./views/Home";
import About from "./views/About";
import Create from "./views/Create";
import Contact from "./views/Contact";
import Reservation from "./views/Reservation";
import Services from "./views/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/index.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/services" element={<Services />} />
        <Route path="/create" element={<Create />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
