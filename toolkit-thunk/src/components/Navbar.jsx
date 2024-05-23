import React from "react";
import styles from "../styles/Navbar.module.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/login");
  };
  return (
    <div className={styles.navbarWrapper}>
      <h1>My News App</h1>
      <div className="">
        {user?.email && (
          <>
            {user?.email}
            <button onClick={handleLogout}>LogOut</button>
          </>
        )}
        {!user?.email && (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
