import "./NavbarMenu.scss"
import cl from "./Navbar.module.css"
import { useNavigate, Link } from "react-router-dom"
import { getParams } from "../../utils/getParams";
import { useEffect, useState, useContext, useCallback } from "react";
import { AppContext } from "../../context/index.js";

const myRoute = (url) => {
    window.location.href = url
}

const Navbar = () => {
    const [ width ]  = useState(window.innerWidth)
    const [ dict, setDict ] = useState({})
    const route = useNavigate()
    const { pathname, lang } = useContext(AppContext)
    const cachedMyRoute = useCallback(myRoute, [])

    
    import(`./dict/dict${lang}.js`)
        .then(obj => {
            setDict(obj.default)
        }
    )

    useEffect(() => {
        require("./Navbar.js")
    }, [])

    if (width > 768) {
        return (
            <header className={cl['header']}>
                <nav className={cl['navbar']}>
                    <ul className={cl['navbar__links']}>
                        <li className={cl['navbar__links-item']}>
                            <button className={`${cl['navbar__link']} ${cl['navbar__link-main']} ${cl['navbar__link_active']}`} onClick={() => route(`/main${getParams()}`)}>{dict["NAV-MAIN"]}</button>
                        </li>
                        <li className={cl['navbar__links-item']}>
                            <button className={cl['navbar__link']} onClick={() => route(`/restaurants${getParams()}`)}>{dict["NAV-RESTAURANTS"]}</button>
                        </li>
                        <li className={cl['navbar__links-item']}>
                            <button className={cl['navbar__link']} onClick={() => route(`/map${getParams()}`)}>{dict["NAV-MAP"]}</button>
                        </li>
                    </ul>

                    <ul className={cl["navbar__lang-switcher"]}>
                        <li className={cl["navbar__item"]}><Link className={cl["navbar__lang-link"]} onClick={() => cachedMyRoute(`${pathname}?lang=ru`)}>RU</Link></li>
                        <li className={cl["navbar__item"]}><span className={cl["navbar__lang-switcher-separator"]}></span></li>
                        <li className={cl["navbar__item"]}><Link className={cl["navbar__lang-link"]} onClick={() => cachedMyRoute(`${pathname}?lang=en`)}>EN</Link></li>
                    </ul>
                </nav>
            </header>
    )} else {
        return (
            <header className="header" role="banner">
    
                <nav id="navbar" className="navbar" role="navigation">
                
                <ul className="navbar__menu" id="menu" tabIndex="-1" aria-label="main navigation" hidden>
                    <li className="navbar__item">
                        <button className="navbar__link navbar__link-main navbar__link_active" data-url={`/main${getParams()}`}>{dict["NAV-MAIN"]}</button>
                    </li>
                    <li className="navbar__item">
                        <button className="navbar__link" data-url={`/restaurants${getParams()}`}>{dict["NAV-REASTAURANTS"]}</button>
                    </li>
                    <li className="navbar__item">
                        <button className="navbar__link" data-url={`/map${getParams()}`}>{dict["NAV-MAP"]}</button>
                    </li>
                </ul>

                <ul className="navbar__lang-switcher">
                    <li className="navbar__item"><Link className="navbar__lang-link" to={`${pathname}?lang=ru`}>RU</Link></li>
                    <li className="navbar__item"><span className="navbar__lang-switcher-separator"></span></li>
                    <li className="navbar__item"><Link className="navbar__lang-link" to={`${pathname}?lang=en`}>EN</Link></li>
                </ul>
                
                <a href="#navbar" className="navbar__toggle" role="button" aria-expanded="false" aria-controls="menu">
                    <svg className="menuicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                    <title>Toggle Menu</title>
                    <g>
                        <line className="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5"/>
                        <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                        <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                        <line className="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5"/>
                        <circle className="menuicon__circle" r="23" cx="25" cy="25" />
                    </g>
                    </svg>
                </a>
                
                <div className="splash"></div>
                
                </nav>
                
            </header>
        )
    }
}

export default Navbar