import Navbar from "./Component/Navbar.jsx";
import About from "./Component/About.jsx";
import Skills from "./Component/Skills.jsx";
import Portfolio from "./Component/Portfolio.jsx";
import Contact from "./Component/Contact.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
