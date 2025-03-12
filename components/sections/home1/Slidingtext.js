import Link from "next/link"
export default function Slidingtext() {
    return (
        <>
        {/* Sliding Text One Start */}
        <section className="sliding-text-one">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="sliding-text-one__wrap">
                <ul className="sliding-text__list list-unstyled marquee_mode">
                    <li>
                        <h2 data-hover="Interior Design" className="sliding-text__title">Interior Design
                            <img src="assets/images/icon/star-icon.png" alt=""/></h2>
                    </li>
                    <li>
                        <h2 data-hover="luxury homes" className="sliding-text__title">luxury homes
                            <img src="assets/images/icon/star-icon.png" alt=""/></h2>
                    </li>
                    <li>
                        <h2 data-hover="construction simulator" className="sliding-text__title">construction simulator
                            <img src="assets/images/icon/star-icon.png" alt=""/></h2>
                    </li>
                    <li>
                        <h2 data-hover="construction simulator" className="sliding-text__title">construction simulator
                            <img src="assets/images/icon/star-icon.png" alt=""/></h2>
                    </li>
                </ul>
            </div>
        </section>
        {/* Sliding Text One End */}
        
        
        </>
    )
}
