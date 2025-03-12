'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".filter-layout", {
                itemSelector: ".filter-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".filter-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")



    return (
        <>

            <div className="projects-one__top">
                <div className="container">
                    <div className="projects-one__top-inner">
                        <div className="section-title text-left sec-title-animation animation-style2">
                            <h2 className="section-title__title title-animation">We Elevate Your Brand's <br/>
                                Daring Dedication.</h2>
                        </div>
                        <div className="projects-one__filter-box">
                            <ul className="projects-one__filter style1 post-filter list-unstyled clearfix">
                                <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}><span className="filter-text">All</span></li>
                                <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}><span className="filter-text">Design</span></li>
                                <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}><span className="filter-text">Anime</span></li>
                                <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}><span className="filter-text">Nature</span></li>
                                <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}><span className="filter-text">Animal</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projects-one__bottom">
                <div className="container">
                    <div className="row filter-layout">
                        <div className="col-xl-3 col-lg-6 col-md-6 all filter-item des nat anim cat-1">
                            <div className="projects-one__single">
                                <div className="projects-one__img-box">
                                    <div className="projects-one__img">
                                        <img src="assets/images/project/projects-1-1.jpg" alt=""/>
                                    </div>
                                    <div className="projects-one__content">
                                        <div className="projects-one__content-shape-1"
                                            style={{ backgroundImage: ' url(assets/images/shapes/projects-one-content-shape-1.png)' }} >
                                        </div>
                                        <h4 className="projects-one__title"><Link href="project-details">Neoclassical
                                                Sofa</Link></h4>
                                        <p className="projects-one__sub-title">Interior Design</p>
                                    </div>
                                    <div className="projects-one__arrow">
                                        <Link href="assets/images/project/projects-1-1.jpg" className="img-popup"><span
                                                className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 all filter-item anim ani cat-2">
                            <div className="projects-one__single">
                                <div className="projects-one__img-box">
                                    <div className="projects-one__img">
                                        <img src="assets/images/project/projects-1-2.jpg" alt=""/>
                                    </div>
                                    <div className="projects-one__content">
                                        <div className="projects-one__content-shape-1"
                                            style={{ backgroundImage: ' url(assets/images/shapes/projects-one-content-shape-1.png)' }} >
                                        </div>
                                        <h4 className="projects-one__title"><Link href="project-details">Neoclassical
                                                Sofa</Link></h4>
                                        <p className="projects-one__sub-title">Interior Design</p>
                                    </div>
                                    <div className="projects-one__arrow">
                                        <Link href="assets/images/project/projects-1-2.jpg" className="img-popup"><span
                                                className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 all filter-item des ani cat-3">
                            <div className="projects-one__single">
                                <div className="projects-one__img-box">
                                    <div className="projects-one__img">
                                        <img src="assets/images/project/projects-1-3.jpg" alt=""/>
                                    </div>
                                    <div className="projects-one__content">
                                        <div className="projects-one__content-shape-1"
                                            style={{ backgroundImage: ' url(assets/images/shapes/projects-one-content-shape-1.png)' }} >
                                        </div>
                                        <h4 className="projects-one__title"><Link href="project-details">Neoclassical
                                                Sofa</Link></h4>
                                        <p className="projects-one__sub-title">Interior Design</p>
                                    </div>
                                    <div className="projects-one__arrow">
                                        <Link href="assets/images/project/projects-1-3.jpg" className="img-popup"><span
                                                className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 all filter-item des ani nat cat-4">
                            <div className="projects-one__single">
                                <div className="projects-one__img-box">
                                    <div className="projects-one__img">
                                        <img src="assets/images/project/projects-1-4.jpg" alt=""/>
                                    </div>
                                    <div className="projects-one__content">
                                        <div className="projects-one__content-shape-1"
                                            style={{ backgroundImage: ' url(assets/images/shapes/projects-one-content-shape-1.png)' }} >
                                        </div>
                                        <h4 className="projects-one__title"><Link href="project-details">Neoclassical
                                                Sofa</Link></h4>
                                        <p className="projects-one__sub-title">Interior Design</p>
                                    </div>
                                    <div className="projects-one__arrow">
                                        <Link href="assets/images/project/projects-1-4.jpg" className="img-popup"><span
                                                className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
