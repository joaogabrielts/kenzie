// seleciona o elemento com o id "meuId"
const meuElemento = document.getElementById("meuId")


//selciona  apenas a primeira div encontrada
const primeiraDiv = document.querySelector("div")

//seleciona apenas o primeiro paragrafo encontrado
const primeiroParagrafo = document.querySelector("p")


//seleciona apenas o primeiro elemento que possui a classe ".minhaClasse"
const primeiroElementoComClasse = document.querySelector
("minhaClasse")

//seleciona todos os elementos com a classe "minhaClasse"
const todosElementos = document.getElementsByClassName("minhaClasse")


//seleciona todos os elementos <p> na pagina
const todosParagrafo = document.getElementsByTagName("p")

//seleciona todos os elementos com a classe
//"minhaClasse" dentro de um elemento com id "meuId"
const todosElementos1 = document.querySelectorAll("h1")

//seleciona todos os elementos com a clasee "minhaClasse"
const elementoPorClasse = document.querySelectorAll(".minhaClasse")

//seleciona  todos os elementos <h1>
const elementoPorTag = document.querySelectorAll("h1")

//-----------------------------------------------------

// selecionando a div com id #box_1
const div1 = document.getElementById("box_1")

//alterando a cor de fundo par preto
div1.style.backgroundColor = "black"

//selecionando todas as divs com a classe .box
const todasDivsBox = document.querySelectorAll(".box")

//mostrando no console 
console.log(todasDivsBox);

//seleciona todas as divs com classe .box
const todasDivs = document.querySelectorAll(".box")

for(let i = 0; i < todasDivs.length; i++){
    todasDivs[i].style.backgroundColor = "red"
}























