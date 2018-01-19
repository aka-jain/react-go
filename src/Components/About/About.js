import React from 'react';

import { getPageHTMLViaAjax } from '../../Services/helper'
class About extends React.Component {
    constructor() {
        super();
        this.state = {html: ''};
    }

    componentDidMount() {
        getPageHTMLViaAjax('http://cs.de/about')
            .then((response) => {
                const newState = this.state;
                newState.html = response.data;
                this.setState({ html: newState.html });
            });
    }

  render() {
    return(
    <div dangerouslySetInnerHTML={{__html:this.state.html}}>
    </div>

    )
  }
}

export default About;
