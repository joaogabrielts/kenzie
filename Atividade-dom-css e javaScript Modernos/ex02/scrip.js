const products = [
    {
      name: "Camiseta",
      price: 29.99,
    },
    {
      name: "Calça Jeans",
      price: 59.99,
    },
    {
      name: "Sapatos",
      price: 59.99,
    },
    {
      name: "Vestido",
      price: 89.99,
    },
    {
      name: "Chapéu",
      price: 19.99,
    },
    {
        name: "bone",
      price: 20.99,
    }
  ];
const ul = document.createElement("ul")

for(let i = 0; i < products.length; i++){  
const li = document.createElement("li")
const h3 = document.createElement("h3")
const p = document.createElement("p")
const button = document.createElement("button")

h3.innerText = products[i].name
p.innerText = products[i].price
button.innerText = "Adicionar ao carrinho" 

li.appendChild(h3)
li.appendChild(p)
li.appendChild(button)

ul.appendChild(li)

const body = document.querySelector("body")
body.appendChild(ul)


}
console.log(ul);