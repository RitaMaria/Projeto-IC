document.getElementById("nome_grupo").innerHTML = JSON.parse(localStorage.ativeName);

//Avaliacao do topico
for(let i = 0; i < 5; i++){
    document.getElementById('estrela'+String(i)).addEventListener('click', function(){estrela(i);});
}

function estrela(j){
    for(let i = 0; i <= j; i++){
        document.getElementById('estrela'+String(i)).className = "fa fa-star checked";
    }
    for(let n = j+1; n < 5; n++){
        document.getElementById('estrela'+String(n)).className = "fa fa-star";
    }
}

//Avaliacao do anfitriao
for(let i = 0; i < 5; i++){
    document.getElementById('estrela_'+String(i)).addEventListener('click', function(){estrela_a(i);});
}

function estrela_a(j){
    for(let i = 0; i <= j; i++){
        document.getElementById('estrela_'+String(i)).className = "fa fa-star checked";
    }
    for(let n = j+1; n < 5; n++){
        document.getElementById('estrela_'+String(n)).className = "fa fa-star";
    }
}

imagens_pessoas = ["https://images.unsplash.com/photo-1566821582776-92b13ab46bb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
"https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
"https://images.unsplash.com/photo-1600207438283-a5de6d9df13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
"https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80",
"https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",];

let participants = JSON.parse(localStorage.ativeParticipants);

function listParticipants () {
    //Participantes
    for (var i=0; i<participants.length; i++) {
        document.getElementById("participantes_list").innerHTML += '<li><i class="fa fa-user"></i> '+participants[i]+'</li>';
    }
    //Lista espera
    for (var j=0; j<1; j++) {
        document.getElementById("lista-espera").innerHTML += '<li><i class="fa fa-user"></i> '+participants[j] + '</li>';
    }
    document.getElementById("lista-espera").innerHTML += '<li id="lista-espera-bottom">Participar <i class="fa fa-hand-paper-o"></i></li>';
    //Imagens pessoas
    for (var i=0; i<participants.length;i++) {
        document.getElementById("vc").innerHTML += '<div class="video-participant_c"><div class="participant-actions"><btn class="fa fa-microphone-slash"></btn> <btn class="fa fa-camera"></btn></div><a class="name-tag">'+participants[i]+'</a><img class="img_f" src='+imagens_pessoas[i]+'alt="participant"></div>';
    }
}

window.addEventListener('load', listParticipants());