"use client";
import Accordion1 from "@/components/elements/Accordion1";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useTranslation } from "react-i18next";
export default function Service() {
  const { i18n } = useTranslation();

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="خدماتنا">
        <div>
          <section className="service-section fix section-padding">
            <div className="container">
              <div className="section-title text-center">
                <span className="wow fadeInUp">خدماتنا</span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  نحن نقدم أفضل جودة
                </h2>
              </div>
              <div className="service-wrapper mb-0">
                <div className="row justify-content-center gap-2 ">
                  <div className="col-12 my-3 d-flex justify-content-start ">
                    <h2>خدمات سياحيه</h2>
                  </div>
                  <div
                    className="col-12 col-md-5 p-0 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div
                      className="service-box-items box-shadow   "
                      style={{
                        background:
                          "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/img/service/ser1.jpg)",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="content ">
                        <h4>
                          <Link
                            href="/service-details/BusinessMen"
                            className="text-white"
                          >
                            خدمات رجال الاعمال و الشركات{" "}
                          </Link>
                        </h4>

                        <Link
                          href="/service-details/BusinessMen"
                          className="theme-btn-2 d-flex gap-2 align-items-center align-items-center mt-3 text-white"
                        >
                          المزيد
                          <i
                            className={
                              i18n.dir() === "rtl"
                                ? "fa-solid fa-arrow-left-long"
                                : "fa-solid fa-arrow-right-long"
                            }
                          />{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-5  p-0  wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div
                      className="service-box-items  box-shadow "
                      style={{
                        background:
                          "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/img/service/ser2.jpg)",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="content">
                        <h4>
                          <Link
                            href="/service-details/HotelReservations"
                            className="text-white"
                          >
                            حجوزات الفنادق
                          </Link>
                        </h4>

                        <Link
                          href="/service-details/HotelReservations"
                          className="theme-btn-2 d-flex gap-2 align-items-center align-items-center mt-3 text-white"
                        >
                          المزيد
                          <i
                            className={
                              i18n.dir() === "rtl"
                                ? "fa-solid fa-arrow-left-long"
                                : "fa-solid fa-arrow-right-long"
                            }
                          />{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-5 p-0 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div
                      className="service-box-items box-shadow"
                      style={{
                        background:
                          "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/img/service/ser3.jpg)",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="content">
                        <h4>
                          <Link
                            href="/service-details/HoneyMoon"
                            className="text-white"
                          >
                            برامج شهر العسل
                          </Link>
                        </h4>

                        <Link
                          href="/service-details/HoneyMoon"
                          className="theme-btn-2 d-flex gap-2 align-items-center align-items-center mt-3 text-white"
                        >
                          المزيد
                          <i
                            className={
                              i18n.dir() === "rtl"
                                ? "fa-solid fa-arrow-left-long"
                                : "fa-solid fa-arrow-right-long"
                            }
                          />{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-5 p-0  wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <div
                      className="service-box-items box-shadow"
                      style={{
                        background:
                          "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/img/service/ser4.jpg)",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="content">
                        <h4>
                          <Link
                            href="/service-details/CarWithDriver"
                            className="text-white"
                          >
                            سيارات مع سائق
                          </Link>
                        </h4>

                        <Link
                          href="/service-details/CarWithDriver"
                          className="theme-btn-2 d-flex gap-2 align-items-center align-items-center mt-3 text-white"
                        >
                          المزيد
                          <i
                            className={
                              i18n.dir() === "rtl"
                                ? "fa-solid fa-arrow-left-long"
                                : "fa-solid fa-arrow-right-long"
                            }
                          />{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*<< Faq Section Start >>*/}
          <section className="faq-section style-2 fix section-padding">
            <div className="right-shape">
              <img src="/assets/img/faq/right-shape.png" alt="shape-img" />
            </div>
            <div className="faq-shape-box">
              <div className="faq-shape">
                <img src="/assets/img/faq/shape.png" alt="shape-img" />
              </div>
            </div>
            <div className="container">
              <div className="faq-wrapper">
                <div className="row g-4">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="faq-image">
                      <img src="/assets/img/faq/faq.png" alt="faq-img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="faq-content">
                      <div className="section-title">
                        <h2 className="wow fadeInUp text-white">
                          اطلع على الأسئلة الشائعة الخاصة بنا
                        </h2>
                      </div>
                      <div className="faq-accordion mt-4 mt-md-0">
                        <Accordion1 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Contact Section Start */}
          <section className="contact-section fix section-padding">
            <div className="container">
              <div className="contact-wrapper">
                <div className="arrow-shape">
                  <img src="/assets/img/arrow-shape.png" alt="shape-img" />
                </div>
                <div
                  className={`row ${i18n.dir() == "rtl" && "flex-row-reverse"}`}
                >
                  <div className="col-lg-6">
                    <div
                      className="contact-image wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <img src="/assets/img/contact.png" alt="contact-img" />
                      <div className="cricle-shape">
                        <img
                          src="/assets/img/circle-shape.png"
                          alt="shape-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-content">
                      <div className="section-title">
                        <span className="text-white wow fadeInUp">
                          {" "}
                          تواصل معنا
                        </span>
                        <h2
                          className="text-white wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          {" "}
                          كيف نساعدك!
                        </h2>
                      </div>
                      <form
                        action="#"
                        id="contact-form"
                        method="POST"
                        className="contact-form-items"
                      >
                        <div className="row g-4">
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="form-clt">
                              <span>الاسم *</span>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder=" الاسم.."
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div className="form-clt">
                              <span>البريد الالكتروني *</span>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="البريد الالكتروني ..."
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-12 wow fadeInUp"
                            data-wow-delay=".7s"
                          >
                            <div className="form-clt">
                              <span>الرساله*</span>
                              <textarea
                                name="message"
                                id="message"
                                placeholder="اكتب رساله .. "
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-7 wow fadeInUp"
                            data-wow-delay=".9s"
                          >
                            <button
                              type="submit"
                              className="theme-btn bg-white"
                            >
                              ارسال
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
