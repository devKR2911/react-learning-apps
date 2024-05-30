import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setUser({
        name,
        password,
      })
    );
    setName("");
    setPassword("");
    navigate("/");
  };
  return (
    <div className={styles.loginWrapper}>
      <form onSubmit={handleSubmit} className={styles.loginContainer}>
        <div>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
