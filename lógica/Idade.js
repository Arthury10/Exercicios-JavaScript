var prompt = require('prompt-sync')()

var nome = prompt('Nome: ')
var anonascimento = Number(prompt('Ano de nascimento: '))

var idade = 2021 - anonascimento

if (idade >= 18) {
  console.log(`${nome}, Você é maior de idade`)
} else {
  console.log(`${nome}, Você é menor de idade`)
}
