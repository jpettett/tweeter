import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
	// Edits Tweet
	editTweet = e => {
		e.preventDefault();
		const tweet = this.props.newTweet;
		const id = this.props.id;
		console.log(id);
		const editPost = {
			tweet
		};
		axios
			.put(`http://localhost:4000/tweets/${id}`, editPost)
			.then(() => console.log('Tweet Edited'))
			.catch(err => {
				console.error(err);
			});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.editTweet}>
					<p>
						<input
							onChange={this.props.handleTweet}
							type="text"
							value={this.props.newTweet}
							placeholder="Update Tweet"
						/>
					</p>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default Edit;
