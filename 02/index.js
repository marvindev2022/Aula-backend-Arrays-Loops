const letras = ["A", "a", "B", "C", "E", "a"];
const letter = "E";
function solucao() {
    let sum = 0;
    for (let i of letras) {
        if (letter.toUpperCase() === i || letter.toLowerCase() === i) {
            sum++;
        }
    }
    if (sum > 0) {
        return `Foram encontradas ${sum} letras "${letter.toUpperCase()}" ou "${letter.toLowerCase()}"`;
    } else {
        return `Nenhuma letra "${letter.toUpperCase()}" ou "${letter.toLowerCase()}" foi encontrada.`;
    }
}
console.log(solucao(letras, letter));
