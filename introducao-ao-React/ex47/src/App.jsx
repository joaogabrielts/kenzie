
function App() {
  const getFruits = async () => {
    //Get
  const response = await fetch("https://fruit-fake-api.onrender.com/fruits")
  const json = await response.json()
  console.log();
  
  console.log(json);
  
  }

  return (
    <>
      <button onClick={getFruits}>Requisições</button>
    </>
  )
}

export default App
