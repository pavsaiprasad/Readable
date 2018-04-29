import { combineReducers } from 'redux';
import categories from './categories-reducer';
import posts from './posts-reducer';
import commentsReducer from './comments-reducer';

export default combineReducers({
    categories,
    posts,
    commentsReducer
})
