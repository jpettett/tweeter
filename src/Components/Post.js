import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div>
        <h2>New Tweet</h2>
        <form onSubmit={this.props.handleSubmit}>
          <input
            onChange={this.props.handleName}
            type="text"
            value={this.props.name}
            placeholder="name"
          />
          <p>
            <input
              onChange={this.props.handleTweet}
              type="text"
              value={this.props.newTweet}
              placeholder="tweet"
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Post;
