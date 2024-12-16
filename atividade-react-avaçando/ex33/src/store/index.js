
/*
import { combineReducers, createStore } from "redux";
import userReducer from "./modules/user/reducer";

const reducers = combineReducers({ user: userReducer });

const store = createStore(reducers);

export default store;
*/

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user/reducer";

const store = configureStore({
  reducer: {
    user: userReducer, // Passa diretamente no objeto
  },
});

export default store;
