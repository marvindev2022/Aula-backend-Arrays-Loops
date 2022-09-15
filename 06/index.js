const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

function somaDosPares(){

  let result=0
  for (let i of numeros) {
      if (i % 2 === 0) {
        result+=i
    }
}return result
}console.log(somaDosPares(numeros))