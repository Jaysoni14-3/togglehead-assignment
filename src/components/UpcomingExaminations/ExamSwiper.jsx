import "./examSwiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import rightArrowIcon from "../../assets/arrow-right.png";
import cardBG from "../../assets/card-bg.png";

const ExamSwiper = () => {
  const cardData = [
    {
      id: 1,
      header: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    },
    {
      id: 2,
      header: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    },
    {
      id: 3,
      header: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    },
    {
      id: 4,
      header: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    },
    {
      id: 5,
      header: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    },
  ];

  return (
    <div className="bottom-section">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        grabCursor={true}
        rewind={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="examination-swiper"
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <article className="card">
              <img
                className="card-bg"
                src={cardBG}
                alt="card background image"
              />
              <div className="text-container">
                <h4>{card.header}</h4>
                <p>{card.description}</p>
                <button>
                  Know More <img src={rightArrowIcon} alt="right arrow" />
                </button>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExamSwiper;

{
  /* <article key={card.id} className="card">
<img className="card-bg" src={cardBG} alt="card background image" />
<div className="text-container">
  <h4>{card.header}</h4>
  <p>{card.description}</p>
  <button>
    Know More <img src={rightArrowIcon} alt="right arrow" />
  </button>
</div>
</article> */
}
