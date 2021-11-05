var prompt = require("prompt-sync")()

var palavra = prompt("Palavra: ")
var num = Number(prompt("Número: "))

var resp = " "

for (var i=1; i<num; i=i+1){
  resp = resp + palavra + " * "
}
resp = resp + palavra

console.log(resp)

