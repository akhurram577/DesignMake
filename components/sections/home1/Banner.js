
'use client'
import Link from "next/link"
import ModalVideo from 'react-modal-video'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}


export default function Banner() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
        {/* Main Sllider Start */}
        <section className="main-slider">
        <Swiper {...swiperOptions} className="main-slider__carousel owl-carousel owl-theme">
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-1-1.jpg)' }} >
                    </div>{/* /.slider-one__bg */}
                    <div className="main-slider__shape-1"></div>
                    <div className="main-slider__shape-2"></div>
                    <div className="main-slider__shape-3"></div>
                    <div className="main-slider__shape-4"></div>
                    <div className="container">
                        <div className="main-slider__content">
                            <div className="main-slider__video-link">
                                <a onClick={() => setOpen(true)} className="video-popup">
                                    <div className="main-slider__video-icon">
                                        <span className="fa fa-play"></span>
                                        <i className="ripple"></i>
                                    </div>
                                </a>
                            </div>
                            <h2 className="main-slider__title">Dedicated Team <br/> Exceptional unique <br/> architecture
                                Design Idea
                            </h2>
                            <div className="main-slider__btn-box">
                                <Link href="about" className="thm-btn main-slider__btn">More Details <span className="icon-up-right-arrow"></span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-1-2.jpg)' }} >
                    </div>{/* /.slider-one__bg */}
                    <div className="main-slider__shape-1"></div>
                    <div className="main-slider__shape-2"></div>
                    <div className="main-slider__shape-3"></div>
                    <div className="main-slider__shape-4"></div>
                    <div className="container">
                        <div className="main-slider__content">
                            <div className="main-slider__video-link">
                                <a onClick={() => setOpen(true)} className="video-popup">
                                    <div className="main-slider__video-icon">
                                        <span className="fa fa-play"></span>
                                        <i className="ripple"></i>
                                    </div>
                                </a>
                            </div>
                            <h2 className="main-slider__title">Dedicated Team <br/> Exceptional unique <br/> architecture
                                Design Idea
                            </h2>
                            <div className="main-slider__btn-box">
                                <Link href="about" className="thm-btn main-slider__btn">More Details <span
                                        className="icon-up-right-arrow"></span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-1-3.jpg)' }} >
                    </div>{/* /.slider-one__bg */}
                    <div className="main-slider__shape-1"></div>
                    <div className="main-slider__shape-2"></div>
                    <div className="main-slider__shape-3"></div>
                    <div className="main-slider__shape-4"></div>
                    <div className="container">
                        <div className="main-slider__content">
                            <div className="main-slider__video-link">
                                <a onClick={() => setOpen(true)} className="video-popup">
                                    <div className="main-slider__video-icon">
                                        <span className="fa fa-play"></span>
                                        <i className="ripple"></i>
                                    </div>
                                </a>
                            </div>
                            <h2 className="main-slider__title">Dedicated Team <br/> Exceptional unique <br/> architecture
                                Design Idea
                            </h2>
                            <div className="main-slider__btn-box">
                                <Link href="about" className="thm-btn main-slider__btn">More Details <span
                                        className="icon-up-right-arrow"></span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </section>
        {/*Main Sllider Start */}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
       


        
        </>
    )
}
