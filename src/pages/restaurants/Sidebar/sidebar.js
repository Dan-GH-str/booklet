import cl from "../Restaurants.module.css"

function navListHandler(e, $sidebar) {
    for (let item of $sidebar.current.childNodes) {
        if (item.firstChild.classList.contains(cl["nav-list__rest_focused"])) {
            item.firstChild.classList.remove(cl["nav-list__rest_focused"])
            break
        }
    }
    e.target.classList.add(cl["nav-list__rest_focused"])
}

export default navListHandler