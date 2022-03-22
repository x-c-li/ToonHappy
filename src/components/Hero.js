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
        <h2>
          <Link to="/signup" className="hero-sign-up">
            Sign Up Now!
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default Hero;
