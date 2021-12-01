function open_adicionar_contacto_popup() {
    document.getElementById("add_contact_container").style.display = "block";
}

function close_adicionar_contacto_popup() {
    document.getElementById("add_contact_container").style.display = "none";
}

let contactos = ["Bruno", "João", "José", "Marta"];

var listContacts = function () {
    localStorage.setItem("contactos", JSON.stringify(contactos));
    document.getElementById("displayContacts").innerHTML = '<i id="group_img" class="fa fa-plus-circle" onclick="open_adicionar_contacto_popup()"><p id="group_text">Adicionar contacto</p></i>';
    for (var i = 0; i < contactos.length; i++) {
        document.getElementById("displayContacts").innerHTML += '<i id="group_img" class="fa fa-user"><p id="group_text">' + contactos[i] +'</p></i>';
    }
}

var addNewContact = function () {
    var nome = document.getElementById('nome').value;
    contactos.push(nome);
    listContacts();
    document.getElementById("add_contact_container").style.display = "none";
    document.add_contact.reset();
}

window.addEventListener('load', listContacts());