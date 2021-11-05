var prompt = require("prompt-sync")()

var pacientes = Number(prompt("Número de pacientes: "))

var dentista = Math.floor(pacientes / 2)

if(pacientes <= 5){
  console.log(`Dentista A: ${pacientes} pacientes`)
}else{
  console.log(`Dentista A: ${dentista}`)
  console.log(`Dentista B: ${dentista + 1}`)
}