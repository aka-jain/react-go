import React from 'react';
import store from '../../Store/store'

import { getPageHTMLViaAjax } from '../../Services/helper'
class About extends React.Component {
    constructor() {
        super();
   
    }

    componentDidMount() {
        // getPageHTMLViaAjax('https://staging.chubbystick.in/about')
        //     .then((response) => {
        //         const newState = this.state;
        //         newState.html = response.data;
        //         this.setState({ html: newState.html });
        //     });
    }

  render() {
    return(
        <div>
        <div>{store.story}</div>
        <pre> 
    

        </pre>

    </div>

    )
  }
}

export default About;
