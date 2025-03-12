import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Projects">
        {/*Projects Page Start*/}
        <section className="projects-page">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="project-two__single">
                            <div className="project-two__img">
                                <img src="assets/images/project/projects-2-1.jpg" alt=""/>
                            </div>
                            <div className="project-two__content">
                                <h3 className="project-two__title"><Link href="project-details">Industrial Chic
                                        Restaurant</Link></h3>
                                <div className="project-two__arrow">
                                    <Link href="assets/images/project/projects-2-1.jpg" className="img-popup"><span
                                            className="icon-up-right-arrow-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="project-two__single">
                            <div className="project-two__img">
                                <img src="assets/images/project/projects-2-2.jpg" alt=""/>
                            </div>
                            <div className="project-two__content">
                                <h3 className="project-two__title"><Link href="project-details">Amman Rotane Hotel</Link>
                                </h3>
                                <div className="project-two__arrow">
                                    <Link href="assets/images/project/projects-2-2.jpg" className="img-popup"><span
                                            className="icon-up-right-arrow-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="project-two__single">
                            <div className="project-two__img">
                                <img src="assets/images/project/projects-2-3.jpg" alt=""/>
                            </div>
                            <div className="project-two__content">
                                <h3 className="project-two__title"><Link href="project-details">Harmony Interiors</Link>
                                </h3>
                                <div className="project-two__arrow">
                                    <Link href="assets/images/project/projects-2-3.jpg" className="img-popup"><span
                                            className="icon-up-right-arrow-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="project-two__single">
                            <div className="project-two__img">
                                <img src="assets/images/project/projects-2-4.jpg" alt=""/>
                            </div>
                            <div className="project-two__content">
                                <h3 className="project-two__title"><Link href="project-details">Harmony Interiors</Link></h3>
                                <div className="project-two__arrow">
                                    <Link href="assets/images/project/projects-2-4.jpg" className="img-popup"><span
                                            className="icon-up-right-arrow-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="project-two__single">
                            <div className="project-two__img">
                                <img src="assets/images/project/projects-2-5.jpg" alt=""/>
                            </div>
                            <div className="project-two__content">
                                <h3 className="project-two__title"><Link href="project-details">Amman Rotane Hotel</Link>
                                </h3>
                                <div className="project-two__arrow">
                                    <Link href="assets/images/project/projects-2-5.jpg" className="img-popup"><span
                                            className="icon-up-right-arrow-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="project-two__single">
                            <div className="project-two__img">
                                <img src="assets/images/project/projects-2-6.jpg" alt=""/>
                            </div>
                            <div className="project-two__content">
                                <h3 className="project-two__title"><Link href="project-details">Industrial Chic
                                        Restaurant</Link>
                                </h3>
                                <div className="project-two__arrow">
                                    <Link href="assets/images/project/projects-2-6.jpg" className="img-popup"><span
                                            className="icon-up-right-arrow-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Projects Page End*/}

        </Layout>
        </>
    )
}