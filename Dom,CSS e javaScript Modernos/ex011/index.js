let elemente = document.getElementsByClassName("article")[0]

elemente.addEventListener('click', function(event){
    console.log('---> target', event.target);
    console.log('---->currentTarget', event.currentTarget);
})

let elementeLink = document.getElementsByClassName("link_to")[0]

elementeLink.addEventListener("click", function(event){
    // event.preventDefault()
     event.stopPropagation()
})