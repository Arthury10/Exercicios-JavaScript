var prompt = require("prompt-sync")()



var num = Number(prompt("Número: "))



var raiz = Math.sqrt(num)



// numero=16   => raiz=4          => Math.floor(4) => 4

// numero=17   => raiz=4.123105   => Math.floor(4.123105) => 4



if (raiz == Math.floor(raiz)) {

  console.log(`Raiz: ${raiz}`)

} else {

  console.log(`Não há raiz exata para ${num}`)

}



// -------------------------------- outra forma



if (Number.isInteger(raiz)) {

  console.log(`Raiz: ${raiz}`)

} else {

  console.log(`Não há raiz exata para ${num}`)

}