/* This reducer listens for the LOAD_HTML
 * event. It returns the new state with the response
 * from the ajax request.
 */
export const loadedHTML = (state=[], action) => {
	switch(action.type) {
		case 'LOAD_HTML':
			const newState = {...state};
			newState.loadedHTML = action.html;
			return newState;
		default:
			return state;
	}

}