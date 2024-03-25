const carros = [
  {
      modelo: "Ka",
      marca: "Ford",
      ano: "2000",
      cor: "Branco",
      completo: false,
      acessorios: ['Vidro Elétrico'],
      preco: 6799.33
  },
  {
      modelo: "Gol",
      marca: "VW",
      ano: "1996",
      cor: "Preto",
      completo: false,
      acessorios: ['Trava'],
      preco: 12199.13
  },
  {
      modelo: "Palio",
      marca: "Fiat",
      ano: "1995",
      cor: "Verde",
      completo: false,
      acessorios: [],
      preco: 11099.1
  },
  {
      modelo: "Monza",
      marca: "Chevrolet",
      ano: "1993",
      cor: "Vinho",
      completo: false,
      acessorios: [],
      preco: 14578.25
  },
  {
      modelo: "Saveiro",
      marca: "VW",
      ano: "2013",
      cor: "Prata",
      completo: false,
      acessorios: [],
      preco: 28399.13
  },
  {
      modelo: "Gol",
      marca: "VW",
      ano: "1996",
      cor: "Preto",
      completo: true,
      acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
      preco: 14350.45
  },
  {
      modelo: "Gol",
      marca: "VW",
      ano: "2013",
      cor: "Preto",
      completo: true,
      acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
      preco: 22109.21
  },
  {
      modelo: "Montana",
      marca: "Chevrolet",
      ano: "2011",
      cor: "Azul",
      completo: false,
      acessorios: [],
      preco: 15999.13
  },
  {
      modelo: "Stilo",
      marca: "Fiat",
      ano: "2000",
      cor: "Preto",
      completo: false,
      acessorios: [],
      preco: 17251.36
  }
]



//-------------------------------------------------------

function contaTotal(carro){
 return carro.length
}
//--------------------------------------------------------


function totalPreco(carro){
let total = 0;

for(let i = 0; i < carro.length; i++){
    total += carro[i].preco
}
 
return ' A soma do preço de todos veículos é ' + total.toFixed(2).replace('.', ',')
}

//console.log(totalPreco(carros));


//-----------------------------------------------------------------

function filtraPorMarca(lista, marca){
    let veiculosPormarca = []
    for(let i = 0; i < lista.length; i++){
        if(lista[i].marca.toLowerCase() === marca.toLowerCase()){
        veiculosPormarca.push(lista[i])
        }
    }
    return veiculosPormarca
}
//console.log(filtraPorMarca(carros,'vW'));
//----------------------------------------------------------------

function filtraPorAcessorio(lista, acessorio){
    let veiculosPorAcessorio = []
    for(let i = 0; i < lista.length; i++){
      for(let j = 0; j < lista[i].acessorios.length; i++){
        if(lista[i].acessorios[j].toLowerCase() === acessorio.toLowerCase()){
            veiculosPorAcessorio.push(lista[i])
        }
      }
    }
    return veiculosPorAcessorio
}

//console.log(filtraPorAcessorio(carros, "alarme"));

//------------------------------------------------------------------

function eCarroCompleto(lista){
    let veiculosCompleto = []
    for(let i = 0; i < lista.length; i++ ){
        if(lista[i].completo === true){
            veiculosCompleto.push(lista[i])
        }
    }
    return veiculosCompleto
}
//console.log(eCarroCompleto(carros));

//------------------------------------------------------------------

function adicionaCarro() {
carros.push(
 {
modelo: "esportivo",
marca: "Bmw",
ano: "2024",
cor: "Preto",
completo: true,
acessorios: [],
preco: 20251.36
}
)

}
//adicionaCarro()
//console.log(carros);

//--------------------------------------------------------------------

function removeCarro(lista, index){
    if(index >= 0 && index < lista.length){
       lista.splice(index,1) 
       return lista
    }
   return "Valor não encontrado"
}

//console.log(removeCarro(carros,8));

//-------------------------------------------------

function removeCarro1(lista, indice){
    let carrosAtualizados = []

    for(let i = 0; i < lista.length; i++){
        if(i != indice){
            carrosAtualizados.push(lista[i])
        }
    }

    if(carrosAtualizados.length < indice){
        return "Posição inválida"
    }
    return carrosAtualizados
}
//console.log(removeCarro1(carros,7));

//--------------------------------------------------------

function contaCarrosNovos(lista){
let carroNovos = [] 
let carroNovos1  = 0
 for(let i = 0; i < lista.length; i++){
    if(lista[i].ano >= 2013 ){
        carroNovos1++
        carroNovos.push(lista[i])
    }
 }
 return carroNovos1
}
// console.log(contaCarrosNovos(carros));

//----------------------------------------------------------



let  pessoa = {
        nome: "gabriel",
        telefoneParaContado: "0000-0000",
    }

function donoDosCarros(lista,indice,dono){
    
     for(let i = 0; i < lista.length; i++ ){
        lista[i].dono = {} 
     }
     lista[indice].dono = dono
     
    }
    donoDosCarros(carros, 8 ,pessoa)
    console.log(carros);


    function donoDosCarrosDaEmpressa(lista,indice,dono){
        for(let i = 0; i <lista.length; i++ ){
            if(i == indice){
                lista[i].dono = dono
            }
        }
    }
    donoDosCarrosDaEmpressa(carros,0, pessoa)
    console.log(carros);