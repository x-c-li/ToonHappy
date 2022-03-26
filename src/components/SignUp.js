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
      <div>
        <form className="form-field">
          <label for="first-name">First Name</label>
          <input
            type="text"
            name="first-name"
            placeholder="Please enter your first name"
          />

          <label>Last Name</label>
          <input
            type="text"
            name="last-name"
            placeholder="Please enter your last name"
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Please enter a valid email"
          />

          <label>Username</label>
          <input type="text" name="username" placeholder="Username" />

          <label>Password</label>
          <input type="text" name="password" placeholder="Password" />

          <label>Confirm Password</label>
          <input type="text" name="password" placeholder="Confirm Password" />

          <div>
            <button className="signup-button">Sign Up!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
