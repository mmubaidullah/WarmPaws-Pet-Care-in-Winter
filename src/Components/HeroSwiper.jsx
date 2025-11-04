import React from "react";
import MyContainerLayout from "./MyContainerLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";


const HeroSwiper = () => {
  return (
      <div className="bg-gradient-to-r from-amber-200 via-amber-300 to-orange-300 flex flex-col md:flex-row items-center gap-6 border p-3 overflow-hidden rounded shadow-lg">
        {/* left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4">
            Welcome to WarmPaws Pet Care
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Learn, Share, and Grow Your Skills with Local Talents.
          </p>
        </motion.div>
        {/* right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            className="mySwiper rounded mt-1"
          >
            <SwiperSlide>
              <img
                src="/img-1.png"
                alt="Slide 1"
                className="w-full h-auto object-contain "
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/img-2.png"
                alt="Slide 2"
                className="w-full h-auto object-contain flex items-center"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/img-3.png"
                alt="Slide 3"
                className="w-full h-auto object-contain "
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
  );
};

// const HeroSwiper = () => {
//   return (
//     <MyContainerLayout>
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         loop={true}
//         className="mySwiper rounded mt-1"
//       >
//         <SwiperSlide>
//           <img
//             src="/img-1.png"
//             alt="Slide 1"
//             className="w-full h-[350px] object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl md:text-3xl lg:text-4xl font-semibold text-center px-4">
//             Welcome to WarmPaws Pet Care in Winter🕺
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="/img-2.png"
//             alt="Slide 2"
//             className="w-full h-[350px] object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl md:text-3xl lg:text-4xl font-semibold text-center px-4">
//             Welcome to WarmPaws Pet Care in Winter🕺
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="/img-3.png"
//             alt="Slide 3"
//             className="w-full h-[350px] object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl md:text-3xl lg:text-4xl font-semibold text-center px-4">
//             Welcome to WarmPaws Pet Care in Winter🕺
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </MyContainerLayout>
//   );
// };

export default HeroSwiper;
