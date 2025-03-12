import Link from "next/link"

export default function Footer2() {
    return (
        <>
            
        <footer className="site-footer-two">

            <div className="site-footer-two__top">
                <div className="container">
                    <div className="site-footer-two__top-inner">
                        <div className="footer-widget__logo-two">
                            <Link href="/">
                                <img src="" alt="Logo"/>
                            </Link>
                        </div>
                        <div className="site-footer__top-title-box">
                            <h3>Let's work together just drop me a line -
                                <Link href="mailto:info@example.com">info@example.com</Link>
                            </h3>
                        </div>
                        <div className="site-footer__social-two">
                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                            <Link href="#"><i className="fab fa-facebook"></i></Link>
                            <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                        </div>

                    </div>
                </div>
            </div>

            <div className="site-footer-two__main">
                <div className="site-footer-two__main-shape"
                    style={{ backgroundImage: ' url(assets/images/shapes/site-footer-shape.png)' }} ></div>
                <div className="container">
                    <div className="row">

                        <div className="col-xl-3">
                            <div className="footer-widget__column-two">
                                <div className="title-box">
                                    <h3>About Company</h3>
                                </div>
                                <div className="footer-widget__column-two-about">
                                    <div className="text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do eiusmod.
                                        </p>
                                    </div>
                                    <ul className="footer-widget__column-two-about-list clearfix">
                                        <li>
                                            <div className="icon">
                                                <i className="icon-telephone"></i>
                                            </div>
                                            <div className="text">
                                                <p><Link href="tel:188822333">+1 888.22.333</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="icon-envelope-2"></i>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <Link href="mailto:info@tecture.com">info@tecture.com</Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="icon-pin"></i>
                                            </div>
                                            <div className="text">
                                                <p>66 Broklyn Street New York, USA</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2">
                            <div className="footer-widget__column-two ml30">
                                <div className="title-box">
                                    <h3>Links</h3>
                                </div>
                                <ul className="footer-widget__column-two-link clearfix">
                                    <li>
                                        <Link href="#">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Team Member
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Project
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-2">
                            <div className="footer-widget__column-two">
                                <div className="title-box">
                                    <h3>Our Company</h3>
                                </div>
                                <ul className="footer-widget__column-two-link clearfix">
                                    <li>
                                        <Link href="#">
                                            About Company
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Cloudways Users
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            News & Updates
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Partners
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Faq’s
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Testimonials
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Join With Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="footer-widget__column-two">
                                <div className="title-box">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul className="footer-widget__column-two-link clearfix">
                                    <li>
                                        <Link href="#">
                                            Our Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            System Status
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Knowledge base
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Write For Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Properties Right
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Customer Voice
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Ebooks
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="footer-widget__column-two">
                                <div className="title-box">
                                    <h3>Newsletter</h3>
                                </div>
                                <div className="footer-widget-newsletter">
                                    <div className="text">
                                        <p> Get the latest updates & exclusive content to your inbox.</p>
                                    </div>
                                    <div className="subscribe-box-form">
                                        <form action="#" method="post">
                                            <div className="form-group">
                                                <div className="icon">
                                                    <i className="icon-envelope-2"></i>
                                                </div>
                                                <input type="email" name="email" placeholder="Email..." required=""/>
                                            </div>
                                            <button className="submit thm-btn ">
                                                Subscribe Us
                                                <span className="icon-up-right-arrow"></span>
                                            </button>
                                        </form>
                                        <div className="title">
                                            <div className="icon">
                                                <i className="icon-info"></i>
                                            </div>
                                            <h6>We protect your privacy.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="site-footer-two__bottom">
                <div className="container">
                    <div className="site-footer-two__bottom-inner">
                        <div className="copyright-text">
                            <p>Copyright © 2025 <Link href="/">khurram</Link> All rights reserved.</p>
                        </div>
                        <div className="footer-menu">
                            <ul>
                                <li><Link href="#">Privacy Policy</Link></li>
                                <li><Link href="#">Terms &amp; Conditions</Link></li>
                                <li><Link href="#">Disclaimer.</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            </footer>
       
        </>
    )
}
