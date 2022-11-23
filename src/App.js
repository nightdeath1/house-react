import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dropdown from "./components/Dropdown/Dropdown";
import Footer from "./components/Footer/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    
      <Router>
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle}/>
       <AnimatedRoutes />
        <Footer />
      </Router>
    
  );
}

export default App;
