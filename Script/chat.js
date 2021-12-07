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
    document.getElementById("file_img_1").style.border = "none";
    document.getElementById("file_img_2").style.border = "none";
    document.getElementById("file_img_3").style.border = "none";
}

function sendpdf() {
    if(document.getElementById("file_img_2").style.border=="5px solid black") {
        let p = `<div class="out-msg">
        <span class="my-msg"><a href="apontamentos@13Set2021.pdf">apontamentos@13Set2021.pdf</a></span>
        <i id="img_user" class="fa fa-user-o"></i>
        </div>`;

        document.querySelector(".chat-area").insertAdjacentHTML("beforeend", p);

        document.getElementById("attach_file_popup").style.display = "none";

        document.getElementById("file_img_1").style.border = "none";
        document.getElementById("file_img_2").style.border = "none";
        document.getElementById("file_img_3").style.border = "none";
    }
}

function iniciar_chamada() {
    location.href="chamada.html";
}

function sel_fich(target) {
    if (document.getElementById("file_img_1") == target) {
        target.style.border = "5px solid black";
        document.getElementById("file_img_2").style.border = "none";
        document.getElementById("file_img_3").style.border = "none";
    }
    else if (document.getElementById("file_img_2") == target) {
        document.getElementById("file_img_1").style.border = "none";
        target.style.border = "5px solid black";
        document.getElementById("file_img_3").style.border = "none";
    }
    else if (document.getElementById("file_img_3") == target) {
        document.getElementById("file_img_1").style.border = "none";
        document.getElementById("file_img_2").style.border = "none";
        target.style.border = "5px solid black";
    }
}

document.getElementById("group_name").innerHTML = JSON.parse(localStorage.ativeName);

let participants = JSON.parse(localStorage.ativeParticipants);

function listParticipants () {
    for (var i=0; i<participants.length; i++) {
        document.getElementById("participants_list").innerHTML += '<li><i class="fa fa-user"></i> '+participants[i]+'</li>';
    }
}

function sair_chat() {
    location.href="index.html";
}

window.addEventListener('load', listParticipants());