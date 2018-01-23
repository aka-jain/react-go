import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NotFound from './Components/Core/Error/NotFound';

import { Provider } from 'react-redux';
import store, { history } from './Store/store';

import './index.scss'

const Root = () => {
	return (
		<Provider store={store}>
			<Router history={history}>
					<Route path="/" component={App} />
			</Router>
		</Provider>
	)
}

render(<Root store={store}/>, document.getElementById('react-root'))