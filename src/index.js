import React from 'react';
import { render } from 'react-dom';
import App from './component/App';
import Home from './component/home/Home';
import About from './component/about/About';
import NotFound from './component/error/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss'

const Root = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={App} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	)
}

render(<Root/>, document.getElementById('root'))