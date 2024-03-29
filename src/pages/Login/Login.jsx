import "../Login/Login.css";
import Template from "../../components/Templates/PageTemplate";
import Header from "../../components/Organisms/Header/Header";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, selectError } from "../../store/authSlice";
import loginAsync from "../../store/features/loginAsync";
import { Navigate } from "react-router-dom";
import User from "../User/User";

function Login() {
  const dispatch = useDispatch();
  const isAuthentificated = useSelector(selectAuth);
  const errorMessage = useSelector(selectError);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginAsync(username, password));
  };

  if (isAuthentificated) {
    return <Navigate to="/user" />;
  }
  return (
    <Template>
      <main className="main">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="email"
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
            <button className="sign-in-button">Login</button>

            {errorMessage && (
              <div className="error-message">{ errorMessage }</div>
            )}
          </form>
        </section>
      </main>
    </Template>
  );
}

export default Login;
