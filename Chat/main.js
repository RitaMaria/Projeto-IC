const submitButton = document.querySelector(".submit")
const chatArea = document.querySelector(".chat-area")
const inputElm = document.querySelector("input")

// mandar mensagem
submitButton.addEventListener('click', ()=>{
    let userInput = inputElm.value;

    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="imagens/user-icon.png" class="avatar">
    </div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';

})

