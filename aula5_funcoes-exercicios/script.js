// Crie uma função para verificar se um valor é Truthy
function verifica(idade) {
	if (!!idade) {
		return true
	} else {
		return false
	}
}
console.log(verifica(0))

/////////////OU///////////////
function verifica(idade) {
	return !!idade
}
console.log(verifica(1))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
	return lado * 4
}
console.log(perimetro(10))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function name(nome, sobrenome) {
	var nome = 'Arthur'
	var sobrenome = 'Ropke'
	return `Meu nome é ${nome} ${sobrenome}`
}
console.log(name())

////////////////OU/////////////////
function nameCompleto(nome, sobrenome) {
	return `Meu nome é ${nome} ${sobrenome}`
}
console.log(nameCompleto('Arthur', 'Ropke'))

// Crie uma função que verifica se um número é par
function par() {
	var num = 5
	var resto = num % 2
	if (resto === 0) {
		return `${num} é par`
	} else {
		return `${num} é impar`
	}
}
console.log(par())

/////////////////Ou/////////////////
function isEven(numero) {
	var modulo = numero % 2
	if (modulo === 0) {
		return true
	} else {
		return false
	}
}
console.log(isEven(10))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo() {
	var nome = 'arthur'
	return typeof nome
}
console.log(tipo())
/////////////////OU//////////////
function tipoDeDado(dado) {
	return typeof dado
}
console.log(tipoDeDado(50))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
	console.log('Arthur Ropke')
})

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function () {
	console.log('Arthur Ropke')
})

// Corrija o erro abaixo (CORRIGIDO) (Para sair o NaN TERÁ QUE COMENTAR DA LINNHA 106 A 117, PORQUE ELE ESTÁ PEGANDO A VAR TOTAL PAISES DE LÁ)
function precisoVisitar(paisesVisitados) {
	var totalPaises = 193
	return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
}
function jaVisitei(paisesVisitados) {
	var totalPaises = 193
	return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}
precisoVisitar(20)
jaVisitei(20)
console.log(precisoVisitar(50))
console.log(jaVisitei(50))

////////////////////////ou//////////////////////////
// Corrija o erro abaixo (CORRIGIDO)
/*
var totalPaises = 193
function precisoVisitar(paisesVisitados) {
	return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
}
function jaVisitei(paisesVisitados) {
	return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}
precisoVisitar(20)
jaVisitei(20)
console.log(precisoVisitar(50))
console.log(jaVisitei(50))
*/
