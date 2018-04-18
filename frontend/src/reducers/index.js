import { combineReducers } from 'redux';
import categoriesReducer from './categories-reducer';
import postsReducer from './posts-reducer';
import commentsReducer from './comments-reducer';

export default combineReducers({
    categoriesReducer,
    postsReducer,
    commentsReducer
})
