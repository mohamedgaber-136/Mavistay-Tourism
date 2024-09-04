"use client";
import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import ServiceLayout from "../ServiceLayout";
import VideoPopup from "@/components/elements/VideoPopup";
import Link from "next/link";

const BrandIdentity = () => {
  const [activeItem, setActiveItem] = useState(1);
  const handleClick = (index) => {
    setActiveItem(index);
  };
  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="سياره مع سائق">
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-4">
              <ServiceLayout PgNum={4} />
              <div className="col-12 col-lg-8 order-1 order-md-2">
                <div className="service-details-items">
                  <div className="details-image">
                    <img
                      src="https://broyalgroup.com/wp-content/uploads/2024/05/web-format-1-1536x1024.jpg"
                      alt="img"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="details-content">
                    <h3>اكتشف العالم معنا، مع امهر السائقيين.</h3>
                    <p className="mt-3">
                      لدينا في شركتنا فريق من السائقين المحترفين الذين يتمتعون
                      بخبرة طويلة وكفاءة عالية في مجال النقل.
                    </p>
                    <p className="mt-3">
                      نعمل على ضمان سلامة وراحة عملائنا بفضل التزام سائقينا
                      بالمعايير العالية والدقة في العمل.
                    </p>
               
                    <div className="details-video-items row">
                    
                      <div className="content col-md-4">
                        <h4>سياره عاديه
                        </h4>
                        <p>
                          {" "}
                          نحن فريق من خبراء السفر ذوي الخبرة والمتخصصين في تخطيط وتنظيم تجارب سفر لا تنسى لعملائنا مع مجموعة واسعة من خدمات السفر، بما في ذلك حجوزات الطيران وحجوزات الفنادق والمزيد.


                        </p>
                        <a href="https://wa.me/905058955295" className="btn btn-outline-info my-2">احجز الان</a>
                      </div>
                      <div className="video-thumb col-md-6">
                        <img
                          src="https://paytmblogcdn.paytm.com/wp-content/uploads/2023/12/Blog_Paytm_Light-Motor-Vehicle-Licence-in-India-800x500.jpg" width={'100%'}
                          alt="img"
                          className="rounded-4"
                        />
                      </div>
                    </div>
                    <div className="details-video-items row">
                    <div className="video-thumb col-md-6">
                        <img
                          src="https://broyalgroup.com/wp-content/uploads/2024/05/Careem-captains.jpg" width={'100%'}
                          alt="img"
                          className="rounded-4"
                        />
                      </div>
                      <div className="content col-md-4">
                        <h4>سياره خاصه
                        </h4>
                        <p>
                          {" "}
                          نحن فريق من خبراء السفر ذوي الخبرة والمتخصصين في تخطيط وتنظيم تجارب سفر لا تنسى لعملائنا مع مجموعة واسعة من خدمات السفر، بما في ذلك حجوزات الطيران وحجوزات الفنادق والمزيد.


                        </p>
                        <a href="https://wa.me/905058955295" className="btn btn-outline-info my-2">احجز الان</a>

                      </div>
                   
                    </div>
                    <div className="details-video-items row">
                    
                      <div className="content col-md-4">
                        <h4>سياره فارهه
                        </h4>
                        <p>
                          {" "}
                          نحن فريق من خبراء السفر ذوي الخبرة والمتخصصين في تخطيط وتنظيم تجارب سفر لا تنسى لعملائنا مع مجموعة واسعة من خدمات السفر، بما في ذلك حجوزات الطيران وحجوزات الفنادق والمزيد.


                        </p>
                        <a href="https://wa.me/905058955295" className="btn btn-outline-info my-2">احجز الان</a>

                      </div>
                      <div className="video-thumb col-md-6">
                        <img
                          src="https://broyalgroup.com/wp-content/uploads/2024/05/how_much_do_uber_drivers_make_dubai-1536x1024.jpg" width={'100%'}
                          alt="img"
                          className="rounded-4"
                        />
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

export default BrandIdentity;
