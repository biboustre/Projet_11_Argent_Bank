import "../Login/Login.css";
import Template from "../../components/Templates/PageTemplate";
import Header from "../../components/Organisms/Header/Header";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure } from "../../features/authSlice";
import User from "../User/User";

function Login() {
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   const myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   const raw = JSON.stringify({
  //     username,
  //     password
  //   })

  //   const requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //    redirect: "follow"
  //   };

  //   fetch("http://localhost:3001/api/v1/user/login", requestOptions)
  //     .then((response) => {
  //       if (response.status == 200) {
  //         return response.json().then(userData => {
  //           dispatch(setUsername(userData.username));
  //           dispatch(setPassword(userData.password));
  //           history.push('/user');
  //       });
  //     }else{
  //       throw new Error('Erreur de connexion');
  //     }
  //   })
  //       .catch((error) => console.error(error));
  // }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data);

      if (response === 200) {
        localStorage.setItem("token", data.token);
        dispatch(loginSuccess({ username: data.username, token: data.token }));
      } else {
        dispatch(loginFailure(data.error));
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
            <button className="sign-in-button">
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
