function voltar_chat() {
    location.href = "chat.html";
}

function iniciar_chat() {
    location.href = "chat.html";
}

function iniciar_chamada() {
    location.href = "chamada.html";
}

function open_rating_popup() {
    document.getElementById("rating_popup").style.display = "block";
}

function close_rating_popup() {
    document.getElementById("rating_popup").style.display = "none";
}

function voltar_debates() {
    location.href = "index.html";
}

function iniciar_chamada_crimes() {
    location.href = "chamada.html";
    document.getElementById("nome_grupo").innerHTML = "Crimes"; //nao funciona
}