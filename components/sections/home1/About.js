'use client'
import Link from "next/link"
export default function About() {
    return (
        <>
        
        {/*About One Start */}
        <section className="about-one">
            <div className="about-one__shape1">
                <img className="float-bob-x" src="assets/images/shapes/about-v1-shape1.png" alt="Shape" />
            </div>
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="about-one__left">
                            <ul className="list-unstyled about-one__img-list">
                                <li>
                                    <div className="about-one__img">
                                        <img src="assets/images/resources/about-one-1-1.jpg" alt=""/>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-one__img">
                                        <img src="assets/images/resources/about-one-1-2.jpg" alt=""/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="about-one__right wow fadeInLeft" data-wow-delay="300ms">
                            <div className="about-one__content">
                                <div className="about-one__content-shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/about-one-content-shape-1.png)' }} >
                                </div>
                                <div className="section-title sec-title-animation animation-style2">
                                    <h2 className="section-title__title title-animation">Where Inovation Meet <br/>
                                        Interior Design</h2>
                                </div>
                                <div className="about-one__design-make">
                                    <div className="about-one__design-make-img">
                                        <img src="assets/images/resources/about-one-design-make-img-1.jpg" alt=""/>
                                    </div>
                                    <div className="about-one__design-make-content">
                                        <h5 className="about-one__design-make-title">Design Make Dream</h5>
                                        <p className="about-one__design-make-text">Rapidiously evolve pandemic experiences
                                            <br/>
                                            and Dramatically administrate</p>
                                    </div>
                                </div>
                                <ul className="about-one__progress-list list-unstyled">
                                    <li className="about-one__progress">
                                        <h4 className="about-one__progress-title">Architecture</h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="85%" style={{ width: '85%' }}>
                                                <div className="count-text">85%</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="about-one__progress">
                                        <h4 className="about-one__progress-title">Interior Design </h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="90%" style={{ width: '90%' }}>
                                                <div className="count-text">90%</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}
        
        </>
    )
}
