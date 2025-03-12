'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    
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
            slidesPerView: 2,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 3,
            
        },
        1350: {
            slidesPerView: 3,
            
        },
    }



}
export default function Blog() {
    return (
        <>
        
        {/*Blog Two Start */}
        <section className="blog-two">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="section-title text-left sec-title-animation animation-style2">
                    <h2 className="section-title__title title-animation">Unleash Your Creativity with <br/> Interior
                        Inspiration</h2>
                </div>
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
            </div>
        </section>
        {/*Blog Two End */}
       
        </>
    )
}
