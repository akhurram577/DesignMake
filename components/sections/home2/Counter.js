'use client'
import CounterUp from "@/components/elements/CounterUp"
export default function Counter() {
    
    return (
        <>
       {/*Counter One Start */}
       <section className="counter-one">
            <div className="counter-one__shape">
                <img className="float-bob-x" src="assets/images/shapes/counter-one-shape1.png" alt="Shape" />
            </div>
            <div className="counter-one__shape-1"
                style={{ backgroundImage: ' url(assets/images/shapes/counter-one-shape-1.png)' }} ></div>
            <div className="container">
                <div className="counter-one__inner">
                    <div className="counter-one__title-box" style="display: none;">
                        <div className="section-title text-left sec-title-animation animation-style1">
                            <h2 className="section-title__title title-animation">Professional Experience</h2>
                            <div className="counter-one__title-border"></div>
                        </div>
                    </div>
                    <ul className="list-unstyled counter-one__list">
                        <li className="wow fadeInLeft" data-wow-delay="100ms">
                            <div className="counter-one__single">
                                <div className="counter-one__counter-box">
                                    <CounterUp end={13} />
                                    <span className="counter-one__counter-letter">k</span>
                                    <span className="counter-one__counter-plus">+</span>
                                </div>
                                <p className="counter-one__counter-text">Project Complete</p>
                            </div>
                        </li>
                        <li className="wow fadeInLeft" data-wow-delay="300ms">
                            <div className="counter-one__single">
                                <div className="counter-one__counter-box">
                                    <CounterUp end={179} />
                                    <span className="counter-one__counter-letter">k</span>
                                    <span className="counter-one__counter-plus">+</span>
                                </div>
                                <p className="counter-one__counter-text">Happy Clients</p>
                            </div>
                        </li>
                        <li className="wow fadeInLeft" data-wow-delay="600ms">
                            <div className="counter-one__single">
                                <div className="counter-one__counter-box">
                                    <CounterUp end={33} />
                                    <span className="counter-one__counter-letter">k</span>
                                    <span className="counter-one__counter-plus">+</span>
                                </div>
                                <p className="counter-one__counter-text">Clients Project</p>
                            </div>
                        </li>
                        <li className="wow fadeInLeft" data-wow-delay="900ms">
                            <div className="counter-one__single">
                                <div className="counter-one__counter-box">
                                    <CounterUp end={55} />
                                    <span className="counter-one__counter-letter">k</span>
                                    <span className="counter-one__counter-plus">+</span>
                                </div>
                                <p className="counter-one__counter-text">Success Rating</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/*Counter One End */}
      
        
        </>
    )
}
