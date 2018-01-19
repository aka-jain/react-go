import React from 'react';
import { sum } from '../../helper'
class About extends React.Component {

	sayHello(){
		alert("Hey! It's an event");
	}

  render() {
    return(
    	<div>
    <p>	
    	{sum()}
    	About
    </p>
    <button onClick={this.sayHello}></button>
    </div>
    
    )
  }
}

export default About;
