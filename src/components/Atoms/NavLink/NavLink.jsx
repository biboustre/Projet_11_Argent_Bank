import React from "react";
import "./NavLink.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, selectUsername, logout } from "../../../store/authSlice";

function NavLink() {
  const dispatch = useDispatch();
  const isAuthentificated = useSelector(selectAuth);
  const username = useSelector(selectUsername);

  if (!isAuthentificated) {
    return (
      <nav className="navBar">
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <p>Sign In</p>
        </Link>
      </nav>
    );
  }
  return (
    <nav className="navBar">
      <Link to="/user" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        <p>{username}</p>
      </Link>
      <div className="handCursor"
        onClick={() => {
          dispatch(logout());
        }}
      >
        <i className="fa fa-sign-out"></i>
        <p>Sign Out</p>
      </div>
    </nav>
  );
}

export default NavLink;
