let listaAlunos = [
    {
      nome: 'João',
      curso: 'Ciencia da Computação',
      turno: 'Noturno',
      mediaCorte: 7,
      materias: [
        {
          nome: 'Calculo I',
          avaliacoes: [6, 8, 10, 8]
        },
        {
          nome: 'Pensamento Computacional',
          avaliacoes: [6, 8, 6, 8]
        },
        {
          nome: 'Linguagem Orientada a Objetos',
          avaliacoes: [7, 8, 9, 10]
        },
        {
          nome: 'Arquitetura de Organização de Computadores',
          avaliacoes: [6, 8, 7, 8]
        }
      ]
    }
  ]
     let materiasAprovada = 0
function alunoAprovado(a){
      for(let i = 0; i < a.length; i++){
       console.log(a[i]);
       for(let j = 0; j < a[i].materias.length; j++){
          let notaTotal = 0 
        let listab = a[i].materias[j]
        for(let b = 0; b < listab.avaliacoes.length; b++){
            notaTotal +=  listab.avaliacoes[b]
          }
            let notaDividida= notaTotal / 4
            if (notaDividida > 6) {
                materiasAprovada++
            }
         console.log(notaTotal);   
       } 
  }

} 
 //alunoAprovado(listaAlunos)
 
function calculaMedia(listaA){   
     for(let i = 0; i < listaA.length; i++){
     for(let j = 0; j < listaA[i].materias.length; j++){
        let notaTotal = 0 
       // let doisPrimeiro = []
      let listab = listaA[i].materias[j]
      for(let b = 0; b < listab.avaliacoes.length; b++){ 
            if(b < 2){
             notaTotal += listab.avaliacoes[b]
            }
        }
        let  notaDividida = notaTotal / 2
        console.log(notaDividida);
        if(notaDividida >= 6){
          console.log('passou')
        }
        }
     }
    }  
//calculaMedia(listaAlunos);

const onibus = {
    capacidade: 40,
    origem: 'Curitiba-PR',
    destino: 'Rio de Janeiro-RJ',
    paradas: [
      'São Paulo-SP',
      'Campinas-SP',
      'São José dos Campos-SP',
      'Volta Redonda-RJ'
    ],
    passageiros: [
      {
        nome: 'Luis da Silva',
        rg: '1234567890',
        bilhete: {
          origem: 'Curitiba-PR',
          destino: 'Campinas-SP',
          poltrona: 15,
        }
      },
      {
        nome: 'João',
        rg: '123456990',
        bilhete: {
          origem: 'São Paulo-SP',
          destino: 'Campinas-SP',
          poltrona: 16,
        
        },  
      },
      {
        nome: 'João TEIXEIRA',
        rg: '123456990',
        bilhete: {
          origem: 'São Paulo-SP',
          destino: 'Campinas-SP',
          poltrona: 16,
        } 
      },
      {
        nome: 'Davi teixeira',
        rg: '123456990',
        bilhete: {
          origem: 'São Paulo-SP',
          destino: 'Volta Redonda-RJ',
          poltrona: 16,
        } 
      },
      {
        nome: 'Charles TEIXEIRA',
        rg: '123456990',
        bilhete: {
          origem: 'São Paulo-SP',
          destino: 'São José dos Campos-SP',
          poltrona: 19,
        } 
      },
      {
        nome: 'João TEIXEIRA',
        rg: '123456990',
        bilhete: {
          origem: 'São Paulo-SP',
          destino: 'Volta Redonda-RJ',
          poltrona: 2,
        } 
      },
    ]
  }

 

  /*Desenvolva um método que recebe a parada atual como parâmetro e verifica se é igual ao valor de paradas do objeto onibus. OK
  
  Esse método deverá verificar em quais passageiros o destino é igual à parada atual do ônibus. ok */ 

function onibusParadas(parada){
     let descerNaParada = []
  for(let i = 0 ; i < onibus.paradas.length; i++){
     if(parada.toLowerCase() === onibus.paradas[i].toLowerCase()){
        for(let j = 0; j < onibus.passageiros.length;j++){
            if(onibus.paradas[i].toLowerCase() === onibus.passageiros[j].bilhete.destino.toLowerCase()){
               descerNaParada.push(onibus.passageiros[j])
            }
        }
     }
  }
  return descerNaParada
} 
console.log(onibusParadas("Volta Redonda-RJ"));




/*'São Paulo-SP',
    'Campinas-SP',
    'São José dos Campos-SP',
    'Volta Redonda-RJ' */


  