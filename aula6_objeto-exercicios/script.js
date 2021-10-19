// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo
var dadosPessoais = {
	nome: 'Arthur',
	sobreNome: 'Ropke',
	idade: 20,
	nomeCompleto() {
		return `${this.nome} ${this.sobreNome} tem ${this.idade}`
	}
}
console.log(dadosPessoais)
console.log(dadosPessoais.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
	preco: 1000,
	portas: 4,
	marca: 'Audi'
}
carro.preco = 3000

console.log(carro)
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var labrador = {
	nome: 'Quin',
	idade: 9,
	raca: 'Labrador',
	nomeCompleto() {
		return `${this.nome} ele é um ${this.raca}, tem ${this.idade} anos e late quando vê um homem.`
	}
}

console.log(labrador)
console.log(labrador.nomeCompleto())

///////////////Ou///////////////////
var labrador = {
	nome: 'Quin',
	idade: 9,
	raca: 'Labrador',
	nomeCompleto(pessoa) {
		if (pessoa === 'homem') {
			return 'Latir'
		} else {
			return 'Nada'
		}
	}
}

console.log(labrador)
console.log(labrador.nomeCompleto('homem'))
