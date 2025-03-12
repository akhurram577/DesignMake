'use client'
import Link from "next/link"
export default function Features() {
   
    return (
        <>

        {/*Feature Two Start */}
        <section className="feature-two">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="row">
                    {/*Feature Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="feature-two__single">
                            <div className="feature-two__icon">
                                <span className="icon-staircase"></span>
                            </div>
                            <h3 className="feature-two__title"><Link href="interior-design">INTERRIOR DESIGN</Link></h3>
                            <p className="feature-two__text">Mrittik Architects is a full-service design firm
                                providing , master planning, urban design,</p>
                            <div className="feature-two__shape-box">
                                <div className="feature-two__shape-1"></div>
                                <div className="feature-two__shape-2"></div>
                                <div className="feature-two__shape-3"></div>
                            </div>
                        </div>
                    </div>
                    {/*Feature Two Single End */}
                    {/*Feature Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms">
                        <div className="feature-two__single">
                            <div className="feature-two__icon">
                                <span className="icon-plant"></span>
                            </div>
                            <h3 className="feature-two__title"><Link href="urban-design">URBAN DESIGN</Link></h3>
                            <p className="feature-two__text">Mrittik Architects is a full-service design firm
                                providing , master planning, urban design,</p>
                            <div className="feature-two__shape-box">
                                <div className="feature-two__shape-1"></div>
                                <div className="feature-two__shape-2"></div>
                                <div className="feature-two__shape-3"></div>
                            </div>
                        </div>
                    </div>
                    {/*Feature Two Single End */}
                    {/*Feature Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="feature-two__single last-child">
                            <div className="feature-two__icon">
                                <span className="icon-vacuum-cleaner"></span>
                            </div>
                            <h3 className="feature-two__title"><Link href="landscape-design">LANDSCAPE DESIGN</Link></h3>
                            <p className="feature-two__text">Mrittik Architects is a full-service design firm
                                providing , master planning, urban design,</p>
                            <div className="feature-two__shape-box">
                                <div className="feature-two__shape-1"></div>
                                <div className="feature-two__shape-2"></div>
                                <div className="feature-two__shape-3"></div>
                            </div>
                        </div>
                    </div>
                    {/*Feature Two Single End */}
                </div>
            </div>
        </section>
        {/*Feature Two End */}
        </>
    )
}
