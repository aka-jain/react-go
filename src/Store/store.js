import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Reducers/reducer";
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

/* Using thunk let's us return functions as actions
 * from action creators instead of JSON objects.
 * This enables us to delay dispatching actions.
 */
const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

export const history  = syncHistoryWithStore(customHistory, store);

export default store;
