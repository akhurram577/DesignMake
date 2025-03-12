'use client'
import Link from "next/link"
import ModalVideo from 'react-modal-video'
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
            slidesPerView: 2,
            
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
export default function Projects() {
    return (
        <>
        {/*Project Two Start */}
        <section className="project-two">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="project-two__top">
                <div className="container">
                    <div className="section-title text-left sec-title-animation animation-style2">
                        <h2 className="section-title__title title-animation">Designing <br/> Defining Spaces</h2>
                    </div>
                </div>
            </div>
            <div className="project-two__bottom">
                <div className="container">
                    <Swiper {...swiperOptions} className="project-two__carousel owl-theme owl-carousel">
                        <SwiperSlide>
                        <div className="item">
                            <div className="project-two__single">
                                <div className="project-two__img">
                                    <img src="assets/images/project/projects-2-1.jpg" alt=""/>
                                </div>
                                <div className="project-two__content">
                                    <h3 className="project-two__title"><Link href="project-details">Industrial Chic
                                            Restaurant</Link></h3>
                                    <div className="project-two__arrow">
                                        <Link href="assets/images/project/projects-2-1.jpg" className="img-popup"><span
                                                className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="item">
                            <div className="project-two__single">
                                <div className="project-two__img">
                                    <img src="assets/images/project/projects-2-2.jpg" alt=""/>
                                </div>
                                <div className="project-two__content">
                                    <h3 className="project-two__title"><Link href="project-details">Amman Rotane Hotel</Link>
                                    </h3>
                                    <div className="project-two__arrow">
                                        <Link href="assets/images/project/projects-2-2.jpg" className="img-popup"><span
                                                className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="item">
                            <div className="project-two__single">
                                <div className="project-two__img">
                                    <img src="assets/images/project/projects-2-3.jpg" alt=""/>
                                </div>
                                <div className="project-two__content">
                                    <h3 className="project-two__title"><Link href="project-details">Harmony Interiors</Link>
                                    </h3>
                                    <div className="project-two__arrow">
                                        <Link href="assets/images/project/projects-2-3.jpg" className="img-popup"><span
                                                className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="item">
                            <div className="project-two__single">
                                <div className="project-two__img">
                                    <img src="assets/images/project/projects-2-1.jpg" alt=""/>
                                </div>
                                <div className="project-two__content">
                                    <h3 className="project-two__title"><Link href="project-details">Industrial Chic
                                            Restaurant</Link></h3>
                                    <div className="project-two__arrow">
                                        <Link href="assets/images/project/projects-2-1.jpg" className="img-popup"><span
                                                className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="item">
                            <div className="project-two__single">
                                <div className="project-two__img">
                                    <img src="assets/images/project/projects-2-2.jpg" alt=""/>
                                </div>
                                <div className="project-two__content">
                                    <h3 className="project-two__title"><Link href="project-details">Amman Rotane Hotel</Link>
                                    </h3>
                                    <div className="project-two__arrow">
                                        <Link href="assets/images/project/projects-2-2.jpg" className="img-popup"><span
                                                className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="item">
                            <div className="project-two__single">
                                <div className="project-two__img">
                                    <img src="assets/images/project/projects-2-3.jpg" alt=""/>
                                </div>
                                <div className="project-two__content">
                                    <h3 className="project-two__title"><Link href="project-details">Harmony Interiors</Link>
                                    </h3>
                                    <div className="project-two__arrow">
                                        <Link href="assets/images/project/projects-2-3.jpg" className="img-popup"><span
                                                className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        {/*Project Two End */}
        </>
    )
}
