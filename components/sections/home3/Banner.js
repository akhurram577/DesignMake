'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 1,
            
        },
        991: {
            slidesPerView: 1,
            
        },
        1199: {
            slidesPerView: 1,
            
        },
        1350: {
            slidesPerView: 1,
            
        },
    }



}
export default function Banner() {
    return (
        <>
        
        {/*Main Slider Three Start*/}
        <section className="main-slider-three">
            <ul className="list-unstyled main-slider-three__contact-list">
                <li>
                    <div className="icon">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="text">
                        <p><Link href="mailto:needhelp@company.com">needhelp@company.com</Link></p>
                    </div>
                </li>
                <li>
                    <div className="icon">
                        <i className="fas fa-phone"></i>
                    </div>
                    <div className="text">
                        <p><Link href="tel:0012346823705">+00 (1234) 682 3705</Link></p>
                    </div>
                </li>
                <li>
                    <div className="main-slider-three__social">
                        <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                        <Link href="#"><span className="fab fa-twitter"></span></Link>
                        <Link href="#"><span className="fab fa-vine"></span></Link>
                        <Link href="#"><span className="fab fa-instagram"></span></Link>
                    </div>
                </li>
            </ul>
            <div className="container-full">
                <div className="main-slider-three__slider">
                    <div className="row">

                        <div className="col-xl-4 col-lg-4 col-md-5">
                            <div className="main-slider-three__left">
                                <Swiper {...swiperOptions} className="swiper-container" id="main-slider-three__thumb">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="main-slider-three__content-one">
                                                <h2 className="main-slider-three__title-one">Interior</h2>
                                                <h3 className="main-slider-three__title-two">Design Make Dream</h3>
                                                <p className="main-slider-three__price">$500</p>
                                                <div className="main-slider-three__btn-box">
                                                    <Link href="contact" className="thm-btn main-slider-three__btn">Get In
                                                        Touch
                                                        <span className="icon-up-right-arrow"></span> </Link>
                                                </div>
                                                <h3 className="main-slider-three__title-three">Design</h3>
                                            </div>
                                        </div>{/* /.swiper-slide */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="main-slider-three__content-one">
                                                <h2 className="main-slider-three__title-one">Interior</h2>
                                                <h3 className="main-slider-three__title-two">Living Room Design</h3>
                                                <p className="main-slider-three__price">$800</p>
                                                <div className="main-slider-three__btn-box">
                                                    <Link href="contact" className="thm-btn main-slider-three__btn">Get In
                                                        Touch
                                                        <span className="icon-up-right-arrow"></span> </Link>
                                                </div>
                                                <h3 className="main-slider-three__title-three">Design</h3>
                                            </div>
                                        </div>{/* /.swiper-slide */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="main-slider-three__content-one">
                                                <h2 className="main-slider-three__title-one">Interior</h2>
                                                <h3 className="main-slider-three__title-two">Stunning Interior Design</h3>
                                                <p className="main-slider-three__price">$500</p>
                                                <div className="main-slider-three__btn-box">
                                                    <Link href="contact" className="thm-btn main-slider-three__btn">Get In
                                                        Touch
                                                        <span className="icon-up-right-arrow"></span> </Link>
                                                </div>
                                                <h3 className="main-slider-three__title-three">Design</h3>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                                {/* /#main-slider-three__Nav */}
                                <div className="main-slider-three__nav">
                                    <div className="swiper-button-next" id="main-slider-three__swiper-button-prev">
                                        <i className="icon-left-arrow"></i>
                                    </div>
                                    <div className="swiper-button-prev" id="main-slider-three__swiper-button-next">
                                        <i className="icon-right-arrow"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-7">
                            <div className="main-slider-three__right">
                                <div className="main-slider-three__main-content">
                                    <div className="swiper-container" id="main-slider-three__carousel">
                                        <Swiper {...swiperOptions} className="swiper-wrapper">
                                            <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="main-slider-three__img-box">
                                                    <div className="main-slider-three__img">
                                                        <img src="assets/images/resources/main-slider-three-1-1.jpg"
                                                            alt=""/>
                                                    </div>
                                                </div>
                                            </div>{/* /.swiper-slide */}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="main-slider-three__img-box">
                                                    <div className="main-slider-three__img">
                                                        <img src="assets/images/resources/main-slider-three-1-2.jpg"
                                                            alt=""/>
                                                    </div>
                                                </div>
                                            </div>{/* /.swiper-slide */}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="main-slider-three__img-box">
                                                    <div className="main-slider-three__img">
                                                        <img src="assets/images/resources/main-slider-three-1-3.jpg"
                                                            alt=""/>
                                                    </div>
                                                </div>
                                            </div>{/* /.swiper-slide */}
                                            </SwiperSlide>
                                        </Swiper>
                                        {/* /# If Need main-slider-three__carousel-pagination */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Main Slider Three End*/} 
            
        </>
    )
}
