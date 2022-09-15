const numeros = [54, 22, 14, 87, 10, 284];

function soluction() {
    const dez = 10;
    for (let i = 0; i < numeros.length; i++) {
      if (dez === numeros[i]){
        return i
      }
    }return "-1"
}
console.log(soluction(numeros));
