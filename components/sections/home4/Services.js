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
            slidesPerView: 1,
            
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
export default function Services() {
    return (
        <>
      
        {/*Start Service Style4*/}
        <section className="service-style4">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h2 className="section-title__title title-animation">service we provide</h2>
                </div>

                <Swiper {...swiperOptions} className="service-style4__carousel owl-theme owl-carousel">
                    <SwiperSlide>
                    {/*Start Single Service Style4*/}
                    <div className="item">
                        <div className="single-service-style4">
                            <div className="img-box">
                                <img src="assets/images/services/services-4-1.jpg" alt="Image"/>
                                <div className="overlay-icon">
                                    <Link href="services">
                                        <i className="fa fa-link"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="services">Commercial Design</Link></h3>
                                <p>The best projects and products in the commercial...</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Style4*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Single Service Style4*/}
                    <div className="item">
                        <div className="single-service-style4">
                            <div className="img-box">
                                <img src="assets/images/services/services-4-2.jpg" alt="Image"/>
                                <div className="overlay-icon">
                                    <Link href="services">
                                        <i className="fa fa-link"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="services">Evolve Space Designs</Link></h3>
                                <p>TA corporate business entity is an oit organization...</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Style4*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Single Service Style4*/}
                    <div className="item">
                        <div className="single-service-style4">
                            <div className="img-box">
                                <img src="assets/images/services/services-4-3.jpg" alt="Image"/>
                                <div className="overlay-icon">
                                    <Link href="services">
                                        <i className="fa fa-link"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="services">Ee Modify Whole System</Link></h3>
                                <p>Our associate consultants specialize of business...</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Style4*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Single Service Style4*/}
                    <div className="item">
                        <div className="single-service-style4">
                            <div className="img-box">
                                <img src="assets/images/services/services-4-1.jpg" alt="Image"/>
                                <div className="overlay-icon">
                                    <Link href="services">
                                        <i className="fa fa-link"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="services">Commercial Design</Link></h3>
                                <p>The best projects and products in the commercial...</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Style4*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Single Service Style4*/}
                    <div className="item">
                        <div className="single-service-style4">
                            <div className="img-box">
                                <img src="assets/images/services/services-4-2.jpg" alt="Image"/>
                                <div className="overlay-icon">
                                    <Link href="services">
                                        <i className="fa fa-link"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="services">Evolve Space Designs</Link></h3>
                                <p>TA corporate business entity is an oit organization...</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Style4*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Single Service Style4*/}
                    <div className="item">
                        <div className="single-service-style4">
                            <div className="img-box">
                                <img src="assets/images/services/services-4-3.jpg" alt="Image"/>
                                <div className="overlay-icon">
                                    <Link href="services">
                                        <i className="fa fa-link"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="services">Ee Modify Whole System</Link></h3>
                                <p>Our associate consultants specialize of business...</p>
                            </div>
                        </div>
                    </div>
                    {/*End Single Service Style4*/}
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        {/*End Service Style4*/}
       
        </>
    )
}
