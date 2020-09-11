var rodadas = 0;
var elementoAnterior;
var cartaVirada;
var cartaAnterior;
var paresAcertados = 0;

//pega o li selecionado e gira para a imagem aleatoria
function giraCarta(elemento) {
    
    if(elemento === elementoAnterior) {
      return 0;
    }

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
        elemento.removeAttribute("onclick");
        elementoAnterior.removeAttribute("onclick");
        
        if(paresAcertados === numeroCartas/2) {
            alert("Você venceu em " + rodadas + " rodadas!");
            var irNovamente = prompt("Jogar denovo? (s/n)");
            
            //resetando as variaveis globais
            if(irNovamente.toUpperCase() === "S" || irNovamente.toUpperCase() === "SIM") {
                resetaVariaveis();
                removeCartas();
                escolherNumeroCartas();
            }
        }
    }
}