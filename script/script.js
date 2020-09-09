var numeroCartas = prompt("Quantas cartas você deseja?\n(escolha um número par entre 4 e 14)");
numeroCartas = parseInt(numeroCartas);
var index;
var cont;
var listaImagens;
var imagensEscolhidas = [];
var posicao = [];

// revisa se o numero escolhido esta de acordo com as condicoes
while ((numeroCartas > 14) || (numeroCartas < 4) || (numeroCartas % 2 !== 0)) {
    numeroCartas = prompt("Quantas cartas você deseja?\n(escolha um número par entre 4 e 14)");
}

//array dos gifs a serem utilizados
listaImagens = ["<img src='imagens/bobrossparrot.gif'>", "<img src='imagens/explodyparrot.gif'>", "<img src='imagens/fiestaparrot.gif'>", "<img src='imagens/metalparrot.gif'>", "<img src='imagens/revertitparrot.gif'>", "<img src='imagens/tripletsparrot.gif'>", "<img src='imagens/unicornparrot.gif'>"];

//disposicao de cartas com base na escolha do usuario
for(index = 0; index < numeroCartas; index++) {
    var imagem = "<img src='imagens/front.png'>";
    var cartas = document.querySelector(".frente");
    var novoLi = document.createElement("li");
    novoLi.innerHTML = imagem;
    cartas.appendChild(novoLi);
}

//escolhe os gifs aleatoriamente para serem usados
for(index = 0; index < (numeroCartas/2); index++) {
    var valorAleatorio = Math.floor(Math.random() * listaImagens.length);
    var imagemAleatoria = listaImagens[valorAleatorio];
      
    imagensEscolhidas.push(verificaImagem()); //verifica uma imagem para nao ser escolhida mais de uma vez
}

function verificaImagem() {
    alert(imagemAleatoria);
    for(cont = 0; cont < (numeroCartas/2); cont++) {
        if(imagemAleatoria === imagensEscolhidas[cont]) {
            valorAleatorio = Math.floor(Math.random() * listaImagens.length);
            imagemAleatoria = listaImagens[valorAleatorio];
            cont = 0;
        }
    }
    
    posicao.push(imagemAleatoria); //adiciona duas de cada imagem no array posicao
    posicao.push(imagemAleatoria);
    
    if (posicao.length === numeroCartas) {
        dispoeCartas(); //faz um shuffle no array posicao
    }

    return imagemAleatoria;
}

function dispoeCartas() {
    var index = posicao.length;
    var variavelTemporaria;
    var indexAletorio;

    while (0 !== index) {

        indexAletorio = Math.floor(Math.random() * index);
        index -= 1;

        //substituindo a posicao dos elementos
        variavelTemporaria = posicao[index];
        posicao[index] = posicao[indexAletorio];
        posicao[indexAletorio] = variavelTemporaria;
    }
}
alert(imagensEscolhidas);
alert(posicao);