import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Post from './Post';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Tweeter</h1>
        </header>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/post">New Post</Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post" component={Post} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
