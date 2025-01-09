/*Concluídos os procedimentos o Typescript já estará instalado em seu projeto, mas para evitar possíveis erros de tipagem nos arquivos de base do React, também é necessário estabelecer um tipo ao seletor root no arquivo index, conforme exemplo abaixo:

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) */
function App() {
  return <></>;
}

export default App;
