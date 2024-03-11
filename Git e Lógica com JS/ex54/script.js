const user = {
 username : "Pedro",
 password: "1234",
};

function alteraName(newName){
    user.username = newName;
}

function alteraPassaword(newPass){
    user.password = newPass;
}
 
function logIn({password, username}){
    if(user.username == username && user.password == password){
        console.log('logou');
    } else{
        console.log('Usuario Invalido');
    }
}
 const userAccess = {
    username : "Pedro",
    password: "1234",
 }

logIn(userAccess)

//-------------------------------------------------------------------------

function criarPessoa(nome, idade, cidade) {
    const pessoa = {
      nome: nome,
      idade: idade,
      cidade: cidade,
    };
    console.log(pessoa);
    return pessoa;
  }
  console.log(criarPessoa());

    

  function alterarNome(novoNome, pessoa){
     pessoa.nome = novoNome;
  }
  alterarNome('biel')

  
  function alterarIdade(novaIdade, pessoa){
;
  }
 
  
  function alterarCidade(novaCidade, pessoa){
    pessoa.cidade = novaCidade;
  }