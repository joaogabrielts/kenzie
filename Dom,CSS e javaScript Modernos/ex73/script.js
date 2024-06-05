const button = document.querySelector('button')
const body = document.body
let darkMode = false

function theneChangh(){
    darkMode = !darkMode
    body.classList.toggle("dark-mode")
    localStorage.setItem('theme', JSON.stringify(darkMode))
}

button.addEventListener('click', (event) => {
    theneChangh()
} )

function themeAnalays(){
    darkMode = JSON.parse(localStorage.getItem('theme'))

    if(darkMode){
        body.classList.add("dark-mode")
    }
}

themeAnalays()