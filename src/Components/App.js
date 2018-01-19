import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Core/Header/Header';
import Footer from './Core/Footer/Footer';
import About from './About/About';
import Home from './Home/Home';
import NotFound from './Core/Error/NotFound';

class App extends React.Component {
  render() {
    return(
    	<div className = 'popxo-container'>
	 			<Header age='5000' />
	 			<Switch>
		 			<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route component={NotFound} />
					</Switch>
	 			<Footer />
 		</div>
 		)
  }
}

export default App;
