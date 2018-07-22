import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import HomeNav from './header-components/home-nav';

class HomePage extends Component {
  render() {
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
          <header>
            <h3>
            Start your collection today!
            </h3>
          </header>
          <form className='signup-form'>
            <div>
              <label for="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label for="first-name">First name</label>
              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label for="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign Up</button>
          </form>
        </section>
      </div>
    )
  }
}
export default HomePage;
