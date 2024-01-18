var numero = []

var contadorNumero = 0
var continuar = true
while(continuar){
    var numeroAtual = prompt("qual seu nome?")
    numeroAtual = parseInt(numeroAtual)
    numero[contadorNumero] = numeroAtual
    contadorNumero++
    console.log (numero)
    if(contadorNumero >= 5){
        continuar = false
    }
}
CalcularMedia()



function CalcularMedia(){
    console.log("a media sera calculada aqui!!")
    console.log((numeroAtual + numeroAtual + numeroAtual + numeroAtual + numeroAtual) / 2)
 }