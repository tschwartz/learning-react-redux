// A reducer takes in two things, the action (info about what happened) and a
// copy of current state
import  { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
    posts,
    comments
});

export default rootReducer;
