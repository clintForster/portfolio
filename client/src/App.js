import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/pages/Home/Home.js";
import Portfolio from "./components/pages/Portfolio/Portfolio.js";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          </div>
        </Router>
    );
  }
}

export default App;
