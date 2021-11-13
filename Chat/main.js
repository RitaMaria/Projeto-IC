const submitButton = document.querySelector(".submit")
const chatArea = document.querySelector(".chat-area")
const inputElm = document.querySelector("input")

// mandar mensagem
submitButton.addEventListener('click', ()=>{
    let userInput = inputElm.value;

    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="Chat/imagens/user-icon.png" class="avatar">
    </div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';

})

function open_attach_file() {
    document.getElementById("attach_file").style.display = "block";
}


function sendpdf() {
    let p = `<div class="out-msg">
    <span class="my-msg"><a href="guiao.pdf">Pdf teste</a></span>
    <img src="Chat/imagens/user-icon.png" class="avatar">
    </div>`;

    chatArea.insertAdjacentHTML("beforeend", p);

    document.getElementById("attach_file").style.display = "none";

}

function iniciar_chamada() {
    location.href="chamada.html";
}