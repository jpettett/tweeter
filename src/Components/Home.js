import React, { Component } from 'react';
import axios from 'axios';

let posts;
class Home extends Component {
  deleteTweet = id => {
    console.log('id', id);
    axios
      .delete(`http://localhost:4000/tweets/${id}`)
      .then(() => console.log('Tweet Deleted'))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    let tweets = this.props.tweets;
    if (tweets !== null) {
      posts = tweets.map(tweet => {
        return (
          <div>
            <h1>{tweet.name}</h1>
            <p>{tweet.tweet}</p>
            <button>Edit</button>
            <button onClick={() => this.deleteTweet(tweet._id)}>Delete</button>
          </div>
        );
      });
    }
    return (
      <div>
        <h2>Home Component</h2>
        <div>{posts}</div>
      </div>
    );
  }
}
export default Home;
