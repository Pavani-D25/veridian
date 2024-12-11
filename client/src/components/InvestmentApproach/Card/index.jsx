



// // import React from 'react';
// // import { Box, Typography } from '@mui/material';
// // import useStyles from './styles';
// // import data from './data';

// // const InvestmentCard = () => {
// //   const classes = useStyles();

// //   return (
// //     <Box className={classes.container}>
// //       {data.cards.map((card, index) => (
// //         <Box key={index} className={classes.card}>
// //           <img src={card.image} alt={card.title} className={classes.image} />
// //           <Typography variant="h6" className={classes.title}>
// //             {card.title}
// //           </Typography>
// //           {card.description.split('\n').map((paragraph, i) => (
// //             <Typography key={i} variant="body1" className={classes.description}>
// //               {paragraph}
// //             </Typography>
// //           ))}
// //         </Box>
// //       ))}
// //     </Box>
// //   );
// // };

// // export default InvestmentCard;













// import React from "react";
// import { Box, Typography, useMediaQuery } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// import useStyles from "./styles";
// import data from "./data";

// const InvestmentCard = () => {
//   const classes = useStyles();
//   const isSmallScreen = useMediaQuery("(max-width: 600px)"); // Detect small screens

//   return (
//     <Box className={classes.container}>
//       {isSmallScreen ? (
//         <Swiper
//           spaceBetween={10} // Space between cards
//           slidesPerView={1} // Only one card visible
//           loop={true} // Enable infinite scrolling
//           navigation // Enable navigation buttons
//           modules={[Navigation]} // Include the Navigation module
//         >
//           {data.cards.map((card, index) => (
//             <SwiperSlide key={index}>
//               <Box className={classes.card}>
//                 <img src={card.image} alt={card.title} className={classes.image} />
//                 <Typography variant="h6" className={classes.title}>
//                   {card.title}
//                 </Typography>
//                 {card.description.split("\n").map((paragraph, i) => (
//                   <Typography key={i} variant="body1" className={classes.description}>
//                     {paragraph}
//                   </Typography>
//                 ))}
//               </Box>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         data.cards.map((card, index) => (
//           <Box key={index} className={classes.card}>
//             <img src={card.image} alt={card.title} className={classes.image} />
//             <Typography variant="h6" className={classes.title}>
//               {card.title}
//             </Typography>
//             {card.description.split("\n").map((paragraph, i) => (
//               <Typography key={i} variant="body1" className={classes.description}>
//                 {paragraph}
//               </Typography>
//             ))}
//           </Box>
//         ))
//       )}
//     </Box>
//   );
// };

// export default InvestmentCard;


































// import React from "react";
// import { Box, Typography, useMediaQuery } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// import useStyles from "./styles";
// import data from "./data";

// const InvestmentCard = () => {
//   const classes = useStyles();
//   const isSmallScreen = useMediaQuery("(max-width: 600px)");

//   return (
//     <Box className={classes.container}>
//       {isSmallScreen ? (
//         <Swiper
//           spaceBetween={20} s
//           slidesPerView={1} 
//           loop={true} 
//           navigation 
//           modules={[Navigation]}
//         >
//           {data.cards.map((card, index) => (
//             <SwiperSlide key={index}>
//               <Box className={classes.card}>
//                 <img src={card.image} alt={card.title} className={classes.image} />
//                 <Typography variant="h6" className={classes.title}>
//                   {card.title}
//                 </Typography>
//                 {card.description.split("\n").map((paragraph, i) => (
//                   <Typography key={i} variant="body1" className={classes.description}>
//                     {paragraph}
//                   </Typography>
//                 ))}
//               </Box>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         data.cards.map((card, index) => (
//           <Box key={index} className={classes.card}>
//             <img src={card.image} alt={card.title} className={classes.image} />
//             <Typography variant="h6" className={classes.title}>
//               {card.title}
//             </Typography>
//             {card.description.split("\n").map((paragraph, i) => (
//               <Typography key={i} variant="body1" className={classes.description}>
//                 {paragraph}
//               </Typography>
//             ))}
//           </Box>
//         ))
//       )}
//     </Box>
//   );
// };

// export default InvestmentCard;
















































import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";
import "swiper/css/navigation";

import useStyles from "./styles";
import data from "./data";

const InvestmentCard = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Box className={classes.container}>
      {isSmallScreen ? (
        <Swiper
          spaceBetween={20} // Space between slides
          slidesPerView={1} // Show one slide at a time
          loop={true} // Enable infinite scrolling
          navigation // Enable navigation
          autoplay={{
            delay: 3000, // Delay between slides in ms
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          speed={600} // Smooth slide transition speed in ms
          modules={[Navigation, Autoplay]} // Include Autoplay and Navigation modules
        >
          {data.cards.map((card, index) => (
            <SwiperSlide key={index}>
              <Box className={classes.card}>
                <img src={card.image} alt={card.title} className={classes.image} />
                <Typography variant="h6" className={classes.title}>
                  {card.title}
                </Typography>
                {card.description.split("\n").map((paragraph, i) => (
                  <Typography key={i} variant="body1" className={classes.description}>
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        data.cards.map((card, index) => (
          <Box key={index} className={classes.card}>
            <img src={card.image} alt={card.title} className={classes.image} />
            <Typography variant="h6" className={classes.title}>
              {card.title}
            </Typography>
            {card.description.split("\n").map((paragraph, i) => (
              <Typography key={i} variant="body1" className={classes.description}>
                {paragraph}
              </Typography>
            ))}
          </Box>
        ))
      )}
    </Box>
  );
};

export default InvestmentCard;
