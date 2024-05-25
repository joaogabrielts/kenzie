/*
  Importe corretamente as constantes usuarios e enderecos dos arquivos
  dbUsers.js e dbAdress.js, respecitvamente
*/
import {usuarios} from "./dbUsers.js"
import { enderecos } from "./dbAddress.js";

// Faça as importações corretas acima
console.log(usuarios);
console.log(enderecos);

// Adicionar endereços aos usuarios pelo id
function addAddresToUser(listaDeUsuarios, listaDeEnderecos) {
     const listaAtualizada = listaDeUsuarios.map((elemento) => {
        const {id} = elemento
        const {endereco} = listaDeEnderecos.find((elemento) => {
            return elemento.userId == id
        })
        return {...elemento,endereco,}
     })
  return listaAtualizada;
}

// Descomente os consoles abaixo para testar suas funções
 console.log(addAddresToUser(usuarios, enderecos));

// Funcao para deletar o password
function deletePassword({ password, ...rest }) {
    return rest;
  }
   console.log(deletePassword(usuarios[0]));
  

// Listar os usuarios sem a senha
function listUsers(usuarios) {
    const semSenha = usuarios.map((elemento) => deletePassword(elemento))

  return semSenha;
}
 console.log(listUsers(usuarios));

// Listar somente nome, email e stack
function listUserStacks(listaDeUsuarios) {

    const listaNova =  listaDeUsuarios.map(({nome,email,stacks }) => ({
        nome,
        email,
        stacks,
    }))
  return listaNova;
}
 console.log(listUserStacks(usuarios));

//Deletar um usuário que tenha python na stack
function deleteUser(listaDeUsuarios) {
    const python = listaDeUsuarios.filter(({ stacks }) => !stacks.includes("Python"))
    .map((user) => deletePassword(user));
  return python;
}
 console.log(deleteUser(usuarios));