// FUNÇÕES parametrizadas em Javascript

function soma(a = 0, b = 0) {
    return a + b
}

//console.log(soma(10, 5))

let valor = 0

function add(v) {
    valor += v
}

console.log(valor)
add(10)
console.log(valor)
add(5)
console.log(valor)