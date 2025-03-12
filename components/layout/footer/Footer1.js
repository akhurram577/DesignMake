import Link from "next/link"

export default function Footer1() {
    return (
        <>
           
        <footer className="site-footer">
            <div className="site-footer__shape-1 float-bob-x">
                <img src="assets/images/shapes/site-footer-shape-1.png" alt=""/>
            </div>
            <div className="site-footer__shape-2 float-bob-y">
                <img src="assets/images/shapes/site-footer-shape-2.png" alt=""/>
            </div>

            <div className="site-footer__marquee">
                <ul className="marquee_mode">
                    <li>Interior Design</li>
                    <li>luxury homes</li>
                    <li>construction simulator</li>
                </ul>
            </div>

            <div className="container">
                <div className="site-footer__top">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__column footer-widget__about">
                                <div className="footer-widget__logo">
                                    <Link href="/"><img src=""
                                            alt=""/></Link>
                                </div>
                                <p className="footer-widget__about-text">Eros vivamus platea nullam id consequat eu sociis
                                    lectus aliquam nibh auctor elitsed libero pharetra consequat and fad sociis conubia
                                    favorite to risus.</p>
                                <div className="site-footer__social">
                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                    <Link href="#"><i className="fab fa-facebook"></i></Link>
                                    <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__column footer-widget__usefull-link">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Useful Links</h3>
                                </div>
                                <div className="footer-widget__link-box">
                                    <ul className="footer-widget__link list-unstyled">
                                        <li><Link href="contact">Our Support</Link></li>
                                        <li><Link href="about">System Status</Link></li>
                                        <li><Link href="about">Knowledge base</Link></li>
                                        <li><Link href="blog">Blog</Link></li>
                                        <li><Link href="contact">Contact us</Link></li>
                                        <li><Link href="contact">Write For Us</Link></li>
                                    </ul>
                                    <ul className="footer-widget__link footer-widget__link-2 list-unstyled">
                                        <li><Link href="about">Ebooks</Link></li>
                                        <li><Link href="about">Cloudways Users</Link></li>
                                        <li><Link href="about">Group</Link></li>
                                        <li><Link href="about">Customer Voice</Link></li>
                                        <li><Link href="about">Properties Right</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__column footer-widget__services">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Our Services</h3>
                                </div>
                                <ul className="footer-widget__link list-unstyled">
                                    <li><Link href="harmony-interiors">Harmony Interiors</Link></li>
                                    <li><Link href="about">Amman Rotane Hotel</Link></li>
                                    <li><Link href="about">European Lard Sration</Link></li>
                                    <li><Link href="evolve-space-designs">Evolve Space Designs</Link></li>
                                    <li><Link href="eden-home-styling">Eden Home Styling</Link></li>
                                    <li><Link href="interior-design">Interior Design </Link></li>
                                    <li><Link href="urban-design">Human Resources</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__column footer-widget__instagram">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Instagram</h3>
                                </div>
                                <ul className="footer-widget__instagram-list list-unstyled clearfix">
                                    <li>
                                        <div className="footer-widget__instagram-img">
                                            <img src="assets/images/resources/footer-widget-instagram-img-1.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget__instagram-img">
                                            <img src="assets/images/resources/footer-widget-instagram-img-2.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget__instagram-img">
                                            <img src="assets/images/resources/footer-widget-instagram-img-3.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget__instagram-img">
                                            <img src="assets/images/resources/footer-widget-instagram-img-4.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget__instagram-img">
                                            <img src="assets/images/resources/footer-widget-instagram-img-5.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget__instagram-img">
                                            <img src="assets/images/resources/footer-widget-instagram-img-6.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">© 2025
                            Copyright <Link href="#">khurram.</Link> | All rights reserved</p>
                        <ul className="list-unstyled site-footer__bottom-menu">
                            <li><Link href="about">Privacy & Policy</Link></li>
                            <li><Link href="about">Terms of use</Link></li>
                            <li><Link href="about">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        
        </>
    )
}
