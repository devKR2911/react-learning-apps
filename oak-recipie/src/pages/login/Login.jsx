import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    navigate(-1);
    if (name && email) {
      localStorage.setItem(
        "USER",
        JSON.stringify({
          name,
          email,
        })
      );
    }
  };
  return (
    <div className="login-wrapper">
      <form onSubmit={submitForm} className="form-wrapper">
        <div className="form-element">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name=""
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-element">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name=""
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-element">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
