function openForm() {
    document.getElementById("form_adicionaramigo").style.display = "block";
}

var list = document.getElementById("amigos_container");

function addAmigo(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var div = document.createElement("div");
    div.classList.add("section");
    var text=document.createTextNode(username + " " + email);
    div.appendChild(text);
    document.body.appendChild(div);

    list.appendChild(div);

    document.getElementById("form_adicionaramigo").style.display = "none";

    return false;
}




//a partir daqui nao funciona
var options = "";

for (var i=0; i<list.length; i++) {
    options += '<option value="' + list[i] + '" />';
}

document.getElementById("amigos_list").innerHTML = options;