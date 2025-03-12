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
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Team Details">
        {/*Team Details Start*/}
        <section className="team-details">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="team-details__left">
                            <div className="team-details__img">
                                <img src="assets/images/team/team-details-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="team-details__right">
                            <ul className="team-details__progress-box list-unstyled">
                                <li>
                                    <div className="team-details__progress">
                                        <h4 className="team-details__progress-title">Success Rate - 69%</h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="69%" style={{ width: '69%' }}>
                                                <div className="count-text">69%</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-details__progress">
                                        <h4 className="team-details__progress-title">Complete Work - 79%</h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="79%" style={{ width: '79%' }}>
                                                <div className="count-text">79%</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-details__progress">
                                        <h4 className="team-details__progress-title">Satisfied Client - 95%</h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="95%" style={{ width: '95%' }}>
                                                <div className="count-text">95%</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="team-details__address-box">
                                <div className="team-details__client-info">
                                    <ul className="team-details__client-info-list list-unstyled">
                                        <li>
                                            <p>Name</p>
                                            <h3>Archer Graham</h3>
                                        </li>
                                        <li>
                                            <p>Position:</p>
                                            <h3>WordPress Expert</h3>
                                        </li>
                                        <li>
                                            <p>Experience</p>
                                            <h3>37 Years</h3>
                                        </li>
                                    </ul>
                                    <ul
                                        className="team-details__client-info-list team-details__client-info-list-2 list-unstyled">
                                        <li>
                                            <p>Phone:</p>
                                            <h3><Link href="tel:5265665665">+52656 656 65</Link></h3>
                                        </li>
                                        <li>
                                            <p>Email:</p>
                                            <h3><Link href="mailto:youremail@gmail.com">youremail@gmail.com</Link></h3>
                                        </li>
                                        <li>
                                            <p>Address:</p>
                                            <h3>Jones Street New York</h3>
                                        </li>
                                    </ul>
                                </div>
                                <div className="team-details__social">
                                    <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                    <Link href="#"><span className="fab fa-pinterest-p"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Team Details End*/}



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