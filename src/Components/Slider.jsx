// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import pubg from "../assets/pubg.jpg";
import gta from "../assets/gta v.jpg";
import cod from "../assets/call of dity.jpg";

export default function Slider() {
  const slides = [{ img: pubg }, { img: gta }, { img: cod }];
  return (
    <>
      <Swiper
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay]}
        className="w-full py-10 relative overflow-visible"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            className=" w-[150px] h-[150px] md:w-[300px] md:h-[400px] flex justify-center items-center rounded-xl overflow-hidden relative"
          >
            <img
              src={slide.img}
              alt=""
              className=" w-full h-full md:max-w-[700px] mx-auto rounded-sm md:rounded-2xl object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
