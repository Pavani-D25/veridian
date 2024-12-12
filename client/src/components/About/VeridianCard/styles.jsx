


import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    minHeight: "310px !important",
    width:"1150px",
    boxShadow:"none !important",
    marginLeft:"55px !important"

  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    borderRadius: "0px !important",
    boxShadow:"none !important",

    backgroundColor: "white",
    padding:"0px 50px !important",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:"#d9efe9",
    padding:"20px",
    width:"310.46px",
    height:"170px"
  },
  logo: {
    width: "148px",
    height: "148px",
  },
  textContainer: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
 
  description: {
    color: "#5a5a5a",
    lineHeight: 1.5,
    fontSize: "14px !important",
    marginLeft:"190px !important",
    marginTop:"25px !important",
    fontFamily: " DM Sans    !important",
    marginBottom: `${theme.spacing(2)} !important`,

  },
}));

export default useStyles;
