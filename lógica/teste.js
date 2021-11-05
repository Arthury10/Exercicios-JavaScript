var prompt = require ("prompt-sync")()

var tempo = Number(prompt("Tempo (min): "))

if (tempo <= 30) {
    var pagar = 0.00
} else if (tempo<=60) {
    var pagar = 5
} else {
    var pagar = (5 * 0.1) + 5
}

console.log(`Pagar R$: ${pagar}`)