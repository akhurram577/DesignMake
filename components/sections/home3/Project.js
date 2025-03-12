'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
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
            slidesPerView: 2,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 3,
            
        },
        1350: {
            slidesPerView: 4,
            
        },
    }



}
export default function Project() {
    return (
        <>
        
        {/*Projects Three Start*/}
        <section className="projects-three">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="projects-three__wrapper">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h2 className="section-title__title title-animation">We Elevate Your Brand's <br/>
                        Daring Dedication.</h2>
                </div>
                <Swiper {...swiperOptions} className="projects-three__carousel owl-theme owl-carousel">
                    <SwiperSlide>
                    {/*Projects Three Single Start*/}
                    <div className="item">
                        <div className="projects-three__single">
                            <div className="projects-three__img">
                                <img src="assets/images/project/projects-3-1.jpg" alt=""/>
                                <div className="projects-three__content">
                                    <p className="projects-three__sub-title">Interior Design</p>
                                    <h4 className="projects-three__title"><Link href="project-details">Neoclassical
                                            Sofa</Link></h4>
                                </div>
                                <div className="projects-three__arrow">
                                    <Link href="assets/images/project/projects-3-1.jpg" className="img-popup"><span
                                            className="icon-up-right-arrow-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Projects Three Single Start*/}
                    <div className="item">
                        <div className="projects-three__single">
                            <div className="projects-three__img">
                                <img src="assets/images/project/projects-3-2.jpg" alt=""/>
                                <div className="projects-three__content">
                                    <p className="projects-three__sub-title">Interior Design</p>
                                    <h4 className="projects-three__title"><Link href="project-details">Living Room
                                            Interior Design</Link></h4>
                                </div>
                                <div className="projects-three__arrow">
                                    <Link href="assets/images/project/projects-3-2.jpg" className="img-popup"><span
                                            className="icon-up-right-arrow-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Projects Three Single Start*/}
                    <div className="item">
                        <div className="projects-three__single">
                            <div className="projects-three__img">
                                <img src="assets/images/project/projects-3-3.jpg" alt=""/>
                                <div className="projects-three__content">
                                    <p className="projects-three__sub-title">Building</p>
                                    <h4 className="projects-three__title"><Link href="project-details">Living Room
                                            Remodeling</Link></h4>
                                </div>
                                <div className="projects-three__arrow">
                                    <Link href="assets/images/project/projects-3-3.jpg" className="img-popup"><span
                                            className="icon-up-right-arrow-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Projects Three Single Start*/}
                    <div className="item">
                        <div className="projects-three__single">
                            <div className="projects-three__img">
                                <img src="assets/images/project/projects-3-4.jpg" alt=""/>
                                <div className="projects-three__content">
                                    <p className="projects-three__sub-title">Architecture</p>
                                    <h4 className="projects-three__title"><Link href="project-details">Restaurant Interior
                                            Design</Link></h4>
                                </div>
                                <div className="projects-three__arrow">
                                    <Link href="assets/images/project/projects-3-4.jpg" className="img-popup"><span
                                            className="icon-up-right-arrow-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Projects Three Single Start*/}
                    <div className="item">
                        <div className="projects-three__single">
                            <div className="projects-three__img">
                                <img src="assets/images/project/projects-3-1.jpg" alt=""/>
                                <div className="projects-three__content">
                                    <p className="projects-three__sub-title">Interior Design</p>
                                    <h4 className="projects-three__title"><Link href="project-details">Neoclassical
                                            Sofa</Link></h4>
                                </div>
                                <div className="projects-three__arrow">
                                    <Link href="assets/images/project/projects-3-1.jpg" className="img-popup"><span
                                            className="icon-up-right-arrow-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Projects Three Single Start*/}
                    <div className="item">
                        <div className="projects-three__single">
                            <div className="projects-three__img">
                                <img src="assets/images/project/projects-3-2.jpg" alt=""/>
                                <div className="projects-three__content">
                                    <p className="projects-three__sub-title">Interior Design</p>
                                    <h4 className="projects-three__title"><Link href="project-details">Living Room
                                            Interior Design</Link></h4>
                                </div>
                                <div className="projects-three__arrow">
                                    <Link href="assets/images/project/projects-3-2.jpg" className="img-popup"><span
                                            className="icon-up-right-arrow-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Projects Three Single Start*/}
                    <div className="item">
                        <div className="projects-three__single">
                            <div className="projects-three__img">
                                <img src="assets/images/project/projects-3-3.jpg" alt=""/>
                                <div className="projects-three__content">
                                    <p className="projects-three__sub-title">Building</p>
                                    <h4 className="projects-three__title"><Link href="project-details">Living Room
                                            Remodeling</Link></h4>
                                </div>
                                <div className="projects-three__arrow">
                                    <Link href="assets/images/project/projects-3-3.jpg" className="img-popup"><span
                                            className="icon-up-right-arrow-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Projects Three Single Start*/}
                    <div className="item">
                        <div className="projects-three__single">
                            <div className="projects-three__img">
                                <img src="assets/images/project/projects-3-4.jpg" alt=""/>
                                <div className="projects-three__content">
                                    <p className="projects-three__sub-title">Architecture</p>
                                    <h4 className="projects-three__title"><Link href="project-details">Restaurant Interior
                                            Design</Link></h4>
                                </div>
                                <div className="projects-three__arrow">
                                    <Link href="assets/images/project/projects-3-4.jpg" className="img-popup"><span
                                            className="icon-up-right-arrow-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Three Single End*/}
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        {/*Projects Three End*/}
        </>
    )
}
