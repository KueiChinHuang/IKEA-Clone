import { auth } from "../firebase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login-banner">
        <div className="login-banner-container">
          <img src="IKEA-Logo-white.png" alt="IKEA-Logo-black.png" />
          <h1 className="login-banner-title">
            <div className="">
              <span>Login</span> to your{" "}
            </div>
            <div className="">IKEA account.</div>
          </h1>
          <p className="login-banner-description">
            IKEA will ask you to confirm your contact method(s), due to security
            and legal reasons.
          </p>
        </div>
      </div>
      <div className="login-content">
        <div className="login-content-container">
          <div className="login-content-description">
            Login or create an account for a more personal and customized
            experience at IKEA.
          </div>
          <div className="login-content-input">
            <input
              type="text"
              className="login-content-email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-content-input">
            <input
              type="password"
              className="login-content-pwd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-login" onClick={signIn}>
            Login
          </button>
          <button type="submit" className="btn btn-register" onClick={register}>
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
