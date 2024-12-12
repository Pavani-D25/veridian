// // import { makeStyles } from "@mui/styles";

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     padding: "20px",
// //     backgroundColor: theme.palette.background.default,
// //     [theme.breakpoints.up('md')]: {
// //       display: "flex",
// //       justifyContent: "space-between",
// //     },
// //   },
// //   card: {
// //     borderRadius: "10px",
// //     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// //     overflow: "hidden",
// //     height: "665px",
// //     width:"382px",
// //     [theme.breakpoints.up('md')]: {
// //       height: "auto",
// //     },
// //   },
// //   cardMedia: {
// //     height: "317px !important",
// //     width: "186px !important",
// //     objectFit: 'cover', 

// //   },
// //   title: {
// //     fontWeight: 600,
// //     color: theme.palette.primary.main,
// //     marginTop: "15px",
// //   },
// //   text: {
// //     fontSize: "16px",
// //     marginTop: "10px",
// //     color: theme.palette.text.primary,
// //   },
// //   section: {
// //     margin: "10px 0",
// //     [theme.breakpoints.up('md')]: {
// //       width: "30%",
// //     },
// //   },
// // }));

// // export default useStyles;



















import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px',
    width: '1200px',
    marginLeft: '10px',

    flexWrap: 'nowrap', 
    [theme.breakpoints.down('lg')]: {
      flexWrap: 'wrap', 
      justifyContent: 'center',
    },
[theme.breakpoints.down("sm")]: {
  flexDirection: "column",
  alignItems: "center",
},
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
    width: '378px !important',
    height: '600px',
    padding: '30px',
    borderRadius: '0px',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '0px',
      
    },
  },
  image: {
    width: '313px',
    height: '184px',
    borderRadius: '0px',
    objectFit: 'cover',
    marginBottom: '20px !important',
    margin  : '15px',
  },
  title: {
    color: "black",
    marginBottom: '20px !important',
    fontSize:"17px !important",
    fontFamily:"IBM Plex Serif !important",
    textTransform: theme.typography.h6.textTransform,
  },
  description: {
    color: "#717b85",
    fontSize:"14px !important",
    lineHeight: '1.5',
    marginBottom: '10px', 
    fontWeight: 300, 
    '&:not(:last-child)': {
      marginBottom: '20px',
    },
  },
  
  
}));

export default useStyles;







