import { useSelector } from "react-redux";
//import Home from "./Home";
//import Cart from "./pages";
//import AppRoutes from "./routes";
import { Header } from "./component";
import AppRoutes from "./routes";

function App() {
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart);

  return (
    <>
      
      <Header/>
      <AppRoutes/>
    </>
  );
}
//10:10<Cart /><Home />

export default App;
