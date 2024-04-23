import { Route, Routes, Navigate } from "react-router-dom";
import { routes } from "../router/router";

const AppRouter = ({lang}) => {
    return (
        <Routes>
            {routes.map((route, i) => 
                <Route
                    key={i}
                    path={route.path}
                    element={<route.component/>}
                />
            )}
            <Route 
                path="*"
                element={<Navigate replace to="/main?lang=ru"/>}
            />
        </Routes>
    )
}

export default AppRouter