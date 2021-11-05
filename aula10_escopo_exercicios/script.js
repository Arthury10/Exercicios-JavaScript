// Por qual motivo o código abaixo retorna com erros?
{
	var cor = 'preto'
	const marca = 'Fiat'
	let portas = 4
	console.log(cor, marca, portas)
}
//porque o console.log estava fora do scopo e o var estava vazando
// Como corrigir o erro abaixo? adicionando uma const dois = 2 na function dividirDois(x)
function somarDois(x) {
	const dois = 2
	return x + dois
}
function dividirDois(x) {
	const dois = 2
	return x / dois
}
console.log(somarDois(4))
console.log(dividirDois(6))

// O que fazer para total retornar 500? Mudar VAR para LET
const numero = 50

for (let numero = 0; numero < 10; numero++) {
	console.log(numero)
}

const total = 10 * numero
console.log(total)
