// Não se preocupe em tentar entender esta sintaxe
// Exemplo: Bem-vindo em react com componentes de classe

import React from "react";

class BemVindo extends React.Component {
  render() {
    return <h1>Seja bem vindo, {this.props.name}</h1>;
  }
}



// Não se preocupe em tentar entender esta sintaxe
// Exemplo: Bem-vindo em react com componente de função 



//const BemVindo = ({ name }) => {
 //   return <h1>Seja bem vindo, {name}</h1>;
  //};


  // Não se preocupe em tentar entender esta sintaxe
// Exemplo: Contador em react com componentes de função

import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const contar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Nosso contador está em {contador}</p>
      <button onClick={contar}>Adicionar +1</button>
    </div>
  );
};

export default Contador;


