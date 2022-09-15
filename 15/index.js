const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

function parOuImpar(numbers, par, impar) {
    for (let number of numbers) {
        number % 2 === 0 ? par.push(number) : impar.push(number);
    }
    return `Pares: ${par}\nImpares: ${impar}`;
}
console.log(parOuImpar(original, pares, impares));
