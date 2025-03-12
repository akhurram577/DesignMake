'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
export default function welcome() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        
        {/*Start welcome Style1*/}
        <section className="welcome-style1">
            <div className="container">
                <div className="section-title sec-title-animation animation-style1">
                    <h2 className="section-title__title title-animation">Welcome to Interior</h2>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="welcome-style1__content">
                            <div className="title">
                                <h3> We are the best Interior designer since 1975.</h3>
                            </div>
                            <div className="text">
                                <p>Interior brings 41 years of interior designs experience right to your home or office.
                                    Our design professionals are equipped to help you determine the products and design
                                    that work best for our customers within the colors and lighting of your surroundings
                                    more than your expectation.</p>
                                <p>
                                    Since our meetings take place in your home or office, we’ll work with you to help
                                    visualize a design solution that aligns with your taste, space, and budget, Also our
                                    team will guide you.
                                </p>
                            </div>
                            <div className="bottom-box">
                                <div className="btn-box">
                                    <Link href="about" className="thm-btn">More About Us <span
                                            className="icon-up-right-arrow"></span> </Link>
                                </div>
                                <div className="mail-box">
                                    <h3>
                                        Request Quote: <br/><Link href="mailto:freequote@gmail.com">freequote@gmail.com</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="welcome-style1__img">
                            <div className="row">

                                <div className="col-xl-6">
                                    <div className="img2">
                                        <img src="assets/images/resources/welcome-1-2.jpg" alt="Image"/>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="img1">
                                        <img src="assets/images/resources/welcome-1-1.jpg" alt="Image"/>
                                        <div className="video-btn">
                                            <a className="video-popup" title="Video Gallery"
                                                onClick={() => setOpen(true)}>
                                                <span className="fa fa-play"></span>
                                                <i className="ripple"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End welcome Style1*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </>
    )
}
