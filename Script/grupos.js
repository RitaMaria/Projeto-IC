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

let grupos_elementos = [];
grupos_elementos.push(["Bruno", "João"]);
grupos_elementos.push(["Bruno", "João", "José", "Marta"]);

if(localStorage.grupos_e != undefined) {
    grupos_elementos = JSON.parse(localStorage.grupos_e);
}
else {
    localStorage.setItem("grupos_e", JSON.stringify(grupos_elementos));
}

let grupos_categorias = [];
grupos_categorias.push("Crimes");
grupos_categorias.push("Politica");

if(localStorage.grupos_c != undefined) {
    grupos_categorias = JSON.parse(localStorage.grupos_c);
}
else {
    localStorage.setItem("grupos_c", JSON.stringify(grupos_categorias));
}



var addNewGrupo = function () {
    var nome = document.getElementById('nome').value;
    if (nome =="") {
        alert("Deve preencher o nome do grupo.");
        return false;
    }
    var categoria = document.getElementById("categoria").value;
    if (categoria =="") {
        alert("Deve preencher a categoria do grupo.");
        return false;
    }
    grupos_nomes.push(nome);
    grupos_nomes.sort();
    for (var j= 0; j < grupos_nomes.length; j++) {
        if (grupos_nomes[j] == nome) {
            grupos_categorias.splice(j, 0, categoria);
        }
    }
    document.getElementById("displaygrupos").innerHTML = "";
    for (var i = 0; i < grupos_nomes.length; i++) {
        document.getElementById("displaygrupos").innerHTML += '<i id="group_img" class="fa fa-group" onclick="open_group_info('+i+')"><p id="group_text">' + grupos_nomes[i] + '</p></i>';
    }
    document.getElementById("displaygrupos").innerHTML += '<i id="group_img" class="fa fa-plus-circle" onclick="open_adicionar_grupo_popup()"><p id="group_text">Adicionar grupo</p></i>';
    document.getElementById("add_group_container").style.display = "none";
    var elementos = [];
    for (var option of document.getElementById("sel_amigos").options) {
        if (option.selected) {
            elementos.push(option.value);
        }
    }
    elementos.sort();
    if (elementos==[]) {
        alert("Deve adicionar contactos ao grupo.");
        return false;
    }
    for (var j= 0; j < grupos_nomes.length; j++) {
        if (grupos_nomes[j] == nome) {
            grupos_elementos.splice(j, 0, elementos);
        }
    }
    document.add_group.reset();
    localStorage.setItem("grupos_n", JSON.stringify(grupos_nomes));
    localStorage.setItem("grupos_c", JSON.stringify(grupos_categorias));
    localStorage.setItem("grupos_e", JSON.stringify(grupos_elementos));
}

function open_group_info (i) {
    localStorage.setItem("ativeName", JSON.stringify(grupos_nomes[i]));
    document.getElementById("group_info").style.display = "block";
    document.getElementById("nome_g").innerHTML = grupos_nomes[i];
    document.getElementById("categoria_g").innerHTML = "<b>Categoria:</b> " + grupos_categorias[i];
    document.getElementById("contactos_g").innerHTML = "<b>Contactos: </b>";
    for (var j=0; j<grupos_elementos[i].length; j++) {
        document.getElementById("contactos_g").innerHTML += grupos_elementos[i][j] + ", ";
    }
    document.getElementById("contactos_g").innerHTML = document.getElementById("contactos_g").innerHTML.substring(0, document.getElementById("contactos_g").innerHTML.length -2);
    let contactos_possiveis = contactos_nomes.filter(x => !grupos_elementos[i].includes(x));
    let sel_g = document.getElementById("sel_amigos_g");
    sel_g.innerHTML = "";
    for (var j = 0; j < contactos_possiveis.length; j++) {
        var opt = document.createElement("option");
        opt.value = opt.text = contactos_possiveis[j];
        sel_g.add(opt);
    }
    document.getElementById("add_contact_g").onclick = function() {
        for (var option of document.getElementById("sel_amigos_g").options) {
            if (option.selected) {
                grupos_elementos[i].push(option.value);
                grupos_elementos[i].sort();
                sel_g.remove(sel_g.selectedIndex);
            }
        }
        document.getElementById("contactos_g").innerHTML = "<b>Contactos: </b>";
        for (var j=0; j<grupos_elementos[i].length; j++) {
            document.getElementById("contactos_g").innerHTML += grupos_elementos[i][j] + ", ";
        }
        document.getElementById("contactos_g").innerHTML = document.getElementById("contactos_g").innerHTML.substring(0, document.getElementById("contactos_g").innerHTML.length -2);
        localStorage.setItem("grupos_e", JSON.stringify(grupos_elementos));
        localStorage.setItem("ativeParticipants", JSON.stringify(grupos_elementos[i]));
    }

    document.getElementById("go_chat").onclick = function() {
        location.href = "chat.html";
    }

    localStorage.setItem("ativeParticipants", JSON.stringify(grupos_elementos[i]));

    document.getElementById("go_chamada").onclick = function() {
        location.href = "chamada.html";
    }

}

function close_group_info() {
    document.getElementById("group_info").style.display = "none";
}

function remover_grupo() {
    document.getElementById("group_info").style.display = "none";
    var nome_remover = document.getElementById("nome_g").innerHTML;
    var localizacao = grupos_nomes.indexOf(nome_remover, 0);
    grupos_categorias.splice(localizacao, 1);
    grupos_nomes.splice(localizacao, 1);
    grupos_elementos.splice(localizacao, 1);
    localStorage.setItem("grupos_c", JSON.stringify(grupos_categorias));
    localStorage.setItem("grupos_n", JSON.stringify(grupos_nomes));
    localStorage.setItem("grupos_e", JSON.stringify(grupos_elementos));
    listGrupos();
}



var listGrupos = function () {
    document.getElementById("displaygrupos").innerHTML = "";
    for (var i = 0; i < grupos_nomes.length; i++) {
        document.getElementById("displaygrupos").innerHTML += '<i id="group_img" class="fa fa-group" onclick="open_group_info('+i+')"><p id="group_text">' + grupos_nomes[i] + '</p></i>';
    }
    document.getElementById("displaygrupos").innerHTML += '<i id="group_img" class="fa fa-plus-circle" onclick="open_adicionar_grupo_popup()"><p id="group_text">Adicionar grupo</p></i>';
    document.getElementById("side_contactos").style.fontWeight="normal";
    document.getElementById("side_grupos").style.fontWeight="bold";
}

window.addEventListener('load', listGrupos());
