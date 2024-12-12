




import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    padding: "7px 20px", 
    backgroundColor: "#ffff",
    borderBottom: "2px solid #ddd",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
    margin: "-8px",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    flex: "0 0 auto", 
  },
  logo: {
    height: "100px", 
    paddingLeft: "70px",
  },
  tabsWrapper: {
    paddingLeft: "300px", 
    display: "flex",
    justifyContent: "center", 
  },
  tabs: {
    display: "flex",
    gap: "30px", 
  },
  tab: {
    textDecoration: "none",
    fontFamily: "IBM Plex Serif",
    color: "#51585E",
    fontSize: "18px",
    fontWeight: "500",
    "&:hover": {
      color: "#006547",
    },
  },
  activeTab: {
    paddingBottom: "5px",
    borderBottom: "4px solid #006547", 
    color: "#006547", 
  },
});

export default useStyles;
