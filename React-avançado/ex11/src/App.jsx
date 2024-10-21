import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { themeLight, themeDark } from "./Theme";
import MyComponent from "./component/MyComponent";

function App() {
  const [colorMode, setColorMode] = useState("ligth");

  return (
    <>
      <ThemeProvider theme={colorMode === "light" ? themeLight : themeDark}>
        <MyComponent>
          <button
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          >
            Alternar Tema
          </button>
          <h1>Ola,mundo</h1>
          <p>Gabriel</p>
        </MyComponent>
      </ThemeProvider>
    </>
  );
}

export default App;
