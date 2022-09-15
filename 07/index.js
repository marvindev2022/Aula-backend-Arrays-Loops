const nomes = ["Ana", "Joana", "Carlos", "amanda", "amelia", "artemise"];

function nomesComA(name) {
    let result = [];
    for (let i = 0; i < name.length; i++) {
        
      if (name[i][0] === "A" || name[i][0] === "a") {
            result.push(name[i]);
        }
    }return result
}console.log(nomesComA(nomes))
