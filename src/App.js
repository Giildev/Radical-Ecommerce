import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './containers/Home/';

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			{/* <Route path="/about" component={About}/> */}
		</div>
	</Router>
);

export default App;
