import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './AuthReducer';

export default combineReducers({
    routing: routerReducer,
    auth
});
