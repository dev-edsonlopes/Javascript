//Coleção SET em Javascript
const caixa = document.querySelector('#caixa')

let musicas = new Set(['Touch the ground', 'Far way'])
musicas.add('I can be My self')
musicas.add('Fear of Death')

musicas.forEach(el => {
    console.log(el)
    caixa.innerHTML += el+'</br>'
})

