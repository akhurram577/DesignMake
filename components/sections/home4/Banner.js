
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
    return (
        <>
        {/* Main Sllider Four Start */}
        <section className="main-slider-four">
            <Swiper {...swiperOptions} className="main-slider-four__carousel owl-carousel owl-theme">
                <SwiperSlide>
                {/* Single Main Sllider Four Start */}
                <div className="item">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-1-1.jpg)' }} >
                    </div>

                    {/* /.slider-one__bg */}
                    <div className="container">
                        <div className="main-slider-four__content">
                            <div className="title">
                                <h2>We Won Best<br/>Designer <span>Awards</span></h2>
                            </div>
                            <div className="text">
                                <p>
                                    Praising pain was born and we will give you a complete account
                                    of the system and expound teachings. Some great pleasure. To take a trivial example,
                                    which of us ever undertakes.
                                </p>
                            </div>
                            <div className="btn-box">
                                <Link href="about" className="thm-btn">More Details <span
                                        className="icon-up-right-arrow"></span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Main Sllider Four End */}
                </SwiperSlide>
                <SwiperSlide>
                {/* Single Main Sllider Four Start */}
                <div className="item">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-1-1.jpg)' }} >
                    </div>

                    {/* /.slider-one__bg */}
                    <div className="container">
                        <div className="main-slider-four__content">
                            <div className="title">
                                <h2>We Won Best<br/>Designer <span>Awards</span></h2>
                            </div>
                            <div className="text">
                                <p>
                                    Praising pain was born and we will give you a complete account
                                    of the system and expound teachings. Some great pleasure. To take a trivial example,
                                    which of us ever undertakes.
                                </p>
                            </div>
                            <div className="btn-box">
                                <Link href="about" className="thm-btn">More Details <span
                                        className="icon-up-right-arrow"></span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Main Sllider Four End */}
                </SwiperSlide>
                <SwiperSlide>
                {/* Single Main Sllider Four Start */}
                <div className="item">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-1-1.jpg)' }} >
                    </div>

                    {/* /.slider-one__bg */}
                    <div className="container">
                        <div className="main-slider-four__content">
                            <div className="title">
                                <h2>We Won Best<br/>Designer <span>Awards</span></h2>
                            </div>
                            <div className="text">
                                <p>
                                    Praising pain was born and we will give you a complete account
                                    of the system and expound teachings. Some great pleasure. To take a trivial example,
                                    which of us ever undertakes.
                                </p>
                            </div>
                            <div className="btn-box">
                                <Link href="about" className="thm-btn">More Details <span
                                        className="icon-up-right-arrow"></span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Single Main Sllider Four End */}
                </SwiperSlide>
            </Swiper>
        </section>
        {/*Main Sllider Start */}
            
        </>
    )
}
