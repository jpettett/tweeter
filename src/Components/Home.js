import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

let posts;
class Home extends Component {
  // Deletes Tweet
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
					<div key={tweet._id}>
						<h1>{tweet.name}</h1>
						<p>{tweet.tweet}</p>
						<Link to="/edit" onClick={() => this.props.setId(tweet._id)}>
							<button>Edit</button>
						</Link>
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
