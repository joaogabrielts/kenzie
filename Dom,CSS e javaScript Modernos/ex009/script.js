const button = document.querySelector("button")
const p = document.querySelector("p")

let contador = 0

button.addEventListener("click", function(){
    contador += 0.1
   
    p.innerText = contador
    if(p.innerText = contador > 5){
        p.style.color = "red"
    }else if(p.innerText = contador < 5){
        p.style.color = "black"
    }
    console.log(p.innerText = contador);
    
   
})
console.log(p);
console.log('ola');