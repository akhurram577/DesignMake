'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'


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
export default function projectdetails() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Project Details">
        {/*Project Details Start*/}
        <section className="project-details">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/project/project-details-img-1.jpg" alt=""/>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title-1">Projects Details</h3>
                    <p className="project-details__text-1">To be clear, Project Online is NOT a web-based version of Project
                        Professional. Project Online is an entirely separate service that offers full portfolio and
                        project
                        management tools on the web. It includes Project Web App, and can, depending on your
                        subscription, also include Project Online Desktop Client, which is a
                        Discover Community. Explore subscription benefits, browse training courses, learn how to secure
                    </p>
                    <p className="project-details__text-2">To be clear, Project Online is NOT a web-based version of Project
                        Professional. Project Online is an entirely separate service that offers full portfolio and
                        project management tools on the web. It includes Project Web App, and can, depending on your
                        subscription, also include Project Online </p>
                    <div className="project-details__img-and-faq">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="project-details__img-box-img">
                                    <img src="assets/images/project/project-details-img-box-img.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="project-details__faq-box">
                                    <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                                        <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                            <div className="accrodion-title">
                                                <h4>What is the latest technology trend in the ?</h4>
                                                <div className="project-details__faq-box-count"></div>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>The time it takes to repair a roof depends on the extent of the
                                                        damage. For minor repairs, it might take an hour or two. For
                                                        significant repairs, A or team might be at your home for half a
                                                        day.</p>
                                                </div>{/* /.inner */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                            <div className="accrodion-title">
                                                <h4>How to Create my Project in Company?</h4>
                                                <div className="project-details__faq-box-count"></div>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>The time it takes to repair a roof depends on the extent of the
                                                        damage. For minor repairs, it might take an hour or two. For
                                                        significant repairs, A or team might be at your home for half a
                                                        day.</p>
                                                </div>{/* /.inner */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                            <div className="accrodion-title">
                                                <h4>How can IT services benefit my business?</h4>
                                                <div className="project-details__faq-box-count"></div>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>The time it takes to repair a roof depends on the extent of the
                                                        damage. For minor repairs, it might take an hour or two. For
                                                        significant repairs, A or team might be at your home for half a
                                                        day.</p>
                                                </div>{/* /.inner */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                            <div className="accrodion-title">
                                                <h4>What warranties do I have for installation?</h4>
                                                <div className="project-details__faq-box-count"></div>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>The time it takes to repair a roof depends on the extent of the
                                                        damage. For minor repairs, it might take an hour or two. For
                                                        significant repairs, A or team might be at your home for half a
                                                        day.</p>
                                                </div>{/* /.inner */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="project-details__text-3">To be clear, Project Online is NOT a web-based version of Project
                        Professional. Project Online is an entirely separate service that offers full portfolio and
                        project
                        management tools on the web. It includes Project Web App, and can, depending on your
                        subscription, also include Project Online Desktop Client, which is a
                        Discover Community. Explore subscription benefits, browse training courses, learn how to secure
                    </p>
                </div>
            </div>
        </section>
        {/*Project Details End*/}

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