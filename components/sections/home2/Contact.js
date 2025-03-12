'use client'
import Link from "next/link"
export default function Contact() {
    return (
        <>
        {/*Contact One Start */}
        <section className="contact-one">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="contact-one__shape-2 float-bob-y">
                <img src="assets/images/shapes/contact-one-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="contact-one__left wow slideInLeft" data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div className="contact-one__inner">
                                <div className="contact-one__shape-1 float-bob-x">
                                    <img src="assets/images/shapes/contact-one-shape-1.png" alt=""/>
                                </div>
                                <form className="contact-form-validated contact-one__form"
                                    method="post" >
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="contact-one__input-box">
                                                <input type="text" name="name" placeholder="Your Nome" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-one__input-box">
                                                <input type="email" name="email" placeholder="Email Address"
                                                    required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-one__input-box">
                                                <input type="text" name="Phone" placeholder="Your Phone" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-one__input-box">
                                                <input type="text" name="Subject" placeholder="Subject" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="contact-one__input-box text-message-box">
                                                <textarea name="message"
                                                    placeholder="How can we help you? Feel free to get in touch!"></textarea>
                                            </div>
                                            <div className="contact-one__btn-box">
                                                <button type="submit" className="thm-btn contact-one__btn">Learn More<span
                                                        className="icon-up-right-arrow"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="contact-one__right">
                            <div className="contact-one__right-content sec-title-animation animation-style2">
                                <h3 className="contact-one__title title-animation">Do You need Any Help? <br/>
                                    Send Message.</h3>
                                <div className="contact-one__contact-info">
                                    <div className="contact-one__contact-icon">
                                        <span className="icon-customer-service"></span>
                                    </div>
                                    <div className="contact-one__contact-icon-2">
                                        <span className="icon-customer-service"></span>
                                    </div>
                                    <div className="contact-one__contact-number-box">
                                        <p>Call us for ony inquiry</p>
                                        <h5><Link href="tel:4844987989">( 484 ) 4987 989</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact One End */}
        
            
        </>
    )
}
