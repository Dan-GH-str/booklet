import "./Footer.css"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/index.js"

const Footer = () => {
    const { lang } = useContext(AppContext)
    const [ dict, setDict ] = useState({})

    useEffect(() => {
        import(`./dict/dict${lang}.js`)
            .then(obj => setDict(obj.default))   
        }
    )

    return (
        <footer className="footer">
            <p className="footer__copyright">{dict["COPYRIGHT"]}</p>
        </footer>
    )
}

export default Footer