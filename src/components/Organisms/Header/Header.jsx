import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/argentBankLogo.png";
import NavLink from "../../Atoms/NavLink/NavLink";

function Header({ name, link }) {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {/* <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            {name}
          </a> */}
        <NavLink link={link} title={name} />
      </div>
    </nav>
  );
}

export default Header;
