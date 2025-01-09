import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { FormListProvider } from "./providers/TodoContext.tsx";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormListProvider>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </FormListProvider>
  </StrictMode>
);
