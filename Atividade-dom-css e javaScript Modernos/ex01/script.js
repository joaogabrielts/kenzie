
 const ingredientsList = document.querySelector("#ingredients");
 console.log(ingredientsList);

const meuElemento = document.getElementById("ingredients");
console.log(meuElemento);

const primeiroTitulo = document.querySelector("h1")
console.log(primeiroTitulo);

const primeiraClasse = document.getElementsByClassName("recipe")
console.log(primeiraClasse);

let todosOsTitulos = document.getElementsByTagName("h2")
for(let i = 0; i < todosOsTitulos.length; i++){
    todosOsTitulos[i].style.color = "blue"
}



let todosOsInput = document.querySelectorAll('input')
for(let i = 0; i < todosOsInput.length; i++){
    todosOsInput[i].style.borderColor  ='red'
}