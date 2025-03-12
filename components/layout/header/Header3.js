import Menu from "../Menu"
import Link from "next/link"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, handlePopup, handleMobileMenu, handleSidebar  }) {
    return (
        <>
        
        <header className="main-header-two">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <nav className="main-menu main-menu-two">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link href="/">
                                    <img src="" alt=""/>
                                </Link>
                            </div>
                        </div>
                        <div className="main-menu-two__right">
                            <div className="main-menu-two__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu />
                            </div>
                            <div className="main-menu-two__search-and-nav-sidebar-icon">
                                <Link href="#" className="main-menu-two__search search-toggler"><span
                                        className="icon-search-interface-symbol" onClick={handlePopup}></span></Link>
                                <div className="main-menu-two__nav-sidebar-icon">
                                    <Link className="navSidebar-button" href="#" onClick={handlePopup}>
                                        <span className="icon-text"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <div className={`stricky-header stricked-menu main-menu main-menu-two ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
            <nav className="main-menu main-menu-two">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link href="/">
                                    <img src="assets/images/resources/logo-1.png" alt=""/>
                                </Link>
                            </div>
                        </div>
                        <div className="main-menu-two__right">
                            <div className="main-menu-two__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu />
                            </div>
                            <div className="main-menu-two__search-and-nav-sidebar-icon">
                                <Link href="#" className="main-menu-two__search search-toggler" onClick={handlePopup}><span className="icon-search-interface-symbol"></span></Link>
                                <div className="main-menu-two__nav-sidebar-icon">
                                    <Link className="navSidebar-button" href="#" onClick={handleSidebar}>
                                        <span className="icon-text"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>    
            </div>{/* /.sticky-header__content */}
        </div>{/* /.stricky-header */}
        <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}
