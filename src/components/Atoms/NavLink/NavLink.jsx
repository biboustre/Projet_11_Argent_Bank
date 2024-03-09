import React from "react";
import { Link } from "react-router-dom";

function NavLink({ link, title }) {
  return (
    <Link to={link} className="main-nav-item">
      <i className="fa fa-user-circle"></i>
      <p>{title}</p>
    </Link>
  );
}

export default NavLink;
