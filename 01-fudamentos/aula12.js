// Operador Spread

let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44]
let n3 = [n1, n2]
let n4 = [...n1,...n2] // Spread ele espalha os dados dentro de uma unica variável.

console.log('n1:', n1)
console.log('n2:', n2)
console.log('n3:', n3)
console.log('n4:', n4)
console.log('----------')


// Operador Spread em Objeto
let mago = {vida: 100, magia: 250, forca: 60, velocidade: 60}
let guerreiro = {vida: 150, magia: 0, forca:120, velocidade: 100}

let newPlayer1 = {nomeUsuario: 'Bruxo',...mago}
let newPlayer2 = {nomeUsuario:'Espadachin',...guerreiro}


console.log(newPlayer1)
console.log(newPlayer2)
console.log('-----------------')
//Operador Spread em Função

const soma = (v1,v2,v3) => {
    return v1 + v2 + v3
}

let valores = [1, 4, 5, 50,60]

console.log(soma(...valores))

//Operador Spread em DOM

// const objs1 = document.getElementsByTagName('div')
// const objs2 = [...document.getElementsByTagName('div')]

/*
    Utilizando spread nas coleções de HTML ela passa a ser um Array,
    portanto tenho uma gama maior de metodos por ser um array.
*/

//objs1. //verifique
//objs2. //verifique

// console.log(objs1)
// console.log(objs2)

// objs2.forEach(element => {
//     element.innerHTML = "Curso" 
// });