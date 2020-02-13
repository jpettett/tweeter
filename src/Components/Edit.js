import React, { Component } from 'react';

class Edit extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit}>
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
