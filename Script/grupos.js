function open_adicionar_grupo_popup() {
    document.getElementById("add_group_container").style.display = "block";
}

function close_adicionar_grupo_popup() {
    document.getElementById("add_group_container").style.display = "none";
}



let contactos_nomes = ["Bruno", "João", "José", "Marta"];

if (localStorage.contactos_n != undefined){
    contactos_nomes = JSON.parse(localStorage.contactos_n);
}
else {
    localStorage.setItem("contactos_n", JSON.stringify(contactos_nomes));
}



let sel = document.getElementById("sel_amigos");

for (var i = 0; i < contactos_nomes.length; i++) {
    var opt = document.createElement("option");
    opt.value = opt.text = contactos_nomes[i];
    sel.add(opt);
}



let grupos_nomes = ["Debates-123", "Crimes"];
grupos_nomes.sort();

if (localStorage.grupos_n != undefined) {
    grupos_nomes = JSON.parse(localStorage.grupos_n);
}
else {
    localStorage.setItem("grupos_n", JSON.stringify(grupos_nomes));
}

function iniciar_chamada(i) {
    location.href = "chamada.html";
    localStorage.setItem("ativeChat", grupos_nomes[i]);
}

var listGrupos = function () {
    for (var i = 0; i < grupos_nomes.length; i++) {
        document.getElementById("displaygrupos").innerHTML += '<i id="group_img" class="fa fa-group" onclick="iniciar_chamada('+i+')"><p id="group_text">' + grupos_nomes[i] + '</p></i>';
    }
    document.getElementById("displaygrupos").innerHTML += '<i id="group_img" class="fa fa-plus-circle" onclick="open_adicionar_grupo_popup()"><p id="group_text">Adicionar grupo</p></i>';
}

var addNewGrupo = function () {
    var nome = document.getElementById('nome').value;
    grupos_nomes.push(nome);
    grupos_nomes.sort();
    document.getElementById("displaygrupos").innerHTML = "";
    for (var i = 0; i < grupos_nomes.length; i++) {
        document.getElementById("displaygrupos").innerHTML += '<i id="group_img" class="fa fa-group" onclick="iniciar_chamada()"><p id="group_text">' + grupos_nomes[i] + '</p></i>';
    }
    document.getElementById("displaygrupos").innerHTML += '<i id="group_img" class="fa fa-plus-circle" onclick="open_adicionar_grupo_popup()"><p id="group_text">Adicionar grupo</p></i>';
    document.getElementById("add_group_container").style.display = "none";
    document.add_group.reset();
    localStorage.setItem("grupos_n", JSON.stringify(grupos_nomes));
}

window.addEventListener('load', listGrupos());
