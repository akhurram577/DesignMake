'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}
export default function BlogSlider() {
    return (
        <>
            
            <Swiper {...swiperOptions} className="blog-two__carousel owl-theme owl-carousel">
                <SwiperSlide>
                {/*Blog Two Single Start */}
                <div className="item">
                    <div className="blog-two__single">
                        <div className="blog-two__img">
                            <img src="assets/images/blog/blog-2-1.jpg" alt=""/>
                            <div className="blog-two__date">
                                <p>17</p>
                                <h5>Dec</h5>
                            </div>
                            <div className="blog-two__btn-box">
                                <Link href="blog-details" className="thm-btn blog-two__btn">More Details <span
                                        className="icon-up-right-arrow"></span> </Link>
                            </div>
                        </div>
                        <div className="blog-two__content">
                            <h3 className="blog-two__title"><Link href="blog-details">Inspiring Designs for Inspired
                                    Where
                                    InnovationMeets</Link></h3>
                        </div>
                    </div>
                </div>
                {/*Blog Two Single End */}
                </SwiperSlide>
                <SwiperSlide>
                {/*Blog Two Single Start */}
                <div className="item">
                    <div className="blog-two__single">
                        <div className="blog-two__img">
                            <img src="assets/images/blog/blog-2-2.jpg" alt=""/>
                            <div className="blog-two__date">
                                <p>17</p>
                                <h5>Dec</h5>
                            </div>
                            <div className="blog-two__btn-box">
                                <Link href="blog-details" className="thm-btn blog-two__btn">More Details <span
                                        className="icon-up-right-arrow"></span> </Link>
                            </div>
                        </div>
                        <div className="blog-two__content">
                            <h3 className="blog-two__title"><Link href="blog-details">It is a long established fact
                                    that a reader will be distracted</Link></h3>
                        </div>
                    </div>
                </div>
                {/*Blog Two Single End */}
                </SwiperSlide>
                <SwiperSlide>
                {/*Blog Two Single Start */}
                <div className="item">
                    <div className="blog-two__single">
                        <div className="blog-two__img">
                            <img src="assets/images/blog/blog-2-3.jpg" alt=""/>
                            <div className="blog-two__date">
                                <p>17</p>
                                <h5>Dec</h5>
                            </div>
                            <div className="blog-two__btn-box">
                                <Link href="blog-details" className="thm-btn blog-two__btn">More Details <span
                                        className="icon-up-right-arrow"></span> </Link>
                            </div>
                        </div>
                        <div className="blog-two__content">
                            <h3 className="blog-two__title"><Link href="blog-details">Lorem Ipsum is simply dummy text
                                    of the printing and typesetting</Link></h3>
                        </div>
                    </div>
                </div>
                {/*Blog Two Single End */}
                </SwiperSlide>
                <SwiperSlide>
                {/*Blog Two Single Start */}
                <div className="item">
                    <div className="blog-two__single">
                        <div className="blog-two__img">
                            <img src="assets/images/blog/blog-2-1.jpg" alt=""/>
                            <div className="blog-two__date">
                                <p>17</p>
                                <h5>Dec</h5>
                            </div>
                            <div className="blog-two__btn-box">
                                <Link href="blog-details" className="thm-btn blog-two__btn">More Details <span
                                        className="icon-up-right-arrow"></span> </Link>
                            </div>
                        </div>
                        <div className="blog-two__content">
                            <h3 className="blog-two__title"><Link href="blog-details">Inspiring Designs for Inspired
                                    Where
                                    InnovationMeets</Link></h3>
                        </div>
                    </div>
                </div>
                {/*Blog Two Single End */}
                </SwiperSlide>
                <SwiperSlide>
                {/*Blog Two Single Start */}
                <div className="item">
                    <div className="blog-two__single">
                        <div className="blog-two__img">
                            <img src="assets/images/blog/blog-2-2.jpg" alt=""/>
                            <div className="blog-two__date">
                                <p>17</p>
                                <h5>Dec</h5>
                            </div>
                            <div className="blog-two__btn-box">
                                <Link href="blog-details" className="thm-btn blog-two__btn">More Details <span
                                        className="icon-up-right-arrow"></span> </Link>
                            </div>
                        </div>
                        <div className="blog-two__content">
                            <h3 className="blog-two__title"><Link href="blog-details">It is a long established fact
                                    that a reader will be distracted</Link></h3>
                        </div>
                    </div>
                </div>
                {/*Blog Two Single End */}
                </SwiperSlide>
                <SwiperSlide>
                {/*Blog Two Single Start */}
                <div className="item">
                    <div className="blog-two__single">
                        <div className="blog-two__img">
                            <img src="assets/images/blog/blog-2-3.jpg" alt=""/>
                            <div className="blog-two__date">
                                <p>17</p>
                                <h5>Dec</h5>
                            </div>
                            <div className="blog-two__btn-box">
                                <Link href="blog-details" className="thm-btn blog-two__btn">More Details <span
                                        className="icon-up-right-arrow"></span> </Link>
                            </div>
                        </div>
                        <div className="blog-two__content">
                            <h3 className="blog-two__title"><Link href="blog-details">Lorem Ipsum is simply dummy text
                                    of the printing and typesetting</Link></h3>
                        </div>
                    </div>
                </div>
                {/*Blog Two Single End */}
                </SwiperSlide>
            </Swiper>

        </>
    )
}
