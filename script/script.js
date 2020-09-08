numeroCartas = prompt("Quantas cartas você deseja?\n(escolha um número par entre 4 e 14)");
numeroCartas = parseInt(numeroCartas);

while ((numeroCartas > 14) || (numeroCartas < 4) || (numeroCartas % 2 !== 0)) {
    numeroCartas = prompt("Quantas cartas você deseja?\n(escolha um número par entre 4 e 14)");
}

/*listaImagens = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];

document.querySelector("main").innerText = listaImagens[2];*/