var prompt = require("prompt-sync")()

var num = Number(prompt("Número: "))

console.log(`Contagem Regressiva`)


for(var i=num; i>=1; i=i-1){
console.log(i)
}

console.log("Fogo!")

