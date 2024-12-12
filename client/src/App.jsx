import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes"; 
import Navbar from "./components/Navbar";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Layout from "./layout";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
};

export default App;











































// import React from "react";
// import VeridianCard from "./components/About/veridianCard";

// const App = () => {
//   return (
//       <VeridianCard />
//   );
// };

// export default App;



























// import React from "react";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "./theme/theme";
// import Features from "./components/About/Features";

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Features />
//     </ThemeProvider>
//   );
// }

// export default App;








// import React from "react";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "./theme/theme";
// import InvestmentCard from "./components/InvestmentApproach/Card";

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <InvestmentCard />
//     </ThemeProvider>
//   );
// }

// export default App;















































// import React from 'react';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from './theme/theme';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//         <Footer />
//       </div>
//     </ThemeProvider>
//   );
// };

// export default App;


















// import React from "react";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "./theme/theme";
// import PersonA from "./components/OurTeam/PersonA";
// import PersonB from "./components/OurTeam/PersonB";
// import PersonC from "./components/OurTeam/PersonC";

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <PersonA />
//       <PersonB />
//       <PersonC />
//     </ThemeProvider>
//   );
// }

// export default App;



















// import React from "react";
// import OurTeam from "./components/OurTeam";

// const App = () => {
//   return (
//     <div>
//       <h1>Meet Our Team</h1>
//       <OurTeam />
//     </div>
//   );
// };

// export default App;
