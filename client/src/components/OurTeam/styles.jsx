// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     position: "relative", // Ensures the navigation buttons are positioned absolutely within this container
//   },
//   headingContainer: {
//     textAlign: "center",
//     marginBottom: theme.spacing(3),
//   },
//   heading: {
//     fontWeight: "bold",
//     fontFamily: "IBM Plex Sans, sans-serif",
//     color: "#333",
//   },
//   customNavigation: {
//     position: "absolute",
//     top: "50%",
//     width: "100%",
//     display: "flex",
//     justifyContent: "space-between",
//     transform: "translateY(-50%)",
//   },
//   navButton: {
//     backgroundColor: "#000", // Arrow background color
//     borderRadius: "50%", // Circle shape
//     padding: "10px", // Size of the circle
//     color: "#fff", // Arrow color
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//   },
//   arrowIcon: {
//     fontSize: "20px", // Size of the arrow icon
//   },
// }));

// export default useStyles;


























import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  headingContainer: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
  heading: {
    fontWeight: "bold",
    fontFamily: "IBM Plex Sans, sans-serif",
    color: "#333",
  },
  customNavigation: {
    position: "absolute",
    top: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    transform: "translateY(-50%)",
  },
  navButton: {
    backgroundColor: "#000", 
    borderRadius: "50%",
    padding: "10px", 
    color: "#fff", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  arrowIcon: {
    fontSize: "20px",
  },
}));

export default useStyles;
