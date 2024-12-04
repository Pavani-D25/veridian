


import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    minHeight: "330px !important",
    width:"1150px",
    boxShadow:"none !important"

  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: "0px !important",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    padding:"0px 50px !important",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:"#CFE1DF",
    padding:"20px",
    width:"340.46px",
    height:"180px"
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
    lineHeight: 1.6,
    fontSize: "14px !important",
    marginLeft:"220px !important",
    fontFamily: " DM Sans    !important",
    marginBottom: `${theme.spacing(2)} !important`,

  },
}));

export default useStyles;
