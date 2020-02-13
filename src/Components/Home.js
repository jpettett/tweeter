import React, { Component } from 'react';
let posts;
class Home extends Component {
	render() {
		let tweets = this.props.tweets;
		if (tweets !== null) {
			posts = tweets.map(tweet => {
				return (
					<div key={tweet._id}>
						<h1>{tweet.name}</h1>
						<p>{tweet.tweet}</p>
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
