import { ADD_DIGIMONS } from "./actionTypes";

const digimonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DIGIMONS:
      // Escreva seu case para adicionar um novo digimon.
      
      console.log(state);
      console.log(action.digimon);
      
      return [...state, action.digimon];
      
    default:
      return state;
  }
};

export default digimonsReducer;
