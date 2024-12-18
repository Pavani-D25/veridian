

import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  

  heroContainer: {
    backgroundColor: theme.palette.primary.main,
    height: "520px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.secondary.main,
    textAlign: "center",
    position: "relative",
    marginTop: "70px",
    overflow: "hidden", 
    "@media (max-width: 768px)": {
      padding:"0px",
      height: "660px",
      marginTop:"-26px",
      margin: "-10px",
      
    },
  },

  leftBackground: {
    position: "absolute",
    left: "0",
    bottom: "0",
    top: "0",
    width: "35%", 
    height: "520px",
    transition: "all 0.5s ease", 
    [theme.breakpoints.down("md")]: {
      width: "90%",
      height:"660px"


    },
    // "@media (max-width: 768px)": {
    //   height: "520px ",

    // }
  },

  rightBackground: {
    position: "absolute",
    right: "0",
    top: "0",
    bottom: "0",
    width: "35%", 
    height: "520px",
    transition: "all 0.5s ease", 
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height:"660px", 
    },
  },

  


  highlightText: {
    color: "#edeff2",
    backgroundColor: "#f9c300",
    padding: "0px 5px !important", 
    fontSize: "12px !important",
    fontWeight: "bold !important",
    lineHeight: "1 !important", 
    height: "12px",
    display: "inline-block",
  },

  mainHeading: {
    fontWeight: "bold !important",
    marginBottom: "16px",
    marginTop: "15px !important",
    fontSize: "48px !important",
    padding: "0px 150px !important",
    lineHeight: "1 !important",
    
  },

    heroButton: {
      backgroundColor: `${theme.palette.primary.dark} !important`,
      color: `${theme.palette.secondary.main} !important`,
      padding: "10px 30px !important",
      marginTop: "40px !important",
      borderRadius: "2px !important",
      fontWeight: "bold !important",
      fontSize: "15px !important",
      textTransform: "none !important",
      textTransform: "none",
      boxShadow: "none",
      height: "60px !important",
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },



  arrowHero: { 
    marginLeft: "8px",
     width: "20px",
      height: "20px" },
}));

export default useStyles;
