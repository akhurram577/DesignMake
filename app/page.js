import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Service from "@/components/sections/home1/Service"
import Video from "@/components/sections/home1/video"
import Brand from "@/components/sections/home1/Brand"
import Blog from "@/components/sections/home1/Blog"
import Testimonial from "@/components/sections/home1/Testimonial"
import Project from "@/components/sections/home1/Project"
import Features from "@/components/sections/home1/Features"
import Slidingtext from "@/components/sections/home1/Slidingtext"
import Design from "@/components/sections/home1/Design"
import Awards from "@/components/sections/home1/Awards"


export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                
                <Features />
                <About />
                <Slidingtext />
                <Service />
                <Project />
                <Design />
                <Testimonial />
                <Video/>
                <Awards />
                <Blog />
                <Brand />
            </Layout>

        </>
    )
}