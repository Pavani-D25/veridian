



import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './styles';
import data from './data';

const InvestmentCard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {data.cards.map((card, index) => (
        <Box key={index} className={classes.card}>
          <img src={card.image} alt={card.title} className={classes.image} />
          <Typography variant="h6" className={classes.title}>
            {card.title}
          </Typography>
          {card.description.split('\n').map((paragraph, i) => (
            <Typography key={i} variant="body1" className={classes.description}>
              {paragraph}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default InvestmentCard;
