function NumeroRomanoConversão(simbolo) {
    switch (simbolo){
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
         default:
            return 0;                   
    
    }
}
function ConverterNumero (NumeroRomano){
    let total = 0;

    for(i = 0; i < NumeroRomano.length; i++) {
        const valoratual = NumeroRomanoConversão(NumeroRomano[i]);
        const valorproximo  = NumeroRomanoConversão(NumeroRomano[i+1]);

        if(valorproximo > valoratual){
            total += valorproximo - valoratual;
            i++;
        }else{
            total += valoratual;
        }
    }
    return total;

}

const NumeroRomano = "XXXL";
const inteiro = ConverterNumero(NumeroRomano);

console.log(`O numero romano ${NumeroRomano} é equivalente a ${inteiro}`);