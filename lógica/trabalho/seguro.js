var prompt = require("prompt-sync")()

var modelo = prompt("Veículo: ")

var avaliacao = Number(prompt("Avalição: "))

var fabriAno = Number(prompt("Ano de Fabricação: "))

var seguro = avaliacao * 0.04

var desconto = (2021 - fabriAno) * 50

var total = seguro - desconto

console.log(`Proposta de Seguro - Sandero`)

console.log(`----------------------------`)

console.log(`Valor do Seguro R$: ${seguro.toFixed(2)}`)

console.log(`Desconto R$: ${desconto.toFixed(2)}`)

console.log(`Valor a Pagar R$: ${total.toFixed(2)}`)