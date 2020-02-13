import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Post from './Components/Post';
import Home from './Components/Home';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tweets: []
		};
	}
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
							render={() => <Home tweets={this.state.tweets} />}
						/>
						<Route path="/post" component={Post} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
