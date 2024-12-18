import { createStore, combineReducers } from "redux";

// importando o reducer
import fruitsReducer from "./modules/fruits/reducer";

// combinando os reducers da aplicação, nesse exemplo temos apenaconst reducers = combineReducers({ fruits: fruitsReducer }s um
const reducers = combineReducers({
    fruits: fruitsReducer,
  });

// passando os reducers combinados para a store
const store = createStore(reducers);

export default store;