'use client'
import Link from "next/link"
export default function Services() {
    return (
        <>
        
        {/*Services Two Start */}
        <section className="services-two">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="services-two__shape-1 img-bounce">
                <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
            </div>
            <div className="services-two__wrapper">
                <div className="services-two__top">
                    <div className="section-title text-left sec-title-animation animation-style2 wow fadeInLeft"
                        data-wow-delay="100ms">
                        <h2 className="section-title__title title-animation">We Provide Experts to <br/> For Your Business
                        </h2>
                    </div>
                    <div className="services-two__btn-box wow fadeInRight" data-wow-delay="100ms">
                        <Link href="services" className="thm-btn services-two__btn">More Details <span
                                className="icon-up-right-arrow"></span> </Link>
                    </div>
                </div>
                <div className="services-two__bottom">
                    <ul className="list-unstyled services-two__list">
                        <li className="hover-item wow fadeInUp" data-wow-delay="100ms">
                            <div className="services-two__single">
                                <div className="services-two__single-left">
                                    <div className="services-two__count-box">
                                        <div className="services-two__count"></div>
                                        <div className="services-two__dot"></div>
                                    </div>
                                    <h3 className="services-two__title"><Link href="services">Ee Modify Whole System</Link>
                                    </h3>
                                </div>
                                <div className="services-two__single-right">
                                    <p className="services-two__text">Our associate consultants specialize in a range of
                                        business areas. These include strategic planning, <br/> issues resolution,
                                        culture assessment, board effectiveness, retention.</p>
                                    <div className="services-two__arrow">
                                        <Link href="services"><span className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="hover-item__box">
                                <img src="assets/images/services/services-2-1.jpg" alt="Image"
                                    className="hover-item__box-img"/>
                            </div>
                        </li>
                        <li className="hover-item wow fadeInUp" data-wow-delay="300ms">
                            <div className="services-two__single">
                                <div className="services-two__single-left">
                                    <div className="services-two__count-box">
                                        <div className="services-two__count"></div>
                                        <div className="services-two__dot"></div>
                                    </div>
                                    <h3 className="services-two__title"><Link href="services">Hard Working Attitudes</Link>
                                    </h3>
                                </div>
                                <div className="services-two__single-right">
                                    <p className="services-two__text">Our associate consultants specialize in a range of
                                        business areas. These include strategic planning, <br/> issues resolution,
                                        culture assessment, board effectiveness, retention.</p>
                                    <div className="services-two__arrow">
                                        <Link href="services"><span className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="hover-item__box">
                                <img src="assets/images/services/services-2-2.jpg" alt="Image"
                                    className="hover-item__box-img"/>
                            </div>
                        </li>
                        <li className="hover-item wow fadeInUp" data-wow-delay="600ms">
                            <div className="services-two__single">
                                <div className="services-two__single-left">
                                    <div className="services-two__count-box">
                                        <div className="services-two__count"></div>
                                        <div className="services-two__dot"></div>
                                    </div>
                                    <h3 className="services-two__title"><Link href="services">Still up in The air To
                                            Succeed</Link></h3>
                                </div>
                                <div className="services-two__single-right">
                                    <p className="services-two__text">Our associate consultants specialize in a range of
                                        business areas. These include strategic planning, <br/> issues resolution,
                                        culture assessment, board effectiveness, retention.</p>
                                    <div className="services-two__arrow">
                                        <Link href="services"><span className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="hover-item__box">
                                <img src="assets/images/services/services-2-3.jpg" alt="Image"
                                    className="hover-item__box-img"/>
                            </div>
                        </li>
                        <li className="hover-item wow fadeInUp" data-wow-delay="900ms">
                            <div className="services-two__single">
                                <div className="services-two__single-left">
                                    <div className="services-two__count-box">
                                        <div className="services-two__count"></div>
                                        <div className="services-two__dot"></div>
                                    </div>
                                    <h3 className="services-two__title"><Link href="services">Urban Interventions</Link></h3>
                                </div>
                                <div className="services-two__single-right">
                                    <p className="services-two__text">Our associate consultants specialize in a range of
                                        business areas. These include strategic planning, <br/> issues resolution,
                                        culture assessment, board effectiveness, retention.</p>
                                    <div className="services-two__arrow">
                                        <Link href="services"><span className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="hover-item__box">
                                <img src="assets/images/services/services-2-4.jpg" alt="Image"
                                    className="hover-item__box-img"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/*Services Two End */}
        
        </>
    )
}
