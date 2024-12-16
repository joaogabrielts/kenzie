import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Importar o Provider e a store
import { Provider } from "react-redux";
import store from "./store";

// Renderizar a aplicação
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
