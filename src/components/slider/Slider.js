import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

const Slider = (props) => {
  const { children } = props;
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={children.length < 5 ? children.length : 4}
    >
      {children.map((child, i) => (
        <SwiperSlide key={i}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
