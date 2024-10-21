import { useEffect, useState } from "react";
import { api } from "../services/api";

function App() {
  const [adress, setAdress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [cep, SetCep] = useState("");


  // setLoading(true);
      //const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      //const json = await response.json();
      //setAdress(json);
      //setLoading(false);

  useEffect(() => {
    const loadData = async () => {
     try {
      setLoading(true)
      const {data} = await api.get(`${cep}/json/`);
      setAdress(data)
     } catch (error) {
      console.log(error);
     }finally{
      setLoading(false)
     }
    };
    if (cep !== "") {
      loadData();
    }
  }, [cep]);

  const submit = (e) => {
    e.preventDefault();
    SetCep(input);
    setInput("");
  };

  const cleanAdress = () => {
    setAdress(null);
    SetCep("");
  };

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {adress ? (
            <div>
              <h1>Meu endereço: </h1>
              <p>
                {adress.cep} - {adress.logradouro} - {adress.bairro} -{" "}
                {adress.localidade} - {adress.uf}
              </p>
              <button onClick={cleanAdress}>Limapr</button>
            </div>
          ) : (
            <div>
              <h1>Forneça seu cep para prosseguir </h1>
              <form onSubmit={submit}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Buscar endereço</button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
