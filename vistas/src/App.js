import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import {Book} from "./Component";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Book} />
      </Router>
    );
  }
}

export default App;