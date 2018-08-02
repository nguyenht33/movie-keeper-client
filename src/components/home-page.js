import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import HomeNav from './header-components/home-nav';
import RegistrationForm from './registration-form';

class HomePage extends Component {
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/browse"/>
    }

    return (
      <div>
        <HomeNav />
        <header role="banner">
          <h1>Movie Keeper</h1>
          <h3>VHS shelve for the new age!</h3>
        </header>
        <section>
          <header>
            <h3>Keep a record of your movie collection</h3>
          </header>
            <p>[<em>placeholder for screenshot of user add movie interface</em>]</p>
            <p>Make a collection of the movies you watched. Add reviews and ratings for each new addition to your collection.</p>
        </section>
        <section>
          <RegistrationForm />
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HomePage);
