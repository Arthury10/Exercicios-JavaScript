var prompt = require("prompt-sync")()

var num1 = Number(prompt("1 Número: "))
var num2 = Number(prompt("2 Número: "))


var resp = ""

for(var i=num1; i<=num2; i=i+1){
  resp = resp + i + " "
}

console.log(`Entre ${num1} e ${num2}: ${resp}`)

