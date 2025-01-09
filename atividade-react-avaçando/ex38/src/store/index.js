
import { createStore, combineReducers, applyMiddleware } from "redux";

import {thunk} from "redux-thunk";

import digimonsReducer from "./modules/digimons/reducer";

const reducers = combineReducers({ digimons: digimonsReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;