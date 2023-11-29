import buttonIcon from "../../assets/hero-button-icon.png";
import heroImage from "../../assets/hero-image.png";

import "./hero.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  const heroItems = [
    {
      id: 1,
      headerText: "Lorem ipsum",
      bodyText:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      img: heroImage,
    },
    {
      id: 2,
      headerText: "Lorem ipsum",
      bodyText:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      img: heroImage,
    },
    {
      id: 3,
      headerText: "Lorem ipsum",
      bodyText:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      img: heroImage,
    },
    {
      id: 4,
      headerText: "Lorem ipsum",
      bodyText:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      img: heroImage,
    },
  ];

  return (
    <section className="hero-section ">
      <Swiper
        direction={"vertical"}
        loop={true}
        spaceBetween={24}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {heroItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="hero-wrapper">
              <div className="text-container">
                <h1 className="hero-header">{item.headerText}</h1>
                <p className="hero-body-text">{item.bodyText}</p>
                <button className="button hero-button">
                  Know more <img src={buttonIcon} alt="arrow-down" />
                </button>
              </div>
              <div className="img-container">
                <img src={item.img} alt="hero-image" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
