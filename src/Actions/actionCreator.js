import axios from 'axios';
export const showString = (index) => {
	return {
		type: 'SHOW_LIKES',
		index
	}
}

// An action creator that returns the LOAD_HTML action
const loadHTMLAction = (response) => {
	return {
		type: 'LOAD_HTML',
		html: response.data
	};
}

/* This is an action creator that, with the help
 * of thunk returns a function. The inner function
 * is passed the `dispatch` function as well as
 * `getState` function.
 * The inner function when invoked makes an ajax request
 * and then `dispatch`es the LOAD_HTML action.
 */
export const loadHTML = () => {
	return (dispatch) => {
		axios.get('https://staging.chubbystick.in')
			.then((response) => {
					dispatch(loadHTMLAction(response));
			});
	};
}