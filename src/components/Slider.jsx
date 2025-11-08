import { Swiper, SwiperSlide } from "swiper/react"
import { useRef } from "react";
import heroImage from "../assets/images/undraw_mcp-server_7kvc.png"
import image1 from "../assets/images/Education-amico.png"
import image2 from "../assets/images/people creating robot-pana.png"
import Hero from "../components/Hero"
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination'


const Slider = () => {
  const swiperRef = useRef(null);

  const component = [<Hero heroImage={heroImage} heroTitle={"Easy Path to Instructor Guide and Sharing"} />, <Hero heroImage={image1} heroTitle={"Tracking Your Learning Path Along "} />, <Hero heroImage={image2} heroTitle={"Automate All Your Studying Path"} />]

  const handleMouseEnter = (index) => {
    const swiper = swiperRef.current;
    if (swiper && swiper.activeIndex === index) {
      swiper.autoplay.stop(); // ⏸ stop autoplay if cursor is on active slide
    }
  };

  const handleMouseLeave = (index) => {
    const swiper = swiperRef.current;
    if (swiper && swiper.activeIndex === index) {
      swiper.autoplay.start(); // ▶️ resume autoplay when cursor leaves
    }
  };

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      modules={[Pagination, Autoplay]}
      className="slide">
      {
        component.map((component, index) => {
          return <SwiperSlide key={index} onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}>
            {component}
          </SwiperSlide>
        })
      }
    </Swiper>
  )
}

export default Slider
