const numeros = [3, 24, 1, 8, 11, 7, 15,123];

function maiorNumero() {
    numeros.sort((a,b) =>b-a)
    return numeros[0]
}console.log(maiorNumero(numeros))
