import React from "react";
import { Link } from "react-router-dom";

function NavLink({link, title}) {
    
    return (
        <Link to={link} class="main-nav-item">
            <i class="fa fa-user-circle"></i>
            <p>{title}</p> 
        </Link>  
    )
}

export default NavLink;