
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import PersonA from "./PersonA";
// import PersonB from "./PersonB";
// import PersonC from "./PersonC";

// const OurTeam = () => {
//   return (
//     <Swiper
//       spaceBetween={-240}
//       slidesPerView={1} 
//       // loop={true} 
//       centeredSlides={true} 
//       navigation
//       pagination={{ clickable: true }}
//       modules={[Navigation, Pagination]}
//     >
//       <SwiperSlide>
//         <PersonA />
//       </SwiperSlide>
//       <SwiperSlide>
//         <PersonB />
//       </SwiperSlide>
//       <SwiperSlide>
//         <PersonC />
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default OurTeam;

















import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Typography } from "@mui/material"; 

import PersonA from "./PersonA";
import PersonB from "./PersonB";
import PersonC from "./PersonC";

const OurTeam = () => {
  return (
    <Box>
      {/* Centered Heading */}
      <Box sx={{ textAlign: "center", marginBottom: 3 }}>
        <Typography variant="h4" fontWeight="bold" fontFamily={"IBM Plex Sans !important"}>
          Our Team
        </Typography>
      </Box>

      {/* Swiper for Team Members */}
      <Swiper
        spaceBetween={-240}
        slidesPerView={1} 
        centeredSlides={true} 
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <PersonA />
        </SwiperSlide>
        <SwiperSlide>
          <PersonB />
        </SwiperSlide>
        <SwiperSlide>
          <PersonC />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default OurTeam;


















