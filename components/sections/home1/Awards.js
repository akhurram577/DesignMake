'use client'
import Link from "next/link"
export default function Awards() {
    return (
        <>

        
        {/* Awards One Start */}
        <section className="awards-one">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style2">
                    <h2 className="section-title__title title-animation">Our Company Awards <br/> & Achievements</h2>
                </div>
                <div className="row">
                    <div className="col-xl-7">
                        <div className="awards-one__left">
                            <ul className="list-unstyled awards-one__list">
                                <li className="wow fadeInLeft" data-wow-delay="100ms">
                                    <div className="awards-one__title-box">
                                        <div className="awards-one__title-circle-box">
                                            <p>W.</p>
                                        </div>
                                        <h3 className="awards-one__title">Boston Award For <br/>
                                            Architecture</h3>
                                    </div>
                                    <div className="awards-one__year">
                                        <p>2024</p>
                                    </div>
                                    <div className="awards-one__arrow">
                                        <Link href="about"><span className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </li>
                                <li className="wow fadeInLeft" data-wow-delay="200ms">
                                    <div className="awards-one__title-box">
                                        <div className="awards-one__title-circle-box">
                                            <p>W.</p>
                                        </div>
                                        <h3 className="awards-one__title">Boston Award For <br/>
                                            Architecture</h3>
                                    </div>
                                    <div className="awards-one__year">
                                        <p>2025</p>
                                    </div>
                                    <div className="awards-one__arrow">
                                        <Link href="about"><span className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </li>
                                <li className="wow fadeInLeft" data-wow-delay="400ms">
                                    <div className="awards-one__title-box">
                                        <div className="awards-one__title-circle-box">
                                            <p>W.</p>
                                        </div>
                                        <h3 className="awards-one__title">Boston Award For <br/>
                                            Architecture</h3>
                                    </div>
                                    <div className="awards-one__year">
                                        <p>2026</p>
                                    </div>
                                    <div className="awards-one__arrow">
                                        <Link href="about"><span className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="awards-one__right wow slideInRight" data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div className="awards-one__img-box">
                                <div className="awards-one__img">
                                    <img src="assets/images/resources/awards-one-img-1.jpg" alt=""/>
                                </div>
                                <div className="awards-one__img-two">
                                    <img src="assets/images/resources/awards-one-img-2.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Awards One End */}
        
        </>
    )
}
