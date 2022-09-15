
const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

function fastFood(){
  
  let novoPedido = "pedido 15";
filaDePedidos.push(novoPedido)
filaDePedidos.shift()

return filaDePedidos

}console.log(fastFood(filaDePedidos))