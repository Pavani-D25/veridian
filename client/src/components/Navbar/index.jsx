



// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Box } from "@mui/material";
// import useStyles from "./styles";

// const Navbar = () => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.navbar}>
//       {/* Logo Section - Left */}
//       <Box className={classes.logoSection}>
//         <img src="/Veridian-Logo.png" alt="Veridian Logo" className={classes.logo} />
//       </Box>

//       {/* Navigation Tabs - Center */}
//       <Box className={classes.tabsWrapper}>
//         <Box className={classes.tabs}>
//           <NavLink
//             to="/"
//             className={({ isActive }) => isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) => isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab}
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/our-team"
//             className={({ isActive }) => isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab}
//           >
//             Our Team
//           </NavLink>
//           <NavLink
//             to="/investment"
//             className={({ isActive }) => isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab}
//           >
//             Investment Approach
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) => isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab}
//           >
//             Contact Us
//           </NavLink>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;

































import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box className={classes.navbar}>
      {/* Logo Section - Left */}
      <Box className={classes.logoSection}>
        <img src="/Veridian-Logo.png" alt="Veridian Logo" className={classes.logo} />
      </Box>

      {/* Navigation Tabs - Center */}
      <Box className={classes.tabsWrapper}>
        <Box className={classes.tabs}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab
            }
            onClick={() => handleScroll("home")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab
            }
            onClick={() => handleScroll("about")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/our-team"
            className={({ isActive }) =>
              isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab
            }
            onClick={() => handleScroll("our-team")}
          >
            Our Team
          </NavLink>
          <NavLink
            to="/investment"
            className={({ isActive }) =>
              isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab
            }
            onClick={() => handleScroll("investment")}
          >
            Investment Approach
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${classes.tab} ${classes.activeTab}` : classes.tab
            }
            onClick={() => handleScroll("contact")}
          >
            Contact Us
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
