"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 0,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot-3",
    clickable: true,
  },
  breakpoints: {
    1199: {
      slidesPerView: 1,
    },
  },
};
const heroData = [
  {
    title: "استكشف العالم الان",
    content: `سيساعدك فريقنا من خبراء السفر ذوي الخبرة في التخطيط لرحلتك من البداية إلى النهاية، مما يضمن أن تصبح عطلة أحلامك حقيقة. لا تنتظر أكثر، احجز رحلتك!
`,
    nav: "/",
  },  {
    title: "  ابدأ خدمات الشحن الامن",
    content: `سيساعدك فريقنا من خبراء السفر ذوي الخبرة في التخطيط لرحلتك من البداية إلى النهاية، مما يضمن أن تصبح عطلة أحلامك حقيقة. لا تنتظر أكثر، احجز رحلتك!
`,
    nav: "/",
  },
 
];
export default function HeroSlider({ showDots }) {
  return (
    <>
      <div className="swiper project-slider ">
        <Swiper {...swiperOptions} className="swiper-wrapper ">
          {heroData.map((_, index) => (
            <SwiperSlide key={index} className="w-100">
              <div className="w-100  ">
                <div
                  className=" border d-flex flex-column justify-content-center align-items-center "
                  style={{
                    background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.7)),url(/assets/img/Hero/01.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "600px",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h2 className="text-white fs-1">{_.title}</h2>
                  <p className="text-white fs-5">{_.content}</p>
                  <div className="about-author my-2">
                    <div
                      className="about-button wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <Link
                        href="/about"
                        className="theme-btn  d-flex gap-4 wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        اكتشف المزيد
                      </Link>
                    </div>
                    <div
                      className="author-image wow fadeInUp"
                      data-wow-delay=".7s"
                    ></div>
                  </div>{" "}
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
