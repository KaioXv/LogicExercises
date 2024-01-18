
 function encontrarsomas(numero, alvo){
    const indicePorNumero = [];

    for(let i = 0; i < numero.length; i++){
        const complemento = alvo - numero[i];
        if (indicePorNumero[complemento] !== undefined){
            return[indicePorNumero[complemento], i];
        }
        indicePorNumero[numero[i]] = i;
    }
    return null;
}
let array_exemplo = [2,7,11,15];
let alvo_exemplo = 17;

const EncontrarResultado = encontrarsomas(array_exemplo, alvo_exemplo)
console.log(EncontrarResultado)