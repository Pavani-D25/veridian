// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "../components/Home";
// import About from "../components/About";
// import OurTeam from "../components/OurTeam";
// import InvestmentApproach from "../components/InvestmentApproach";
// import Contact from "../components/Contact";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/our-team" element={<OurTeam />} />
//       <Route path="/investment" element={<InvestmentApproach />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// };

// export default AppRoutes;











































































// ???????????????????????????????????????????????????????????????????????????



import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import OurTeam from "../components/OurTeam";
import InvestmentApproach from "../components/InvestmentApproach";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PrivacyPolicyModal from "../components/PrivacyPolicyModal"; // Assuming you have this component

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Define the main routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/investment" element={<InvestmentApproach />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Add Privacy Policy route */}
        <Route path="/privacy-policy" element={<PrivacyPolicyModal />} />
      </Routes>

      {/* Static content for layout (can be shown on all pages) */}
      <div id="home" style={{ height: "80vh" }}>
        <Home />
      </div>
      <div 
        id="about" 
        style={{ height: "115vh", backgroundColor: "#d9efe9" }}
      >
        <About />
      </div>
      <div 
        id="our-team" 
        style={{ height: "75vh", backgroundColor: "#d9efe9" }}
      >
        <OurTeam />
      </div>
      <div 
        id="investment" 
        style={{ height: "110vh", backgroundColor: "#d9efe9" }}
      >
        <InvestmentApproach />
      </div>
      <div id="contact" style={{ height: "50vh" }}>
        <Contact />
      </div>
    </div>
  );
};

export default AppRoutes;























