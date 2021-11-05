var prompt = require("prompt-sync")()

var produto = (prompt("Produto: "))

var preco = Number(prompt("Preço R$: "))

var parcelas = Number(prompt("Número de paracelas: "))

var pagEntrada = Number(prompt("Valor de Entrada: "))


var precoFinal = preco - pagEntrada

console.log(`Opçoes de pagamento da ${produto}`)
console.log("----------------------------------")
console.log(`Parcelas: ${parcelas}`)


for(var i=1; i<=parcelas; i=i+1){
console.log(`${i} Parcelas R$: ${(i).toFixed(2)} `)
  
}


