"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".array-prev",
    prevEl: ".array-next",
  },

  breakpoints: {
    1199: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const data = [
  {
    icon: "/assets/img/service/icon/s-icon-1.svg",
    title: "خدمات سياحيه ",
    nav: "/service",
    img: "/assets/img/serviceSilder/01.jpg"
  },
 
];
export default function Service1() {
  const { t, i18n } = useTranslation();
  return (
    <div id="services">
      <section
        className="service-section fix section-padding pb-0 bg-cover"
        style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}
        id="service"
      >
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="wow fadeInUp"> خدماتنا</span>
              <h4 className="wow fadeInUp" data-wow-delay=".3s">
                بوابتكم لعالم مليء بالمغامرات والتجارب الفريدة. نحن في نفخر
                بتقديم خدمات سياحية شاملة تلبي احتياجات جميع المسافرين، سواء
                كنتم تبحثون عن الاسترخاء على الشواطئ الخلابة أو استكشاف الثقافات
                الغنية والتاريخ العريق.
              </h4>
            </div>
            <div className="array-button">
              <button className="array-prev">
                <i className="fal fa-arrow-right" />
              </button>
              <button className="array-next">
                <i className="fal fa-arrow-left" />
              </button>
            </div>
          </div>
          <div className="service-wrapper">
            <div className="w-100  d-flex justify-content-center">
                {data.map((item, index) => (
             
                    <div
                      className="service-box-items  mx-0"
                      style={{
                        background:`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(${item.img})`,
                        backgroundPosition:"center",
                        backgroundSize: "cover",
                        width:'300px'
                      }}
                    >
                      <div className="icon">
                        <img src={item.icon} alt="icon-img" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/service"  className="text-white fs-3">
                            {item.title}
                          </Link>
                        </h4>
                        <Link
                          href={item.nav}
                          className="theme-btn-2 mt-3 d-flex gap-2 align-items-center text-white fs-6"
                        >
                          {t("exploreBtn")}
                          {i18n.dir() === "rtl" ? (
                            <i className="fa-solid fa-arrow-left-long" />
                          ) : (
                            <i className="fa-solid fa-arrow-right-long" />
                          )}
                        </Link>
                      </div>
                    </div>
                ))}
            
            </div>
            <div className="service-text wow fadeInUp" data-wow-delay=".4s">
              <h6>
              "هل تحتاج إلى أي نوع من خدماتنا لأعمالك؟"

.{" "}

              </h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
