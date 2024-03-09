import React, { useState } from "react";
import { useSelector } from "react-redux"; /*Permet de select une partie du state*/
import login from "../Login/Login.css";
import Template from "../../components/Templates/PageTemplate";
import Header from "../../components/Organisms/Header/Header";
import { setUsername, setPassword } from "../../features/login";
import { useDispatch } from "react-redux";


function Login() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });
  
      if (response.ok) {
        const userData = await response.json();
        dispatch(login(userData));
        history.push('/user');
      } else {
        console.error('Erreur de connexion');
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
    }
    dispatch(setUsername(username));
    dispatch(setPassword(password));
  };

  return (
    <Template>
      <Header name="Home" link="/" />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form >
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
            <button type="submit" className="sign-in-button">
              Login
            </button>
            {/* <!--  --> */}
          </form>
        </section>
      </main>
    </Template>
  );
}

export default Login;

