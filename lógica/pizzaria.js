var prompt = require('prompt-sync')()

var conta = Number(prompt('Valor da conta R$: '))
var num = Number(prompt('N de Clientes: '))

var rateio = conta / num

console.log(`Valor por pessoa R$: ${rateio}`)
