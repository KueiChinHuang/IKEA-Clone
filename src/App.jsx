import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Bedroom from './components/Bedroom';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <Header />

          <Switch>
            <Route path="/product">
                <Product />
            </Route>
            <Route path="/">
                <Bedroom />
            </Route>            
          </Switch>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
