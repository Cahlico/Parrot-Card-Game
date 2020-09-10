var numeroCartas = prompt("Quantas cartas você deseja?\n(escolha um número par entre 4 e 14)");
numeroCartas = parseInt(numeroCartas);
var index;
var cont;
var listaImagens;
var imagensEscolhidas = [];
var posicao = [];
var rodadas = 0;
var elementoAnterior;
var cartaVirada;
var cartaAnterior;

// revisa se o numero escolhido esta de acordo com as condicoes
while ((numeroCartas > 14) || (numeroCartas < 4) || (numeroCartas % 2 !== 0)) {
    numeroCartas = prompt("Quantas cartas você deseja?\n(escolha um número par entre 4 e 14)");
}

//array dos gifs a serem utilizados
listaImagens = ["<img src='imagens/bobrossparrot.gif' class='verso'>", "<img src='imagens/explodyparrot.gif' class='verso'>", "<img src='imagens/fiestaparrot.gif' class='verso'>", "<img src='imagens/metalparrot.gif' class='verso'>", "<img src='imagens/revertitparrot.gif' class='verso'>", "<img src='imagens/tripletsparrot.gif' class='verso'>", "<img src='imagens/unicornparrot.gif' class='verso'>"];

//escolhe os gifs aleatoriamente para serem usados
for(index = 0; index < (numeroCartas/2); index++) {
    var valorAleatorio = Math.floor(Math.random() * listaImagens.length);
    var imagemAleatoria = listaImagens[valorAleatorio];
      
    imagensEscolhidas.push(verificaImagem()); //verifica uma imagem para nao ser escolhida mais de uma vez
}

function verificaImagem() {

    for(cont = 0; cont <= (numeroCartas/2); cont++) {

        if(imagemAleatoria === imagensEscolhidas[cont]) {
            var indexAleatorio = Math.floor(Math.random() * listaImagens.length);
            imagemAleatoria = listaImagens[indexAleatorio];
            cont = 0;
            cont--;
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

    adicionaCartas(); //adiciona as cartas junto ao seus versos
}

//disposicao de cartas com base na escolha do usuario
function adicionaCartas() {
    
    for(index = 0; index < numeroCartas; index++) {
        var imagemVerso = posicao[index];
        var imagemFrente = "<img src='imagens/front.png'>";
        var lista = document.querySelector("ul");
        novoLi = document.createElement("li");
        novoLi.setAttribute("onclick", "giraCarta(this)")
        novoLi.innerHTML = imagemFrente + imagemVerso;
        lista.appendChild(novoLi);
    }
}

//pega o li selecionado e gira para a imagem aleatoria
function giraCarta(elemento) {
    
    elemento.querySelector("img:first-child").style.transform = "rotateY(-180deg)";
    elemento.querySelector("img:last-child").style.transform = "rotateY(0deg)";
    
    rodadas++;

    if (rodadas % 2 === 0) {

        setTimeout(verificaPares, 1000, elemento, elementoAnterior);
    }
    elementoAnterior = elemento;
}


function verificaPares(elemento, elementoAnterior) {

    cartaVirada = elemento.querySelector("img:last-child").src;
    cartaAnterior = elementoAnterior.querySelector("img:last-child").src;
    
    if (cartaVirada !== cartaAnterior) {
        elemento.querySelector("img:first-child").style.transform = "rotateY(0deg)";
        elemento.querySelector("img:last-child").style.transform = "rotateY(180deg)";
        elementoAnterior.querySelector("img:first-child").style.transform = "rotateY(0deg)";
        elementoAnterior.querySelector("img:last-child").style.transform = "rotateY(180deg)";
    }
}