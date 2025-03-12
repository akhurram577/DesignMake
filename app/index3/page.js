
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Services from "@/components/sections/home3/Services"
import Blog from "@/components/sections/home3/Blog"
import Work from "@/components/sections/home3/Work"
import Slidingtext from "@/components/sections/home3/Slidingtext"
import Project from "@/components/sections/home3/Project"
import Testimonial from "@/components/sections/home3/Testimonial"
import Team from "@/components/sections/home3/Team"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <About />
                <Work />
                <Services />
                <Slidingtext />
                <Project />
                <Testimonial />
                <Team />
                <Blog />
            </Layout>
        </>
    )
}