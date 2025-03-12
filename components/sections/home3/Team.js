'use client'
import Link from "next/link"
export default function Team() {
    
    return (
        <>
        {/*Team One Start */}
        <section className="team-one">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h2 className="section-title__title title-animation">Where Inovation Meet <br/>
                        Interior Design</h2>
                </div>
                <div className="row">
                    {/*Team One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="team-one__sinlge">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-1.jpg" alt=""/>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__social">
                                    <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    <Link href="#"><span className="fab fa-vine"></span></Link>
                                    <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                </div>
                                <p className="team-one__sub-title">Teka dibe bacchu</p>
                                <h3 className="team-one__title"><Link href="team-details">Jonathan S. Wilcox</Link></h3>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End */}
                    {/*Team One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="team-one__sinlge">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-2.jpg" alt=""/>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__social">
                                    <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    <Link href="#"><span className="fab fa-vine"></span></Link>
                                    <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                </div>
                                <p className="team-one__sub-title">Teka dibe bacchu</p>
                                <h3 className="team-one__title"><Link href="team-details">Jessica Brown</Link></h3>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End */}
                    {/*Team One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="team-one__sinlge">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-3.jpg" alt=""/>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__social">
                                    <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                    <Link href="#"><span className="fab fa-vine"></span></Link>
                                    <Link href="#"><span className="fab fa-twitter"></span></Link>
                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                </div>
                                <p className="team-one__sub-title">Teka dibe bacchu</p>
                                <h3 className="team-one__title"><Link href="team-details">Jonathan Trot</Link></h3>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End */}
                </div>
            </div>
        </section>
        {/*Team One End */}
        </>
    )
}
