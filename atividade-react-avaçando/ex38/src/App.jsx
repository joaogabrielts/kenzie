
import DigimonList from "./components/DigimonList/DigimonList";
import Search from "./components/Search/Search";



function App() {
  return (
    <div className="App">
      <header>
        <h1>Procure seu Digimon</h1>
        <Search />
        <DigimonList />
      </header>
    </div>
  );
}

export default App;

