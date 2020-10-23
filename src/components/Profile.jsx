import React from "react";
import "./Profile.css";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { Link, Redirect, useHistory } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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
      <div className="profile-container">
        {!user && <Redirect to="/login" />}

        <div className="profile-title">
          <h1>Hello {user && user?.providerData[0].uid}</h1>
          <div>
            Need to change account?
            <span onClick={handleAuthentication}>Log out</span>
          </div>
        </div>
        <div className="profile-card-container">
          <Link to="/orders">
            <div className="profile-card">
              <div className="profile-card-content">
                <p>My Orders</p>
                <p>View your order history</p>
              </div>
              <ArrowForwardIcon />
            </div>
          </Link>
          <div className="profile-card">
            <div className="profile-card-content">
              <p>Bonus Meal</p>
              <p>Buy 10 eligible meals and get the next one free</p>
            </div>
            <ArrowForwardIcon />
          </div>
          <div className="profile-card">
            <div className="profile-card-content">
              <p>The IKEA Sell-Back Program</p>
              <p>Re-circulate. Re-decorate</p>
            </div>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
