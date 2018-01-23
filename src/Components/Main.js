import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Core/Header/Header';
import Footer from './Core/Footer/Footer';
import About from './About/About';
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
    	<div>{this.props.store}</div>
	 			<Header age='5000' />
	 			<Switch>
		 			<Route exact path="/" component={() => <Home addStory={this.addStory} />}/>
					<Route path="/about" component={About} />
					<Route component={NotFound} />

				</Switch>
	 			<Footer />
 		</div>
 		)
  }
}

export default Main;
