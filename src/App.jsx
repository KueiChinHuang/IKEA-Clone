import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Bedroom from "./components/Bedroom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Product from "./components/Product";

function App() {
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

              <Route path="/login">
                <Login />
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
