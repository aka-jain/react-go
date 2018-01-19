import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './Components/App';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NotFound from './Components/Core/Error/NotFound';

import './index.scss'

const Root = () => {
	return (
		<Router>
			<Switch>
				<Route path="/about" exact component={About} />
				<Route path="/" component={App} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	)
}

render(<Root/>, document.getElementById('react-root'))