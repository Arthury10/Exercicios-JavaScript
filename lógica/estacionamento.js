var prompt = require("prompt-sync")()

var valor = Number(prompt("Valor da Hora R$: "))
var tempo = Number(prompt("Tempo de uso (mín): "))

//var tempoCobrar =Math.ceil(tempo / 30)
//var total = valor * tempoCobrar

if(tempo <=30){
  console.log(`Cortesia`)
}
if(tempo >=30 || <=60){
console.log(`Valor a pagar R$: ${valor}`)
}

//Saída
console.log(`Valor a pagar R$: ${valor}`)