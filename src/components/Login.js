import React from "react";
import logo from "./imgs/logo.png";

function Login() {
  return (
    <div>
      <div>
        <img src={logo}></img>
      </div>
      <div className="form-group">
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="text" name="password" placeholder="Password" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
