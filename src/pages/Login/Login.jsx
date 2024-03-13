import "../Login/Login.css";
import Template from "../../components/Templates/PageTemplate";
import Header from "../../components/Organisms/Header/Header";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure, login } from "../../features/authSlice";
import User from "../User/User";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { error } = useSelector((state) => state.auth);

  const handleSubmit =  (e) => {
    e.preventDefault();
    login(
      {
        username,
        password
      }
    )
  };

  if (isAuthenticated) {
    return <User />;
  }

  return (
    <Template>
      <Header name="Home" link="/" />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="userName"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            {/* <a href="./user.html" className="sign-in-button">
              Sign In
            </a> */}
            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            <button className="sign-in-button">Login</button>
            {/* <!--  --> */}
          </form>
        </section>
      </main>
    </Template>
  );
}

export default Login;
