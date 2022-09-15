const numeros = [2, 3, 4, 6];

function solucao(num) {
    let sum = 0;
    for (let i of num) {
        sum += i;
    }
    return sum;
}
console.log(solucao(numeros));
