import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes"; 
import Navbar from "./components/Navbar";
import CopyrightFooter from "./components/CopyRights";


import "@fortawesome/fontawesome-free/css/all.min.css";

import Layout from "./layout";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Layout>
        <AppRoutes />
      </Layout>
      <CopyrightFooter/>


    </Router>
  );
};

export default App;





// ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????






































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
// import CopyrightFooter from "./components/CopyRights";

// const App = () => {
//   return (
//     <div>
//       <h1>Meet Our Team</h1>
//       <CopyrightFooter/>
//     </div>
//   );
// };

// export default App;































// import React from "react";
// import { ThemeProvider } from "@mui/material/styles";
// import { Button, Box } from "@mui/material";
// import theme from "./theme/theme";
// import useModalStore from "./store/modalStore";
// import PrivacyPolicyModal from "./components/PrivacyPolicyModal";

// const App = () => {
//   const { openModal } = useModalStore();

//   return (
//     <ThemeProvider theme={theme}>
//       <Box
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//           margin: "-8px",
          
//           background: "linear-gradient(to bottom,rgb(231, 255, 248),rgb(6, 108, 76))",
//         }}
//       >
//         <Button variant="contained" color="primary" onClick={openModal}>
//           Open Privacy Policy
//         </Button>
//         <PrivacyPolicyModal />
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default App;
