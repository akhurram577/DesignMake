import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>

                <ul className="main-menu__list">
                    <li className="dropdown">
                        <Link href="/">Home </Link>
                        <ul>
                            <li><Link href="/">Home One</Link></li>
                            <li><Link href="index2">Home Two</Link></li>
                            <li><Link href="index3">Home Three</Link></li>
                            <li><Link href="index4">Home Four</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="about">About Us</Link>
                    </li>
                    <li className="dropdown">
                        <Link href="#">Pages</Link>
                        <ul>
                            <li><Link href="team">Team</Link></li>
                            <li><Link href="team-details">Team Details</Link></li>
                            <li><Link href="testimonials">Testimonials</Link></li>
                            <li><Link href="faq">Faq</Link></li>
                            <li><Link href="404">404 Error</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link href="#">Services</Link>
                        <ul>
                            <li><Link href="services">Services</Link></li>
                            <li><Link href="evolve-space-designs">Evolve Space Designs</Link></li>
                            <li><Link href="eden-home-styling">Eden Home Styling</Link>
                            </li>
                            <li><Link href="harmony-interiors">Harmony Interiors</Link>
                            </li>
                            <li><Link href="interior-design">Interior Design</Link></li>
                            <li><Link href="urban-design">Urban Design</Link>
                            </li>
                            <li><Link href="landscape-design">Landscape Design</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link href="#">projects</Link>
                        <ul>
                            <li><Link href="projects">Projects</Link></li>
                            <li><Link href="project-details">Project Details</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link href="#">Blog</Link>
                        <ul>
                            <li><Link href="blog">Blog</Link></li>
                            <li><Link href="blog-2">Blog Style2</Link></li>
                            <li><Link href="blog-details">Blog Details</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="contact">Contact</Link>
                    </li>
                </ul>
        </>
    )
}
