import { combineReducers } from "redux";
import cartReducer from "./modules/cart/reducer";
import userReducer from "./modules/user/reducer";
//import cart from "./cart/reducer"
//import cartReducer from "./modules/cart/reducer";

export default combineReducers({
   // cart
    cartReducer,
    userReducer
})