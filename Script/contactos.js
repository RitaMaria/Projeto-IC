function open_adicionar_contacto_popup() {
    document.getElementById("add_contact_container").style.display = "block";
}

function close_adicionar_contacto_popup() {
    document.getElementById("add_contact_container").style.display = "none";
}



let contactos_nomes = ["Bruno", "João", "José", "Marta"];
contactos_nomes.sort();
let contactos_telemovel = ["925463251", "965847523", "958756325", "965478521"];
let contactos_email = ["bruno@gmail.com", "joao@gmail.com", "jose@gmail.com", "marta@gmail.com"];
localStorage.setItem("contactos_t", JSON.stringify(contactos_telemovel));
localStorage.setItem("contactos_e", JSON.stringify(contactos_email));

if (localStorage.contactos_n != undefined){
    contactos_nomes = JSON.parse(localStorage.contactos_n);
}
else {
    localStorage.setItem("contactos_n", JSON.stringify(contactos_nomes));
}

var listContacts = function () {
    for (var i = 0; i < contactos_nomes.length; i++) {
        document.getElementById("displayContacts").innerHTML += '<i id="group_img" class="fa fa-user"><p id="group_text">' + contactos_nomes[i] +'</p></i>';
    }
    document.getElementById("displayContacts").innerHTML += '<i id="group_img" class="fa fa-plus-circle" onclick="open_adicionar_contacto_popup()"><p id="group_text">Adicionar contacto</p></i>';
}

var addNewContact = function () {
    var nome = document.getElementById('nome').value;
    var telemovel = document.getElementById("telemovel").value;
    var email = document.getElementById("email").value;
    contactos_nomes.push(nome);
    contactos_nomes.sort();
    contactos_telemovel.push(telemovel);
    contactos_email.push(email);
    document.getElementById("displayContacts").innerHTML = "";
    for (var i = 0; i < contactos_nomes.length; i++) {
        document.getElementById("displayContacts").innerHTML += '<i id="group_img" class="fa fa-user"><p id="group_text">' + contactos_nomes[i] +'</p></i>';
    }
    document.getElementById("displayContacts").innerHTML += '<i id="group_img" class="fa fa-plus-circle" onclick="open_adicionar_contacto_popup()"><p id="group_text">Adicionar contacto</p></i>';
    document.getElementById("add_contact_container").style.display = "none";
    document.add_contact.reset();
    localStorage.setItem("contactos_n", JSON.stringify(contactos_nomes));
    localStorage.setItem("contactos_t", JSON.stringify(contactos_telemovel));
    localStorage.setItem("contactos_e", JSON.stringify(contactos_email));
}

window.addEventListener('load', listContacts());