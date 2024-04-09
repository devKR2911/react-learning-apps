import { Link, NavLink } from "react-router-dom";
import react from "../img/react.png";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <Link to="/">
        <img className="logo" src={react} alt="" />
      </Link>
      <ul className="nav-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/personal">Personal</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
