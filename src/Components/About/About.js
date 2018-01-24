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
        return (
            <div dangerouslySetInnerHTML={{__html:this.props.loadedHTML.loadedHTML}}>

            </div>
        );
    }
}

export default About;
