var prompt = require('prompt-sync')()

var name = prompt('Nome: ')
var sexo = prompt('Sexo (M/F): ')
var altura = Number(prompt('Altura: '))

//Conectivos Lógicos
//if(idade >= 18 && cidade == "Pelotas") => && (and) "e"
//if(cor == "Azul" || preco < 20000)     => || (or) "ou"

if (sexo == 'M' || sexo == 'm') {
  var peso = 72.7 * altura - 58
} else {
  var peso = 62.1 * altura - 44.7
}

console.log(`${name}, Seu peso ideal é ${peso.toFixed(2)}Kg`)
