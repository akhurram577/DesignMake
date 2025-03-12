'use client'
import { useState } from "react"
// import PortfolioFilter from ""
import dynamic from 'next/dynamic'
const PortfolioFilter = dynamic(() => import('@/components/elements/PortfolioFilter'), {
    ssr: false,
})
export default function Project() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
    <> 
        {/* Projects One Start */}
        <section className="projects-one">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <PortfolioFilter/>
        </section>
        {/* Projects One End */}
        
        </>
    )
}
