import Link from "next/link"

export default function SearchPopup({ isPopup, handlePopup }) {
    return (
        <>
            
            <div className={`search-popup ${isPopup ? "active" : ""}`}>
                <div className="search-popup__overlay search-toggler" onClick={handlePopup}></div>
                <div className="search-popup__content">
                    <form action="#">
                        <label className="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="thm-btn">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}
