import React from "react";
import "./Navigation.scss";
import logo from "./imgs/logo.png";

function Navigation() {
  return (
    <div className="Navigation">
      <img src={logo} className="navbar-logo"></img>

      <ul className="navbar-links">
        <li>
          <a href="">Stories</a>
        </li>
        <li>
          <a href="">Toon Art </a>
        </li>
        <li>
          <a href="">Read </a>
        </li>
      </ul>

      <button className="navbar-login" type="submit">
        Log In
      </button>
    </div>
  );
}

export default Navigation;
