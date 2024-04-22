const article = document.createElement("article")
const titulo = document.createElement("h2")
const paragrafo = document.createElement("p")
const button = document.createElement("button")

console.log(titulo);

titulo.innerText = "como criar Elementos HTML de forma dinâmica, utilizando javaScript"

paragrafo.innerText = "Nesse post vamos aprender como criar Elementos utilizando Dom"

button.innerText ="Acessar conteúdo"

article.appendChild(titulo)
article.appendChild(paragrafo)
article.appendChild(button)

const body = document.querySelector("body")

body.appendChild(article)

console.log(article);