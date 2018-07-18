import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './app.css';
import HomePage from './home-page';
import FrontPage from './front-page';
import MoviePage from './movie-page';
import Dashboard from './dashboard';
import LoginForm from './login-form';
import SearchResults from './search-results';
import HomeNav from './header-components/home-nav';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route name="home" exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/browse" component={FrontPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/movie/:movieId" component={MoviePage} />
          <Route exact path="/results/:movieName" component={SearchResults} />
        </div>
      </Router>
    );
  }
}

export default App;
