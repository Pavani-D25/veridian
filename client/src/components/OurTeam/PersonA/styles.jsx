import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: theme.palette.background.default,
  },
  parallelogram: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: theme.palette.secondary.main,
    clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "1rem 8rem 0rem 4rem ",
    width: "80% !important",
    height:"407px !important",
    overflow: "hidden",
    backgroundColor: "lavender",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  imageWrapper: {
    position: "relative",
    display: "inline-block",
    zIndex: 2,
  },
  image: {
    maxWidth: "100%",
    borderRadius: "8px",
    position: "relative",
    zIndex: 3,
    top: "15px",

  },
  nameParallelogram: {
    position: "absolute",
    bottom: "5%",
    right: "-110%",
    background: theme.palette.primary.main,
    clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
    padding: "0.5rem 1rem",
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.h6.fontWeight,
    textTransform: theme.typography.h6.textTransform,
    fontSize: "12px !important",
    height: "52px",
    width: "354px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 1,
  },
  nameText: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
    paddingRight: "40px",
    color: theme.palette.secondary.main,
    fontFamily: "IBM Plex Sans !important",
    fontSize: "16px !important",
    fontWeight: theme.typography.h6.fontWeight,
  },
  textContainer: {
    top: "0px",
    color: theme.palette.primary.dark,
    marginBottom: "8rem !important",
  },
  description: {
    lineHeight: 1.8,
    fontSize: "14px !important",
    color: "#717b85",
    paddingRight: "40px !important",
    marginBottom: "0.5rem !important",

  },
  extraInfo: {
    lineHeight: 1.6,
    fontSize: "14px !important",
    color: "#717b85",
    paddingRight: "40px !important",
  },
}));

export default useStyles;
