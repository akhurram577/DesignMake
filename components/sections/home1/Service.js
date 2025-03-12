'use client'
import Link from "next/link"
export default function Service() {
    return (
        <>
        {/* Services One Start */}
        <section className="services-one">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h2 className="section-title__title title-animation">
                        Where Inovation Meet <br/>Interior Design
                    </h2>
                </div>
                <div className="row">
                    {/* Services One Sinlge Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-one__single">
                            <div className="services-one__shape-1"
                                style={{ backgroundImage: ' url(assets/images/shapes/services-one-shape-1.png)' }} ></div>
                            <div className="services-one__content-box">
                                <h3 className="services-one__title"><Link href="evolve-space-designs">Evolve Space
                                        Designs</Link></h3>
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-1.jpg" alt=""/>
                                </div>
                                <p className="services-one__text">A corporate business entity is an oit organization
                                    formed with the a mans a</p>
                            </div>
                            <Link href="evolve-space-designs" className="services-one__btn"><span
                                    className="icon-next"></span>More Details</Link>
                        </div>
                    </div>
                    {/* Services One Sinlge End */}
                    {/* Services One Sinlge Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="services-one__single">
                            <div className="services-one__shape-1"
                                style={{ backgroundImage: ' url(assets/images/shapes/services-one-shape-1.png)' }} ></div>
                            <div className="services-one__content-box">
                                <h3 className="services-one__title"><Link href="eden-home-styling">Eden Home Styling</Link>
                                </h3>
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-2.jpg" alt=""/>
                                </div>
                                <p className="services-one__text">A corporate business entity is an oit organization
                                    formed with the a mans a</p>
                            </div>
                            <Link href="eden-home-styling" className="services-one__btn"><span
                                    className="icon-next"></span>More Details</Link>
                        </div>
                    </div>
                    {/* Services One Sinlge End */}
                    {/* Services One Sinlge Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="services-one__single">
                            <div className="services-one__shape-1"
                                style={{ backgroundImage: ' url(assets/images/shapes/services-one-shape-1.png)' }} ></div>
                            <div className="services-one__content-box">
                                <h3 className="services-one__title"><Link href="harmony-interiors">Harmony Interiors</Link>
                                </h3>
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-3.jpg" alt=""/>
                                </div>
                                <p className="services-one__text">A corporate business entity is an oit organization
                                    formed with the a mans a</p>
                            </div>
                            <Link href="harmony-interiors" className="services-one__btn"><span
                                    className="icon-next"></span>More Details</Link>
                        </div>
                    </div>
                    {/* Services One Sinlge End */}
                </div>
            </div>
        </section>
        {/* Services One End */}
    
        </>
    )
}
