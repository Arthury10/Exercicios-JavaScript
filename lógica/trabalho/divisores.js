var prompt = require("prompt-sync")()

var numero = Number(prompt("Número: "))

for (var i=1; i <= numero; i ++){
  if (numero % i == 0) {
    console.log(`${i}`);
}
}

