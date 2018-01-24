import Main from './Main';
import About from './About/About';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../Actions/actionCreator';

let mapStateToProps = (state) => {
	return{
		story: state.story,
		loadedHTML: state.loadedHTML
	}
}

let mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
}

 const App = connect(mapStateToProps, mapDispatchToProps)(Main);
 export const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);

export default App;
