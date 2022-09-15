const arrayA = [5, 32, 3, 44, 1,15];
const arrayB = [57, 4, 21, 2, 13,14];

function compararArray(a, b) {
    let argument = 0;
    let result = [];
    for (let i = argument; i < a.length; i++) {
        if (a[i] < b[i]) {
            result.push(a[i]);
        } else {
            result.push(b[i]);
        }

        argument++;
    }
    return result;
}
console.log(compararArray(arrayA, arrayB));
