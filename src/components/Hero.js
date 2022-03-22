import React from "react";
import "./Hero.scss";
import logo from "./imgs/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Hero() {
  return (
    <div className="Hero">
      <img src={logo} className="navbar-logo"></img>

      <div className="hero-intro">
        <h1>Write. Connect. Create</h1>
        <p>
          Our platform connects writers, toon artists, and audiences to create
          the webtoons we love.
        </p>
        <button className="hero-sign-up">
          <h2>
            <Link to="/signup">Sign Up Now!</Link>
          </h2>
        </button>
      </div>
    </div>
  );
}

export default Hero;
