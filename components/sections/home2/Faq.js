'use client'
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
        {/*FAQ One Start */}
        <section className="faq-one">
            <div className="faq-one__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/faq-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5"></div>
                    <div className="col-xl-7 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="faq-one__right">
                            <div className="section-title-two text-left">
                                <div className="section-title-two__tagline-box">
                                    <span className="section-title-two__tagline">FAQ</span>
                                </div>
                                <div className="section-title-two__title-box sec-title-animation animation-style2">
                                    <h2 className="section-title-two__title title-animation">Frequently Asking Any Question
                                    </h2>
                                </div>
                            </div>
                            <p className="faq-one__text">He rejects pleasures to secure other greater pleasures, or else he
                                endures pains to avoid worse pains to the selection point. But in certain circumstances
                                and owing </p>
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>Why is my air conditioner not cooling properly ?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>It is a long established fact that a reader will be distr acted bioiiy
                                                the rea dablea content of a page when looking at its layout Thoiie point
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>How often should I service my air conditioner ?</h4>
                                    </div>
                                    <div className="accrodion-content" onClick={() => handleToggle(2)}>
                                        <div className="inner">
                                            <p>It is a long established fact that a reader will be distr acted bioiiy
                                                the rea dablea content of a page when looking at its layout Thoiie point
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>Why is my AC making strange noises ?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>It is a long established fact that a reader will be distr acted bioiiy
                                                the rea dablea content of a page when looking at its layout Thoiie point
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*FAQ One End */}
            
        </>
    )
}
