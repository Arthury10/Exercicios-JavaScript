var btn = document.querySelector('.btn')

btn.classList.add('azul') //adiciona a classe azul
btn.innerText //'clique'
btn.addEventListener('click', function () {
	console.log('clicou')
})

console.log(btn)
