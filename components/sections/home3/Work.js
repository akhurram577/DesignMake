'use client'
import Link from "next/link"

export default function Work() {
    
    return (
        <>
        
        {/*How It Work Start */}
        <section className="how-it-work">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h2 className="section-title__title title-animation">How It Works</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4">
                        <div className="how-it-work__single">
                            <div className="how-it-work__count"></div>
                            <h3 className="how-it-work__title">INTERRIOR DESIGN</h3>
                            <p className="how-it-work__text">Mrittik Architects is a full-service design<br/> firm providing
                                ,
                                master planning, urban<br/> design,</p>
                            <div className="how-it-work__icon">
                                <span className="icon-staircase"></span>
                            </div>
                        </div>
                        <div className="how-it-work__single">
                            <div className="how-it-work__count"></div>
                            <h3 className="how-it-work__title">URBAN DESIGN</h3>
                            <p className="how-it-work__text">Mrittik Architects is a full-service design<br/> firm providing
                                ,
                                master planning, urban<br/> design,</p>
                            <div className="how-it-work__icon">
                                <span className="icon-plant"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="how-it-work__img-box">
                            <div className="how-it-work__img">
                                <img src="assets/images/resources/how-it-work-img-1.jpg" alt=""/>
                            </div>
                            <div className="how-it-work__icon-2">
                                <span className="icon-globe"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="how-it-work__single how-it-work__single-2">
                            <div className="how-it-work__count"></div>
                            <h3 className="how-it-work__title">LANDSCAPE DESIGN</h3>
                            <p className="how-it-work__text">Mrittik Architects is a full-service design<br/> firm providing
                                ,
                                master planning, urban<br/> design,</p>
                            <div className="how-it-work__icon">
                                <span className="icon-vacuum-cleaner"></span>
                            </div>
                        </div>
                        <div className="how-it-work__single how-it-work__single-2">
                            <div className="how-it-work__count"></div>
                            <h3 className="how-it-work__title">HOTEL DESIGN</h3>
                            <p className="how-it-work__text">Mrittik Architects is a full-service design<br/> firm providing
                                ,
                                master planning, urban<br/> design,</p>
                            <div className="how-it-work__icon">
                                <span className="icon-workstations"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*How It Work End */}
        
        </>
    )
}
