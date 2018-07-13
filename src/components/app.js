import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './app.css';
import HomePage from './home-page';
import FrontPage from './front-page';
import Dashboard from './dashboard';
import LoginForm from './login-form';
import HomeNav from './header-components/home-nav';
import {API_KEY} from '../config';

console.log(API_KEY)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route name="home" exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/front" component={FrontPage} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
