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
export default function Testimonial() {
    return (
        <>
        
        {/*Testimonial Two Start*/}
        <section className="testimonial-two">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h2 className="section-title__title title-animation">
                        What Our Clients Say
                    </h2>
                </div>
                <div className="testimonial-two__bottom">
                    <Swiper {...swiperOptions} className="testimonial-two__carousel owl-carousel owl-theme thm-owl__carousel">
                        <SwiperSlide>
                        {/*Testimonial Two Single Start*/}
                        <div className="item">
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__single-shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/testimonial-two-single-shape-1.png)' }} >
                                </div>
                                <div className="testimonial-two__img">
                                    <img src="assets/images/testimonial/testimonial-2-1.jpg" alt=""/>
                                </div>
                                <div className="testimonial-two__shape-1">
                                    <img src="assets/images/shapes/testimonial-two-shape-1.png" alt=""/>
                                </div>
                                <ul className="testimonial-two__ratting list-unstyled">
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                </ul>
                                <h3 className="testimonial-two__name"><Link href="testimonials">Michael Angenla</Link></h3>
                                <p className="testimonial-two__sub-title">Project Manager</p>
                                <p className="testimonial-two__text">Divide carefully fruitsome sixth form beginning
                                    replenis together midst lesser to airs there brought forth him she us one seas can
                                    was void can be awrare were nots multiply image female best project.
                                </p>
                            </div>
                        </div>
                        {/*Testimonial Two Single End*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        {/*Testimonial Two Single Start*/}
                        <div className="item">
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__single-shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/testimonial-two-single-shape-1.png)' }} >
                                </div>
                                <div className="testimonial-two__img">
                                    <img src="assets/images/testimonial/testimonial-2-2.jpg" alt=""/>
                                </div>
                                <div className="testimonial-two__shape-1">
                                    <img src="assets/images/shapes/testimonial-two-shape-1.png" alt=""/>
                                </div>
                                <ul className="testimonial-two__ratting list-unstyled">
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                </ul>
                                <h3 className="testimonial-two__name"><Link href="testimonials">Brenda Gregory</Link></h3>
                                <p className="testimonial-two__sub-title">CEO of Apple</p>
                                <p className="testimonial-two__text">Divide carefully fruitsome sixth form beginning
                                    replenis together midst lesser to airs there brought forth him she us one seas can
                                    was void can be awrare were nots multiply image female best project.
                                </p>
                            </div>
                        </div>
                        {/*Testimonial Two Single End*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        {/*Testimonial Two Single Start*/}
                        <div className="item">
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__single-shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/testimonial-two-single-shape-1.png)' }} >
                                </div>
                                <div className="testimonial-two__img">
                                    <img src="assets/images/testimonial/testimonial-2-3.jpg" alt=""/>
                                </div>
                                <div className="testimonial-two__shape-1">
                                    <img src="assets/images/shapes/testimonial-two-shape-1.png" alt=""/>
                                </div>
                                <ul className="testimonial-two__ratting list-unstyled">
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                </ul>
                                <h3 className="testimonial-two__name"><Link href="testimonials">Edward Monroe</Link></h3>
                                <p className="testimonial-two__sub-title">Senior Designer</p>
                                <p className="testimonial-two__text">Divide carefully fruitsome sixth form beginning
                                    replenis together midst lesser to airs there brought forth him she us one seas can
                                    was void can be awrare were nots multiply image female best project.
                                </p>
                            </div>
                        </div>
                        {/*Testimonial Two Single End*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        {/*Testimonial Two Single Start*/}
                        <div className="item">
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__single-shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/testimonial-two-single-shape-1.png)' }} >
                                </div>
                                <div className="testimonial-two__img">
                                    <img src="assets/images/testimonial/testimonial-2-4.jpg" alt=""/>
                                </div>
                                <div className="testimonial-two__shape-1">
                                    <img src="assets/images/shapes/testimonial-two-shape-1.png" alt=""/>
                                </div>
                                <ul className="testimonial-two__ratting list-unstyled">
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                </ul>
                                <h3 className="testimonial-two__name"><Link href="testimonials">Alisa Brown</Link></h3>
                                <p className="testimonial-two__sub-title">Project Manager</p>
                                <p className="testimonial-two__text">Divide carefully fruitsome sixth form beginning
                                    replenis together midst lesser to airs there brought forth him she us one seas can
                                    was void can be awrare were nots multiply image female best project.
                                </p>
                            </div>
                        </div>
                        {/*Testimonial Two Single End*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        {/*Testimonial Two Single Start*/}
                        <div className="item">
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__single-shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/testimonial-two-single-shape-1.png)' }} >
                                </div>
                                <div className="testimonial-two__img">
                                    <img src="assets/images/testimonial/testimonial-2-5.jpg" alt=""/>
                                </div>
                                <div className="testimonial-two__shape-1">
                                    <img src="assets/images/shapes/testimonial-two-shape-1.png" alt=""/>
                                </div>
                                <ul className="testimonial-two__ratting list-unstyled">
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                </ul>
                                <h3 className="testimonial-two__name"><Link href="testimonials">Brenda heyden</Link></h3>
                                <p className="testimonial-two__sub-title">CEO of Apple</p>
                                <p className="testimonial-two__text">Divide carefully fruitsome sixth form beginning
                                    replenis together midst lesser to airs there brought forth him she us one seas can
                                    was void can be awrare were nots multiply image female best project.
                                </p>
                            </div>
                        </div>
                        {/*Testimonial Two Single End*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        {/*Testimonial Two Single Start*/}
                        <div className="item">
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__single-shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/testimonial-two-single-shape-1.png)' }} >
                                </div>
                                <div className="testimonial-two__img">
                                    <img src="assets/images/testimonial/testimonial-2-6.jpg" alt=""/>
                                </div>
                                <div className="testimonial-two__shape-1">
                                    <img src="assets/images/shapes/testimonial-two-shape-1.png" alt=""/>
                                </div>
                                <ul className="testimonial-two__ratting list-unstyled">
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                    <li><span className="icon-pointed-star"></span></li>
                                </ul>
                                <h3 className="testimonial-two__name"><Link href="testimonials">Kark Edward</Link></h3>
                                <p className="testimonial-two__sub-title">Senior Designer</p>
                                <p className="testimonial-two__text">Divide carefully fruitsome sixth form beginning
                                    replenis together midst lesser to airs there brought forth him she us one seas can
                                    was void can be awrare were nots multiply image female best project.
                                </p>
                            </div>
                        </div>
                        {/*Testimonial Two Single End*/}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        {/*Testimonial Two End*/}
            
        </>
    )
}
