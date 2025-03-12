'use client'
import Layout from "@/components/layout/Layout"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from "next/link"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
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
            slidesPerView: 2,
            
        },
        767: {
            slidesPerView: 2,
            
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
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Expert Team">
        {/*Team One Start */}
        <section className="team-one">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="row">
                    {/*Team One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="team-one__sinlge">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-1.jpg" alt=""/>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__social">
                                    <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    <Link href="#"><span className="fab fa-vine"></span></Link>
                                    <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                </div>
                                <p className="team-one__sub-title">Teka dibe bacchu</p>
                                <h3 className="team-one__title"><Link href="team-details">Jonathan S. Wilcox</Link></h3>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End */}
                    {/*Team One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="team-one__sinlge">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-2.jpg" alt=""/>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__social">
                                    <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    <Link href="#"><span className="fab fa-vine"></span></Link>
                                    <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                </div>
                                <p className="team-one__sub-title">Teka dibe bacchu</p>
                                <h3 className="team-one__title"><Link href="team-details">Jessica Brown</Link></h3>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End */}
                    {/*Team One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="team-one__sinlge">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-3.jpg" alt=""/>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__social">
                                    <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    <Link href="#"><span className="fab fa-vine"></span></Link>
                                    <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                </div>
                                <p className="team-one__sub-title">Teka dibe bacchu</p>
                                <h3 className="team-one__title"><Link href="team-details">Jonathan Trot</Link></h3>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End */}
                    {/*Team One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="900ms">
                        <div className="team-one__sinlge">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-4.jpg" alt=""/>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__social">
                                    <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    <Link href="#"><span className="fab fa-vine"></span></Link>
                                    <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                </div>
                                <p className="team-one__sub-title">Teka dibe bacchu</p>
                                <h3 className="team-one__title"><Link href="team-details">Ryan Bennet</Link></h3>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End */}
                    {/*Team One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="1200ms">
                        <div className="team-one__sinlge">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-5.jpg" alt=""/>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__social">
                                    <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    <Link href="#"><span className="fab fa-vine"></span></Link>
                                    <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                </div>
                                <p className="team-one__sub-title">Teka dibe bacchu</p>
                                <h3 className="team-one__title"><Link href="team-details">Alister Cook</Link></h3>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End */}
                    {/*Team One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="1500ms">
                        <div className="team-one__sinlge">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-6.jpg" alt=""/>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__social">
                                    <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    <Link href="#"><span className="fab fa-vine"></span></Link>
                                    <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                </div>
                                <p className="team-one__sub-title">Teka dibe bacchu</p>
                                <h3 className="team-one__title"><Link href="team-details">Jonathan Campbel</Link></h3>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End */}
                </div>
            </div>
        </section>
        {/*Team One End */}

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