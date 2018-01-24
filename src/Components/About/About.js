import React from 'react';
import store from '../../Store/store'

class About extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.loadHTML();
    }

    render() {
        if(this.props.loadedHTML.length !== 0) {
            return (
                <div dangerouslySetInnerHTML={{__html:this.props.loadedHTML.loadedHTML}}>

                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.props.loadHTML}>Load HTML</button>
                </div>
            );
        }
    }
}

export default About;
