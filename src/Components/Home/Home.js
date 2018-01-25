import React from 'react';

class Home extends React.Component {
	createStory(event){
		event.preventDefault();
		const story = {
			title: this.title.value
		}
		 this.props.addStory(story);
	}

  render() {
	return(
			<form onSubmit={(e) => this.createStory(e)}>
				<input ref={(input) => this.title = input} type="text" name="title" placholder="Enter Title" />
				<button type-="submit"></button>
			</form>
 		)
	}
}

export default Home;