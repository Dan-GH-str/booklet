import cl from "./Main.module.css"
import clNav from "../../UI/navbar/Navbar.module.css"
import { useEffect, useRef, useContext } from "react"
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

    const dishesList = useRef(0)

    import(`./dishes/dishes${lang}.js`)
        .then(obj => {
            obj.dishes.map((dishe, i) => dishesList.current.insertAdjacentHTML("beforeend", obj.disheTemplate(dishe, i, cl)))
    })

    useEffect(() => {
        require("./Main.js")
    }, [])
    

    return (
        <main className={cl["main"]}>
            <section className={cl["main-top"]}>
                <div className={cl["main-top-content"]}>
                    <h1 className={cl["main-top-content__title"]}>Гастрономический туризм</h1>
                    <p className={cl["main-top-content__paragraph"]}>Традиционные новгородские блюда</p>
                    <button className={cl["main-top-content__menuBtn"]} onClick={toMenu}>МЕНЮ</button>
                </div>
            </section>

            <section className={cl["main-bottom"]}>
                <div className={cl["main-bottom-header"]}>
                    <h1 className={cl["main-bottom-header__title"]}>Приятного аппетита и ярких впечатлений!</h1>
                    <p className={cl["main-bottom-header__paragraph"]}>Гастрономический аспект - важная часть любого путешествия. Предлагаем вам ознакомиться с популярными деликатесами традиционной новгородской кухни и узнать, где их можно попробовать!</p>
                </div>

                <div className={cl["main-bottom-dishes-list"]} ref={dishesList}>
                    {/* <article className="dishe-block">
                        <img src={img} alt="" className="dishe-block__img" />
                        <div className="dishe-block__main">
                            <div className="dishe-block__title"></div>
                            <div className="dishe-block__description"></div>
                            <div className="dishe-block__address">
                                <img src="" alt="" className="address-placemark" />
                                <p className="dishe-block__address-p"></p>
                            </div>
                        </div>
                    </article> */}
                </div>
            </section>
        </main>
    )
}

export default Main