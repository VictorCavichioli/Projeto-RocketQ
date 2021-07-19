import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões com a classe "check"
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button =>{
    //adicionar a escuta
    button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".actions a.delete")

//Abrir modal quando botão delete for clicado

deleteButton.forEach(button =>{
    //adicionar a escuta
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    //Abrir modal
    event.preventDefault()
    const text = check ? "Marcar como lido" : "Excluir"

    const slug = check ? "check" : "delete"

    const roomId = document.querySelector("#room-id").dataset.id

    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")

    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`

    modalDescription.innerHTML =  `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`

    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}
