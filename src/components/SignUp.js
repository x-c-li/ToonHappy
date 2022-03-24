import React from "react";
import "./SignUp.scss";

function SignUp() {
  return (
    <div className="SignUp">
      <h2>Sign up!</h2>
      <div>
        Join a community of fans, writers and artists to create the best stories
        ever.
      </div>
      <div className="form-field">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="first-name"
            placeholder="Please enter your first name"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="last-name"
            placeholder="Please enter your last name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Please enter a valid email"
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="text" name="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="text" name="password" placeholder="Confirm Password" />
        </div>
        <div>
          <button className="signup-button">Sign Up!</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
