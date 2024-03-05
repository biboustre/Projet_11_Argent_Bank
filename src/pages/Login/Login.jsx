import React, { useEffect, useState } from "react";
import "../Login/Login.css";
import Template from "../../components/Templates/PageTemplate";
import Header from "../../components/Organisms/Header/Header";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../../Store/store";
// import { loginUser } from "../../Store/UserSlice";

function Login() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const dispatch = useDispatch();
  // const handleLoginEvent = (e) => {
  //   e.preventDefault();
  //   let userCredencials = {
  //     username, password
  //   }
  //   dispatch(loginUser(userCredencials));
  // }

  const dispatch = useDispatch();

  useEffect(() => {
    const signupApi = "http://localhost:3001/api/v1/user/signup";
    const users = [
      {
        firstName: "Tony",
        lastName: "Stark",
        email: "tony@stark.com",
        password: "password123",
        userName: "Iron",
      },
      {
        firstName: "Bobe",
        lastName: "Leponge",
        email: "bobe@leponge.com",
        password: "password456",
        userName: "Captain",
      },
    ];

    users.forEach((user) => {
      axios
        .post(signupApi, user)
        .then((response) => {
          // Une fois l'inscription réussie, enregistrer les informations de connexion dans le store Redux
          dispatch(login(response.data)); // Supposons que la réponse contient les informations de l'utilisateur
        })
        .catch((error) => console.log(error));
    });
  }, [dispatch]);

  const [formData, setFormData] = useState({
    password: "",
    userName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const signupApi = "http://localhost:3001/api/v1/user/signup";

    axios
      .post(signupApi, formData)
      .then((response) => {
        console.log("Inscription réussie:", response.data);
        // Vous pouvez rediriger l'utilisateur vers une autre page ou afficher un message de succès ici
      })
      .catch((error) => {
        console.error("Erreur lors de l'inscription:", error);
        // Vous pouvez afficher un message d'erreur à l'utilisateur ici
      });
  };

  return (
    <Template>
      <Header name="Home" link="/" />
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                name="userName"
                placeholder="Nom d'utilisateur"
                value={formData.userName}
                onChange={handleChange}
                required /*value={username}  onChange={(e)=>setUsername(e.target.value)}*/
              />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Mot de passe"
                value={formData.password}
                onChange={handleChange}
                required /*value={password} onChange={(e)=>setPassword(e.target.value)}*/
              />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            {/* <a href="./user.html" class="sign-in-button">
              Sign In
            </a> */}
            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            <button type="submit" class="sign-in-button">
              Sign In
            </button>
            {/* <!--  --> */}
          </form>
        </section>
      </main>
    </Template>
  );
}

export default Login;
