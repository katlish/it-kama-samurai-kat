import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import usersReducer from './users-reducer';
import profileReducer from './profile-reducer';

const reducers = combineReducers({usersReducer, profileReducer});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;