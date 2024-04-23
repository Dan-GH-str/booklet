import Main from "../pages/main/Main.jsx"
import Restaurants from "../pages/restaurants/Restaurants.jsx"
import Map from "../pages/map/Map.jsx"

export const routes = [
    {path: '/main', component: Main},
    {path: '/restaurants', component: Restaurants},
    {path: '/map', component: Map}
]