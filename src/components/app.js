import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './app.css';
import HomePage from './home-page';
import BrowseMovies from './browse-movies';
import MoviePage from './movie-page';
import Dashboard from './dashboard';
import LoginPage from './login-page';
import { RegistrationPage } from './registration-page';
import SearchResults from './search-results';
import UsersLists from './users-lists';
import { NotFound } from './not-found';
import { Footer } from './footer';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="app-container">
          <Switch>
            <Route name="home" exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/registration" component={RegistrationPage} />
            <Route path="/browse" component={BrowseMovies} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/movie/:movieId" component={MoviePage} />
            <Route exact path="/results" component={SearchResults} />
            <Route exact path="/watched" component={UsersLists} />
            <Route exact path="/watchlist" component={UsersLists} />
            <Route exact path="/notfound" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
