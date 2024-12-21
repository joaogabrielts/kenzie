
const token = localStorage.getItem("token")  || ""
const defaultState = {
  token: "",
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "@user/SIGH_IN":
      const { token } = action;

      return { ...state, token };

    default:
      return state;
  }
};

export default userReducer;
