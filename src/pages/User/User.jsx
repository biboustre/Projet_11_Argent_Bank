import React from "react";
import { useState } from "react";
import "../User/User.css";
import Template from "../../components/Templates/PageTemplate";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAuth,
  selectFullName,
  selectUsername,
  selectFirstname,
  selectLastname,
} from "../../store/authSlice";
import { Navigate } from "react-router-dom";
import { profileUpdateAsync } from "../../store/features/profileUpdateAsync";

function User() {
  const dispatch = useDispatch();
  const [formActive, setFormActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);
  const isAuthentificated = useSelector(selectAuth);
  const fullName = useSelector(selectFullName);
  const username = useSelector(selectUsername);
  const firstname = useSelector(selectFirstname);
  const lastname = useSelector(selectLastname);
  const handelProfile = (e) => {
    const newUsername = e.target.form.username.value;
    dispatch(profileUpdateAsync(newUsername));
  };

  if (!isAuthentificated) {
    return <Navigate to="/" />;
  }

  return (
    <Template>
      <main className="main">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {fullName}!
          </h1>
          {formActive && (
            <form className="form" action="">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  defaultValue={username}
                  type="text"
                  id="username"
                  name="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstname">Firstname</label>
                <input
                  defaultValue={firstname}
                  disabled
                  type="text"
                  id="firstname"
                  name="firstname"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last name</label>
                <input
                  defaultValue={lastname}
                  disabled
                  type="text"
                  id="lastname"
                  name="lastname"
                />
              </div>
              <section className="form-button">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handelProfile(e);
                  }}
                >
                  Save
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setFormActive(false);
                    setButtonActive(true);
                  }}
                >
                  Cancel
                </button>
              </section>
            </form>
          )}
          {buttonActive && (
            <button
              className="edit-button"
              onClick={(e) => {
                e.preventDefault();
                setFormActive(true);
                setButtonActive(false);
              }}
            >
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </Template>
  );
}

export default User;
