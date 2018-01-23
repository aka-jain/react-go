import { createStore } from "redux";
import rootReducer from "../Reducers/reducer";
import { syncHistoryWithStore } from 'react-router-redux';

import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

const defaultState = {
	story : [{
			name: 'story-1',
			likes: 2
		},{
			name: 'story-2',
			likes: 3
		},{
			name: 'story-3',
			likes: 10
		}]
};

const store = createStore(rootReducer, defaultState);

export const history  = syncHistoryWithStore(customHistory, store);

export default store;
