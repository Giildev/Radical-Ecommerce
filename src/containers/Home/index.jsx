import React, { Component } from 'react';
import Header from '../../components/Header/';
import Category from '../../components/Category/';

import './style.css';

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Category />
			</div>
		);
	}
}

export default Home;
