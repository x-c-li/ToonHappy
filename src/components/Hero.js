import React from "react";
import "./Hero.scss";
import logo from "./imgs/logo.png";

function Hero() {
  return (
    <div className="Hero">
      <img src={logo} className="navbar-logo"></img>

      <div className="hero">
        <h2>Write.Connect.Create</h2>
        <p>
          Our platform connects writers, toon artists, and audiences to create
          the webtoons we love.
        </p>
        <button className="hero-sign-up">Sign Up Now!</button>
      </div>
    </div>
  );
}

export default Hero;
