import { auth } from "../firebase";
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login-banner">
        <h1 className="login-banner-title">Login to your IKEA account.</h1>
        <div className="login-banner-description">
          IKEA will ask you to confirm your contact method(s), due to security
          and legal reasons.
        </div>
      </div>
      <div className="login-content">
        <div className="login-content-description">
          Login or create an account for a more personal and customized
          experience at IKEA.
        </div>
        <input
          type="text"
          className="login-content-email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="login-content-pwd"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-btn-login" onClick={signIn}>
          Login
        </button>
        <button type="submit" className="login-btn-create" onClick={register}>
          Create account
        </button>
      </div>
    </div>
  );
}

export default Login;
