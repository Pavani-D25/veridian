import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "100vh", // Ensures full height for the layout
    backgroundColor: theme.palette.background.default,
  },
  navbarPlaceholder: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Keeps the Navbar on top
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  content: {
    marginTop: "100px", // Add space for Navbar height
    padding: "0 90px", // Left and right padding
    flex: 1, // Allows content to stretch to available space
  },
}));

export default useStyles;
