import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Skills from "./components/pages/Skills/Skills.js";
import Home from "./components/pages/Home/Home.js";
import About from "./components/pages/About/About.js";
import Contact from "./components/pages/Contact/Contact.js";
import Portfolio from "./components/pages/Portfolio/Portfolio.js";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/contact" component={Contact}/>
          </div>
        </Router>
    );
  }
}

export default App;
