'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
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
            slidesPerView: 3,
            
        },
        991: {
            slidesPerView: 4,
            
        },
        1199: {
            slidesPerView: 5,
            
        },
        1350: {
            slidesPerView: 5,
            
        },
    }



}
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Services">
        {/* Services One Start */}
        <section className="services-one">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h2 className="section-title__title title-animation">
                        Where Inovation Meet <br/>Interior Design
                    </h2>
                </div>
                <div className="row">
                    {/* Services One Sinlge Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-one__single">
                            <div className="services-one__shape-1"
                                style={{ backgroundImage: ' url(assets/images/shapes/services-one-shape-1.png)' }} ></div>
                            <div className="services-one__content-box">
                                <h3 className="services-one__title"><Link href="evolve-space-designs">Evolve Space
                                        Designs</Link></h3>
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-1.jpg" alt=""/>
                                </div>
                                <p className="services-one__text">A corporate business entity is an oit organization
                                    formed with the a mans a</p>
                            </div>
                            <Link href="evolve-space-designs" className="services-one__btn"><span
                                    className="icon-next"></span>More Details</Link>
                        </div>
                    </div>
                    {/* Services One Sinlge End */}
                    {/* Services One Sinlge Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="services-one__single">
                            <div className="services-one__shape-1"
                                style={{ backgroundImage: ' url(assets/images/shapes/services-one-shape-1.png)' }} ></div>
                            <div className="services-one__content-box">
                                <h3 className="services-one__title"><Link href="eden-home-styling">Eden Home Styling</Link>
                                </h3>
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-2.jpg" alt=""/>
                                </div>
                                <p className="services-one__text">A corporate business entity is an oit organization
                                    formed with the a mans a</p>
                            </div>
                            <Link href="eden-home-styling" className="services-one__btn"><span
                                    className="icon-next"></span>More Details</Link>
                        </div>
                    </div>
                    {/* Services One Sinlge End */}
                    {/* Services One Sinlge Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="services-one__single">
                            <div className="services-one__shape-1"
                                style={{ backgroundImage: ' url(assets/images/shapes/services-one-shape-1.png)' }} ></div>
                            <div className="services-one__content-box">
                                <h3 className="services-one__title"><Link href="harmony-interiors">Harmony Interiors</Link>
                                </h3>
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-3.jpg" alt=""/>
                                </div>
                                <p className="services-one__text">A corporate business entity is an oit organization
                                    formed with the a mans a</p>
                            </div>
                            <Link href="harmony-interiors" className="services-one__btn"><span
                                    className="icon-next"></span>More Details</Link>
                        </div>
                    </div>
                    {/* Services One Sinlge End */}
                </div>
            </div>
        </section>
        {/* Services One End */}

        {/* Sliding Text One Start */}
        <section className="sliding-text-one">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="sliding-text-one__wrap">
                <ul className="sliding-text__list list-unstyled marquee_mode">
                    <li>
                        <h2 data-hover="Interior Design" className="sliding-text__title">Interior Design
                            <img src="assets/images/icon/star-icon.png" alt=""/></h2>
                    </li>
                    <li>
                        <h2 data-hover="luxury homes" className="sliding-text__title">luxury homes
                            <img src="assets/images/icon/star-icon.png" alt=""/></h2>
                    </li>
                    <li>
                        <h2 data-hover="construction simulator" className="sliding-text__title">construction simulator
                            <img src="assets/images/icon/star-icon.png" alt=""/></h2>
                    </li>
                    <li>
                        <h2 data-hover="construction simulator" className="sliding-text__title">construction simulator
                            <img src="assets/images/icon/star-icon.png" alt=""/></h2>
                    </li>
                </ul>
            </div>
        </section>
        {/* Sliding Text One End */}

        {/* Awards One Start */}
        <section className="awards-one">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style2">
                    <h2 className="section-title__title title-animation">Our Company Awards <br/> & Achievements</h2>
                </div>
                <div className="row">
                    <div className="col-xl-7">
                        <div className="awards-one__left">
                            <ul className="list-unstyled awards-one__list">
                                <li className="wow fadeInLeft" data-wow-delay="100ms">
                                    <div className="awards-one__title-box">
                                        <div className="awards-one__title-circle-box">
                                            <p>W.</p>
                                        </div>
                                        <h3 className="awards-one__title">Boston Award For <br/>
                                            Architecture</h3>
                                    </div>
                                    <div className="awards-one__year">
                                        <p>2024</p>
                                    </div>
                                    <div className="awards-one__arrow">
                                        <Link href="about"><span className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </li>
                                <li className="wow fadeInLeft" data-wow-delay="200ms">
                                    <div className="awards-one__title-box">
                                        <div className="awards-one__title-circle-box">
                                            <p>W.</p>
                                        </div>
                                        <h3 className="awards-one__title">Boston Award For <br/>
                                            Architecture</h3>
                                    </div>
                                    <div className="awards-one__year">
                                        <p>2025</p>
                                    </div>
                                    <div className="awards-one__arrow">
                                        <Link href="about"><span className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </li>
                                <li className="wow fadeInLeft" data-wow-delay="400ms">
                                    <div className="awards-one__title-box">
                                        <div className="awards-one__title-circle-box">
                                            <p>W.</p>
                                        </div>
                                        <h3 className="awards-one__title">Boston Award For <br/>
                                            Architecture</h3>
                                    </div>
                                    <div className="awards-one__year">
                                        <p>2026</p>
                                    </div>
                                    <div className="awards-one__arrow">
                                        <Link href="about"><span className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="awards-one__right wow slideInRight" data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div className="awards-one__img-box">
                                <div className="awards-one__img">
                                    <img src="assets/images/resources/awards-one-img-1.jpg" alt=""/>
                                </div>
                                <div className="awards-one__img-two">
                                    <img src="assets/images/resources/awards-one-img-2.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Awards One End */}

        {/*Brand One Start*/}
        <section className="brand-one">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <Swiper {...swiperOptions} className="brand-one__carousel owl-theme owl-carousel">
                    <SwiperSlide>
                    <div className="item">
                        <div className="brand-one__img">
                            <Link href="#"><img src="assets/images/brand/brand-1-1.png" alt=""/></Link>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <div className="brand-one__img">
                            <Link href="#"><img src="assets/images/brand/brand-1-2.png" alt=""/></Link>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <div className="brand-one__img">
                            <Link href="#"><img src="assets/images/brand/brand-1-3.png" alt=""/></Link>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <div className="brand-one__img">
                            <Link href="#"><img src="assets/images/brand/brand-1-4.png" alt=""/></Link>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <div className="brand-one__img">
                            <Link href="#"><img src="assets/images/brand/brand-1-5.png" alt=""/></Link>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <div className="brand-one__img">
                            <Link href="#"><img src="assets/images/brand/brand-1-6.png" alt=""/></Link>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        {/*Brand One End*/}

        </Layout>
        </>
    )
}