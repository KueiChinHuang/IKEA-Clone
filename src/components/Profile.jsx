import React from "react";
import "./Profile.css";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { Redirect, useHistory } from "react-router-dom";

function Profile() {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut().then((auth) => {
        history.push("/");
      });
    }
  };

  return (
    <div className="profile">
      {!user && <Redirect to="/login" />}
      <h1>Hello Kuei-Chin!</h1>
      <div className="profile-login" onClick={handleAuthentication}>
        Log out
      </div>
    </div>
  );
}

export default Profile;
