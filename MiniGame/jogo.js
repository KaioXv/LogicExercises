const btnIniciar = document.querySelector('#btnIniciar');
const txtVitorias = document.querySelector('.vitorias')
const txtDerrotas = document.querySelector('.derrotas')


const tentativas = 3;
let derrotas = 0;
let vitorias = 0;



btnIniciar.addEventListener('click', iniciarJogo());


function iniciarJogo(){
    let contadorErro = 0;
    let numeroSorteado = sortearNumero();

    let numero;
    let numerosDigitados = [];

    do{
        const mensagem = obterMsgDigiteNumero(numerosDigitados, contadorErro);
        numero = window.prompt(mensagem)
        

        
        while(numeroInvalido(numero)){
            numero = window.prompt(` O numero ${numero} é invalido. Digite outro!`);
        }
        while(numeroDuplicado(numerosDigitados, numero)){
            const mensagem = obterMsgDigiteNumero(numerosDigitados, contadorErro);
            numero = window.prompt(mensagem)
        };

        numerosDigitados.push(numero);

        if ( numero != numeroSorteado){
            contadorErro++
        }

    }while(numero != numeroSorteado && contadorErro < tentativas);

    atualizarPlacar(contadorErro);
    finalizarRodada(contadorErro, numeroSorteado);
}


function sortearNumero(){
    return Math.ceil(Math.random() * 10);
}

function numeroInvalido(numero){
    return !numero || numero < 1 || numero > 10;

}

function numeroDuplicado(numerosDigitados, numero){
    return numerosDigitados.findIndex(n => n == numero )> -1;
}


function atualizarPlacar(contadorErro){
    if(contadorErro == 3){
        derrotas++
        txtDerrotas.innerText = derrotas;


    }else{
        vitorias++
        txtDerrotas.innerText = derrotas;


    }

    


}
function finalizarRodada(contadorErro, numeroSorteado){
    btnIniciar.innerText = 'Deseja iniciar novamente?';
    let mensagem = contadorErro < 3 ? 'Parabéns, Você acertou, o numero era: ' + numeroSorteado : 'Você errou kkkk, o numero era: ' + numeroSorteado;

    alert(mensagem);

    

   
}

function obterMsgDigiteNumero(numerosDigitados, contadorErro){
    let tantativasRestantes = tentativas - contadorErro;
    let mensagem = ( 
        numerosDigitados.length > 0 ?
        'você ja digitou: ' + numerosDigitados.join(' - ') + ' \n ' +
        'Ainda resta: ' + tantativasRestantes + ' Tentativas' :
        'você tem ' + tantativasRestantes + ' Tentativa(s) - digite um numero'
    );
    return mensagem;
}
