var prompt = require("prompt-sync")()


var pesoRacao = Number(prompt('Peso da ração: '))

var peso = pesoRacao * 1000

var duracaoDiario = 300

var sobra = peso % duracaoDiario

var durara =  peso / duracaoDiario


console.log(`Sua ração durara: ${durara.toFixed(0)} por dia`)
console.log(`Sua ração durara: ${sobra}`)





