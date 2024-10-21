import { useRef } from "react";

function App() {
  const example = useRef(null);
  return (
    <>
      <button onClick={() => console.log(example.current)}>Debug</button>
      <h1 ref={example}> Examplo</h1>
    </>
  );
}

export default App;
