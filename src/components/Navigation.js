import React from "react";
import "./Navigation.scss";
import logo from "./imgs/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <Link to="/">
        <img src={logo} className="navbar-logo"></img>
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        <li>
          <Link to="/toonart">Toon Art</Link>
        </li>
        <li>
          <Link to="/read">Read</Link>
        </li>
      </ul>

      <button className="navbar-login" type="submit">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
}

export default Navigation;
