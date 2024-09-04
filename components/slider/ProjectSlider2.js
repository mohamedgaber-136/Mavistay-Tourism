
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
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
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },
    breakpoints: {
        1199: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },

}
export default function ProjectSlider2({ showDots }) {
    return (
        <>

            <div className="swiper project-slider-2">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="project-items style-2">
                            <div className="project-image">
                                <img src="/assets/img/project/01.webp" alt="project-img" />
                             
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items style-2">
                            <div className="project-image">
                                <img src="/assets/img/project/02.webp" alt="project-img" />
                               
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items style-2">
                            <div className="project-image">
                                <img src="/assets/img/project/03.webp" alt="project-img" />
                              
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items style-2">
                            <div className="project-image">
                                <img src="/assets/img/project/01.webp" alt="project-img" />
                               
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-items style-2">
                            <div className="project-image">
                                <img src="/assets/img/project/02.webp" alt="project-img" />
                             
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {showDots &&
                <div className="swiper-dot-2">
                    <div className="dot-2" />
                </div>
            }

        </>
    )
}
