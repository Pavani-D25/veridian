import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material"; 
import { Link } from "react-router-dom";
import useModalStore from "../../store/modalStore";
import useStyles from "./styles";

const CopyrightFooter = () => {
  const classes = useStyles();
  const { openModal } = useModalStore();

  return (
    <Box className={classes.footerContainer}>
      <Typography variant="body2" className={classes.text}>
        {"COPYRIGHT © Veridian (Gibraltar) Limited 2024. All rights reserved. "}
        Any and all content included on this website or incorporated by
        reference is protected by international copyright laws.
      </Typography>
      <MuiLink
        component={Link} 
        to="/privacy-policy"
        underline="hover"
        className={classes.link}
        onClick={openModal}
      >
        Privacy Policy
      </MuiLink>
    </Box>
  );
};

export default CopyrightFooter;
