const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];


function controleDeFila(dentro,fora){

  while(dentro.length < 5){
    dentro.push(fora[0])
    fora.shift()
  }
  return [dentro,fora]
  
 }console.log(controleDeFila(filaDeDentro,filaDeFora))
