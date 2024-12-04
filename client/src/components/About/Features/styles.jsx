
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.shape.borderRadius,
    height: "100%",
    width: "560px", 
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
    marginBottom: theme.spacing(1),
    fontFamily: "IBM Plex Serif !important",
    fontWeight: 500,
    fontSize: "18px !important",
  },
  description: {
    ...theme.typography.body1,
    color: "#51585e",
    fontFamily: "DM Sans",
    fontSize: "14px !important",
  },
  grid: {
    marginTop: theme.spacing(4),
  },
  gridItem: {
    padding: theme.spacing(2),
  },
}));

export default useStyles;






