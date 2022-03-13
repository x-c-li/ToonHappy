import React from "react";
import "./Hero.scss";
import logo from "./imgs/logo.png";

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
          <h2>Sign Up Now!</h2>
        </button>
      </div>
    </div>
  );
}

export default Hero;
