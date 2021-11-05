var prompt = require("prompt-sync")()



var distancia = Number(prompt("Distancia (em Km): "))

var horario = Number(prompt("Horario: "))





if (horario > 19) {

    var total = distancia * 3



} else {

    var total = distancia * 2

}



console.log(`Valor a Pagar R$: ${total}`)