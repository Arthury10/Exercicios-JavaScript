var prompt = require("prompt-sync")()

var pessoas = Number(prompt("Número de pessoas: "))
var peixes = Number(prompt("Número de peixes: ")) 


if(peixes <= pessoas){
  var apagar = pessoas * 10
  
}else{
  var extra = (peixes - pessoas) * 5
  var apagar = (pessoas * 10) + extra

}

console.log(`A PAGAR R$: ${apagar}`)