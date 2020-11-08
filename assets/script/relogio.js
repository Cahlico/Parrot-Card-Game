var contador;
var intervalo;
var segundos = 0;
relogio();

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