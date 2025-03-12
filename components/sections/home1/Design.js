import Link from "next/link"
export default function Design() {
    return (
        <>
        {/* Design Interior Start */}
        <section className="design-interior">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="section-title text-left sec-title-animation animation-style2">
                    <h2 className="section-title__title title-animation">Elevate Your Lifestyle With <br/>
                        Our Designs Interior</h2>
                </div>
                <div className="design-interior__inner">
                    <div className="row">
                        <div className="col-xl-10">
                            <div className="design-interior__left wow fadeInLeft" data-wow-delay="100ms">
                                <div className="design-interior__shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/design-interior-shape-1.png)' }} >
                                </div>
                                <ul className="list-unstyled design-interior__list">
                                    <li>
                                        <div className="design-interior__single">
                                            <h4 className="design-interior__title"><Link href="harmony-interiors">Harmony
                                                    Interiors</Link></h4>
                                            <p className="design-interior__text">It is a long established fact that a reader
                                                will be distracted
                                                by the readable hkljklkl.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="design-interior__single">
                                            <h4 className="design-interior__title"><Link href="about">Amman Rotane
                                                    Hotel</Link></h4>
                                            <p className="design-interior__text">It is a long established fact that a reader
                                                will be distracted
                                                by the readable hkljklkl.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="design-interior__single">
                                            <h4 className="design-interior__title"><Link href="about">European Lard
                                                    Sration</Link>
                                            </h4>
                                            <p className="design-interior__text">It is a long established fact that a reader
                                                will be distracted
                                                by the readable hkljklkl.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="design-interior__single">
                                            <h4 className="design-interior__title"><Link href="harmony-interiors">Harmony
                                                    Interiors</Link></h4>
                                            <p className="design-interior__text">It is a long established fact that a reader
                                                will be distracted
                                                by the readable hkljklkl.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="design-interior__right wow fadeInRight" data-wow-delay="300ms">
                                <div className="design-interior__img">
                                    <img src="assets/images/resources/design-interior-img-1.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Design Interior End */}
    
        </>
    )
}
