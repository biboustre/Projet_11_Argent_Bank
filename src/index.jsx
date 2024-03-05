import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";
import { Provider } from "react-redux";
import store from "./Store/store";
import Template from "./components/Templates/PageTemplate";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route  path="*" element={<PageError />}/>
        </Routes>
      </BrowserRouter>
      <Template />
    </Provider>
  </React.StrictMode>
);
