import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import About from './about/About';
import Home from './home/Home';
import Story from './home/stories/Story';
import NotFound from './error/NotFound';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

	constructor(props) {
	  super(props);
		
	  this.addStory = this.addStory.bind(this);

	  this.state = {
	  	stories: {}
	  };

	}

	addStory(story){
		const stories = {...this.state.stories};

		const timestamp = Date.now();

		stories[`story-${timestamp}`] = story;
		this.setState({ stories });
	}

	showStory(){
		return this.state.stories
	}

  render() {
    return(
    	<div className = 'popxo-container'>
	 			<Header age='5000' />
	 			<Switch>
		 			<Route exact path="/" component={() => <Home addStory={this.addStory} />}/>
					<Route path="/about" component={About} />
					<Route component={NotFound} />
				</Switch>
				<Story showstory = {this.showStory} />
	 			<Footer />	
 		</div>
 		)
  }
}

export default App;
