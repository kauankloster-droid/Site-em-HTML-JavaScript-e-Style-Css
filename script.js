const tema = document.getElementById("tema");

tema.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        tema.innerHTML="☀️";

    }else{

        tema.innerHTML="🌙";

    }

});

function curtir(botao){

    let numero = botao.querySelector("span");

    numero.innerHTML++;

}

function amar(botao){

    let numero = botao.querySelector("span");

    numero.innerHTML++;

}
