import  { createStore, compose } from 'redux';

import rootReducer from './reducers/index';
import posts from './data/posts';
import comments from './data/comments';

const defaultState = {
    posts,
    comments
};
const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
