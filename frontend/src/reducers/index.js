import { combineReducers } from 'redux';
import categoriesReducer from './categories-reducer';
import postsReducer from './posts-reducer';

export default combineReducers({
    categoriesReducer,
    postsReducer
})
