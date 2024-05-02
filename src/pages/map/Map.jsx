import svgCl from "./curveSVG/curveSVG.module.scss"
import cl from "./Map.module.css"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context"
import createSVGBackground from "./curveSVG/curveSVG"

const Map = () => {
    const { lang } = useContext(AppContext)
    const [ dict, setDict ] = useState({})

    useEffect(() => {
        createSVGBackground()
    }, [])

    useEffect(() => {
        if (lang) import(`./dict/dict${lang}.js`)
            .then(obj => {
                setDict(obj.default)
            }
        )
    }, [lang])

    return (
        <main className={cl["main"]}>

            <div className={svgCl["svg-container"]}>
                <div className={svgCl["header"]}>
                    <h1 className={svgCl["header__title"]}>{dict["MAP-HEADER-TITLE"]}</h1>
                    <p className={svgCl["header__text"]}>{dict["MAP-HEADER-TEXT"]}</p>
                </div>

                <svg viewBox="0 0 800 400" className={svgCl["svg"]}>
                    <path id={svgCl["curve"]} fill="#50c6d8" d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z">
                    </path>
                </svg>
            </div>

            <div className={cl["container"]}>

                {/* <h1 className={cl["header"]}>{dict["MAP-HEADER"]}</h1> */}
                <div className={cl["map"]}>
                    <iframe 
                        className={cl["map__iframe"]}
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A13c8398cec4f817b6d084e6f0dbed79f5dfa1d607c9ae60699d159f7db4f4c6f&amp;source=constructor" 
                        frameBorder="0"
                        title="Map of Restaurants">
                    </iframe>
                </div>
                
            </div>

        </main>
    )
}

export default Map