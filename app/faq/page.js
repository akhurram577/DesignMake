'use client'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="faq">
        {/*Faq Page Start*/}
        <section className="faq-page">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-page__left">
                            <div className="project-details__faq-box">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>What is the latest technology trend in the ?</h4>
                                            <div className="project-details__faq-box-count"></div>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>The time it takes to repair a roof depends on the extent of the
                                                    damage. For minor repairs, it might take an hour or two. For
                                                    significant repairs, A or team might be at your home for half a
                                                    day.</p>
                                            </div>{/* /.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>How to Create my Project in Company?</h4>
                                            <div className="project-details__faq-box-count"></div>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>The time it takes to repair a roof depends on the extent of the
                                                    damage. For minor repairs, it might take an hour or two. For
                                                    significant repairs, A or team might be at your home for half a
                                                    day.</p>
                                            </div>{/* /.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>How can IT services benefit my business?</h4>
                                            <div className="project-details__faq-box-count"></div>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>The time it takes to repair a roof depends on the extent of the
                                                    damage. For minor repairs, it might take an hour or two. For
                                                    significant repairs, A or team might be at your home for half a
                                                    day.</p>
                                            </div>{/* /.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>What warranties do I have for installation?</h4>
                                            <div className="project-details__faq-box-count"></div>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>The time it takes to repair a roof depends on the extent of the
                                                    damage. For minor repairs, it might take an hour or two. For
                                                    significant repairs, A or team might be at your home for half a
                                                    day.</p>
                                            </div>{/* /.inner */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-page__right">
                            <div className="project-details__faq-box">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-2">
                                    <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                        <div className="accrodion-title">
                                            <h4>What is the latest technology trend in the ?</h4>
                                            <div className="project-details__faq-box-count"></div>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>The time it takes to repair a roof depends on the extent of the
                                                    damage. For minor repairs, it might take an hour or two. For
                                                    significant repairs, A or team might be at your home for half a
                                                    day.</p>
                                            </div>{/* /.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 6 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(6)}>
                                        <div className="accrodion-title">
                                            <h4>How to Create my Project in Company?</h4>
                                            <div className="project-details__faq-box-count"></div>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>The time it takes to repair a roof depends on the extent of the
                                                    damage. For minor repairs, it might take an hour or two. For
                                                    significant repairs, A or team might be at your home for half a
                                                    day.</p>
                                            </div>{/* /.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 7 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(7)}>
                                        <div className="accrodion-title">
                                            <h4>How can IT services benefit my business?</h4>
                                            <div className="project-details__faq-box-count"></div>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>The time it takes to repair a roof depends on the extent of the
                                                    damage. For minor repairs, it might take an hour or two. For
                                                    significant repairs, A or team might be at your home for half a
                                                    day.</p>
                                            </div>{/* /.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 8 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(8)}>
                                        <div className="accrodion-title">
                                            <h4>What warranties do I have for installation?</h4>
                                            <div className="project-details__faq-box-count"></div>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>The time it takes to repair a roof depends on the extent of the
                                                    damage. For minor repairs, it might take an hour or two. For
                                                    significant repairs, A or team might be at your home for half a
                                                    day.</p>
                                            </div>{/* /.inner */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Faq Page End*/}

        </Layout>
        </>
    )
}