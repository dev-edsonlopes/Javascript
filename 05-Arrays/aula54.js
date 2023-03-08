//Coleção MAP em Javascript
const caixa = document.querySelector('#caixa')

let mapa = new Map()
mapa.set('Curso', 'Javascript')
mapa.set(1073822, 'Edson Lopes')
mapa.set('nota', 7.8)
mapa.set(2023,2024)

console.log(mapa)

caixa.innerHTML = mapa.get('Curso')