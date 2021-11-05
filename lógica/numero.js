var prompt = require('prompt-sync')()

var num = Number(prompt('Número: '))

var resto = num % 2

if (resto == 0) {
  console.log(`${num} É par`)
} else {
  console.log(`${num} É impar`)
}
