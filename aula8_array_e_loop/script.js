//var ultimoItem = videoGames.pop()

for (var numero = 0; numero <= 10; numero++) {
	console.log(numero)
}

var i = 0
while (i < 10) {
	console.log(i)
	i++
}

var videoGames = ['Xbox', 'PS4', 'Switch', '3DS']

for (var item = 0; item < videoGames.length; item++) {
	console.log(videoGames[item])
	if (videoGames[item] === 'PS4') {
		break
	}
}
var fruta = ['Banana', 'Pera', 'Maça', 'Uva']
fruta.forEach(function (item, index, fruta) {
	fruta.pop()
	console.log(item, index, fruta)
})
