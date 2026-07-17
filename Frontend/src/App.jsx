import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions/>} /> 
        <Route path="/services" element={<Services/>}/> 


      </Routes>

      <Footer />
    </>
  );
}

export default App;