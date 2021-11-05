var prompt = require("prompt-sync")()

var quantidade = Number(prompt('Quantidade de bombom: '))

var preco = Number(prompt('Valor do bom-bom R$: '))

var valorFinal = preco * quantidade

console.log(`Valor: ${valorFinal.toFixed(0)}`)

if(quantidade > 10){
  console.log(`Você ganhou 1 bom-bom de brinde`)
}





