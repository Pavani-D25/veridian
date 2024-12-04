import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import OurTeam from "../components/OurTeam";
import InvestmentApproach from "../components/InvestmentApproach";
import Contact from "../components/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/investment" element={<InvestmentApproach />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
