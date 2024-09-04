"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import BrandSlider1 from "@/components/slider/BrandSlider1";
import ProjectSlider2 from "@/components/slider/ProjectSlider2";
import Link from "next/link";
import { useTranslation } from "react-i18next";
export default function About() {
  const { i18n, t } = useTranslation();
  const counterShapeStyle = {
    left: i18n.dir() === "rtl" ? "150px" : "-150px",
  };
  const marginStyle = {
    marginRight: i18n.dir() === "rtl" ? "-12%" : "",
    marginLeft: i18n.dir() === "ltr" ? "-22%" : "",
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle=" من نحن">
        <div>
          <section
            className="about-section section-padding fix bg-cover"
            style={{
              backgroundImage: 'url("assets/img/about/service-bg-2.jpg")',
            }}
          >
            <div className="container">
              <div className="about-wrapper style-2">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="about-image-items">
                      <div className="circle-shape">
                        <img
                          src="/assets/img/about/circle.png"
                          alt="shape-img"
                        />
                      </div>
                      <div
                        className="counter-shape float-bob-y"
                        style={counterShapeStyle}
                      >
                        <div className="icon">
                          <img
                            src="/assets/img/about/icon-1.svg"
                            alt="icon-img"
                          />
                        </div>
                        <div className="content">
                          <h3 className="d-flex gap-2 align-items-center">
                            <CounterUp count={11} />
                             سنه
                          </h3>
                          <p>من الخبره </p>
                        </div>
                      </div>
                      <div
                        className="about-image-1 bg-cover wow fadeInLeft"
                        data-wow-delay=".3s"
                        style={{
                          backgroundImage: 'url("assets/img/about/03.jpg")',
                        }}
                      >
                        <div
                          className="about-image-2 wow fadeInUp"
                          data-wow-delay=".5s"
              
                        >
                          <img src="/assets/img/about/04.jpg" alt="about-img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-4 mt-lg-0">
                    <div className="about-content">
                      <div className="section-title">
                        <span className="wow fadeInUp">عن Mavistay </span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        اكتشف العالم معنا، مغامرة واحدة في كل مرة.
                        </h2>
                      </div>
                      <p
                        className="mt-3 mt-md-0 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        نحن فريق من خبراء السفر ذوي الخبرة والمتخصصين في تخطيط وتنظيم تجارب سفر لا تنسى لعملائنا مع مجموعة واسعة من خدمات السفر، بما في ذلك حجوزات الطيران وحجوزات الفنادق والمزيد.
                      </p>
                      <div className="about-icon-items">
                        <div
                          className="icon-items wow fadeInUp"
                          data-wow-delay=".7s"
                        >
                          <div className="icon">
                            <img
                              src="/assets/img/about/icon-4.svg"
                              alt="icon-img"
                            />
                          </div>
                          <div className="content">
                            <h4>مساعده العملاء </h4>
                            <p>في تحقيق العطله المثاليه و جعلها حقيقيه معنا    </p>
                          </div>
                        </div>
                        <div
                          className="icon-items wow fadeInUp"
                          data-wow-delay=".9s"
                        >
                          <div className="icon">
                            <img
                              src="/assets/img/about/icon-5.svg"
                              alt="icon-img"
                            />
                          </div>
                          <div className="content">
                            <h4>اهدافنا &amp; رؤيتنا</h4>
                            <p>أن نصبح الشركة الرائدة في صناعة السياحة  من خلال تقديم أفضل الخدمات السياحية التي تتجاوز توقعات العملاء،</p>
                          </div>
                        </div>
                      </div>
                 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Offer Section Start */}
          <section className="offer-section fix section-bg-2 section-padding " style={{background:'linear-gradient(to right ,rgba(0,0,0,0.4),rgba(0,0,0,0.9)),url(/assets/img/team/maskeshape.jpg)',backgroundPosition:'center',backgroundSize:'center'}}>
          
            <div className="container ">
              <div className="section-title text-center">
                <span className="wow fadeInUp text-white">ما نقدمه </span>
                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                  نقدم العديد من الخدمات  ومنها
                </h2>
              </div>
              <div className="row">
                <div
                  className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="offer-items">
                    <div className="shape-top">
                      <img
                        src="/assets/img/shape/offer-top.png"
                        alt="shape-img"
                      />
                    </div>
                    <div className="shape-bottom">
                      <img
                        src="/assets/img/shape/offer-bottom.png"
                        alt="shape-img"
                      />
                    </div>
                  
                    <div className="content">
                      <h5>شقق فندقيه</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="offer-items">
                    <div className="shape-top">
                      <img
                        src="/assets/img/shape/offer-top.png"
                        alt="shape-img"
                      />
                    </div>
                    <div className="shape-bottom">
                      <img
                        src="/assets/img/shape/offer-bottom.png"
                        alt="shape-img"
                      />
                    </div>
                   
                    <div className="content">
                      <h5>شحن</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="offer-items ">
                    <div className="shape-top">
                      <img
                        src="/assets/img/shape/offer-top.png"
                        alt="shape-img"
                      />
                    </div>
                    <div className="shape-bottom">
                      <img
                        src="/assets/img/shape/offer-bottom.png"
                        alt="shape-img"
                      />
                    </div>
              
                    <div className="content">
                      <h5>حجز فنادق</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="offer-items ">
                    <div className="shape-top">
                      <img
                        src="/assets/img/shape/offer-top.png"
                        alt="shape-img"
                      />
                    </div>
                    <div className="shape-bottom">
                      <img
                        src="/assets/img/shape/offer-bottom.png"
                        alt="shape-img"
                      />
                    </div>
                   
                    <div className="content">
                      <h5>حجز طيران </h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="offer-items ">
                    <div className="shape-top">
                      <img
                        src="/assets/img/shape/offer-top.png"
                        alt="shape-img"
                      />
                    </div>
                    <div className="shape-bottom">
                      <img
                        src="/assets/img/shape/offer-bottom.png"
                        alt="shape-img"
                      />
                    </div>
               
                    <div className="content">
                      <h5>رحلات خارجيه</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="offer-items ">
                    <div className="shape-top">
                      <img
                        src="/assets/img/shape/offer-top.png"
                        alt="shape-img"
                      />
                    </div>
                    <div className="shape-bottom">
                      <img
                        src="/assets/img/shape/offer-bottom.png"
                        alt="shape-img"
                      />
                    </div>
                
                    <div className="content">
                      <h5>رحلات داخليه </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Project Section Start */}
          {/* <section className="project-section-2 section-padding fix   ">
            <div className="left-shape">
              <img src="/assets/img/project/left-shape.png" alt="shape-img" />
            </div>
            <div className="right-shape">
              <img src="/assets/img/project/right-shape.png" alt="shape-img" />
            </div>
            <div className="container  ">
              <div className="section-title-area">
                <div className="section-title">
                  <span className="wow fadeInUp">PROJECTS</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Our Latest Incredible <br /> Client's Projects
                  </h2>
                </div>
                <div className="array-button wow fadeInUp" data-wow-delay=".5s">
                  <button className="array-prev">
                    <i className="fal fa-arrow-right" />
                  </button>
                  <button className="array-next">
                    <i className="fal fa-arrow-left" />
                  </button>
                </div>
              </div>
              <div className="project-wrapper  " style={marginStyle}>
                <ProjectSlider2 showDots />
              </div>
            </div>
          </section> */}
          {/*<< Marque Section Start >>*/}
          <div className="marque-section-3 section-padding">
            <div className="container-fluid">
              <div className="marquee-wrapper style-2 text-slider fs-2">
                <div className="marquee-inner to-left">
                  <ul className="marqee-list d-flex">
                    <li className="marquee-item style-2">
                      <span className="text-slider fs-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="54"
                          viewBox="0 0 50 54"
                          fill="#2596be"
                        >
                          <path
                            d="M29.703 54H19.802V37.5L5.44554 45L0 36L14.8515 26.5L0 17.5L5.44554 8.5L19.802 17.5V0H29.703V17.5L44.5545 8.5L50 17.5L35.6436 27.5L50 37.5L44.5545 45L29.703 36V54Z"
                            fill="#2596be"
                          />
                        </svg>{" "}
                      </span>
                      <span className="text-slider text-style">سياحه داخليه </span>
                      <span className="text-slider">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="54"
                          viewBox="0 0 50 54"
                          fill="#2596be"
                        >
                          <path
                            d="M29.703 54H19.802V37.5L5.44554 45L0 36L14.8515 26.5L0 17.5L5.44554 8.5L19.802 17.5V0H29.703V17.5L44.5545 8.5L50 17.5L35.6436 27.5L50 37.5L44.5545 45L29.703 36V54Z"
                            fill="#2596be"
                          />
                        </svg>{" "}
                      </span>
                      <span className="text-slider text-style">
                        سياحه خارجيه{" "}
                      </span>
                      <span className="text-slider">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="54"
                          viewBox="0 0 50 54"
                          fill="#2596be"
                        >
                          <path
                            d="M29.703 54H19.802V37.5L5.44554 45L0 36L14.8515 26.5L0 17.5L5.44554 8.5L19.802 17.5V0H29.703V17.5L44.5545 8.5L50 17.5L35.6436 27.5L50 37.5L44.5545 45L29.703 36V54Z"
                            fill="#2596be"
                          />
                        </svg>{" "}
                      </span>
                      <span className="text-slider fs-2 text-style">نقل</span>
                      <span className="text-slider fs-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"d
                          width="50"
                          height="54"
                          viewBox="0 0 50 54"
                          fill="#2596be"
                        >
                          <path
                            d="M29.703 54H19.802V37.5L5.44554 45L0 36L14.8515 26.5L0 17.5L5.44554 8.5L19.802 17.5V0H29.703V17.5L44.5545 8.5L50 17.5L35.6436 27.5L50 37.5L44.5545 45L29.703 36V54Z"
                            fill="#2596be"
                          />
                        </svg>{" "}
                      </span>
                      <span className="text-slider fs-2 text-style">
                       طيران{" "}
                      </span>
                      <span className="text-slider fs-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="54"
                          viewBox="0 0 50 54"
                          fill="#2596be"
                        >
                          <path
                            d="M29.703 54H19.802V37.5L5.44554 45L0 36L14.8515 26.5L0 17.5L5.44554 8.5L19.802 17.5V0H29.703V17.5L44.5545 8.5L50 17.5L35.6436 27.5L50 37.5L44.5545 45L29.703 36V54Z"
                            fill="#2596be"
                          />
                        </svg>{" "}
                      </span>
                      <span className="text-slider fs-2 text-style">سياحه داخليه </span>
                      <span className="text-slider fs-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="54"
                          viewBox="0 0 50 54"
                          fill="#2596be"
                        >
                          <path
                            d="M29.703 54H19.802V37.5L5.44554 45L0 36L14.8515 26.5L0 17.5L5.44554 8.5L19.802 17.5V0H29.703V17.5L44.5545 8.5L50 17.5L35.6436 27.5L50 37.5L44.5545 45L29.703 36V54Z"
                            fill="#2596be"
                          />
                        </svg>{" "}
                      </span>
                      <span className="text-slider fs-2 fs-2 text-style">
                        سياحه خارجيه{" "}
                      </span>
                      <span className="text-slider fs-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="54"
                          viewBox="0 0 50 54"
                          fill="#2596be"
                        >
                          <path
                            d="M29.703 54H19.802V37.5L5.44554 45L0 36L14.8515 26.5L0 17.5L5.44554 8.5L19.802 17.5V0H29.703V17.5L44.5545 8.5L50 17.5L35.6436 27.5L50 37.5L44.5545 45L29.703 36V54Z"
                            fill="#2596be"
                          />
                        </svg>{" "}
                      </span>
                      <span className="text-slider fs-2 text-style">نقل</span>
                      <span className="text-slider fs-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="54"
                          viewBox="0 0 50 54"
                          fill="#2596be"
                        >
                          <path
                            d="M29.703 54H19.802V37.5L5.44554 45L0 36L14.8515 26.5L0 17.5L5.44554 8.5L19.802 17.5V0H29.703V17.5L44.5545 8.5L50 17.5L35.6436 27.5L50 37.5L44.5545 45L29.703 36V54Z"
                            fill="#2596be"
                          />
                        </svg>{" "}
                      </span>
                      <span className="text-slider fs-2 text-style">
                       طيران{" "}
                      </span>
                      <span className="text-slider fs-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="54"
                          viewBox="0 0 50 54"
                          fill="#2596be"
                        >
                          <path
                            d="M29.703 54H19.802V37.5L5.44554 45L0 36L14.8515 26.5L0 17.5L5.44554 8.5L19.802 17.5V0H29.703V17.5L44.5545 8.5L50 17.5L35.6436 27.5L50 37.5L44.5545 45L29.703 36V54Z"
                            fill="#2596be"
                          />
                        </svg>{" "}
                      </span>
                      <span className="text-slider fs-2 text-style">سياحه داخليه </span>
                      <span className="text-slider fs-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="54"
                          viewBox="0 0 50 54"
                          fill="#2596be"
                        >
                          <path
                            d="M29.703 54H19.802V37.5L5.44554 45L0 36L14.8515 26.5L0 17.5L5.44554 8.5L19.802 17.5V0H29.703V17.5L44.5545 8.5L50 17.5L35.6436 27.5L50 37.5L44.5545 45L29.703 36V54Z"
                            fill="#2596be"
                          />
                        </svg>{" "}
                      </span>
                      <span className="text-slider fs-2 text-style">
                        سياحه خارجيه{" "}
                      </span>
                      <span className="text-slider fs-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="54"
                          viewBox="0 0 50 54"
                          fill="#2596be"
                        >
                          <path
                            d="M29.703 54H19.802V37.5L5.44554 45L0 36L14.8515 26.5L0 17.5L5.44554 8.5L19.802 17.5V0H29.703V17.5L44.5545 8.5L50 17.5L35.6436 27.5L50 37.5L44.5545 45L29.703 36V54Z"
                            fill="#2596be"
                          />
                        </svg>{" "}
                      </span>
                      <span className="text-slider fs-2 text-style">نقل</span>
                      <span className="text-slider fs-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="54"
                          viewBox="0 0 50 54"
                          fill="#2596be"
                        >
                          <path
                            d="M29.703 54H19.802V37.5L5.44554 45L0 36L14.8515 26.5L0 17.5L5.44554 8.5L19.802 17.5V0H29.703V17.5L44.5545 8.5L50 17.5L35.6436 27.5L50 37.5L44.5545 45L29.703 36V54Z"
                            fill="#2596be"
                          />
                        </svg>{" "}
                      </span>
                      <span className="text-slider fs-2 text-style">
                       طيران{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
       
          {/* Brand Section Start */}
          <div className="brand-section fix section-padding pt-0">
            <div className="container">
              <div className="brand-wrapper">
              <h6 className="text-center fs-1 wow fadeInUp" data-wow-delay=".3s">1k +   عميل يثق بنا</h6>

                <BrandSlider1 />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
