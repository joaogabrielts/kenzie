const button = document.querySelector('button')
const body = document.querySelector("body")
const botao = document.getElementById("meuButao")
console.log(botao);


botao.addEventListener('click', function(event){
    event.preventDefault()
    console.log('evento', event);
    console.log('current target:', event.currentTarget);
    console.log('target:', event.target);
})
 

button.addEventListener("click", function(event){
    event.preventDefault()
    event.stopPropagation()
    alert('clicou no button')
})

body.addEventListener('click', function(){
    alert('clicou no body')
})




