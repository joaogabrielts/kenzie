function App() {

 const example = localStorage.getItem("@EXAMPLE",)
 console.log(JSON.parse(example));
 

  const saveLocalStorage = () => {
    const object = { id: 1, name: "alex" };
    const json = JSON.stringify(object);
    localStorage.setItem("@EXAMPLE", json);
  };
  const removeLocalStorage = () => {
    localStorage.removeItem("@EXAMPLE");
  };

  return (
    <>
      <button onClick={saveLocalStorage}>Salvar no local storage</button>
      <button onClick={removeLocalStorage}>Remove no local storage</button>
    </>
  );
}

export default App;
