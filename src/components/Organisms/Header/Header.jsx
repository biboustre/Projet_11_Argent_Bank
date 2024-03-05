import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/argentBankLogo.png";
import NavLink from "../../Atoms/NavLink/NavLink";

function Header({ name, link }) {
  return (
    <nav class="main-nav">
      <a class="main-nav-logo" href="./index.html">
        <img class="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        {/* <a class="main-nav-item" href="./sign-in.html">
            <i class="fa fa-user-circle"></i>
            {name}
          </a> */}
        <NavLink link={link} title={name} />
      </div>
    </nav>
  );
}

export default Header;
