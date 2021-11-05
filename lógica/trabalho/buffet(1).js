var prompt = require("prompt-sync")()


var pesoBuffet = Number(prompt('Peso do buffet: '))

var peso = pesoBuffet / 1000


var valorApagar = peso * 52


console.log(`cliente serviu: ${pesoBuffet.toFixed(0)}g`)
console.log(`Valor a pagar: ${valorApagar}`)





