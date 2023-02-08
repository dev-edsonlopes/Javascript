// Funções LAMBDAS(Arrow function)

//const soma = function (v1, v2) {return v1 +v2}

const soma = (...valores) => {
    let total = 0 
    for (v of valores) {
        total += v
    }
    return total
}
console.log(soma(10,5,15,8,9,40))

const myName = nome => {return nome}
console.log(myName("Edson"))

const add = n => n + 10
console.log(add(100))