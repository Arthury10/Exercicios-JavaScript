var prompt = require('prompt-sync')()

var produto = prompt('Produto: ')
var preco = Number(prompt('Preço R$: '))

var avista = preco - preco * 0.1
var parcela = preco / 3

// \n gera uma quebra de linha
console.log(`Promoção de ${produto}`)
console.log(`---------------------------`)
console.log(`Á vista R$: ${avista}`)
console.log(`Ou 3x de R$: ${parcela.toFixed(2)}`)
