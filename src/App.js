import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Post from './Components/Post';
import Home from './Components/Home';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      name: '',
      newTweet: ''
    };
  }
  // handles name change //
  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };
  // handles tweet change //
  handleTweet = e => {
    this.setState({
      newTweet: e.target.value
    });
  };
  // submits value with axios and sets updated state //
  handleSubmit = e => {
    e.preventDefault();
    const name = this.state.name;
    const tweet = this.state.newTweet;
    const newPost = {
      name,
      tweet
    };
    axios
      .post('http://localhost:4000/tweets/post', newPost)
      .then(() => console.log('Tweet Created'))
      .catch(err => {
        console.error(err);
      });
  };

  // fetch api data from tweets api //
  componentDidMount() {
    const url = 'http://localhost:4000/tweets';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ tweets: data });
      });
  }

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
            <Route
              exact
              path="/"
              render={props => <Home {...props} tweets={this.state.tweets} />}
            />
            <Route
              path="/post"
              render={() => (
                <Post
                  handleSubmit={this.handleSubmit}
                  handleName={this.handleName}
                  handleTweet={this.handleTweet}
                  name={this.state.name}
                  newTweet={this.state.newTweet}
                  deleteTweet={this.deleteTweet}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
