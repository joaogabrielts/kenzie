function handleModal(){
  const input_form_register = document.querySelector(".form__register-link")
const  dialog_form = document.querySelector("#dialog_form")

input_form_register.addEventListener('click', (event) =>{
    event.preventDefault()
    dialog_form.showModal()
    closeModal()
   
})  
}



function closeModal(){
    const buttonFechar = document.querySelector('.button_div')
    const  dialog_form = document.querySelector("#dialog_form")
    buttonFechar.addEventListener("click", () =>{
        dialog_form.close()
    })
}
handleModal()

const buttonFechar = document.querySelector('.button_div')
console.log(buttonFechar);