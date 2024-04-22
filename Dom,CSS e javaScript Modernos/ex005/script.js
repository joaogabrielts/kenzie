
const classeParagraph = "paragraph-black"
/*
function addClasse(){
    const paragrafo = document.querySelector("p")

    paragrafo.classList.add(classeParagraph)

}
addClasse() */
/*
function addClasse(){
    const paragrafo = document.querySelector("p")

    if( paragrafo.classList.contains(classeParagraph)){
        paragrafo.classList.remove(classeParagraph)
    } else{
        paragrafo.classList.add(classeParagraph)
    }
}
addClasse()

*/

function addClasse(){
    const paragrafo = document.querySelector("p")

   const classeResult = paragrafo.classList.toggle(classeParagraph)
   if(classeResult){
    paragrafo.innerText = "Classe Adicionada"
   } else{
    paragrafo.innerText = "Classe Removida"
   }
}
addClasse()




