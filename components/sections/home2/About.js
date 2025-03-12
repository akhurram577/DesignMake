'use client'
import Link from "next/link"
export default function About() {
    
    return (
        <>
        {/*About Two Start*/}
        <section className="about-two">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="about-two__shape-1 float-bob-x">
                <img src="assets/images/shapes/about-two-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="about-two__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <h2 className="section-title__title title-animation">Simple Minimalist For Your Home
                                    Interior</h2>
                            </div>
                            <p className="about-two__text">Inoterior design consultancy firm that brings sensitivity to the
                                design top restaurants,<br/> hotels, offices & homes around the world. We stand for
                                quality,
                            </p>
                            <ul className="list-unstyled about-two__history">
                                <li>
                                    <div className="about-two__history-single">
                                        <h3 className="about-two__history-year">1997</h3>
                                        <p className="about-two__history-text">We are committed to the impeccable
                                            craftsmanship and luxury is reflected in</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-two__history-single">
                                        <h3 className="about-two__history-year">2027</h3>
                                        <p className="about-two__history-text">We are committed to the impeccable
                                            craftsmanship and luxury is reflected in</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="about-two__btn-box">
                                <Link href="about" className="thm-btn about-two__btn">More Details <span
                                        className="icon-up-right-arrow"></span> </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
                        <div className="about-two__right">
                            <div className="about-two__img">
                                <img src="assets/images/resources/about-two-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Two End */}
        </>
    )
}
