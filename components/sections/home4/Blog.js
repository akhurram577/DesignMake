import Link from "next/link"
export default function Blog() {
    return (
        <>
          
        {/*Start Blog Three*/}
        <section className="blog-three">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h2 className="section-title__title title-animation">News and Updates From <br/>The Blog Post</h2>
                </div>
                <div className="row">

                    {/*Start Single Blog Three*/}
                    <div className="col-xl-4">
                        <div className="single-blog-three">
                            <div className="img-box">
                                <img src="assets/images/blog/blog-3-1.jpg" alt="Image"/>
                                <div className="date-box">
                                    <h6>25 AUG, 2024</h6>
                                </div>
                            </div>
                            <div className="content-box">
                                <ul className="meta-box">
                                    <li>
                                        <Link href="blog-details"><i className="far fa-folder-open"></i> Business</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><i className="far fa-comments"></i> 02 Comments</Link>
                                    </li>
                                </ul>
                                <div className="title-box">
                                    <h3>
                                        <Link href="#">Top 10 Modern Building Design in Califronia, USA</Link>
                                    </h3>
                                </div>
                                <div className="post-box">
                                    <div className="img">
                                        <img src="assets/images/blog/post-3-1.jpg" alt="Image"/>
                                    </div>
                                    <div className="title">
                                        <h6>PostBy</h6>
                                        <h5>brendan Miles</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Blog Three*/}
                    {/*Start Single Blog Three*/}
                    <div className="col-xl-4">
                        <div className="single-blog-three">
                            <div className="img-box">
                                <img src="assets/images/blog/blog-3-2.jpg" alt="Image"/>
                                <div className="date-box">
                                    <h6>28 Jun, 2024</h6>
                                </div>
                            </div>
                            <div className="content-box">
                                <ul className="meta-box">
                                    <li>
                                        <Link href="blog-details"><i className="far fa-folder-open"></i> Business</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><i className="far fa-comments"></i> 05 Comments</Link>
                                    </li>
                                </ul>
                                <div className="title-box">
                                    <h3>
                                        <Link href="#">It is a long established fact that a reader will</Link>
                                    </h3>
                                </div>
                                <div className="post-box">
                                    <div className="img">
                                        <img src="assets/images/blog/post-3-2.jpg" alt="Image"/>
                                    </div>
                                    <div className="title">
                                        <h6>PostBy</h6>
                                        <h5>Emmett George</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Blog Three*/}
                    {/*Start Single Blog Three*/}
                    <div className="col-xl-4">
                        <div className="single-blog-three">
                            <div className="img-box">
                                <img src="assets/images/blog/blog-3-3.jpg" alt="Image"/>
                                <div className="date-box">
                                    <h6>20 Nov, 2024</h6>
                                </div>
                            </div>
                            <div className="content-box">
                                <ul className="meta-box">
                                    <li>
                                        <Link href="blog-details"><i className="far fa-folder-open"></i> Business</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><i className="far fa-comments"></i> 10 Comments</Link>
                                    </li>
                                </ul>
                                <div className="title-box">
                                    <h3>
                                        <Link href="#">Lorem Ipsum is simply dummy text of the printing</Link>
                                    </h3>
                                </div>
                                <div className="post-box">
                                    <div className="img">
                                        <img src="assets/images/blog/post-3-3.jpg" alt="Image"/>
                                    </div>
                                    <div className="title">
                                        <h6>PostBy</h6>
                                        <h5>Oliver Beckett</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Blog Three*/}

                </div>
            </div>
        </section>
        {/*End Blog Three*/}
        
        </>
    )
}
