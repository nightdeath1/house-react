import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Homes from "./pages/Homes";
import Rentals from "./pages/Rentals";
import Contacts from "./components/Contacts/Contacts";
import { AnimatePresence } from "framer-motion";


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
