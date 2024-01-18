let modelos = [];
let anos = [];
let valores = [];

function cadastrarCarros (modelo,ano,valor) {
    modelo = prompt("insira o modelo do carro")
    ano = prompt("insira o ano do carro")
    valor = prompt("insira o valor do carro")
    modelos.push(modelo);
    anos.push(ano)
    valores.push(valor)
}

function IndicarCarroBarato(){
    let indicar = 0;
    for(let i = 1; i < valores.length; i++){
        if(valores[1]< valores[indicar]){
            indicar = 1;
        }
    }
    return indicar;

}

function IndicarCarroCaro (){
    let indicar = 0;
    for(let i = 1; i < valores.length; i++){
        if(valores[1] > valores[indicar]){
            indicar = 1;
        }
    }
    return indicar;
}

function CalcularMedia(){
    let total = 0
    for(let i=1; i < valores.length; i++){
        total += valores[i];
    }
    return total / valores.length;
}
cadastrarCarros();
cadastrarCarros();
cadastrarCarros();

IndicarCarroBarato();
IndicarCarroCaro();

console.log(modelos);
console.log(anos);
console.log(valores);


console.log(IndicarCarroBarato());
console.log(IndicarCarroCaro());

console.log("a media dos valores dos carros é: ", CalcularMedia())