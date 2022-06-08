
function Mostrar() {
    var nome = document.getElementById("nick").value;
    var input = document.getElementById("bemvindo");

    if (nome == '') {
        alert('Insira seu nick')
    } else {
    bemvindo.innerHTML = `Olá ${nome}, vamos jogar! <br>De acordo com a opção de intervalo que você escolheu, descubra o número.`;
    document.getElementById("divoculta").style.display="block";
    }
}



var numeroSecreto = parseInt(Math.random() * 11);
var numeroSecreto2 = parseInt(Math.random() * 101);
var numeroSecreto3 = parseInt(Math.random() * 201);
var tentativa = 2;


function Chutar() { 

    var selection = document.getElementById("intervalo").value;
    
    var chute = parseInt(document.getElementById('valor').value);
    console.log(chute);
    
    var resultado = document.getElementById("resultado");

    
    if (selection == 1) {
    
    if (chute == numeroSecreto) {
        resultado.innerHTML = "Parabéns! Você conseguiu adivinhar!";

    } else if (chute > 10 || chute < 0 && tentativa > 0) {
        resultado.innerHTML = "Entre com um número entre 0 e 10";

    } else if (chute > numeroSecreto && tentativa == 2) { 
        tentativa --;
        resultado.innerHTML = `O número é menor! <br>Você ainda tem 2 tentativas.`;

    } else if (chute > numeroSecreto && tentativa == 1) { 
        tentativa --;
        resultado.innerHTML = `O número é menor! <br>Você ainda tem 1 tentativa.`;

    } else if (chute < numeroSecreto && tentativa == 2) {
        tentativa--;
        resultado.innerHTML = `O número é maior! <br>Você ainda tem 2 tentativas.`; 
    
    } else if (chute < numeroSecreto && tentativa == 1) {
        tentativa--;
        resultado.innerHTML = `O número é maior! <br>Você ainda tem 1 tentativa.`; 

    } else if (tentativa == 0) {
        resultado.innerHTML = `Game Over! <br> O número secreto era ${numeroSecreto}. Tente novamente!`;   
    }
} else if (selection == 2) {
    if (chute == numeroSecreto2) {
        resultado.innerHTML = "Parabéns! Você conseguiu adivinhar!";

    } else if (chute > 100 || chute < 0 && tentativa > 0) {
        resultado.innerHTML = "Entre com um número entre 0 e 100";

    } else if (chute > numeroSecreto2 && tentativa == 2) { 
        tentativa --;
        resultado.innerHTML = `O número é menor! <br>Você ainda tem 2 tentativas.`;

    } else if (chute > numeroSecreto2 && tentativa == 1) { 
        tentativa --;
        resultado.innerHTML = `O número é menor! <br>Você ainda tem 1 tentativa.`;

    } else if (chute < numeroSecreto2 && tentativa == 2) {
        tentativa--;
        resultado.innerHTML = `O número é maior! <br>Você ainda tem 2 tentativas.`; 
    
    } else if (chute < numeroSecreto2 && tentativa == 1) {
        tentativa--;
        resultado.innerHTML = `O número é maior! <br>Você ainda tem 1 tentativa.`; 

    } else if (tentativa == 0) {
        resultado.innerHTML = `Game Over! <br> O número secreto era ${numeroSecreto2}. <br> Tente novamente!`;   
    }
} else if (selection == 3) {
    if (chute == numeroSecreto3) {
        resultado.innerHTML = "Parabéns! Você conseguiu adivinhar!";

    } else if (chute > 200 || chute < 0 && tentativa > 0) {
        resultado.innerHTML = "Entre com um número entre 0 e 200";

    } else if (chute > numeroSecreto3 && tentativa == 2) { 
        tentativa --;
        resultado.innerHTML = `O número é menor! <br>Você ainda tem 2 tentativas.`;

    } else if (chute > numeroSecreto3 && tentativa == 1) { 
        tentativa --;
        resultado.innerHTML = `O número é menor! <br>Você ainda tem 1 tentativa.`;

    } else if (chute < numeroSecreto3 && tentativa == 2) {
        tentativa--;
        resultado.innerHTML = `O número é maior! <br>Você ainda tem 2 tentativas.`; 
    
    } else if (chute < numeroSecreto3 && tentativa == 1) {
        tentativa--;
        resultado.innerHTML = `O número é maior! <br>Você ainda tem 1 tentativa.`; 

    } else if (tentativa == 0) {
        resultado.innerHTML = `Game Over! <br> O número secreto era ${numeroSecreto3}. <br> Tente novamente!`;   
    }
}
}