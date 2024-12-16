import { configureStore } from "@reduxjs/toolkit";
import reducerCounter from "./module/counter/reducer";

 const store = configureStore({
  reducer: {
    counter: reducerCounter,
  },
});
 export default store