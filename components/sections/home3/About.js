'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        
        {/*About Three Start */}
        <section className="about-three">
            <div className="about-three__shape1">
                <img className="float-bob-x" src="assets/images/shapes/site-footer-two-shape-1.png" alt="Shape" />
            </div>
            <div className="about-three__shape2">
                <img className="float-bob-x" src="assets/images/shapes/site-footer-two-shape-2.png" alt="Shape" />
            </div>
            <div className="about-three__shape3">
                <img className="float-bob-x" src="assets/images/shapes/about-v1-shape1.png" alt="Shape" />
            </div>
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-three__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <h2 className="section-title__title title-animation">Welcome To About Us</h2>
                            </div>
                            <p className="about-three__text">Arrangements are made to transport cargo by sea to meet
                                customers’ international transpor tation needs.the spaces and places we imagine and
                                envision for our clients. To those wanting to make an impact with design.</p>
                            <ul className="about-three__points-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-workstations"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Evolve Space Designs</h3>
                                        <p>It is a long established fact that a reader will be distracted by<br/> the
                                            readable hkljklkl.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-social-media-marketing"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Eden Home Styling</h3>
                                        <p>It is a long established fact that a reader will be distracted by <br/>the
                                            readable hkljklkl.</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="about-three__btn-box">
                                <Link href="about" className="thm-btn about-three__btn">More Details <span
                                        className="icon-up-right-arrow"></span> </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-three__right wow slideInRight" data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div className="about-three__img">
                                <img src="assets/images/resources/about-three-img-1.jpg" alt=""/>
                                <div className="about-three__experience-box">
                                    <h3 className="about-three__experience-title">Funfacts
                                        in Great<br/> Numbers</h3>
                                    <div className="about-three__experience">
                                        <div className="about-three__experience-count-shape"></div>
                                        <p className="about-three__experience-sub-title">Years Of <br/>Experience</p>
                                        <div className="about-three__experience-count count-box">
                                            <h3>25</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Three End */}
        
        </>
    )
}
