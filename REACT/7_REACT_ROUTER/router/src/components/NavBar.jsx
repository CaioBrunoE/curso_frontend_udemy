import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

import './NavBar.css'

const NavBar = () => {
  return (
    <div>
       { /*<Link to="/">Home</Link>
        <Link to="contact">Conatac</Link>*/}
        <NavLink to="/" className={({isActive})=>(isActive? "active":"")}>Home</NavLink>
        <NavLink to="/contact"className={({isActive})=>(isActive? "active":"")}>Contato</NavLink>

    </div>
  )
}

export default NavBar