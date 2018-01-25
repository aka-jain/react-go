import React from 'react';

class About extends React.Component {
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
