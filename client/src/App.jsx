// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import AppRoutes from "./routes/Routes"; // Your routes file
// import Navbar from "./components/Navbar";
// import Layout from "./layout"; // Import the Layout component

// const App = () => {
//   return (
//     <Router>
//       {/* Fixed Navbar */}
//       <Navbar />

//       {/* Wrap Routes with Layout */}
//       <Layout>
//         <AppRoutes />
//       </Layout>
//     </Router>
//   );
// };

// export default App;











































// import React from "react";
// import VeridianCard from "./components/About/veridianCard";

// const App = () => {
//   return (
//       <VeridianCard />
//   );
// };

// export default App;



























import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import ValuesGrid from "./components/About/Features";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ValuesGrid />
    </ThemeProvider>
  );
}

export default App;
