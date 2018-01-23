import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Core/Header/Header';
import Footer from './Core/Footer/Footer';
import {AboutContainer} from './App';
import Home from './Home/Home';
import NotFound from './Core/Error/NotFound';

class Main extends React.Component {

	constructor(props) {
	  super(props);

	  this.addStory = this.addStory.bind(this);

	}

	addStory(story){

	}

	showStory(){
		return this.state.stories
	}

  render() {
    return(
    	<div className = 'popxo-container' >
 			<Header age='5000' />
 			<Switch>
	 			<Route exact path="/" component={() => <Home {...this.props} />}/>
				<Route path="/about" component={AboutContainer} />
				<Route component={NotFound} />

			</Switch>
 			<Footer />
 		</div>
 		)
  }
}

export default Main;
