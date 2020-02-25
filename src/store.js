import React from 'react';
import {combineReducers, createStore} from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({
    count: reducer
});

const store = createStore(rootReducer);
export default store;
