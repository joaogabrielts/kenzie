let lista = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let linha = lista[1][1]
console.log(linha);
 
lista[1][1] = '5'
console.log(lista);

for( let i = 0; i < lista.length; i++){
    for(let j = 0; j < lista[i].length; j++){
        console.log(lista[i][j]);
    }
}