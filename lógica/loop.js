var prompt = require("prompt-sync")()

var num = Number(prompt("Número: "))

console.log(`Tabuada do ${num}`)
console.log("--------------------------")

for (var i=1; i <= 10; i=i+1){
  console.log(`${num} x ${i} = ${num*i}`)
}