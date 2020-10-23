import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";

import "./App.css";
import Bedroom from "./components/Bedroom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Product from "./components/Product";
import { useStateValue } from "./StateProvider";
import Profile from "./components/Profile";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <Header />

          <div className="main">
            <Switch>
              <Route
                path="/product/:id"
                render={(props) => <Product {...props} />}
              />

              <Route path="/cart">
                <Cart />
              </Route>

              <Route path="/checkout">
                <Checkout />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="/profile">
                <Profile />
              </Route>

              <Route path="/">
                <Bedroom />
              </Route>
            </Switch>
          </div>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
