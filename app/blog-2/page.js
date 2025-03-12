import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog standard">
       {/*Blog Details Start*/}
       <section className="blog-details">
            <div className="section-shape-1"
                style={{ backgroundImage: ' url(assets/images/shapes/blog-details-sec-shape-1.png)' }} ></div>
            <div className="auto-container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-page-content">

                            <div className="blog-two-single">
                                <div className="img-box">
                                    <img src="assets/images/blog/blog-page-2-1.jpg" alt="Image"/>
                                </div>
                                <div className="content-box">
                                    <div className="meta-box">
                                        <div className="date-box">
                                            <h3>23</h3>
                                            <p>Sep 2024</p>
                                        </div>
                                        <ul className="meta-info list-unstyled">
                                            <li>
                                                <Link href="#">
                                                    <span className="icon-user"></span>
                                                    David Wood
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="icon-conversation"></span>
                                                    (1k) Comment
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="title-box">
                                        <h3>
                                            <Link href="blog-details">
                                                Top 10 Modern Building Design in Califronia, USA
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="text-box">
                                        <p>Architecture is one of the most multidisciplinary fields out there,
                                            integrating landscape design, interior design, urban planning, history and
                                            philosophy, to name just a few.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="blog-details" className="thm-btn">
                                            More Details
                                            <span className="icon-up-right-arrow"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-two-single">
                                <div className="img-box">
                                    <img src="assets/images/blog/blog-page-2-2.jpg" alt="Image"/>
                                </div>
                                <div className="content-box">
                                    <div className="meta-box">
                                        <div className="date-box">
                                            <h3>13</h3>
                                            <p>Sep 2024</p>
                                        </div>
                                        <ul className="meta-info list-unstyled">
                                            <li>
                                                <Link href="#">
                                                    <span className="icon-user"></span>
                                                    David Wood
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="icon-conversation"></span>
                                                    (10k) Comment
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="title-box">
                                        <h3>
                                            <Link href="blog-details">
                                                It is a long established fact that a reader will
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="text-box">
                                        <p>Architecture is one of the most multidisciplinary fields out there,
                                            integrating landscape design, interior design, urban planning, history and
                                            philosophy, to name just a few..</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="blog-details" className="thm-btn">
                                            More Details
                                            <span className="icon-up-right-arrow"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-two-single">
                                <div className="img-box">
                                    <img src="assets/images/blog/blog-page-2-3.jpg" alt="Image"/>
                                </div>
                                <div className="content-box">
                                    <div className="meta-box">
                                        <div className="date-box">
                                            <h3>20</h3>
                                            <p>Nov 2024</p>
                                        </div>
                                        <ul className="meta-info list-unstyled">
                                            <li>
                                                <Link href="#">
                                                    <span className="icon-user"></span>
                                                    David Wood
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="icon-conversation"></span>
                                                    (5k) Comment
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="title-box">
                                        <h3>
                                            <Link href="blog-details">
                                                Inspiring Designs for Inspired Where InnovationMeet
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="text-box">
                                        <p>Architecture is one of the most multidisciplinary fields out there,
                                            integrating landscape design, interior design, urban planning, history and
                                            philosophy, to name just a few.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="blog-details" className="thm-btn">
                                            More Details
                                            <span className="icon-up-right-arrow"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-two-single">
                                <div className="img-box">
                                    <img src="assets/images/blog/blog-page-2-4.jpg" alt="Image"/>
                                </div>
                                <div className="content-box">
                                    <div className="meta-box">
                                        <div className="date-box">
                                            <h3>24</h3>
                                            <p>Jun 2024</p>
                                        </div>
                                        <ul className="meta-info list-unstyled">
                                            <li>
                                                <Link href="#">
                                                    <span className="icon-user"></span>
                                                    David Wood
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="icon-conversation"></span>
                                                    (15k) Comment
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="title-box">
                                        <h3>
                                            <Link href="blog-details">
                                                The best drawings make amazing structures
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="text-box">
                                        <p>Architecture is one of the most multidisciplinary fields out there,
                                            integrating landscape design, interior design, urban planning, history and
                                            philosophy, to name just a few.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="blog-details" className="thm-btn">
                                            More Details
                                            <span className="icon-up-right-arrow"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-two-single">
                                <div className="img-box">
                                    <img src="assets/images/blog/blog-page-2-5.jpg" alt="Image"/>
                                </div>
                                <div className="content-box">
                                    <div className="meta-box">
                                        <div className="date-box">
                                            <h3>10</h3>
                                            <p>April 2024</p>
                                        </div>
                                        <ul className="meta-info list-unstyled">
                                            <li>
                                                <Link href="#">
                                                    <span className="icon-user"></span>
                                                    David Wood
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span className="icon-conversation"></span>
                                                    (1b) Comment
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="title-box">
                                        <h3>
                                            <Link href="blog-details">
                                                Highly-trained architects ready to serve
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="text-box">
                                        <p>Architecture is one of the most multidisciplinary fields out there,
                                            integrating landscape design, interior design, urban planning, history and
                                            philosophy, to name just a few.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="blog-details" className="thm-btn">
                                            More Details
                                            <span className="icon-up-right-arrow"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            <div className="blog-page__pagination">
                                <ul className="pg-pagination list-unstyled">
                                    <li className="prev">
                                        <Link href="blog-details" aria-label="Prev">
                                            <i className="icon-left-arrow"></i>
                                        </Link>
                                    </li>
                                    <li className="count active"><Link href="blog-details">1</Link></li>
                                    <li className="count"><Link href="blog-details">2</Link></li>
                                    <li className="count"><Link href="blog-details">3</Link></li>
                                    <li className="next">
                                        <Link href="blog-details" aria-label="Next">
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="sidebar">
                            <div className="sidebar__single sidebar__search">
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Search Keyword" />
                                    <button type="submit"><i className="icon-search-interface-symbol"></i></button>
                                </form>
                            </div>
                            <div className="sidebar__single sidebar__post">
                                <h3 className="sidebar__title">Latest Post</h3>
                                <ul className="sidebar__post-list list-unstyled">
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <p className="sidebar__post-date"><span className="icon-calendar"></span>July 24,
                                                2024</p>
                                            <h3>
                                                <Link href="blog-details">Top crypto exchange
                                                    influencers</Link>
                                            </h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <p className="sidebar__post-date"><span className="icon-calendar"></span>July 24,
                                                2024</p>
                                            <h3>
                                                <Link href="blog-details">Mauris non dignissim commodo
                                                    Instralation</Link>
                                            </h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <p className="sidebar__post-date"><span className="icon-calendar"></span>July 24,
                                                2024</p>
                                            <h3>
                                                <Link href="blog-details">Donec sit amet lacinia Instralation
                                                    nulla.</Link>
                                            </h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__all-category">
                                <h3 className="sidebar__title">Categories</h3>
                                <ul className="sidebar__all-category-list list-unstyled">
                                    <li>
                                        <Link href="#">New Technologies<span>(07)</span></Link>
                                    </li>
                                    <li>
                                        <Link href="#">Construction Introductions<span>(05)</span></Link>
                                    </li>
                                    <li>
                                        <Link href="#">Instralation Accecories<span>(03)</span></Link>
                                    </li>
                                    <li>
                                        <Link href="#">Business Advice<span>(07)</span></Link>
                                    </li>
                                    <li>
                                        <Link href="#">Payment Processing<span>(08)</span></Link>
                                    </li>
                                    <li>
                                        <Link href="#">Corporate Standup<span>(04)</span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single have-any-query">
                                <h3 className="have-any-query__title">Have Any
                                    Query?</h3>
                                <p className="have-any-query__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod</p>
                                <div className="have-any-query__btn-box">
                                    <Link href="about" className="thm-btn have-any-query__btn">Send Massage</Link>
                                </div>
                            </div>
                            <div className="sidebar__single sidebar__tags">
                                <h3 className="sidebar__title">Tags</h3>
                                <div className="sidebar__tags-list">
                                    <Link href="#">All Project</Link>
                                    <Link href="#">Interiour</Link>
                                    <Link href="#">Business</Link>
                                    <Link href="#">Graphics</Link>
                                    <Link href="#">Cargo</Link>
                                    <Link href="#">Maintenance</Link>
                                    <Link href="#">Consulting</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Blog Details End*/}

        </Layout>
        </>
    )
}