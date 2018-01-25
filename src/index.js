import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import App from './Components/App';
import {AboutContainer} from './Components/App';

import { Provider } from 'react-redux';
import store, { history } from './Store/store';

import './index.scss'

const Root = () => {
	return (
		<Provider store={store}>
			<Router history={history}>
			<Switch>
				<Route exact path="/about" component={AboutContainer} />
				<Route path="/" component={App} />
			</Switch>
			</Router>
		</Provider>
	)
}

render(<Root store={store}/>, document.getElementById('react-root'))