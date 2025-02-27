import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import { useSwiper } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import "swiper/css";
import "swiper/css/navigation";

import CustomCard from "../card/card";

const Controls = ({ data }) => {
    const swiper = useSwiper();
  
    useEffect(() => {
      swiper.slideTo(0);
    }, [data]);
  
    return <></>;
  };

function Carousel({ data }) {
  return (
    <div className="swiper-container">
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={7}
        spaceBetween={40}
        allowTouchMove
      >
        
        <div>
          <CarouselLeftNavigation />
          <CarouselRightNavigation />
        </div>
        {data.map(({follows, id, image,title }) => (
          <SwiperSlide key={id}>
            <CustomCard follows={follows} id={id} image={image} title={title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
