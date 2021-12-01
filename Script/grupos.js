function open_adicionar_grupo_popup() {
    document.getElementById("add_group_container").style.display = "block";
}

let sel = document.getElementById("sel_amigos");

let contactos_list = JSON.parse(localStorage.getItem("contactos"));

for (var i = 0; i < contactos_list.length; i++) {
    var opt = document.createElement("option");
    opt.value = opt.text = contactos_list[i];
    sel.add(opt);
}

function close_adicionar_grupo_popup() {
    document.getElementById("add_group_container").style.display = "none";
}

function iniciar_chamada() {
    location.href = "chamada.html";
}

let grupos = ["Debates-123", "Crimes"];

var listGrupos = function () {
    localStorage.setItem("grupos", JSON.stringify(grupos));
    document.getElementById("displaygrupos").innerHTML = '<i id="group_img" class="fa fa-plus-circle" onclick="open_adicionar_grupo_popup()"><p id="group_text">Adicionar grupo</p></i>';
    for (var i = 0; i < grupos.length; i++) {
        document.getElementById("displaygrupos").innerHTML += '<i id="group_img" class="fa fa-group" onclick="iniciar_chamada()"><p id="group_text">' + grupos[i] + '</p></i>';
    }
}

var addNewGrupo = function () {
    var nome = document.getElementById('nome').value;
    grupos.push(nome);
    listGrupos();
    document.getElementById("add_group_container").style.display = "none";
    document.add_group.reset();
    localStorage.setItem("grupos", JSON.parse(grupos));
}

window.addEventListener('load', listGrupos());