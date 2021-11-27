function enviar_msg() {
    let userInput = document.querySelector("input").value;

    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <i id="img_user" class="fa fa-user-o"></i>
    </div>`;

    document.querySelector(".chat-area").insertAdjacentHTML("beforeend", temp);
    document.querySelector("input").value = '';
}

function open_attach_file_popup() {
    document.getElementById("attach_file_popup").style.display = "block";
}

function close_attach_file_popup() {
    document.getElementById("attach_file_popup").style.display = "none";
}

function sendpdf() {
    let p = `<div class="out-msg">
    <span class="my-msg"><a href="apontamentos@13Set2021.pdf">apontamentos@13Set2021.pdf</a></span>
    <i id="img_user" class="fa fa-user-o"></i>
    </div>`;

    document.querySelector(".chat-area").insertAdjacentHTML("beforeend", p);

    document.getElementById("attach_file_popup").style.display = "none";

}

function iniciar_chamada() {
    location.href="chamada.html";
}