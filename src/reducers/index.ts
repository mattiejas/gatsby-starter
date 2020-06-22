import { combineReducers } from 'redux';
import { counterReducer } from 'src/reducers/counter';

export default combineReducers({ counter: counterReducer });
