var prompt = require("prompt-sync")()

var saque = Number(prompt("Valor do saque R$: "))

if(saque % 10 == 0){
  console.log(`Você irá receber ${saque} notas de R$10`)
}else{
  console.log(`Não é possível pagar ${saque} com notas de R$10`)
}
