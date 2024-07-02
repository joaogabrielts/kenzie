import soma from './soma.js'

const input1 = document.querySelector('#numero1')

const input2 = document.querySelector('#numero2')

const resultado = document.querySelector("#resultado")

const button = document.querySelector("button")
console.log(input1,input2,resultado,button);



button.onclick = () =>{
    const valorN1 = Number(input1.value)
    const valorN2 = Number(input2.value)

    resultado.innerText = soma(valorN1, valorN2)
}

