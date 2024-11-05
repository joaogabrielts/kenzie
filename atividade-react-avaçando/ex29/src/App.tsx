import { useAtomValue } from "jotai/react";
import { darkModeAtom } from "./atoms/darkModeAtom";
import { ThemeProvider } from "styled-components";
import { themeLight } from "./Theme/themeLight";
import {  themeDark } from "./Theme/themeDark";
import { Header } from "./components/Header";

function App() {
  const themeCard = useAtomValue(darkModeAtom);
  console.log(themeCard);

  return (
    <>
      <ThemeProvider theme={themeCard === true ? themeDark : themeLight}>
        <Header  />
      </ThemeProvider>
    </>
  );
}
//

export default App;
