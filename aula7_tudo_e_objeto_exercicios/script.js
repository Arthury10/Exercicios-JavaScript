// nomeie 3 propriedades ou métodos de strings
var nome = 'Arthur'

nome.length
nome.charAt(5)
nome.replace('Arthur', 'Arthur Ropke')

console.log(nome, nome.length, nome.charAt(5), nome.replace('Arthur', 'Ropke'))

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn')
var removeBtn = document.querySelector('.removebtn')
var copiarTexto = document.querySelector('.copiarTexto')

btn.classList.add('red') //adiciona a classe azul
btn.addEventListener('click', function () {
	btn.classList.add('ativo') //adiciona a classe azul
	btn.classList.remove('red')
})

removeBtn.addEventListener('click', function () {
	btn.classList.remove('ativo')
})

console.log(btn)

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

copiarTexto.addEventListener('click', function copiarTexto() {
	var copiaTexto = document.getElementById('textcopy1')
	copiaTexto.select()
	copiaTexto.setSelectionRange(0, 99999)

	navigator.clipboard.writeText(copiaTexto.value)

	alert(`Texto Copiado ${copiaTexto.value}`)
})
