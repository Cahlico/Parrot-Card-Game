var numeroCartas;
var imagemAleatoria = "";
var index;
var cont;
var listaImagens;
var imagensEscolhidas = [];
var posicao = [];
var rodadas = 0;
var elementoAnterior;
var cartaVirada;
var cartaAnterior;
var paresAcertados = 0;
var contador;
var intervalo;
var segundos = 0;

//array dos gifs a serem utilizados
listaImagens = ["<img src='imagens/bobrossparrot.gif' class='verso'>", "<img src='imagens/explodyparrot.gif' class='verso'>", "<img src='imagens/fiestaparrot.gif' class='verso'>", "<img src='imagens/metalparrot.gif' class='verso'>", "<img src='imagens/revertitparrot.gif' class='verso'>", "<img src='imagens/tripletsparrot.gif' class='verso'>", "<img src='imagens/unicornparrot.gif' class='verso'>"];

escolherNumeroCartas();
relogio();

// revisa se o numero escolhido esta de acordo com as condicoes
function escolherNumeroCartas() {
    numeroCartas = prompt("Quantas cartas você deseja?\n(escolha um número par entre 4 e 14)");
    numeroCartas = parseInt(numeroCartas);

    while ((numeroCartas > 14) || (numeroCartas < 4) || (numeroCartas % 2 !== 0)) {
        numeroCartas = prompt("Quantas cartas você deseja?\n(escolha um número par entre 4 e 14)");
    }

    escolherCartas();
}

//escolhe os gifs aleatoriamente para serem usados
function escolherCartas() {
    
    for(index = 0; index < (numeroCartas/2); index++) {
        var valorAleatorio = Math.floor(Math.random() * listaImagens.length);
        imagemAleatoria = listaImagens[valorAleatorio];
          
        imagensEscolhidas.push(verificaImagem()); //verifica uma imagem para nao ser escolhida mais de uma vez
    }
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

//compara os pares de cartas, se forem diferentes elas viram para baixo novamente
function verificaPares(elemento, elementoAnterior) {

    cartaVirada = elemento.querySelector("img:last-child").src;
    cartaAnterior = elementoAnterior.querySelector("img:last-child").src;
    
    if (cartaVirada !== cartaAnterior) {
        elemento.querySelector("img:first-child").style.transform = "rotateY(0deg)";
        elemento.querySelector("img:last-child").style.transform = "rotateY(180deg)";
        elementoAnterior.querySelector("img:first-child").style.transform = "rotateY(0deg)";
        elementoAnterior.querySelector("img:last-child").style.transform = "rotateY(180deg)";
    }

    else {
        
        paresAcertados++;
        
        if(paresAcertados === numeroCartas/2) {
            alert("Você venceu em " + rodadas + " rodadas!");
            var irNovamente = prompt("Jogar denovo? (s/n)");
            
            //resetando as variaveis globais
            if(irNovamente.toUpperCase() === "S" || irNovamente.toUpperCase() === "SIM") {
                rodadas = 0;
                paresAcertados = 0;
                numeroCartas = 0;
                imagemAleatoria = "";
                index = 0;
                cont = 0;
                imagensEscolhidas = [];
                posicao = [];
                rodadas = 0;
                paresAcertados = 0;
                segundos = 0;
                removeCartas();
            }
        }
    }
}

//removendo ul atual e adicionando um ul vazio
function removeCartas() {
    document.querySelector("ul").remove();
    var main = document.querySelector("main");
    novoUl = document.createElement("ul");
    main.appendChild(novoUl);
    escolherNumeroCartas();
}

//altera o valor do contador
function relogio() {
    contador = document.querySelector(".contador");
    contador.innerText = segundos;

    intervalo = setInterval(contaSegundos, 1000);
}

//soma 1 aos segundos a cada 1000ms
function contaSegundos() {
    
    segundos++;
    contador.innerText = segundos;

    if(paresAcertados === numeroCartas/2) {
        clearInterval(intervalo);
    }
}