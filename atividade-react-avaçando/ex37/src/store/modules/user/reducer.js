import { ADD_COMMENT } from "./actionsTypes";

const initialState = { name: "Kenzie", comments: [] };
console.log(initialState,"reducer");
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:

    // Lembre de fluxo da aula anterior, essa action chega aqui depois de passar pelo thunks
    console.log("Reducer - Action Payload:", action.updatedUser);

      return action.updatedUser;
    default:
      return state;
  }
};


export default userReducer;
