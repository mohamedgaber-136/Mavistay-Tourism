"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 10,
  speed: 5000,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot-3",
    clickable: true,
  },
  breakpoints: {
    1199: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    650: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

export default function ProjectSlider1({ showDots }) {
  const sliderData = [
    {
      img: "/assets/img/Cities/ankara.jpg",
      content:'ankara'
    },
    {
      img: "/assets/img/Cities/istanbul.jpg",
      content:'istanbul'

    },
    {
      img: "/assets/img/Cities/bursa.jpg",
      content:'bursa'

    },
    {
      img: "/assets/img/Cities/antalya.jpg",
      content:'antalya'

    },
  ];
  return (
    <>
      <div className="swiper  pt-5">
        <Swiper {...swiperOptions} className="swiper-wrapper">
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="project-items ">
                <div className="project-image ">
                  <img src={item.img} alt="city-img" />
                  <div className="project-content">
                    <p>
                      <Link href="/service-details" className="text-white">
{item.content}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {showDots && (
          <div className="swiper-dot-2">
            <div className="dot-3" />
          </div>
        )}
      </div>
    </>
  );
}
