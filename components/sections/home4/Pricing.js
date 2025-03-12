'use client'
import Link from "next/link"
export default function Pricing() {
    return (
        <>      

        {/*Pricing Two Start*/}
        <section className="pricing-two">
            <div className="pricing-two__shape-1 float-bob-y"
                style={{ backgroundImage: 'url(assets/images/shapes/pricing-two-shape-1.jpg)' }} ></div>
            <div className="container">
                <div className="section-title-three text-center sec-title-animation animation-style1">
                    <div className="section-title-three__tagline-box justify-content-center">
                        <div className="section-title-three__tagline-shape"></div>
                        <span className="section-title-three__tagline">Our Pricing</span>
                        <div className="section-title-three__tagline-shape"></div>
                    </div>
                    <h2 className="section-title-three__title title-animation">Lighting the Way to <br/>Quality Repairs</h2>
                </div>
                <div className="row">
                    {/*Pricing Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="pricing-two__single">
                            <div className="pricing-two__title-box">
                                <h3>Basic Plan</h3>
                                <p>Per Month</p>
                                <h2>$49</h2>
                            </div>
                            <div className="pricing-two__content">
                                <ul className="pricing-two__price-points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Mistakes To Avoid</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Your Startup</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Knew About Fonts</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Winning Metric for Your Startup</p>
                                    </li>
                                </ul>
                                <div className="pricing-two__btn-box">
                                    <Link href="pricing" className="pricing-two__btn thm-btn">Choose Plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing Two Single End*/}
                    {/*Pricing Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="pricing-two__single">
                            <div className="pricing-two__title-box">
                                <h3>Regular Plan</h3>
                                <p>6 Month</p>
                                <h2>$69</h2>
                            </div>
                            <div className="pricing-two__content">
                                <ul className="pricing-two__price-points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Mistakes To Avoid</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Your Startup</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Knew About Fonts</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Winning Metric for Your Startup</p>
                                    </li>
                                </ul>
                                <div className="pricing-two__btn-box">
                                    <Link href="pricing" className="pricing-two__btn thm-btn">Choose Plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing Two Single End*/}
                    {/*Pricing Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="pricing-two__single">
                            <div className="pricing-two__title-box">
                                <h3>Premium Plan</h3>
                                <p>Annual</p>
                                <h2>$99</h2>
                            </div>
                            <div className="pricing-two__content">
                                <ul className="pricing-two__price-points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Mistakes To Avoid</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Your Startup</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Knew About Fonts</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Winning Metric for Your Startup</p>
                                    </li>
                                </ul>
                                <div className="pricing-two__btn-box">
                                    <Link href="pricing" className="pricing-two__btn thm-btn">Choose Plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing Two Single End*/}
                </div>
            </div>
        </section>
        {/*Pricing Two End*/}
        
        </>
    )
}
