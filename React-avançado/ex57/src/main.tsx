import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { FruitListProvider } from "./providers/FruitListContext.tsx";
import { ShoppingCartProvider } from "./providers/shoppingCartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FruitListProvider>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </FruitListProvider>
  </StrictMode>
);
