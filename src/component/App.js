import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import About from './about/About';


class App extends React.Component {
  render() {
    return(
    	<div className = 'popxo-container'>
	 		<Header />
	 		<About />
	 		<Footer />	
 		</div>
 		)
  }
}

export default App;
