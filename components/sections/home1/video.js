'use client'
import ReactCurvedText from 'react-curved-text'
import { useState } from 'react'
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

export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            
        {/* Video One Start */}
        <section className="video-one">
            <div className="video-one__inner">
                <div className="video-one__curved-circle">
                    <div className="curved-circle">
                        <ReactCurvedText width='280'
                            height='280'
                            cx='70'
                            cy='80'
                            rx='60'
                            ry='60'
                            startOffset='50'
                            reversed={true}
                            text='Cool Branding And Development'
                            textProps={{ "style": { "fontSize": "20" } }}
                            textPathProps={{ "fill": "#ffffff" }}
                            tspanProps={null}
                            ellipseProps={null}
                            svgProps={null}
                        /> 
                        
                    </div>{/* /.curved-circle */}
                    <div className="video-one__video-link">
                        <a onClick={() => setOpen(true)} className="video-popup">
                            <div className="video-one__video-icon">
                                <span className="fa fa-play"></span>
                            </div>
                        </a>
                    </div>
                </div>{/* /.curved-circle */}

                <div className="video-one__main-content">
                    <div className="swiper-container" id="video-one__carousel">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="video-one__main-content-inner">
                                    <div className="video-one__main-content-bg"
                                        style={{ backgroundImage: ' url(assets/images/backgrounds/video-one-inner-content-bg-1-1.jpg)' }} >
                                    </div>
                                </div>
                            </div>{/* /.swiper-slide */}
                            <div className="swiper-slide">
                                <div className="video-one__main-content-inner">
                                    <div className="video-one__main-content-bg"
                                        style={{ backgroundImage: ' url(assets/images/backgrounds/video-one-inner-content-bg-1-2.jpg)' }} >
                                    </div>
                                </div>
                            </div>{/* /.swiper-slide */}
                            <div className="swiper-slide">
                                <div className="video-one__main-content-inner">
                                    <div className="video-one__main-content-bg"
                                        style={{ backgroundImage: ' url(assets/images/backgrounds/video-one-inner-content-bg-1-3.jpg)' }} >
                                    </div>
                                </div>
                            </div>{/* /.swiper-slide */}
                        </div>
                    </div>
                    <div className="video-one__nav">
                        <div className="swiper-button-prev" id="video-one__swiper-button-next">
                            <i className="icon-prev"></i>
                        </div>
                        <div className="swiper-button-next" id="video-one__swiper-button-prev">
                            <i className="icon-next"></i>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
        {/* Video One End */}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </>
    )
}
