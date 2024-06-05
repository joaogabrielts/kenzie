if (typeof(Storage) !== "undefined") {
    // Suporte para LocalStorage
    console.log("Possui suporte")
} else {
    // Sem suporte para LocalStorage
    console.log("Não possui suporte")
}


// Armazenar dados no LocalStorage
localStorage.setItem("nome", "João");

// Recuperar dados do LocalStorage
const nome = localStorage.getItem("nome");
//console.log(nome);