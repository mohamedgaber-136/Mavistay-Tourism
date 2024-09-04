"use client"
import Layout from '@/components/layout/Layout'
import React, { useState } from 'react'
import ServiceLayout from '../ServiceLayout'
import VideoPopup from '@/components/elements/VideoPopup'

const AdCampaigns = () => {
    const [activeItem, setActiveItem] = useState(1)

    const handleClick = (index) => {
        setActiveItem(index)
    }
  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="خدمات رجال اعمال">
    <section className="service-details-section fix section-padding">
        <div className="container">
            <div className="service-details-wrapper">
                <div className="row g-4">
                 <ServiceLayout PgNum={1}/>
                    <div className="col-12 col-lg-8 order-1 order-md-2">
                        <div className="service-details-items">
                        
                                         <section className="contact-section fix section-padding">
                        <div className="container">
                            <div className="contact-wrapper">
                                <div className="arrow-shape">
                                    <img src="/assets/img/arrow-shape.png" alt="shape-img" />
                                </div>
                                <div className={`row flex-row-reverse`}>
                                    <div className="col-lg-4">
                                        <div className="contact-image wow businessImg fadeInUp" data-wow-delay=".4s">
                                            <img src="/assets/img/contact.png" alt="contact-img" />
                                            <div className="cricle-shape">
                                                <img src="/assets/img/circle-shape.png" alt="shape-img" />
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div className="col-lg-8 ">
                                        <div className="contact-content">
                                            <div className="section-title">
                                                <span className="text-white wow fadeInUp">  تواصل معنا</span>
                                                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">   كيف نساعدك!</h2>
                                            </div>
                                            <form action="#" id="contact-form" method="POST" className="contact-form-items">
                                                <div className="row g-4">
                                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                                        <div className="form-clt">
                                                            <span>الاسم *</span>
                                                            <input type="text" name="name" id="name" placeholder=" الاسم.." />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                                        <div className="form-clt">
                                                            <span>البريد الالكتروني *</span>
                                                            <input type="text" name="email" id="email" placeholder="البريد الالكتروني ..." />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                                                        <div className="form-clt">
                                                            <span>الرساله*</span>
                                                            <textarea name="message" id="message" placeholder="اكتب رساله .. " />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                                                        <button type="submit" className="theme-btn bg-white">
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
                    </div>
                </div>
            </div>
        </div>
    </section>

</Layout>
  )
}

export default AdCampaigns
