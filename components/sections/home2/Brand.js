'use client'
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

        {/*Brand Two Start*/}
        <section className="brand-two">
            <div className="container">
                <div className="brand-two__inner">
                    <Swiper {...swiperOptions} className="brand-two__carousel owl-theme owl-carousel">
                        <SwiperSlide>
                        {/*Brand Two Single*/}
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-2-1.png" alt=""/>
                            </div>
                        </div>
                        {/*Brand Two Single*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-2-2.png" alt=""/>
                            </div>
                        </div>
                        {/*Brand Two Single*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-2-3.png" alt=""/>
                            </div>
                        </div>
                        {/*Brand Two Single*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-2-4.png" alt=""/>
                            </div>
                        </div>
                        {/*Brand Two Single*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-2-5.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        {/*Brand Two Single*/}
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-2-1.png" alt=""/>
                            </div>
                        </div>
                        {/*Brand Two Single*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-2-2.png" alt=""/>
                            </div>
                        </div>
                        {/*Brand Two Single*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-2-3.png" alt=""/>
                            </div>
                        </div>
                        {/*Brand Two Single*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-2-4.png" alt=""/>
                            </div>
                        </div>
                        {/*Brand Two Single*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-2-5.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                    </Swiper>
                    {/* If we need navigation buttons */}
                </div>
            </div>
        </section>
        {/*Brand Two End*/}
        
        </>
    )
}
