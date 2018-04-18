// Dependencies
import React, { Component } from 'react';
import axios from 'axios';

// Components & Containers
import "./style.css";

class Home extends Component {
	componentDidMount() {
		axios.get(`http://localhost:4000/api/hello`)
			.then(res => {
				console.log(res.data)
			})
	}

	render() {
		return (
			<div>
				<p>Work in progresss</p>
			</div>
		);
	}
}

export default Home;
