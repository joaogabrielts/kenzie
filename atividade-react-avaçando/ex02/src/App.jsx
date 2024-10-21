import { Homepage } from "./pages/HomePage";
import { CartProvider } from "./providers/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Homepage />
      </CartProvider>
    </>
  );
}

export default App;
