function gerarNumeroAleatorio(){
    let max = 20
    let min = 0  
  return  Math.round((Math.random(5) * (max - min) + min))
}

console.log(gerarNumeroAleatorio());


function verificarPalpite(numeroAleatorio, palpite){
    let tentativa = 1
    while(numeroAleatorio !== palpite){
        palpite = parseInt(prompt('digite o seu palpite(número entra 1 e 20)'))
        tentativa++
        if(numeroAleatorio !== palpite){
        alert("Tente novamente.")}
    }
    alert(`você acertou na tentativa ${tentativa} `)
}
//verificarPalpite(8)


//let numeroAleatorio = verificarPalpite(9)
let palpite = ''
if(palpite >= 0){
   parseInt += parseInt(prompt('digite o seu palpite(número positivo ou inteiro'))
}
