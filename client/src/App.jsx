/** @format */

import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./views/Home";
import Create from "./views/Create";
import FeedbackTable from "./views/FeedbackTable";
import Blog from "./views/Blog";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap globally

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/feedback" element={<FeedbackTable />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;

