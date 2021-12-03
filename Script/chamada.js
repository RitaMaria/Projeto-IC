document.getElementById("nome_grupo").innerHTML = localStorage.ativeChat;

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
