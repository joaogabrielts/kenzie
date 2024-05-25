//Desenvolva sua lógica aqui utlizando o método de array filter e verifique o resultado no console do seu navegador.

//1) Crie uma função para filtrar os hotéis que estão localizados no Brasil
function filterCountry(array) {
    const country = array.filter((elemento, indice, array) => {
        return elemento.country === "Brasil";
    })
    return country
}
console.log(filterCountry(data));

// 2) Crie uma função para filtrar os hotéis que possuem o preço igual ou maior que R$200,00.
function filterPrice(array) {
    const price = array.filter((elemento, indice, array) => {
        return elemento.price >= 200;
    })
    return price;
}
console.log(filterPrice(data));

//3) Crie uma função para filtrar os hotéis que estão abertos nesse momento (isOpen)
function filterIsOpen(array) {
    const isOpen = array.filter((elemento, indice, array) => {
        return elemento.isOpen === true;
    })
    return isOpen;
}
console.log(filterIsOpen(data));

//DESAFIO
//4) Crie uma função que filtre apenas o hotel com o nome “Copacabana Palace”. Após isso, crie outra função para verificar as datas disponíveis para agendamento nesse hotel (isAvaliable).
function filterHotelName(array) {
    const name = array.filter((elemento, indice, array) => {
        return elemento.name === 'Copacabana Palace'
    })
    return name;
}

function filterToBook() {
    const hotel = filterHotelName(data)[0];
    const abertoHotel = hotel.toBook.filter((elemento,indice,array) =>{
     return elemento.isAvailable === true
    })
    return abertoHotel;
}
console.log(filterToBook());