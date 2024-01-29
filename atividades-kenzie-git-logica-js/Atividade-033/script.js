function exercio1(frase, palavraantiga, palavranova){
   const novaFrase = frase.replaceAll(palavraantiga, palavranova)
   return novaFrase
}
console.log(exercio1("minha casa fica longe da casa do meu amigo", "casa", "residência"))

 function notasAlunos(nota1, nota2, nota3){
    let novaNota = (nota1 + nota2 + nota3) / 3;
    let resultado = novaNota.toFixed();
    const mensagem = `A média do aluno é ${resultado}`;
   return mensagem
 }
 console.log(notasAlunos(9.5, 8.6,5.5))

 function compras(valorUnitario, quantidade){
  let valorTotal = 0

    if(quantidade>=10){
     
       valorTotal = (quantidade*valorUnitario) * 0.8

    } 
    else if(quantidade>=5){
       valorTotal = (quantidade*valorUnitario) * 0.9
    } 
    else{
      valorTotal = (quantidade*valorUnitario) 
    }

   return valorTotal.toFixed(2)
 }
 console.log(compras(10, 2))

