
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home4/Banner"
import Welcome from "@/components/sections/home4/Welcome"
import Services from "@/components/sections/home4/Services"
import Blog from "@/components/sections/home4/Blog"
import Slogan from "@/components/sections/home4/Slogan"
import Testimonial from "@/components/sections/home4/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={2}>
                <Banner />
                <Welcome />
                <Slogan />
                <Services />
                <Testimonial />
                <Blog />
            </Layout>
        </>
    )
}