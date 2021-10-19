var pessoa = {
	nome: 'Arthur',
	Idade: 20
}
console.log(pessoa)

var quadrado = {
	lados: 4,
	area: function (lado) {
		return lado * lado
	},
	perimetro: function (lado) {
		return lado * this.lados
	}
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

//////////////////OU///////////////
var quadrado = {
	lados: 4,
	area(lado) {
		return lado * lado
	},
	perimetro(lado) {
		return lado * this.lados
	}
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))
