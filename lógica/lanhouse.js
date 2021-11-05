var prompt = require("prompt-sync")()

var valor = Number(prompt("Valor da Hora R$: "))
var tempo = Number(prompt("Tempo de uso (mín): "))

var tempoCobrar =Math.ceil(tempo / 60)
var total = valor * tempoCobrar

//Saída
console.log(`Valor a pagar R$: ${total}`)