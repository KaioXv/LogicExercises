function PodePlantar(canteiro, n) {
    let count = 0;
    let i = 0;

    while (i < canteiro.length) {
        if (canteiro[i] === 0){
            if (i === 0 || canteiro[i - 1] === 0){
                canteiro[i] = 1;
                count++;
            }
        }
        i++;
    }
    return count >= n;
}

const canteiro = [1, 0, 1, 0, 1];
const n = 1;

const resultado = PodePlantar(canteiro, n);
console.log(resultado);