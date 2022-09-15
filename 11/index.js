const original = [5, 7, 13, 17, 26, 34, 118, 245];

function filtraNumeros(o) {
    o.sort((a, b) => a - b);
    let newArr = [];
    for (let i of o) {
        if ((i > 10 && i < 20) || i > 100) {
            newArr.push(i);
        }
    }
    return newArr;
}
console.log(filtraNumeros(original));
