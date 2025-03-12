import Link from "next/link"
export default function Slidingtext() {
    return (
        <>
        {/* Sliding Text Two Start */}
        <section className="sliding-text-two">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="sliding-text-two__wrap">
                <ul className="sliding-text-two__list list-unstyled marquee_mode">
                    <li>
                        <h2 data-hover="Interior Design" className="sliding-text-two__title">Interior Design</h2>
                    </li>
                    <li>
                        <h2 data-hover="luxury homes" className="sliding-text-two__title">luxury homes</h2>
                    </li>
                    <li>
                        <h2 data-hover="construction simulator" className="sliding-text-two__title">construction simulator
                        </h2>
                    </li>
                </ul>
            </div>
        </section>
        {/* Sliding Text Two End */}
        
        
        </>
    )
}
