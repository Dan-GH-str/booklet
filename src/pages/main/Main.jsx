import cl from "./Main.module.css"
import clNav from "../../UI/navbar/Navbar.module.css"
import { useRef, useContext, useState, useEffect } from "react"
import { AppContext } from "../../context/index.js"

function toMenu() {
    const $header = document.querySelector(`.${clNav.header}`)
    const viewportHeight = window.innerHeight
    const headerHeight = $header ? $header.getBoundingClientRect().height : 0
    window.scrollBy({
        top: viewportHeight - headerHeight,
        behavior: 'smooth'
    })
}

const Main = () => {
    const { lang } = useContext(AppContext)
    const [ dict, setDict ] = useState({})
    const dishesList = useRef(0)

    useEffect(() => {
        if (lang) import(`./dict/dict${lang}.js`)
            .then(obj => {
                setDict(obj.default)
            }
        )
    }, [lang])

    useEffect(() => {
        if (dishesList.current) import(`./dishes/dishes${lang}.js`)
            .then(obj => {
                obj.dishes.map((dishe, i) => dishesList.current.insertAdjacentHTML("beforeend", obj.disheTemplate(dishe, i, cl)))
            }
        )
    }, [dict, lang])
    

    return (
        <main className={cl["main"]}>
            {Object.keys(dict).length &&
            <>
                <section className={cl["main-top"]}>
                    <div className={cl["main-top-content"]}>
                        <h1 className={cl["main-top-content__title"]}>{dict["MAIN-TOP-TITLE"]}</h1>
                        <p className={cl["main-top-content__paragraph"]}>{dict["MAIN-TOP-PARAGRAPH"]}</p>
                        <button className={cl["main-top-content__menuBtn"]} onClick={toMenu}>{dict["MAIN-TOP-BTN"]}</button>
                    </div>
                </section>

                <section className={cl["main-bottom"]}>
                    <div className={cl["main-bottom-header"]}>
                        <h1 className={cl["main-bottom-header__title"]}>{dict["MAIN-BOTTOM-TITLE"]}</h1>
                        <p className={cl["main-bottom-header__paragraph"]}>{dict["MAIN-BOTTOM-PARAGRAPH"]}</p>
                    </div>

                    <div className={cl["main-bottom-dishes-list"]} ref={dishesList}></div>
                </section>
            </>}
        </main>
    )
}

export default Main