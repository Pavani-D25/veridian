


// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     minHeight: "310px !important",
//     width:"1150px",
//     boxShadow:"none !important",
//     marginLeft:"55px !important"

//   },
//   card: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     width: "90%",
//     borderRadius: "0px !important",
//     boxShadow:"none !important",

//     backgroundColor: "white",
//     padding:"0px 50px !important",
//   },
//   logoContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background:"#d9efe9",
//     padding:"20px",
//     width:"310.46px",
//     height:"170px"
//   },
//   logo: {
//     width: "148px",
//     height: "148px",
//   },
//   textContainer: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(2),
//   },
 
//   description: {
//     color: "#5a5a5a",
//     lineHeight: 1.5,
//     fontSize: "14px !important",
//     marginLeft:"190px !important",
//     marginTop:"25px !important",
//     fontFamily: " DM Sans    !important",
//     marginBottom: `${theme.spacing(2)} !important`,

//   },
// }));

// export default useStyles;































// import { makeStyles } from "@mui/styles";
// import { minWidth, padding } from "@mui/system";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     minHeight: "310px !important",
//     width: "1150px",
//     boxShadow: "none !important",
//     marginLeft: "55px !important",
//     [theme.breakpoints.down("sm")]: {
//       width: "100%", 
//       marginLeft: "0 !important",
//     },
//   },
//   card: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     width: "90%",
//     borderRadius: "0px !important",
//     boxShadow: "none !important",
//     backgroundColor: "white",
//     padding: "0px 50px !important",
//     [theme.breakpoints.down("sm")]: {
//       flexDirection: "column", 
//       padding: "0px", 
//       width: "100%",
//       height:"600px"
//     },

//   },
//   logoContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "#d9efe9",
//     padding: "20px",
//     width: "310.46px",
//     height: "170px",
//     [theme.breakpoints.down("sm")]: {
//       width: "100%", 
//       minWidth:"50px",
//       height: "auto", 
//       padding:"0px 0px 0px 0px",
//       marginTop:"20px"
//     },
//   },
//   logo: {
//     width: "148px",
//     height: "148px",
//     [theme.breakpoints.down("sm")]: {
//       width: "180px", 
//       height: "180px",

//     },
//   },
//   textContainer: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(2),
//     [theme.breakpoints.down("sm")]: {
//       padding: "5px 0px", 
//     },
//   },
//   description: {
//     color: "#5a5a5a",
//     lineHeight: 1.5,
//     fontSize: "14px !important",
//     marginLeft: "190px !important",
//     marginTop: "25px !important",
//     fontFamily: "DM Sans !important",
//     marginBottom: `${theme.spacing(2)} !important`,
//     [theme.breakpoints.down("sm")]: {
//       fontSize: "12px !important",
//       marginLeft: "0 !important", 
//       textAlign: "center", 
//       marginTop: "10px !important", 
//     },
//   },
// }));

// export default useStyles;

















































import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    minHeight: "310px !important",
    width: "1150px",
    boxShadow: "none !important",
    marginLeft: "55px !important",
    "@media (max-width: 600px)": {
      width: "100%", 
      marginLeft: "0px !important",
    },
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    borderRadius: "0px !important",
    boxShadow: "none !important",
    backgroundColor: "white",
    padding: "0px 50px !important",
    "@media (max-width: 600px)": {
      flexDirection: "column", 
      padding: "10px !important", 
      width: "100%",
      height: "600px",
    },
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#d9efe9",
    padding: "20px",
    width: "310.46px",
    height: "170px",
    "@media (max-width: 600px)": {
      width: "100%", 
      
      height: "auto", 
      padding: "0px 0px 0px 0px",
      marginTop: "5px",
    },
  },
  logo: {
    width: "148px",
    height: "148px",
    "@media (max-width: 600px)": {
      width: "180px", 
      height: "180px",
    },
  },
  textContainer: {
    paddingLeft: "16px",
    paddingRight: "16px",
    "@media (max-width: 600px)": {
      padding: "5px 0px", 
    },
  },
  description: {
    color: "#5a5a5a",
    lineHeight: 1.5,
    fontSize: "14px !important",
    marginLeft: "190px !important",
    marginTop: "25px !important",
    fontFamily: "DM Sans !important",
    marginBottom: "16px !important",
    "@media (max-width: 600px)": {
      fontSize: "12px !important",
      marginLeft: "0 !important", 
      textAlign: "center", 
      marginTop: "10px !important", 
    },
  },
});

export default useStyles;
