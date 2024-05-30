import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <ul className={styles.navLinkWrapper}>
      <li>
        <NavLink to="/">Movies</NavLink>
      </li>
      {user?.name && <li>Hi, {user?.name}</li>}

      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
