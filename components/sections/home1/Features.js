import Link from "next/link"
export default function Features() {
    return (
        <>
        {/*Feature One Start */}
        <section className="feature-one">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="feature-one__inner">
                    <ul className="list-unstyled feature-one__list">
                        <li className="wow fadeInLeft" data-wow-delay="100ms">
                            <div className="icon">
                                <span className="icon-engineer"></span>
                            </div>
                            <div className="text">
                                <p>
                                    <Link href="services">360 Panorama & 3D Virtual <br/>
                                        Reality Experience</Link></p>
                            </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="200ms">
                            <div className="icon">
                                <span className="icon-workstations"></span>
                            </div>
                            <div className="text">
                                <p><Link href="services">Crafted Furniture <br/>
                                        and Sustainable Material</Link></p>
                            </div>
                        </li>
                        <li className="wow fadeInRight" data-wow-delay="300ms">
                            <div className="icon">
                                <span className="icon-cyber-security"></span>
                            </div>
                            <div className="text">
                                <p><Link href="services">Young, Enthusiastic and <br/>
                                        Innovative Architects</Link></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/*Feature One End */}
        
        
        </>
    )
}
