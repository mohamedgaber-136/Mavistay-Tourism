
'use client'
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'
import CounterUp from '../elements/CounterUp'
import { useTranslation } from 'react-i18next'
export default function About1() {
    const {t,i18n}= useTranslation()
    return (
        <div id='about'>
            <section className="about-section section-padding fix"  id="about">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image-items">
                                    <div className="counter-shape float-bob-y">
                                        <div className="icon">
                                            <img src="/assets/img/about/icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h3><CounterUp count={6561}/>+</h3>
                                        </div>
                                    </div>
                                    {/* <VideoPopup style={2} /> */}
                                    <div className="about-image-1 bg-cover wow fadeInLeft " data-wow-delay=".3s" style={{ backgroundImage: 'url("assets/img/about/Selfie.jpg")' }}>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp">  من نحن </span>
                                        <h2 className="wow fadeInUp d-flex flex-column" data-wow-delay=".3s">
                                          شريكك الموثوق في الاستكشاف  
                                           <span>Mavistay</span>
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    انطلق في رحلات لا تُنسى مع تجارب السفر المصممة خصيصًا لدينا. من الجولات المذهلة عبر الشرق الأوسط إلى خدمات التداول السلسة، نحن نقربك من أحلامك. اكتشف جوهر السفر والتجارة في قلب الشرق الأوسط من خلال توجيهات ودعم خبرائنا
                                    </p>                                
                                    <div className="about-author">
                                        <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                                        <Link href="/about" className="theme-btn  d-flex gap-4 wow fadeInUp" data-wow-delay=".8s">
                                        {t("exploreBtn")}
                                        {i18n.dir() === 'rtl' ? (
                                        <i className="fa-solid fa-arrow-left-long" />
                                    ) : (
                                        <i className="fa-solid fa-arrow-right-long" />
                                    )}
                                    </Link>
                                        </div>
                                        <div className="author-image wow fadeInUp" data-wow-delay=".7s">
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
