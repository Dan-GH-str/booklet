import { useLocation, useNavigate } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./UI/navbar/Navbar.jsx";
import "./App.css"
import Footer from "./UI/footer/Footer.jsx";
import { useEffect } from "react";
import { AppContext } from "./context/index.js";

function App() {
  const { search, pathname } = useLocation()
  const route = useNavigate()
  
  useEffect(() => {
    if (search !== '?lang=ru' && search !== '?lang=en') route('/main?lang=ru')
  }, [search, route])

  const lang = search.substring(6, 8).toUpperCase()

  return (
    // <BrowserRouter>

    <AppContext.Provider value={{lang, pathname}}>
      <Navbar />
      <AppRouter />      
      <Footer />
    </AppContext.Provider>

    // </BrowserRouter>
  );
}

export default App;
