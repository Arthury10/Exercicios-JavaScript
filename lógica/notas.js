var prompt = require('prompt-sync')()

var nome = prompt('Nome do Aluno: ')
var nota1 = Number(prompt('1 Nota: '))
var nota2 = Number(prompt('2 Nota: '))

var media = (nota1 + nota2) / 2

console.log(`${nome}, sua média é: ${media.toFixed(1)}`)

if (media >= 7) {
  console.log(`Parabéns ${nome}! Voce foi aprovado(a)`)
} else {
  console.log(`Ops... ${nome}... você foi reprovado.`)
}
