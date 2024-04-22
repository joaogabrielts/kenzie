const form = document.querySelector(".form__container")

form.addEventListener("submit", function(event){
    event.preventDefault()

    const inputName = document.querySelector(".input__box--text")
    const selectPet = document.querySelector(".input__box--select")

    console.log(inputName.value);
    console.log(selectPet.value);
})