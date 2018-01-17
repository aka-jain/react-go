import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import About from './about/About';
import Home from './home/Home';
import NotFound from './error/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
