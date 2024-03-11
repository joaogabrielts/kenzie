const meuObjetoPessoa = {
    nome : 'ino',
    idade: 25,
    cidade: 'Curitiba',

}
 console.log(meuObjetoPessoa.nome);
 meuObjetoPessoa.nome = 'Hinata'
 console.log(meuObjetoPessoa);
 meuObjetoPessoa.cla = 'Yamanaka'
 
delete meuObjetoPessoa.cidade
console.log(meuObjetoPessoa);

const enderecos = [
    {
        logradouro:"A1",
        cidade:'Brasilia',
        numero : 120,
    },
    {
        logradouro:"B1",
        cidade:'Brasilia',
        numero : 140,
    },
    {
        logradouro:"C1",
        cidade:'Brasilia',
        numero : 20,
    }
 ]

 console.log(enderecos[0].numero);
 console.log(enderecos);

 const meuObjetoPessoa1 = 
 {
    nome: 'joão',
    idade:30,
    enderecos:
    [
        {
            logradouro:"A1",
            cidade:'Brasilia',
            numero : 120,
        },
        {
            logradouro:"B1",
            cidade:'Brasilia',
            numero : 140,
        },
        {
            logradouro:"C1",
            cidade:'Brasilia',
            numero : 20,
        }
    ]
 }
 console.log(meuObjetoPessoa1.enderecos[0]);