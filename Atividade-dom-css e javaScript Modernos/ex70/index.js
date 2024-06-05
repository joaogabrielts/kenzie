const list = JSON.parse(localStorage.getItem('listaDeAfazeres')) || [
    {title: "Fazer compras no supermercado", delete: 'Excluir'},
    {title: 'Meditar durante 30 minutos', delete: 'Excluir'},
    {title: 'Almoçar às 12:30', delete: 'Excluir'},
    {title: 'Ler o livro Y depois do almoço', delete: 'Excluir'},
];

function renderElemento(arry){
    const ul = document.querySelector("ul")
    const main = document.querySelector('main')
    main.appendChild(ul)
    ul.innerHTML = ''
    for(let i = 0; i < arry.length; i++){
        const listItem = createTaskItem(arry[i], i)
        ul.appendChild(listItem)
    }
}

function createTaskItem(task, index){
    const div = document.createElement('div')
    const li = document.createElement('li')
    const p = document.createElement('p')
    const button = document.createElement('button')

    button.addEventListener('click', () => {
        list.splice(index, 1)
        localStorage.setItem('listaDeAfazeres', JSON.stringify(list))
        renderElemento(list)
    })

    div.classList.add('div')
    li.classList.add('content__lista')
    p.classList.add("content__lista--title")
    p.innerText = task.title
    button.classList.add("content__lista--button")
    button.innerText = task.delete

    div.appendChild(li)
    li.appendChild(p)
    li.appendChild(button)
    return li
}

function novaTarefa(){
    const buttonInput = document.getElementsByClassName("content__add--button")[0]
    buttonInput.addEventListener('click', (event) =>{
        event.preventDefault()
        const inputForm = document.getElementById('content__add--input')
        const novaTarefa = {title: inputForm.value, delete: 'Excluir'}
        list.unshift(novaTarefa)
        localStorage.setItem('listaDeAfazeres', JSON.stringify(list))
        inputForm.value = '' // Limpa o campo de entrada
        renderElemento(list)
    })
}


document.addEventListener('click', () => {
    renderElemento(list)
    novaTarefa()
})

