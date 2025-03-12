'use client'
import Link from "next/link"
export default function Services() {
    return (
        <>
      
        {/*Services Three Start */}
        <section className="services-three">
            <div className="services-three__bg"
                style={{ backgroundImage: ' url(assets/images/shapes/site-footer-shape-1.jpg)' }} ></div>
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h2 className="section-title__title title-animation">Where Inovation Meet <br/>
                        Interior Design</h2>
                </div>
                <div className="row">
                    {/*Services Three Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-three__single">
                            <div className="services-three__icon">
                                <span className="icon-staircase"></span>
                            </div>
                            <h3 className="services-three__title"><Link href="interior-design"> Architecture & <br/>
                                    Building </Link></h3>
                            <div className="services-three__img">
                                <img src="assets/images/services/services-3-1.jpg" alt=""/>
                            </div>
                            <p className="services-three__text">Our associate consultants specialize in a range of business
                                areas. These include strategic planning, issues resolution, culture assessment, board
                                effectiveness, retention.</p>
                            <div className="services-three__arrow">
                                <Link href="interior-design"><span className="icon-up-right-arrow-1"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Services Three Single End */}
                    {/*Services Three Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="services-three__single">
                            <div className="services-three__icon">
                                <span className="icon-workstations"></span>
                            </div>
                            <h3 className="services-three__title"><Link href="evolve-space-designs"> Evolve Space <br/>
                                    Designs </Link></h3>
                            <div className="services-three__img">
                                <img src="assets/images/services/services-3-2.jpg" alt=""/>
                            </div>
                            <p className="services-three__text">Our associate consultants specialize in a range of business
                                areas. These include strategic planning, issues resolution, culture assessment, board
                                effectiveness, retention.</p>
                            <div className="services-three__arrow">
                                <Link href="evolve-space-designs"><span className="icon-up-right-arrow-1"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Services Three Single End */}
                    {/*Services Three Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="services-three__single">
                            <div className="services-three__icon">
                                <span className="icon-plant"></span>
                            </div>
                            <h3 className="services-three__title"><Link href="eden-home-styling"> Eden Home <br/> Styling
                                </Link></h3>
                            <div className="services-three__img">
                                <img src="assets/images/services/services-3-3.jpg" alt=""/>
                            </div>
                            <p className="services-three__text">Our associate consultants specialize in a range of business
                                areas. These include strategic planning, issues resolution, culture assessment, board
                                effectiveness, retention.</p>
                            <div className="services-three__arrow">
                                <Link href="eden-home-styling"><span className="icon-up-right-arrow-1"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Services Three Single End */}
                    {/*Services Three Single Start */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="800ms">
                        <div className="services-three__single">
                            <div className="services-three__icon">
                                <span className="icon-vacuum-cleaner"></span>
                            </div>
                            <h3 className="services-three__title"><Link href="harmony-interiors"> Harmony Design <br/>
                                    Interiors </Link></h3>
                            <div className="services-three__img">
                                <img src="assets/images/services/services-3-4.jpg" alt=""/>
                            </div>
                            <p className="services-three__text">Our associate consultants specialize in a range of business
                                areas. These include strategic planning, issues resolution, culture assessment, board
                                effectiveness, retention.</p>
                            <div className="services-three__arrow">
                                <Link href="harmony-interiors"><span className="icon-up-right-arrow-1"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Services Three Single End */}
                </div>
            </div>
        </section>
        {/*Services Three End */}
       
        </>
    )
}
