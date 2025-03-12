'use client'
import Link from "next/link"
import ModalVideo from 'react-modal-video'
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
            slidesPerView: 2,
            
        },
        767: {
            slidesPerView: 3,
            
        },
        991: {
            slidesPerView: 3,
            
        },
        1199: {
            slidesPerView: 5,
            
        },
        1350: {
            slidesPerView: 5,
            
        },
    }



}
export default function Brand() {
    return (
        <>
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
        
        </>
    )
}
