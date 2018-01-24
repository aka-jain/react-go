import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {story} from './story';
import {loadedHTML} from './loadedHTML';

const rootReducer = combineReducers({story, loadedHTML, routing: routerReducer });

export default rootReducer;
