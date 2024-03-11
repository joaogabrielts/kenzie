let pessoa = {
    nome:"",
    anoDeNascimento: '',
    cpf:'' ,
    cidade:"",
    Estado:"",
    Logradouro: " ",
}


let escola = {
    Nome: '',
    CNPJ: '',
    ÁreaDeAtuação: '',
    Cidade: '',
    Estado: '',
    Logradouro: '',
    Curso: '',
}

let curso = {
    Nome : '',
    DuraçãoEmAnos : '',
    Turma : '',
    Módulos : '',
}

let endereco = {
    Cidade : '',
    Estado : '',
    Logradouro : '',
    Cep : '',
}

const carro = {  
    placa: "ABC123",   
    classes: ["sedan"],  
    luxo: true,
    potencia: 200, 
    estacionado: true,  
  }
 

  function obterPlaca(){
     return carro.placa

  }

 console.log(obterPlaca()); 

 function verificarClasses(){
    if(carro.classes.length === 1){
       return carro.classes[0]
    }
    return carro.classes
 }
 console.log(verificarClasses());

  function potenciaReal(){
    if(carro.luxo === true){
    let potencia = Math.pow(carro.potencia, 2) 
    return potencia       
    }
    return carro.potencia
  }
  console.log(potenciaReal());


 function  adicionarNovaClasse(text){
    const classesPermitidas = ['sedan', 'hatchback', 'suv', 'crossover',  'cupê']
    const classes = carro.classes 
   if(classes.length >= 3){
    return "Este carro não pode ter mais classes"
   }   
   else if(classesPermitidas.includes(text.toLowerCase()) ){
     if(classes.includes(text.toLowerCase())){
        return `O carro já possui a classe ${text}`
     }  
     classes.unshift(text.toLowerCase()) 
     return `Classe ${text} adicionada com sucesso`
   }
   return "Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê"
 }
 console.log(adicionarNovaClasse('sedan'));
 

 function naoMaisLuxo(){
    let carroLuxo = carro.luxo
    let placaDoCarro = carro.placa
   if(carro.estacionado === true && carro.luxo === true){
     carro.luxo = false
     return `O carro ${placaDoCarro} não é mais considerado um carro de luxo`
   } else if (carro.estacionado !== true){
    return `O carro ${placaDoCarro} não está estacionado`
   } else if(carroLuxo !== true){
    return `O carro ${placaDoCarro} não é luxuoso`
   }
 }
//console.log(naoMaisLuxo());
//console.log(carro.luxo);
/*
function naoMaisLuxo1(){
    if(!carro.estacionado){
        return `O carro ${placaDoCarro} não está estacionado` 
    }else if(!carro.placa){
        return `O carro ${placaDoCarro} não é luxuoso`
    }
    carro.luxo = false
    return `O carro ${placaDoCarro} não é mais considerado um carro de luxo`
}
console.log(naoMaisLuxo());
console.log(carro.luxo);*/
