function primerira(){
    const nome = "Hello";
    const nome2 = "World!";

   console.log(`${nome} ${nome2}`)
}

primerira()

function alunoMonitor(){
    let Entrega = 100;
    let Entrevistas = 100;
    let presenca = 100;

    if(Entrega >= 100 && Entrevistas >= 100 && presenca >= 100){
        console.log("Possível monitor(a)")
    }else{
        console.log("Selecionar outro (a) aluno(a)")
    }


}

alunoMonitor()


function numerico(){
    let numero1 = 8
    let numero2 = 4
    let numero3 = 7

    if(numero1 > numero2 && numero2 > numero3){
        console.log(` O número ${numero1} é o maior`)
    }else if(numero1 > numero3 && numero3 > numero2){
        console.log(` O número ${numero1} é o maior`)
       
    } else if(numero2 >  numero1 && numero1 > numero3){
        console.log(`O número ${numero2} é o maior. `)
    }else if(numero2 > numero3 && numero3 > numero1){
        console.log(`O número ${numero2} é o maior. `)
    } else if(numero3 > numero1 && numero1 > numero2){
        console.log(`O número ${numero3} é o maior`)
    } else if(numero3 > numero2 && numero2 > numero1){
        console.log(`O número ${numero3} é o maior`)
    }
}

numerico()


function frase(){
let nome = prompt("Qual é seu nome ? ");
let sobrenome = prompt("Qual é seu sobrenome ?");
let idade = prompt("Qual é a sua idade")

alert(`meu nome é ${nome} ${sobrenome}, tenho ${idade} anos `)

console.log(`meu nome é ${nome} ${sobrenome}, tenho ${idade} anos `)
}



frase()
