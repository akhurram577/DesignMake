import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Details">
    
        {/*Blog Details Start*/}
        <section className="blog-details">
            <div className="section-shape-1"
                style={{ backgroundImage: ' url(assets/images/shapes/blog-details-sec-shape-1.png)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                                <img src="assets/images/blog/blog-details-img-1.jpg" alt=""/>
                            </div>
                            <div className="blog-details__content">
                                <div className="blog-details__meta-and-share">
                                    <ul className="blog-details__meta list-unstyled">
                                        <li>
                                            <Link href="#"><span className="icon-user"></span>By Admin</Link>
                                        </li>
                                        <li>
                                            <Link href="#"><span className="icon-conversation"></span>{6}Comments</Link>
                                        </li>
                                    </ul>
                                    <div className="blog-details__share">
                                        <Link href="#"><span className="fas fa-share-alt"></span></Link>
                                    </div>
                                </div>
                                <h3 className="blog-details__title-1">Transforming challenges into opportunities with IT.
                                </h3>
                                <p className="blog-details__text-1">Mauris non dignissim purus, ac commodo diam. Donec sit
                                    amet lacinia nulla. Aliquam quis purus in justo
                                    pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi.
                                    Quisque vitae
                                    odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae</p>
                                <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit
                                    amet lacinia nulla. Aliquam quis purus in justo
                                    pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi.
                                    Quisque vitae odio nec lacus
                                    interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
                                    pellentesque
                                    vitae et nunc. Sed vitae leo vitae nisl pellentesque semper euismod justo </p>
                            </div>
                            <div className="blog-details__tag-box">
                                <p className="blog-details__tag-title">Tags :</p>
                                <div className="blog-details__tag-list">
                                    <Link href="#">Graphics</Link>
                                    <Link href="#">Cargo</Link>
                                    <Link href="#">Blog</Link>
                                </div>
                            </div>
                            <div className="blog-details__client-info">
                                <div className="blog-details__client-img">
                                    <img src="assets/images/blog/blog-details-client-img.jpg" alt=""/>
                                </div>
                                <div className="blog-details__client-content">
                                    <h3>Kevin Martin</h3>
                                    <p>Lacinia amet nisi ullamcorper eu suspendisse. Mattis nisl dignissim
                                        accumsan consectetur suspendisse amet.</p>
                                    <div className="blog-details__client-social">
                                        <div className="blog-details__client-social-title">
                                            <h4>Share :</h4>
                                        </div>
                                        <div className="blog-details__client-social-list">
                                            <Link href="#"><span className="fab fa-facebook"></span></Link>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                            <Link href="#"><span className="fab fa-twitter"></span></Link>
                                            <Link href="#"><span className="fab fa-pinterest-p"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-details__pagenation-box">
                                <ul className="list-unstyled blog-details__pagenation">
                                    <li>
                                        <div className="icon">
                                            <Link href="#"><span className="icon-left"></span></Link>
                                        </div>
                                        <p>Cargo flow through better
                                            <br/> supply in UK</p>
                                    </li>
                                    <li>
                                        <p>Why is supply chain visibility
                                            <br/> so important?</p>
                                        <div className="icon">
                                            <Link href="#"><span className="icon-right"></span></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="comment-one">
                                <h3 className="comment-one__title">Recent Comments</h3>
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <img src="assets/images/blog/comment-1-1.jpg" alt=""/>
                                    </div>
                                    <div className="comment-one__content">
                                        <h3>Richard Smith</h3>
                                        <span>September 19, 2025</span>
                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusant laudantium,
                                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt explicabo. Nemo </p>
                                        <div className="comment-one__btn-box">
                                            <Link href="blog-details" className="comment-one__btn">reply</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-one__single comment-one__single-2">
                                    <div className="comment-one__image">
                                        <img src="assets/images/blog/comment-1-2.jpg" alt=""/>
                                    </div>
                                    <div className="comment-one__content">
                                        <h3>Laura Johnson</h3>
                                        <span>September 19, 2025</span>
                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusant laudantium,
                                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt explicabo. Nemo </p>
                                        <div className="comment-one__btn-box">
                                            <Link href="blog-details" className="comment-one__btn">reply</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-form">
                                <h3 className="comment-form__title">Leave A Comment</h3>
                                <form className="comment-one__form contact-form-validated"
                                    >
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Name*" name="name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="email" placeholder="E-mail *" name="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box text-message-box">
                                                <textarea name="message" placeholder="Your Comments*"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="checked-box1">
                                                <input type="checkbox" name="skipper1" id="skipper" />
                                                <label >
                                                    <span></span>Save my name, email & website in this browser for
                                                    the next time I comment.
                                                </label>
                                            </div>
                                            <div className="button-box">
                                                <button className="thm-btn">
                                                    Send Massage
                                                    <span className="icon-up-right-arrow"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
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