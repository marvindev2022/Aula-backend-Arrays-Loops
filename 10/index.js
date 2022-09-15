const number=[1,1,2,3,5,8,13,21,34,55,89,250]

function maiorDiferenca(){

number.sort((a,b) => b-a) 
return [number[0]-number[number.length-1]]
}console.log(maiorDiferenca(number))