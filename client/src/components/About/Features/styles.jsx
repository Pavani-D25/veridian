
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.secondary.main,
    boxShadow:"none !important",

    borderRadius: "0px !important",
    height: "100%",
    width: "530px", 
  },
  icon: {
    width: "104px",
    height: "104px",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2), 
  },
  content: {
    flex: 1,
    paddingLeft: theme.spacing(2),
  },
  title: {
    ...theme.typography.h6,
    color: "black",
    marginBottom: theme.spacing(1) + " !important",
    fontFamily: "IBM Plex Serif !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
  },
  description: {
    ...theme.typography.body1,
    color: "#51585e",
    fontFamily: "DM Sans !important",
    fontSize: "14px !important",
  },
  grid: {
    marginTop: theme.spacing(-8) + " !important",
  },
  gridItem: {
    padding: theme.spacing(2),
  },
}));

export default useStyles;






