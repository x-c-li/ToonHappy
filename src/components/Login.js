import React from "react";
import logo from "./imgs/logo.png";
import "./Login.scss";

function Login() {
  return (
    <div className="Login">
      <div>
        <img className="login-img" src={logo}></img>
      </div>
      <div className="form-field">
        <form>
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" />

          <label>Password</label>
          <input type="text" name="password" placeholder="Password" />

          <div>
            <button className="signup-button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
