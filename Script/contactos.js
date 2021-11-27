function open_adicionar_contacto_popup() {
    document.getElementById("add_contact_container").style.display = "block";
}




//nao funciona

var Contact = function (name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

var contacts = [];
contacts.push(new Contact("Tom", "tom@gmail.com", "973-562-1234"));
contacts.push(new Contact("Jerry", "jerry@gmail.com", "302-123-4523"));

var listContacts = function () {
    document.getElementById("displayContacts").innerHTML = '<i id="group_img" class="fa fa-plus-circle" onclick="open_adicionar_contacto_popup()"><p id="group_text">Adicionar contacto</p></i>';
    for (var i = 0; i < contacts.length; i++) {
        document.getElementById("displayContacts").innerHTML += '<i id="group_img" class="fa fa-user"><p id="group_text">' + contacts[i].name +'</p></i>';
    }
}

var addNewContact = function () {
    var name = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('telemovel').value;
    var contact = new Contact(name, email, phone);
    contacts.push(contact);
    listContacts();
}

listContacts();