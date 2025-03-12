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
        <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Urban Design">
        {/*Services Details Start*/}
        <section className="service-details">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5">
                        <div className="service-details__left">
                            <div className="service-details__service-box">
                                <ul className="service-details__services-list list-unstyled">
                                    <li>
                                        <Link href="evolve-space-designs">Evolve Space Designs<span
                                                className="icon-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="eden-home-styling">Eden Home Styling<span
                                                className="icon-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="harmony-interiors">Harmony Interiors<span
                                                className="icon-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="interior-design">Interior Design<span
                                                className="icon-right"></span></Link>
                                    </li>
                                    <li className="active">
                                        <Link href="urban-design">Urban Design<span className="icon-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="landscape-design">Landscape Design<span
                                                className="icon-right"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="service-details__contact-box">
                                <h3 className="service-details__title">Contact withus for
                                    any advice</h3>
                                <div className="service-details__icon">
                                    <span className="icon-telephone"></span>
                                </div>
                                <p className="service-details__text">Need help? Talk to an expert</p>
                                <p className="service-details__number"><Link href="tel:892123119999">+892 12311 9999</Link></p>
                            </div>
                            <div className="service-details__download-box">
                                <div className="icon">
                                    <span className="icon-download"></span>
                                </div>
                                <Link href="#">Download PDF File</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__right">
                            <div className="service-details__img">
                                <img src="assets/images/services/service-details-img-6.jpg" alt=""/>
                            </div>
                            <h3 className="service-details__title-1">Urban Design</h3>
                            <p className="service-details__text-1">Globally optimize highly efficient solution whereas
                                open-source application. Completely strategize quality internal or
                                "organic" sources for virtual e-business. Phosfluorescently re-engineer enterprise
                                markets via value-added networks.
                                Seamlessly restore inexpensive e-markets vis-a-vis corporate intellectual capital.
                                Holisticly reinvent compelling niche
                                markets via scalable strategic.</p>
                            <p className="service-details__text-2">Globally optimize highly efficient solution whereas
                                open-source application. Completely strategize quality internal
                                or "organic" sources for virtual e-business. Phosfluorescently re-engineer enterprise
                                markets via value-added
                                networks. Seamlessly restore inexpensive e-markets vis-a-vis corporate intellectual</p>
                            <div className="service-details__img-and-point-box">
                                <div className="service-details__points-img">
                                    <img src="assets/images/services/service-details-points-img.jpg" alt=""/>
                                </div>
                                <div className="service-details__points-box">
                                    <h3 className="service-details__points-title">Global QuantumTech AI</h3>
                                    <ul className="service-details__points-list list-unstyled">
                                        <li>
                                            <div className="service-details__points-shape"></div>
                                            <p>Customer engagement matters</p>
                                        </li>
                                        <li>
                                            <div className="service-details__points-shape"></div>
                                            <p>The Love Boat promis someg for Plan</p>
                                        </li>
                                        <li>
                                            <div className="service-details__points-shape"></div>
                                            <p>Research beyond the business plan</p>
                                        </li>
                                        <li>
                                            <div className="service-details__points-shape"></div>
                                            <p>Id risus pharetra est, at rhoncus, nec </p>
                                        </li>
                                        <li>
                                            <div className="service-details__points-shape"></div>
                                            <p>Elit curabitur amet risus bibendum.</p>
                                        </li>
                                        <li>
                                            <div className="service-details__points-shape"></div>
                                            <p>Non saed velit dictum quam risus pharetra esta.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="service-details__title-2">Our Strengths And Advantages</h3>
                            <p className="service-details__text-3">Globally optimize highly efficient solution whereas
                                open-source application. Completely strategize
                                quality internal or "organic" sources for virtual e-business. Phosfluorescently
                                re-engineer
                                enterprise markets via value-added networks. Seamlessly restore inexpensive e-markets
                                vis-a-vis
                                corporate intellectual capital. Holisticly reinvent compelling niche </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Services Details End*/}


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