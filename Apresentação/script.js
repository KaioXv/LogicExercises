let nome = prompt("qual seu nome")
let idade = prompt("insira sua idade")
let peso = prompt ("quanto você pesa em KG")
let altura = prompt ("qual sua altura em CM")
let profissão = prompt("insira sua profissão")

console.log("ola", nome, "você tem", idade, "anos", "é", profissão, "tem", altura, "m", "de altura", "e pesa", peso + "kg" )


if(idade >= 18){
    console.log("você pode tomar umas geladas")
}else if(idade < 18){
    console.log ("você não pode tomar umas geladas")
}

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log("essa é sua idade em meses: " + meses)
console.log("essa é sua idade em semanas: " + semanas)
console.log("essa é sua idade em dias: " + dias)

let imt = peso / (altura * altura)

if (imc < 18.5){
    console.log("magreza")
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("normal")
}else if(imc >= 25 && imc <= 30){
    console.log("sobrepeso")
}else{
    console.log ("obesidade")
}

let anoatual = 2023
let anonascimento =  anoatual - idade
console.log ("você nasceu no ano de: " + anonascimento)
