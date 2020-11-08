function resetaVariaveis() {
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
  }
  
  //removendo ul atual e adicionando um ul vazio
  function removeCartas() {
      document.querySelector("ul").remove();
      var main = document.querySelector("main");
      novoUl = document.createElement("ul");
      main.appendChild(novoUl);
  }