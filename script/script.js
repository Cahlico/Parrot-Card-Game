var numeroCartas = prompt("Quantas cartas você deseja?\n(escolha um número par entre 4 e 14)");
var numeroCartas = parseInt(numeroCartas);
var index;
var cont;
var imagensEscolhidas = [];

// revisa se o numero escolhido esta de acordo com as condicoes
while ((numeroCartas > 14) || (numeroCartas < 4) || (numeroCartas % 2 !== 0)) {
    numeroCartas = prompt("Quantas cartas você deseja?\n(escolha um número par entre 4 e 14)");
}

//array dos gifs a serem utilizados
listaImagens = ["<img src='imagens/bobrossparrot.gif'>", "<img src='imagens/explodyparrot.gif'>", "<img src='imagens/fiestaparrot.gif'>", "<img src='imagens/metalparrot.gif'>", "<img src='imagens/revertitparrot.gif'>", "<img src='imagens/tripletsparrot.gif'>", "<img src='imagens/unicornparrot.gif'>"];

//disposicao de cartas com base na escolha do usuario
for(index = 1; index <= numeroCartas; index++) {
    document.querySelector("main > img:nth-child(" + index + ")").style.display = "inline-block";
}

//escolhe os gifs aleatoriamente para serem usados
for(index = 0; index < (numeroCartas/2); index++) {
    var valorAleatorio = Math.floor(Math.random() * listaImagens.length);
    var imagemAleatoria = listaImagens[valorAleatorio];

    for(cont = 0; cont < listaImagens.length; cont++) {
        if(imagemAleatoria === imagensEscolhidas[cont]) {
            valorAleatorio = Math.floor(Math.random() * listaImagens.length);
            imagemAleatoria = listaImagens[valorAleatorio];
            cont = 0;
        }
    }

    imagensEscolhidas.push(imagemAleatoria);
}




//document.querySelector("main").innerHTML = listaImagens[2];