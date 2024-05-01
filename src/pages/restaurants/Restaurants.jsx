import cl from "./Restaurants.module.css"
import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../../context"
import navListHandler from "./Sidebar/sidebar"

const Restaurants = () => {
    const [ restaurants, setRestaurants ] = useState([])
    const [ currentRest, setCurrentRest ] = useState({})
    const { lang } = useContext(AppContext)
    const $sidebar = useRef(null)
    
    useEffect(() => {
        import(`./Restaurants/restaurants${lang}.js`)
            .then(obj => {
                setRestaurants(obj.default)
                // Назначение выбранного ресторана по умолчанию (самый первый в списке ресторанов)
                setCurrentRest(obj.default[0])
            })
    }, [lang])

    return (
        <main className={cl["main"]}>
            <input type="checkbox" id={cl["nav-toggleID"]} hidden></input>
            {(restaurants.length && (
                <>
                    <div className={cl["nav"]}>
                        <label htmlFor={cl["nav-toggleID"]} className={cl["nav-toggle"]}><i className="gg-chevron-right"></i></label>

                        <ul className={cl["nav-list"]} ref={$sidebar}>

                            {restaurants.map(rest => (
                                <li className={cl["nav-list__item"]} key={rest.id}>
                                    <p className={cl["nav-list__rest"]} onClick={(e) => {
                                            // Смена стилей элементов сайдбара 
                                            navListHandler(e, $sidebar)
                                            // Изменение состояния для вывода соответствующего контента
                                            setCurrentRest(rest)
                                    }}>
                                        {rest.name}
                                    </p>
                                </li>
                            ))}

                        </ul>
                    </div>

                {/* <div className={cl["map"]}>
                    <a href={`${currentRest.href}`} target="_blank"><img className={cl["map__img"]} src={`${currentRest.src}`} alt=""/></a>
                </div> */}

                <div className={cl["content"]}>
                    <div className={cl["mask-content"]}></div>
                    <h1 className={cl["content__header"]}>{currentRest.name}</h1>
                    <div className={cl["content__main"]}>
                        <div className={cl["map"]}>
                            <a href={`${currentRest.href}`} rel="noreferrer" target="_blank"><img className={cl["map__img"]} src={`${currentRest.src}`} alt=""/></a>
                        </div>
                        {currentRest.content.map( ({ id, title, description }) => (
                            <article className={cl["dishe"]} key={id}>
                                <h1 className={cl["dishe__title"]}>{title}</h1>
                                <p className={cl["dishe__description"]}>{description}</p>
                            </article>
                        ))
                        }

                        <hr className={cl["content__separator"]}/>
                    </div>
                </div>
            
            
                
            </>
            )) || ""}
        </main>
    )
}

export default Restaurants