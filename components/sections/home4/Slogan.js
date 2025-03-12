'use client'
import Link from "next/link"
export default function Slogan() {
    return (
        <>
        
        {/*Start slogan-one*/}
        <section className="slogan-one">
            <div className="slogan-one__bg jarallax"
                style={{ backgroundImage: ' url(assets/images/backgrounds/slogan-1__bg.jpg)' }} >
            </div>
            <div className="container">
                <div className="slogan-one__content text-center">
                    <div className="title">
                        <h3>Being the largest in-home decorationg service in newyork city</h3>
                        <h4>15% Discount on your First Work Session!..</h4>
                        <p>Our expert instructors are here to answer you every step of the question!.</p>
                    </div>
                    <div className="btn-box">
                        <Link href="contact" className="thm-btn">
                            schedule Now
                            <span className="icon-up-right-arrow"></span> </Link>
                    </div>
                </div>
            </div>
        </section>
        {/*End slogan-one*/}
        </>
    )
}
