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
export default function Testimonial() {
    return (
        <>
        
        {/*Start Testimonial Three*/}
        <section className="testimonial-three">
            <div className="testimonial-three__bg jarallax"
                style={{ backgroundImage: ' url(assets/images/testimonial/testimonial-3__bg.jpg)' }} >
            </div>
            <div className="container">
                <div className="section-title sec-title-animation animation-style1">
                    <h2 className="section-title__title title-animation">Hear From Our Members</h2>
                </div>


                <Swiper {...swiperOptions} className="testimonial-three__carousel owl-theme owl-carousel">
                    <SwiperSlide>
                    {/*Start Single Testimonial Three*/}
                    <div className="item">
                        <div className="single-testimonial-three">
                            <div className="img-box">
                                <img src="assets/images/testimonial/testimonial-2-1.jpg" alt="Image"/>
                            </div>
                            <div className="single-testimonial-three-inner">
                                <div className="content-box">
                                    <ul className="rating-box clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="text">
                                        <p>Arrangements are made to transport cargo by sea to meet customers’
                                            international transpor tation needs.</p>
                                    </div>
                                    <div className="bottom-box">
                                        <div className="client-name">
                                            <h5>Madriya Merin</h5>
                                            <p>Interrio Assistant</p>
                                        </div>
                                        <div className="quote-box">
                                            <i className="fa fa-quote-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Testimonial Three*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Single Testimonial Three*/}
                    <div className="item">
                        <div className="single-testimonial-three">
                            <div className="img-box">
                                <img src="assets/images/testimonial/testimonial-2-2.jpg" alt="Image"/>
                            </div>
                            <div className="single-testimonial-three-inner">
                                <div className="content-box">
                                    <ul className="rating-box clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="text">
                                        <p>Arrangements are made to transport cargo by sea to meet customers’
                                            international transpor tation needs.</p>
                                    </div>
                                    <div className="bottom-box">
                                        <div className="client-name">
                                            <h5>Mike Hardson</h5>
                                            <p>Spatial Design</p>
                                        </div>
                                        <div className="quote-box">
                                            <i className="fa fa-quote-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Testimonial Three*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Single Testimonial Three*/}
                    <div className="item">
                        <div className="single-testimonial-three">
                            <div className="img-box">
                                <img src="assets/images/testimonial/testimonial-2-3.jpg" alt="Image"/>
                            </div>
                            <div className="single-testimonial-three-inner">
                                <div className="content-box">
                                    <ul className="rating-box clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="text">
                                        <p>Arrangements are made to transport cargo by sea to meet customers’
                                            international transpor tation needs.</p>
                                    </div>
                                    <div className="bottom-box">
                                        <div className="client-name">
                                            <h5>Marco Jansen</h5>
                                            <p>Web Design</p>
                                        </div>
                                        <div className="quote-box">
                                            <i className="fa fa-quote-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Testimonial Three*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Single Testimonial Three*/}
                    <div className="item">
                        <div className="single-testimonial-three">
                            <div className="img-box">
                                <img src="assets/images/testimonial/testimonial-2-1.jpg" alt="Image"/>
                            </div>
                            <div className="single-testimonial-three-inner">
                                <div className="content-box">
                                    <ul className="rating-box clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="text">
                                        <p>Arrangements are made to transport cargo by sea to meet customers’
                                            international transpor tation needs.</p>
                                    </div>
                                    <div className="bottom-box">
                                        <div className="client-name">
                                            <h5>Madriya Merin</h5>
                                            <p>Interrio Assistant</p>
                                        </div>
                                        <div className="quote-box">
                                            <i className="fa fa-quote-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Testimonial Three*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Single Testimonial Three*/}
                    <div className="item">
                        <div className="single-testimonial-three">
                            <div className="img-box">
                                <img src="assets/images/testimonial/testimonial-2-2.jpg" alt="Image"/>
                            </div>
                            <div className="single-testimonial-three-inner">
                                <div className="content-box">
                                    <ul className="rating-box clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="text">
                                        <p>Arrangements are made to transport cargo by sea to meet customers’
                                            international transpor tation needs.</p>
                                    </div>
                                    <div className="bottom-box">
                                        <div className="client-name">
                                            <h5>Mike Hardson</h5>
                                            <p>Spatial Design</p>
                                        </div>
                                        <div className="quote-box">
                                            <i className="fa fa-quote-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Testimonial Three*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Single Testimonial Three*/}
                    <div className="item">
                        <div className="single-testimonial-three">
                            <div className="img-box">
                                <img src="assets/images/testimonial/testimonial-2-3.jpg" alt="Image"/>
                            </div>
                            <div className="single-testimonial-three-inner">
                                <div className="content-box">
                                    <ul className="rating-box clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pointed-star"></span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="text">
                                        <p>Arrangements are made to transport cargo by sea to meet customers’
                                            international transpor tation needs.</p>
                                    </div>
                                    <div className="bottom-box">
                                        <div className="client-name">
                                            <h5>Marco Jansen</h5>
                                            <p>Web Design</p>
                                        </div>
                                        <div className="quote-box">
                                            <i className="fa fa-quote-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Testimonial Three*/}
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        {/*End Testimonial Three*/}
            
        </>
    )
}
