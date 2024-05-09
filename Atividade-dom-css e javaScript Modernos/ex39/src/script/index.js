const menuButton = document.querySelector("#button")
console.log(menuButton);
const menu = document.querySelector(".menu-principal")
console.log(menu);

menuButton.addEventListener("click", () =>{
    

    menu.classList.toggle("show")
    if(menuButton.innerText === "menu"){
       menuButton.innerText = "X"
    } else{
        menuButton.innerText = 'menu'
    }
})