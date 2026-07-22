import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Partners from "./pages/Partners";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions/>} /> 
        <Route path="/services" element={<Services/>}/> 
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/partners" element={<Partners/>}/>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/contact" element={<Contact/>}/>





      </Routes>

      <Footer />
    </>
  );
}

export default App;