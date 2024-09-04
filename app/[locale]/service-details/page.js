'use client'
import VideoPopup from '@/components/elements/VideoPopup'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import ServiceLayout from './ServiceLayout'
export default function ServiceDetails() {
    const [activeItem, setActiveItem] = useState(1)

    const handleClick = (index) => {
        setActiveItem(index)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Services Details">
                <section className="service-details-section fix section-padding">
                    <div className="container">
                        <div className="service-details-wrapper">
                            <div className="row g-4">
                             <ServiceLayout/>
                                <div className="col-12 col-lg-8 order-1 order-md-2">
                                    <div className="service-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/service/details-1.jpg" alt="img" />
                                        </div>
                                        <div className="details-content">
                                            <h3>IT Consultancy</h3>
                                            <p className="mt-3">
                                                The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.
                                            </p>
                                            <p className="mt-3">
                                                lacus sed pretium pretium justo. Integer is vitae venenatis lorem. Maecenas lacinia turpis the in nunc quam hendrerit scelerisque at finibus enim sagittis. Aliquam erat is volutpat nam nec purus at is orci volutpat semper vel id turpis In a malesuada arcu ac hendrerit.
                                            </p>
                                            <div className="details-video-items">
                                                <div className="video-thumb">
                                                    <img src="/assets/img/service/details-video.jpg" alt="img" />
                                                    <VideoPopup style={1} />
                                                </div>
                                                <div className="content">
                                                    <h4>Benefits With Our Service</h4>
                                                    <p> Fusce is eleifend porta arcu In hac <br /> habitasse the platea thelorem</p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Branding and design Identity
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Web site Marketing Solutions
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            unlimited Download Data
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
                                            </p>
                                            <div className="image-area">
                                                <div className="row g-4">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="thumb">
                                                            <img src="/assets/img/service/details-2.jpg" alt="img" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="thumb">
                                                            <img src="/assets/img/service/details-3.jpg" alt="img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3>Most Comment Question?</h3>
                                            <p className="mt-3">
                                                The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada.
                                            </p>
                                        </div>
                                        <div className="faq-content style-3">
                                            <div className="faq-accordion">
                                                <div className="accordion" id="accordion">
                                                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                                                        <h5 className="accordion-header" onClick={() => handleClick(1)}>
                                                            <button className={activeItem == 1 ? "accordion-button" : "accordion-button collapsed"}>
                                                                Where should I incorporate my business?
                                                            </button>
                                                        </h5>
                                                        <div id="faq1" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                                                            <div className="accordion-body">
                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                                                        <h5 className="accordion-header" onClick={() => handleClick(2)}>
                                                            <button className={activeItem == 2 ? "accordion-button" : "accordion-button collapsed"}>
                                                                How long should a business plan be?
                                                            </button>
                                                        </h5>
                                                        <div id="faq2" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                            <div className="accordion-body">
                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                                                        <h5 className="accordion-header" onClick={() => handleClick(3)}>
                                                            <button className={activeItem == 3 ? "accordion-button" : "accordion-button collapsed"}>
                                                                What is included in your services?
                                                            </button>
                                                        </h5>
                                                        <div id="faq3" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                            <div className="accordion-body">
                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                                                        <h5 className="accordion-header" onClick={() => handleClick(4)}>
                                                            <button className={activeItem == 4 ? "accordion-button" : "accordion-button collapsed"}>
                                                                What type of company is measured?
                                                            </button>
                                                        </h5>
                                                        <div id="faq4" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                            <div className="accordion-body">
                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
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
        </>
    )
}