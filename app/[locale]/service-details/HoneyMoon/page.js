"use client";
import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import ServiceLayout from "../ServiceLayout";
import VideoPopup from "@/components/elements/VideoPopup";
import HoneyModal from "@/components/elements/HoneyModal";

const ArtisticIllustration = () => {
  const [activeItem, setActiveItem] = useState(1);

  const handleClick = (index) => {
    setActiveItem(index);
  };
  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="شهر العسل">
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-4">
              <ServiceLayout PgNum={3} />
              <div className="col-12 col-lg-8 order-1 order-md-2">
                <div className="service-details-items">
                  <div className="details-image">
                    <img
                      src="/assets/img/subService/honeymoon/honeymoon.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="details-content">
                    <h3>استمتع بشهر العسل من خلال متخصصين</h3>
                    <p className="mt-3">
                      نحن فريق من خبراء السفر ذوي الخبرة والمتخصصين في تخطيط
                      وتنظيم تجارب سفر لا تنسى لعملائنا مع مجموعة واسعة من خدمات
                      السفر، بما في ذلك حجوزات الطيران وحجوزات الفنادق والمزيد.
                    </p>

                    <h3 className="my-3">
                      الخدمات السياحيه و الباقات المتاحه لشهر العسل :{" "}
                    </h3>
                    <div className="image-area">
                      <div className="row g-4">
                        <div className="col-lg-6 col-md-6">
                          <div className="thumb position-relative">
                            <img
                              src="/assets/img/subService/honeymoon/03.jpeg"
                              alt="img"
                            />
                            <div className="HoneyModal">
                              <HoneyModal />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="thumb position-relative">
                            <img
                              src="/assets/img/subService/honeymoon/03.jpeg"
                              alt="img"
                            />
                            <div className="HoneyModal">
                              <HoneyModal />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="thumb position-relative">
                            <img
                              src="/assets/img/subService/honeymoon/03.jpeg"
                              alt="img"
                            />
                            <div className="HoneyModal">
                              <HoneyModal />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="thumb position-relative">
                            <img
                              src="/assets/img/subService/honeymoon/03.jpeg"
                              alt="img"
                            />
                            <div className="HoneyModal">
                              <HoneyModal />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArtisticIllustration;
