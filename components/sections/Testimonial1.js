"use client";
import { useTranslation } from "react-i18next";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot-2",
    clickable: true,
  },
};
const data = [
  {
    img: "assets/img/testimonial/01.jpg",
    testi: `لقد كانت تجربتي مع Mavistay رائعة للغاية. من لحظة الحجز إلى نهاية الرحلة، كان الفريق دائمًا متاحًا ومتعاونًا. الفنادق كانت مريحة والخدمات المقدمة كانت من الطراز الأول. بالتأكيد سأختار Mavistay لرحلتي القادمة!`,

    location: "انطاليا",
    names: "ديلان و ايميلي",
  },
  {
    img: "assets/img/testimonial/02.jpg",
    testi: ` Mavistay تجاوزت توقعاتي! كانت الرحلة مخططة بدقة، والتفاصيل الصغيرة التي أضافها الفريق جعلت التجربة مميزة جدًا. أحببت التنوع في الأنشطة المتاحة والمرشدين السياحيين كانوا محترفين وودودين. شكرًا على هذه الرحلة الرائعة!

`,

    location: "انطاليا",
    names: "ساره ",
  },
  {
    img: "assets/img/testimonial/03.jpg",
    testi: `رحلتي مع Mavistay كانت مذهلة! التنظيم كان ممتازًا، والفريق كان دائمًا حاضرًا لتقديم المساعدة والنصائح. الفنادق والمنتجعات كانت مذهلة ومريحة جدًا. أتطلع للتعاون معكم مرة أخرى في المستقبل!`,

    location: "اسطنبول",
    names: "فاطمه ",
  },
  {
    img: "assets/img/testimonial/04.jpg",
    testi: `لقد قضينا وقتًا رائعًا بفضل Mavistay. الخدمة كانت ممتازة والفريق كان مهنيًا للغاية. الرحلة كانت مريحة ومليئة بالمغامرات الشيقة. بالتأكيد، Mavistay هو الخيار المثالي لمن يبحث عن رحلة خالية من المتاعب ومليئة بالذكريات الجميلة.`,

    location: "أنامور",
    names: "ايمي ",
  },
  {
    img: "assets/img/testimonial/05.jpg",
    testi: `لقد كانت تجربتي مع Mavistay رائعة للغاية. من لحظة الحجز إلى نهاية الرحلة، كان الفريق دائمًا متاحًا ومتعاونًا. الفنادق كانت مريحة والخدمات المقدمة كانت من الطراز الأول. بالتأكيد سأختار Mavistay لرحلتي القادمة!`,

    location: "ألانيا",
    names: "ديفيد",
  },
];
export default function Testimonial1() {
  const { i18n } = useTranslation();

  return (
    <>
      <section className="testimonial-section section-padding fix">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="swiper testimonial-slider">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-items">
                      <div
                        className="tesimonial-image bg-cover"
                        style={{
                          backgroundImage: `url(${item.img})`,
                        }}
                      >
                        <div className="star">
                          {[...Array(5)].map((_, starIndex) => (
                            <i className="fas fa-star" key={starIndex} />
                          ))}
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <div className="section-title">
                          <span>رأي عملائنا</span>
                        </div>
                        <p className="mt-3 mt-md-0">{item.testi}</p>
                        <div className="author-details">
                          <h5>{item.names}</h5>
                          <span>{item.location} </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div
              className="swiper-dot-2"
              style={
                i18n.dir() === "rtl"
                  ? { left: "80px", right: "auto" }
                  : { right: "80px", left: "auto" }
              }
            >
              <div className="dot-2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
